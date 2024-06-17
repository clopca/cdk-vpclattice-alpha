
import * as vpc_lattice from 'aws-cdk-lib/aws-vpclattice';

export interface ITarget {
  /**
   * Target Type
   */
  readonly type: string;

  /**
   * References to the targets, ids or Arns
   */
  readonly targets: vpc_lattice.CfnTargetGroup.TargetProperty[];

  /**
   * Configuration for the TargetGroup, if it is not a lambda
   */
  readonly config?: vpc_lattice.CfnTargetGroup.TargetGroupConfigProperty;
}
