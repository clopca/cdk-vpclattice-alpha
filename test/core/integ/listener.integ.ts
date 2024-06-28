import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { AuthType, HTTPFixedResponse, HTTPMethod, ListenerProtocol, Service, ServiceNetwork, ServiceNetworkAccessMode } from '../../../src';
import { MatchOperator } from '../../../src/rules';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaTargetGroup } from '../../../src/aws-vpclattice-targets';

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
	accessMode: ServiceNetworkAccessMode.AUTHENTICATED_ONLY,
	vpcAssociations: [{ vpc }],
	services: [sampleSvc],
});

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

const tg1 = new LambdaTargetGroup(stack, 'LambdaTG', {
	//name: "lambda-tg1",
	target: lambdaFunction,
});

const listener1 = sampleSvc.addListener({
	name: "listener1",
	protocol: ListenerProtocol.HTTP,
	port: 80,
	rules: [{
		name: "first-rule",
		priority: 1,
		conditions: {
			headerMatches: [{
				headerName: "x-custom-header",
				matchOperator: MatchOperator.EXACT,
				matchValue: "some-value",
				caseSensitive: true
			}]
		},
		action: tg1
	},
	{
		name: "second-rule",
		priority: 2,
		conditions: {
			methodMatch: HTTPMethod.GET
		},
		action: [{
			targetGroup: tg1,
			weight: 50
		}]
	}]
})

listener1.addListenerRule({
	name: "third-rule",
	priority: 3,
	conditions: {
		pathMatch: {
			path: "/test"
		}
	},
	action: HTTPFixedResponse.NOT_FOUND,
})

new integ.IntegTest(app, 'ServiceNetworkTest', {
	testCases: [stack],
});

app.synth();