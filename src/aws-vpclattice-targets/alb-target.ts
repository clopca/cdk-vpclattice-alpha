import { aws_vpclattice } from 'aws-cdk-lib';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { IApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { RequestProtocol, RequestProtocolVersion, TargetGroupBase } from './base-target-group';
import { Protocol, ProtocolVersion, TargetType } from './target';

export interface AlbTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name?: string;

  /**
   * You can specify a single **internal** Application Load Balancer as the target.
   */
  readonly loadBalancer: IApplicationLoadBalancer;

  /**
   * VPC
   */
  readonly vpc: IVpc;

  /**
   * The protocol to use for routing traffic to the targets.
   * Can't be changed after creation.
   * @default Protocol.HTTPS
   */
  readonly protocol?: RequestProtocol;

  /**
   * Choose the protocol version for requests to be sent to targets.
   * The protocol version you choose must support the request protocols
   * from clients.
   * @default Protocol.HTTP1
   */
  readonly protocolVersion?: RequestProtocolVersion;

  /**
   * The port on which the target will listen. It should match the port
   * of your Application Load Balancer's listeners.
   * @default 443
   */
  readonly port?: number;
}

export class AlbTargetGroup extends TargetGroupBase {
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly name: string;
  public readonly targetType = TargetType.ALB;
  public readonly port: number;
  private readonly loadBalancer: IApplicationLoadBalancer;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: Construct, id: string, props: AlbTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });
    if (props.name) {
      TargetGroupBase.validateTargetGroupName(props.name);
    }
    if (props.protocol) {
      TargetGroupBase.validateProtocol(props.protocol, this.targetType);
    }
    this.name = this.physicalName;
    this.loadBalancer = props.loadBalancer;
    this.port = props.port ?? (props.protocol === RequestProtocol.HTTP ? 80 : 443);

    if (this.loadBalancer.vpc) {
      if (this.loadBalancer.vpc.vpcId != props.vpc.vpcId) {
        throw new Error('The Application Load Balancer must be in the same VPC as the VPC Lattice target group.');
      }
    }

    let config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty = {
      vpcIdentifier: props.vpc.vpcId,
      protocol: props.protocol ?? Protocol.HTTPS,
      port: this.port,
      protocolVersion: props.protocolVersion ?? ProtocolVersion.HTTP1,
    };

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: this.targetType,
      name: this.name,
      targets: [{ id: this.loadBalancer.loadBalancerArn, port: this.port }],
      config,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }
}
