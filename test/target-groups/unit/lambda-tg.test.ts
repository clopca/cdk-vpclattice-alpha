import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaTargetGroup, LambdaEventStructureVersion } from '../../../src/aws-vpclattice-targets';

describe('InstanceTG', () => {
  test('DeniesInvalidProtocolVersionCombo', () => {
    // GIVEN
    const stack = new cdk.Stack();

    const lambdaFunction = new Function(stack, 'LambdaTargetFunction', {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromInline(`
            exports.handler = async (event) => {
                return {
                    isBase64Encoded: false,
                    statusCode: 200,
                    body: JSON.stringify({ message: "Hello from Lambda!" }),
                };
            };
        `),
      handler: 'index.function_name',
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
