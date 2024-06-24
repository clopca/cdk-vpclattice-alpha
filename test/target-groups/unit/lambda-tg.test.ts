import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { aws_iam as iam, aws_lambda } from 'aws-cdk-lib';
import { LambdaTargetGroup, LambdaEventStructureVersion } from '../../../src/aws-vpclattice-targets';

describe('InstanceTG', () => {
  test('DeniesInvalidProtocolVersionCombo', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const lambdaRole = new iam.Role(stack, 'LambdaRole', {
      roleName: 'LambdaRole',
      assumedBy: new iam.AccountRootPrincipal(),
    });

    const lambdaFunction = new aws_lambda.Function(stack, 'Helloworld', {
      runtime: aws_lambda.Runtime.PYTHON_3_10,
      handler: 'helloworld.lambda_handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, './lambda')),
      timeout: cdk.Duration.seconds(15),
      role: lambdaRole,
    });

    // WHEN & THEN
    expect(() => {
      new LambdaTargetGroup(stack, 'LambdaTG', {
        target: lambdaFunction,
        lambdaEventStructureVersion: LambdaEventStructureVersion.V2,
      });
    }).toThrow();
  });
});
