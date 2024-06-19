import { IInstance, IVpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { Protocol, ProtocolVersion } from './target';
import { TargetGroupBase, TargetType } from './base-target-group';


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
  constructor(scope: Construct, id: string, props: InstanceTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    this.name = this.physicalName;
    this.protocol = props.protocol ?? Protocol.HTTPS
    this.protocolVersion = props.protocolVersion ?? ProtocolVersion.HTTP1


    TargetGroupBase.validateTargetGroupName(this.name);
    TargetGroupBase.validateProtocol(this.protocol, this.targetType)
    TargetGroupBase.validateProtocolVersion(this.protocol, this.protocolVersion)

    this.targetGroupArn = "a";
    this.targetGroupId = "b";
  }
}