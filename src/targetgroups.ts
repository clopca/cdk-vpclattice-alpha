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
 * Create a vpc lattice TargetGroup
 *
 */
export class TargetGroup extends core.Resource implements ITargetGroup {
  /*
   * the Id of the targetGroup
   **/
  readonly targetGroupId: string;
  /**
   * The Arn of the targetGroup
   */
  readonly targetGroupArn: string;

  constructor(scope: constructs.Construct, id: string, props: TargetGroupProps) {
    super(scope, id);

    const targetGroup = new generated.CfnTargetGroup(this, 'Resource', {
      type: props.target.type,
      name: props.name,
      config: props.target.config,
      targets: props.target.targets,
    });

    this.targetGroupId = targetGroup.attrId;
    this.targetGroupArn = targetGroup.attrArn;
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
  readonly weight?: number | undefined;
}
