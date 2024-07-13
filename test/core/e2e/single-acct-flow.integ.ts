import * as path from 'node:path';
import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Instance, Peer, Port, SecurityGroup, Vpc, AmazonLinuxGeneration } from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaTargetGroup, ListenerProtocol, Service, ServiceNetwork, AuthPolicyDocument, AuthType, AuthPolicyStatement } from '../../../src';


const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-single-acct-auth');

// ------------------------------------------------------
// VPCs
// ------------------------------------------------------
const serviceVpc = new Vpc(stack, 'ServiceVPC', { natGateways: 1 });
const clientVpc = new Vpc(stack, 'ClientVPC', { natGateways: 1 });

// ------------------------------------------------------
// Security Groups
// ------------------------------------------------------
const ipv4LinkLocalCidrBlock = '169.254.0.0/16';
const clientsSg = new SecurityGroup(stack, 'ResSG', {
  securityGroupName: 'client-sg',
  vpc: clientVpc,
});

const serviceSecurityGroup = new SecurityGroup(stack, 'ServiceSG', {
  securityGroupName: 'service-sg',
  vpc: serviceVpc,
});

// Add rules to SGs
for (const sg of [clientsSg, serviceSecurityGroup]) {
  for (const cidr of [ipv4LinkLocalCidrBlock, '10.0.0.0/16']) {
    sg.addIngressRule(Peer.ipv4(cidr), Port.allTraffic());
  }
}
// ------------------------------------------------------
// Service
// ------------------------------------------------------
const testSvc = new Service(stack, 'Parking', {
  name: 'test-svc',
  authType: AuthType.AWS_IAM,
  authPolicy: AuthPolicyDocument.UNAUTHENTICATED,
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

new ServiceNetwork(stack, 'ServiceNetwork', {
  name: 'superapps-auth-vcnetwork',
  services: [testSvc],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: serviceVpc }, { vpc: clientVpc, securityGroups: [clientsSg] }],
});

// ------------------------------------------------------
// Target group
// ------------------------------------------------------
const lambdaFunction = new LambdaFunction(stack, 'LatticeLambdaReservation', {
  runtime: Runtime.PYTHON_3_12,
  code: Code.fromAsset(path.join(__dirname, 'lambda')),
  handler: 'index.lambda_handler',
  timeout: cdk.Duration.minutes(4),
  vpc: serviceVpc,
});

const serviceTg = new LambdaTargetGroup(stack, 'LambdaTG', {
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
// Client
// ------------------------------------------------------
const ec2Client = new Instance(stack, 'Ec2Instance', {
  instanceName: 'client-instance',
  vpc: clientVpc,
  securityGroup: clientsSg,
  instanceType: new cdk.aws_ec2.InstanceType('t3.micro'),
  machineImage: new cdk.aws_ec2.AmazonLinuxImage({ generation: AmazonLinuxGeneration.AMAZON_LINUX_2 }),
  userData: cdk.aws_ec2.UserData.custom(`
    #!/bin/bash
    yum update -y
    yum install -y jq
  `),
  ssmSessionPermissions: true,
});

ec2Client.addToRolePolicy(
  new PolicyStatement({
    actions: ['vpc-lattice-svcs:Invoke'],
    resources: ['*'],
  }),
);

// ------------------------------------------------------
// Outputs
// ------------------------------------------------------
new cdk.CfnOutput(stack, 'SvcDomainName', {
  value: `https://${testSvc.domainName}/`,
});

new cdk.CfnOutput(stack, 'ClientSsmUrl', {
  description: 'SSM Session to the client instance where to run test commands',
  value: `https://${stack.region}.console.aws.amazon.com/systems-manager/session-manager/${ec2Client.instanceId}?region=${stack.region}`,
});

// ------------------------------------------------------
// Integ Test Runner
// ------------------------------------------------------
new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();
