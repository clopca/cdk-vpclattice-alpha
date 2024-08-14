import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { AuthPolicyDocument, AuthType, HttpFixedResponse, HttpMethod, ListenerProtocol, RuleAction, Service, ServiceNetwork } from '../../../src';
import { LambdaTargetGroup } from '../../../src/aws-vpclattice-targets';
import { MatchHeader } from '../../../src/match-header';
import { MatchPath } from '../../../src/match-path';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-listener');

const vpc = new Vpc(stack, 'VPC', {});

const sampleSvc = new Service(stack, 'Service', {
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

new ServiceNetwork(stack, 'ServiceNetwork', {
  authType: AuthType.AWS_IAM,
  name: 'my-custom-name',
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  authPolicy: AuthPolicyDocument.AUTHENTICATED_ONLY,
  vpcAssociations: [{ vpc }],
  services: [sampleSvc],
});

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

const listener1 = sampleSvc.addListener({
  name: 'listener1',
  protocol: ListenerProtocol.HTTP,
  port: 80,
  rules: [
    {
      name: 'first-rule',
      priority: 1,
      matchHeader: [MatchHeader.exact('some-value', 'x-custom-header', true)],
      action: RuleAction.forwardAction(tg1),
    },
    {
      name: 'second-rule',
      priority: 2,
      matchMethod: HttpMethod.GET,
      action: RuleAction.forwardAction(tg1, 50),
    },
  ],
});

listener1.addRule({
  name: 'third-rule',
  priority: 3,
  matchPath: MatchPath.exact('/test'),
  action: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
});

new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();
