import { aws_lambda as lambda } from 'aws-cdk-lib';
import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import * as constructs from 'constructs';
import { LambdaEventStructureVersion, TargetType } from './target';
import { TargetGroupBase } from '../base-target-group';

export interface LambdaTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name: string;

  /**
   * Targets (Lambda Functions)
   */
  readonly targets: lambda.Function[];

  /**
   * Configuration for the TargetGroup, if it is not a lambda
   */
  readonly config: LambdaTargetGroupConfigProps;
}

export interface LambdaTargetGroupConfigProps {
  /**
   * The version of the event structure that Lambda function receives
   * @default LambdaEventStructureVersion.V1
   */
  readonly lambdaEventStructureVersion: LambdaEventStructureVersion;
}

export class LambdaTargetGroup extends TargetGroupBase {
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly name: string;
  public readonly targets: aws_vpclattice.CfnTargetGroup.TargetProperty[];
  public readonly targetType = TargetType.IP;
  public readonly config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: constructs.Construct, id: string, props: LambdaTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });
    if (props.name) {
      TargetGroupBase.validateTargetGroupName(props.name);
    }
    this.name = this.physicalName;
    this.config = {
      lambdaEventStructureVersion: props.config.lambdaEventStructureVersion,
    };

    this.targets = props.targets.map(target => {
      return {
        id: target.functionArn,
      };
    });

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: TargetType.LAMBDA,
      name: this.name,
      targets: this.targets,
      config: this.config,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }
}
