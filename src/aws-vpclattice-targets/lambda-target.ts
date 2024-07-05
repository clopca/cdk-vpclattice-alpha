import type { aws_lambda as lambda } from 'aws-cdk-lib';
import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import type * as constructs from 'constructs';
import { TargetGroupBase, TargetType } from './base-target-group';

export enum LambdaEventStructureVersion {
  /**
   * Version 1.0
   */
  V1 = 'V1',

  /**
   * Version 2.0
   */
  V2 = 'V2',
}

export interface LambdaTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name?: string;

  /**
   * Facilitates routing to a **single** Lambda function.
   */
  readonly target: lambda.Function;

  /**
   * The version of the event structure that Lambda function receives
   * @default LambdaEventStructureVersion.V1
   */
  readonly lambdaEventStructureVersion?: LambdaEventStructureVersion;
}

export class LambdaTargetGroup extends TargetGroupBase {
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly name: string;
  public readonly target: lambda.Function;
  public readonly lambdaEventStructureVersion: LambdaEventStructureVersion;
  public readonly targetType = TargetType.IP;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: constructs.Construct, id: string, props: LambdaTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });
    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.name = this.physicalName;
    this.target = props.target;
    this.lambdaEventStructureVersion = props.lambdaEventStructureVersion ?? LambdaEventStructureVersion.V1;

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) {
      this.node.addValidation({ validate: () => this.validateTargetGroupName(this.name) });
    }

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: TargetType.LAMBDA,
      name: this.name,
      targets: [
        {
          id: this.target.functionArn,
        },
      ],
      config: {
        lambdaEventStructureVersion: this.lambdaEventStructureVersion,
      },
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }
}
