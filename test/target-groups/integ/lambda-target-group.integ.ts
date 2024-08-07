import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaTargetGroup } from '../../../src/aws-vpclattice-targets';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-target-group-lambda');

const lambdaFunction = new LambdaFunction(stack, 'LambdaTargetFunction', {
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
  handler: 'index.handler',
});

const tg1 = new LambdaTargetGroup(stack, 'LambdaTG', {
  //name: "lambda-tg1",
  target: lambdaFunction,
});

new cdk.CfnOutput(stack, 'lambdaTargetGroupId', {
  value: tg1.targetGroupId,
});

new cdk.CfnOutput(stack, 'lambdaTargetGroupArn', {
  value: tg1.targetGroupArn,
});

new integ.IntegTest(app, 'LambdaTGTest', {
  testCases: [stack],
});

app.synth();
