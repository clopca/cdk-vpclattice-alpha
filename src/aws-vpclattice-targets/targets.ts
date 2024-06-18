import { aws_vpclattice } from 'aws-cdk-lib';
import { TargetType } from '.';

export interface ITarget {
  /**
   * Target Type
   */
  readonly type: TargetType;
  /**
   * References to the targets, ids or Arns
   */
  readonly targets: aws_vpclattice.CfnTargetGroup.TargetProperty[];
  /**
   * Configuration for the TargetGroup, if it is not a lambda
   */
  readonly config?: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty;
}
