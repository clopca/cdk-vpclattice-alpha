import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import * as constructs from 'constructs';
import { TargetType } from './target';

import { TargetGroupBase } from '../';
export interface LambdaTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name: string;

  /**
   * Targets
   */
  readonly targets: aws_vpclattice.CfnTargetGroup.TargetProperty[];

  /**
   * Configuration for the TargetGroup, if it is not a lambda
   */
  readonly config?: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty;
}

export class LambdaTargetGroup extends TargetGroupBase {
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly name: string;
  public readonly targetType = TargetType.LAMBDA;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: constructs.Construct, id: string, props: LambdaTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });
    if (props.name) {
      TargetGroupBase.validateTargetGroupName(props.name);
    }
    this.name = this.physicalName;

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: TargetType.LAMBDA,
      name: this.name,
      config: props.config,
      targets: props.targets,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }
}
