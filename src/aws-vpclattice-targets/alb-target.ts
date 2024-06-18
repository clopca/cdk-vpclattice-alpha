import { IApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Protocol } from './target';
import { IVpc } from 'aws-cdk-lib/aws-ec2';

export interface AlbTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name: string;

  /**
   * You can specify a single Application Load Balancer as the target.
   */
  readonly target: IApplicationLoadBalancer;

  /**
   * VPC Identifier
   */
  readonly vpcIdentifier: IVpc;

  /**
   * The protocol to use for routing traffic to the targets.
   * Can't be changed after creation.
   * @default Protocol.HTTPS
   */
  readonly protocol?: Protocol;

  /**
   * The port on which the target will listen.
   * @default 443
   */
  readonly port?: number;
}
