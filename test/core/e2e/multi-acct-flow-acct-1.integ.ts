import * as path from 'node:path';
import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaTargetGroup, ListenerProtocol, Service, ServiceNetwork, AuthPolicyDocument, AuthType } from '../../../src';

const app1 = new cdk.App();

const ipv4LinkLocalCidrBlock = '169.254.0.0/16';
const providerAccount = '694275606777';
const consumerAccount = '249522321342';

// -----------------------------------------------------------------------------
// Account 1 - Service Provider
// -----------------------------------------------------------------------------
const stack_provider = new cdk.Stack(app1, 'aws-cdk-vpclattice-e2e-multi-acct-1', {
  env: { region: 'eu-central-1', account: providerAccount },
});

const serviceVpc = new Vpc(stack_provider, 'ServiceVPC', { natGateways: 1 });

// ------------------------------------------------------
// Security Groups
// ------------------------------------------------------
const serviceSg = new SecurityGroup(stack_provider, 'ResSG', {
  securityGroupName: 'service-sg',
  vpc: serviceVpc,
});

serviceSg.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
serviceSg.addIngressRule(Peer.ipv4(ipv4LinkLocalCidrBlock), Port.allTraffic());

// ------------------------------------------------------
// Service
// ------------------------------------------------------
const testSvc = new Service(stack_provider, 'Parking', {
  name: 'test-svc',
  authType: AuthType.AWS_IAM,
  authPolicy: AuthPolicyDocument.AUTHENTICATED_ONLY,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

testSvc.authPolicy.addStatements(
  new PolicyStatement({
    effect: iam.Effect.ALLOW,
    actions: ['vpc-lattice-svcs:*'],
    resources: ['*'],
    principals: [new iam.StarPrincipal()],
    conditions: {
      StringEquals: { 'vpc-lattice-svcs:RequestMethod': 'GET' },
    },
  }),
);

// ------------------------------------------------------
// Target group
// ------------------------------------------------------
const lambdaFunction = new LambdaFunction(stack_provider, 'LatticeLambdaReservation', {
  runtime: Runtime.PYTHON_3_12,
  code: Code.fromAsset(path.join(__dirname, 'lambda')),
  handler: 'index.lambda_handler',
  timeout: cdk.Duration.minutes(4),
  vpc: serviceVpc,
});

const serviceTg = new LambdaTargetGroup(stack_provider, 'LambdaTG', {
  name: 'service-tg',
  target: lambdaFunction,
});

testSvc.addListener({
  name: 'listener1',
  protocol: ListenerProtocol.HTTPS,
  port: 443,
  defaultAction: {
    targetGroup: serviceTg,
  },
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

// ------------------------------------------------------
// Service Network
// ------------------------------------------------------
const serviceNetwork = new ServiceNetwork(stack_provider, 'ServiceNetwork', {
  name: 'superapps-auth-vcnetwork-multi-acct',
  services: [testSvc],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: serviceVpc }],
});

serviceNetwork.shareResource({
  name: 'ServiceNetwork-Share',
  principals: [consumerAccount],
});

// ------------------------------------------------------
// Outputs
// ------------------------------------------------------
new cdk.CfnOutput(stack_provider, 'SvcDomainName', {
  value: `https://${testSvc.domainName}/`,
});

// ------------------------------------------------------
// Integ Test Runner
// ------------------------------------------------------
new integ.IntegTest(app1, 'ServiceNetworkTest', {
  testCases: [stack_provider],
});

app1.synth();
