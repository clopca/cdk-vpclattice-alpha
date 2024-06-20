import { IVpc, IpAddresses, Ipv6Addresses } from 'aws-cdk-lib/aws-ec2';
import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import * as constructs from 'constructs';
import { TargetGroupBase } from './base-target-group';
import { IpAddressType, Protocol, ProtocolVersion, TargetType } from './target';
import { Lazy } from 'aws-cdk-lib';

export interface IpTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name: string;

  /**
   * Targets
   */
  readonly targets?: IpTargetGroupTargetProps[];

  /**
   * Configuration for the TargetGroup, if it is not a lambda
   */
  readonly config: IpTargetGroupConfigProps;
}

export interface IpTargetGroupTargetProps {
  /**
   * The IP Address of the target
   */
  readonly ipAddress: Ipv6Addresses | IpAddresses;

  /**
   * Port
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;
}

export interface IpTargetGroupConfigProps {
  /**
   * VPC Identifier
   */
  readonly vpc: IVpc;

  /**
   * The type of IP Addresss Protocol to use
   * @default IpAddressType.IPv4
   */
  readonly ipAddressType?: IpAddressType;

  /**
   * Port
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;

  /**
   * The application layer protocol to use
   * @default Protocol.HTTPS
   */
  readonly protocol?: Protocol;

  /**
   * ProtocolVersion
   * @default ProtocolVersion.HTTP1
   */
  readonly protocolVersion?: ProtocolVersion;
}

export class IpTargetGroup extends TargetGroupBase {
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly name: string;
  public readonly targets: IpTargetGroupTargetProps[];
  public readonly port: number;
  public readonly protocol: Protocol;
  public readonly ipAddressType: IpAddressType;
  public readonly protocolVersion: ProtocolVersion;
  public readonly vpc: IVpc;
  public readonly config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty;
  public readonly targetType = TargetType.IP;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: constructs.Construct, id: string, props: IpTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.vpc = props.config.vpc
    this.ipAddressType = props.config.ipAddressType ?? IpAddressType.IPV4
    this.protocol = props.config.protocol ?? Protocol.HTTPS
    this.port = props.config.port ?? (this.protocol === Protocol.HTTP ? 80 : 443)
    this.protocolVersion = props.config.protocolVersion ?? ProtocolVersion.HTTP1
    this.name = this.physicalName;
    this.targets = props.targets ?? [];

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) {
      TargetGroupBase.validateTargetGroupName(props.name);
    }

    // Validate the port based on the protocol
    if (this.protocol === Protocol.HTTP && this.port !== 80) {
      throw new Error('HTTP protocol must use port 80');
    } else if (this.protocol === Protocol.HTTPS && this.port !== 443) {
      throw new Error('HTTPS protocol must use port 443');
    }

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    this.config = {
      vpcIdentifier: this.vpc.vpcId,
      ipAddressType: this.ipAddressType,
      protocol: this.protocol,
      port: this.port,
      protocolVersion: this.protocolVersion,
    };

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: TargetType.IP,
      name: this.name,
      targets: Lazy.any({
        produce: () => this.targets.map(target => ({ id: target.ipAddress.toString(), port: target.port ?? this.port })),
      }),
      config: this.config,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }

  /**
   * Adds a target to the target Group
   * @param target
   */
  public addTarget(target: IpTargetGroupTargetProps) {
    this.targets.push(target);
  }
}
