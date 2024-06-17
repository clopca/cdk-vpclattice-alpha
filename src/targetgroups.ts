import * as core from 'aws-cdk-lib';

import * as generated from 'aws-cdk-lib/aws-vpclattice';

import * as constructs from 'constructs';

import { ITarget } from './index';

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
export interface TargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name: string;

  /**
   * Targets
   */
  readonly target: ITarget;
}

/**
 * Creates a VPC Lattice Target Group
 * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html
 */
export class TargetGroup extends core.Resource implements ITargetGroup {
  /*
   * The Id of the target group
   **/
  readonly targetGroupId: string;

  /**
   * The Arn of the target group
   */
  readonly targetGroupArn: string;

  //--
  private readonly _resource: generated.CfnTargetGroup;

  // ------------------------------------------------------
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-128 characters. The name must be unique within the account. 
   * The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as 
   * the first or last character, or immediately after another hyphen.
   */
  public static validateTargetGroupName(name: string) {
    const pattern = /^(?!tg-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 128 && pattern.test(name);
    if (!validationSucceeded) {
      throw new Error(`Invalid Target Group Name: ${name} (must be between 3-128 characters, and must be a valid name)`);
    }
  }

  // ------------------------------------------------------
  // Constructor
  // ------------------------------------------------------
  constructor(scope: constructs.Construct, id: string, props: TargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    // validate name
    if (props.name) {
      TargetGroup.validateTargetGroupName(props.name);
    }

    this._resource = new generated.CfnTargetGroup(this, 'Resource', {
      type: props.target.type,
      name: props.name,
      config: props.target.config,
      targets: props.target.targets,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }
}

export interface WeightedTargetGroup {
  /**
   * A target Group
   */
  readonly targetGroup: TargetGroup;

  /**
   * A weight for the target group.
   * @default 100
   */
  readonly weight?: number;
}
