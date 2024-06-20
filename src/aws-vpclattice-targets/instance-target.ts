import { IInstance, IVpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { Protocol, ProtocolVersion } from './target';
import { TargetGroupBase, TargetType } from './base-target-group';
import { Lazy, aws_vpclattice } from 'aws-cdk-lib';

export interface InstanceTarget {
  /**
   * The EC2 Instance
   */
  readonly instance: IInstance;

  /**
   * The port on which the target is listening
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;
}

export interface InstanceTargetGroupProps {
  /**
   * The name of the target group
   * @default - Automatically generated name
   */
  readonly name?: string;

  /**
   * The VPC where the target instances reside
   */
  readonly vpc: IVpc;

  /**
   * The targets to associate with the target group
   */
  readonly targets?: InstanceTarget[];

  /**
   * The protocol to use for routing traffic to the targets.
   * Can't be changed after creation.
   * @default Protocol.HTTPS
   */
  readonly protocol?: Protocol;

  /**
   * Choose the protocol version for requests to be sent to targets.
   * The protocol version you choose must support the request protocols
   * from clients.
   * @default - Protocol.HTTP1 if HTTP or HTTPS is selected
   */
  readonly protocolVersion?: ProtocolVersion;

  /**
   *
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;
}

/**
 * Supports creating a Target group with instances within a specific VPC
 */
export class InstanceTargetGroup extends TargetGroupBase {
  public readonly name: string;
  public readonly targetType = TargetType.INSTANCE;
  public readonly protocol: Protocol;
  public readonly protocolVersion: ProtocolVersion;
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly port: number;
  public readonly vpc: IVpc;
  public readonly targets: InstanceTarget[];
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  /**
   * Adds a target to the target Group
   * @param target 
   */
  public addTarget(target: InstanceTarget) {
    this.targets.push(target)
  }

  constructor(scope: Construct, id: string, props: InstanceTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.vpc = props.vpc
    this.name = this.physicalName;
    this.protocol = props.protocol ?? Protocol.HTTPS
    this.protocolVersion = props.protocolVersion ?? ProtocolVersion.HTTP1
    this.port = props.port ?? (props.protocol === Protocol.HTTP ? 80 : 443)
    this.targets = props.targets ?? []

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) { TargetGroupBase.validateTargetGroupName(this.name) }
    TargetGroupBase.validateProtocol(this.protocol, this.targetType)
    TargetGroupBase.validateProtocolVersion(this.protocol, this.protocolVersion)

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    let config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty = {
      vpcIdentifier: this.vpc.vpcId,
      protocol: this.protocol,
      port: this.port,
      protocolVersion: this.protocolVersion,
    };

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: this.targetType,
      name: this.name,
      // Lazy basically processes this line at synthesis time, making additions after instantiation possible
      targets: Lazy.any({
        produce: () => this.targets.map(target => ({ id: target.instance.instanceId, port: target.port })),
      }),
      config,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }
}
