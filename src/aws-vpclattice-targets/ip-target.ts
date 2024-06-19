import { IVpc, IpAddresses, Ipv6Addresses } from 'aws-cdk-lib/aws-ec2';
import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import * as constructs from 'constructs';
import { IpAddressType, Protocol, ProtocolVersion, TargetType } from './target';
import { TargetGroupBase } from '../base-target-group';

export interface IpTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name: string;

  /**
   * Targets
   */
  readonly targets: IpTargetGroupTargetProps[];

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
  readonly VpcIdentifier: IVpc;

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
  public readonly targets: aws_vpclattice.CfnTargetGroup.TargetProperty[];
  public readonly targetType = TargetType.IP;

  public readonly config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: constructs.Construct, id: string, props: IpTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });
    if (props.name) {
      TargetGroupBase.validateTargetGroupName(props.name);
    }
    this.name = this.physicalName;
    this.config = {
      vpcIdentifier: props.config.VpcIdentifier.vpcId,
      ipAddressType: props.config.ipAddressType ?? IpAddressType.IPV4,
      protocol: props.config.protocol ?? Protocol.HTTPS,
      port: props.config.port ?? (props.config.protocol === Protocol.HTTP ? 80 : 443),
      protocolVersion: props.config.protocolVersion ?? ProtocolVersion.HTTP1,
    };

    this.targets = props.targets.map(target => {
      return {
        id: target.ipAddress.toString(),
        port: target.port ?? (this.config.protocol === Protocol.HTTP ? 80 : 443),
      };
    });

    // Validate the port based on the protocol
    if (this.config.protocol === Protocol.HTTP && this.config.port !== 80) {
      throw new Error('HTTP protocol must use port 80');
    } else if (this.config.protocol === Protocol.HTTPS && this.config.port !== 443) {
      throw new Error('HTTPS protocol must use port 443');
    }

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: TargetType.IP,
      name: this.name,
      targets: this.targets,
      config: this.config,
    });

    this.targetGroupId = "a" //this._resource.attrId;
    this.targetGroupArn = "b" //this._resource.attrArn;
  }
}
