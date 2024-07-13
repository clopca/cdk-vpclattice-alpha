import { aws_vpclattice } from 'aws-cdk-lib';
import type { IVpc } from 'aws-cdk-lib/aws-ec2';
import type { IApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import type { Construct } from 'constructs';
import { RequestProtocol, RequestProtocolVersion, TargetGroupBase, TargetType } from './base-target-group';

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
   * The port on which the target group will listen.
   * @default 443
   */
  readonly port?: number;

  /**
   * This port is used for routing traffic to the target,
   * and defaults to the target group port. However, you can
   * override the default and specify a custom port that matches
   * the port of your Application Load Balancer's listeners
   * @defaultv the Target Group Port
   */
  readonly listenerPort?: number;
}

export class AlbTargetGroup extends TargetGroupBase {
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly name: string;
  public readonly targetType = TargetType.ALB;
  public readonly port: number;
  public readonly listenerPort: number;
  public readonly vpc: IVpc;
  public readonly protocol: RequestProtocol;
  public readonly protocolVersion: RequestProtocolVersion;
  public readonly loadBalancer: IApplicationLoadBalancer;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: Construct, id: string, props: AlbTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });
    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.name = this.physicalName;
    this.vpc = props.vpc;
    this.loadBalancer = props.loadBalancer;
    this.port = props.port ?? (props.protocol === RequestProtocol.HTTP ? 80 : 443);
    this.listenerPort = props.listenerPort ?? this.port;
    this.protocol = props.protocol ?? RequestProtocol.HTTPS;
    this.protocolVersion = props.protocolVersion ?? RequestProtocolVersion.HTTP1;

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) {
      this.node.addValidation({ validate: () => this.validateTargetGroupName(this.name) });
    }
    this.node.addValidation({ validate: () => this.validateProtocol(this.protocol, this.targetType) });
    this.node.addValidation({ validate: () => this.validateProtocolVersion(this.protocol, this.protocolVersion) });
    this.node.addValidation({ validate: () => this.validateVpc() });

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    const config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty = {
      vpcIdentifier: props.vpc.vpcId,
      protocol: props.protocol ?? RequestProtocol.HTTPS,
      port: this.port,
      protocolVersion: props.protocolVersion ?? RequestProtocolVersion.HTTP1,
    };

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: this.targetType,
      name: this.name,
      targets: [{ id: this.loadBalancer.loadBalancerArn, port: this.listenerPort }],
      config,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }

  /**
   * Validate VPC for Target Types
   */
  protected validateVpc(): string[] {
    const errors = new Array<string>();
    if (this.loadBalancer.vpc) {
      if (this.loadBalancer.vpc.vpcId !== this.vpc.vpcId) {
        throw new Error('The Application Load Balancer must be in the same VPC as the VPC Lattice target group.');
      }
    }
    return errors;
  }
}
