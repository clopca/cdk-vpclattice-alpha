import * as cdk from 'aws-cdk-lib';
import { Code, Runtime, Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';
import { LambdaTargetGroup, LambdaEventStructureVersion } from '../../../src/aws-vpclattice-targets';

describe('Lambda Target Group', () => {
  let app: cdk.App;
  let stack: cdk.Stack;
  let lambdaFunction: LambdaFunction;

  beforeEach(() => {
    // GIVEN
    app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');
    lambdaFunction = new LambdaFunction(stack, 'LambdaTargetFunction', {
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
  });

  test('Basic Lambda Target Group', () => {
    // WHEN
    new LambdaTargetGroup(stack, 'LambdaTG', {
      target: lambdaFunction,
    });

    // THEN
    expect(() => app.synth()).not.toThrow();
  });

  test('Lambda Target Group with custom name', () => {
    // WHEN
    new LambdaTargetGroup(stack, 'CustomLambdaTG', {
      name: 'lambda-tg',
      target: lambdaFunction,
      lambdaEventStructureVersion: LambdaEventStructureVersion.V2,
    });

    // THEN
    expect(() => app.synth()).not.toThrow();
  });
});
