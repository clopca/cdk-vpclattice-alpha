import * as core from 'aws-cdk-lib';
import { TargetType } from './aws-vpclattice-targets';

/**
 * Basic properties for a Target Group
 */
export interface BaseTargetGroupProps {
  /**
   * The name of the target group.
   *
   * This name must be unique per region per account, can have a maximum of
   * 32 characters, must contain only alphanumeric characters or hyphens, and
   * must not begin or end with a hyphen.
   *
   * @default - Automatically generated.
   */
  readonly targetGroupName?: string;

  /**
   * The type of targets registered to this TargetGroup, either IP or Instance.
   *
   * All targets registered into the group must be of this type. If you
   * register targets to the TargetGroup in the CDK app, the TargetType is
   * determined automatically.
   *
   * @default - Determined automatically.
   */
  readonly targetType?: TargetType;
}

/**
 * Create a vpc lattice TargetGroup.
 * Implemented by `TargetGroup`.
 */
export interface ITargetGroup extends core.IResource {
  /**
   * The id of the target group
   */
  readonly targetGroupId: string;
  /**
   * The Arn of the target group
   */
  readonly targetGroupArn: string;
}

/**
 * Properties for a Target Group, Only supply one of instancetargets, lambdaTargets, albTargets, ipTargets
 */
export abstract class TargetGroupBase extends core.Resource implements ITargetGroup {
  // ------------------------------------------------------
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-128 characters. The name must be unique within the account.
   * The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as
   * the first or last character, or immediately after another hyphen.
   */
  public static validateTargetGroupName(name: string) {
    const pattern = /^(?!tg-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 128 && pattern.test(name);
    if (!validationSucceeded) {
      throw new Error(`Invalid Target Group Name: ${name} (must be between 3-128 characters, and must be a valid name)`);
    }
  }
  // ------------------------------------------------------
  /**
   * The id of the target group
   */
  public abstract readonly targetGroupId: string;
  /**
   * The Arn of the target group
   */
  public abstract readonly targetGroupArn: string;

  /**
   * The name of the target group
   */
  public abstract readonly name: string;
  /**
   * Targets
   */
  public abstract readonly targetType: TargetType;
}

export interface WeightedTargetGroup {
  /**
   * A target Group
   */
  readonly targetGroup: ITargetGroup;

  /**
   * A weight for the target group.
   * @default 100
   */
  readonly weight?: number;
}
