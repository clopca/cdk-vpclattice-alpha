import type { CfnListener, CfnRule } from 'aws-cdk-lib/aws-vpclattice';
import type { ITargetGroup } from './aws-vpclattice-targets';
import type { HttpFixedResponse } from './util';

export interface IRuleAction {
  /**
   * Render the listener default action
   */
  renderListenerDefaultAction(): CfnListener.DefaultActionProperty;
  /**
   * Render the listener rule action
   */
  renderRuleAction(): CfnRule.ActionProperty;
}

export class RuleAction {
  /**
   * Forward to one or more Target Groups
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-forward.html
   */
  public static forwardAction(targetGroup: ITargetGroup, weight?: number): RuleAction {
    return new RuleAction({
      forward: {
        targetGroups: [{ targetGroupIdentifier: targetGroup.targetGroupId, weight: weight ?? 100 }],
      },
    });
  }

  /**
   * Forward to one or more Target Groups which are weighted differently
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-forward.html
   */
  public static weightedForwardAction(weightedTargetGroups: WeightedTargetGroup[]): RuleAction {
    if (weightedTargetGroups.length < 2) {
      throw new Error('Need at least two weightedTargetGroups in a RuleAction.weightedForward()');
    }

    return new RuleAction({
      forward: {
        targetGroups: weightedTargetGroups.map(g => ({ targetGroupIdentifier: g.targetGroup.targetGroupId, weight: g.weight })),
      },
    });
  }

  /**
   * Return a fixed response
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-fixedresponse.html
   */
  public static fixedResponseAction(statusCode: HttpFixedResponse): RuleAction {
    return new RuleAction({
      fixedResponse: {
        statusCode: statusCode,
      },
    });
  }

  public forward?: CfnRule.ForwardProperty;
  public fixedResponse?: CfnRule.FixedResponseProperty;
  /**
   * Create an instance of RuleAction
   *
   * The default class should be good enough for most cases and
   * should be created by using one of the static factory functions,
   * but allow overriding to make sure we allow flexibility for the future.
   */
  protected constructor(action: RuleAction) {
    this.forward = action.forward;
    this.fixedResponse = action.fixedResponse;
  }
}
/**
 * A Target Group and weight combination
 */
export interface WeightedTargetGroup {
  /**
   * The target group
   */
  readonly targetGroup: ITargetGroup;

  /**
   * The target group's weight
   *
   * Range is [0..1000).
   *
   * @default 1
   */
  readonly weight?: number;
}
