import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import * as constructs from 'constructs';
import { IpAddressType, Protocol, ProtocolVersion, TargetType } from './target';
import { TargetGroupBase } from '../';
import { IVpc, IpAddresses, Ipv6Addresses } from 'aws-cdk-lib/aws-ec2';

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
  public readonly targets: IpTargetGroupTargetProps[];
  public readonly targetType = TargetType.IP;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: constructs.Construct, id: string, props: IpTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });
    if (props.name) {
      TargetGroupBase.validateTargetGroupName(props.name);
    }
    this.name = this.physicalName;
    this.targets = props.targets;
    let config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty = {
      vpcIdentifier: props.config.VpcIdentifier.vpcId,
      ipAddressType: props.config.ipAddressType ?? IpAddressType.IPV4,
      protocol: props.config.protocol ?? Protocol.HTTPS,
      port: props.config.port ?? (props.config.protocol === Protocol.HTTP ? 80 : 443),
      protocolVersion: props.config.protocolVersion ?? ProtocolVersion.HTTP1,
    };

    let targets: aws_vpclattice.CfnTargetGroup.TargetProperty[] = props.targets.map((t) => { "id": t.ipAddress, "port": t.port })

    // Validate the port based on the protocol
    if (config.protocol === Protocol.HTTP && config.port !== 80) {
      throw new Error('HTTP protocol must use port 80');
    } else if (config.protocol === Protocol.HTTPS && config.port !== 443) {
      throw new Error('HTTPS protocol must use port 443');
    }

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: TargetType.IP,
      name: this.name,
      targets: this.targets,
      config,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }
}
