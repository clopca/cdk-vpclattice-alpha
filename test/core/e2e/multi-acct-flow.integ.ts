import * as path from 'node:path';
import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Instance, Peer, Port, SecurityGroup, Vpc, AmazonLinuxGeneration } from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaTargetGroup, ListenerProtocol, Service, ServiceNetwork, AuthPolicyDocument, AuthType, ServiceNetworkVpcAssociation } from '../../../src';


const app = new cdk.App();
const ipv4LinkLocalCidrBlock = '169.254.0.0/16'
const providerAccount = "249522321342"
const consumerAccount = "966415430225"

// -----------------------------------------------------------------------------
// Account 1 - Service Provider
// -----------------------------------------------------------------------------
const stack_provider = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-multi-acct-1', {
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
new ServiceNetwork(stack_provider, 'ServiceNetwork', {
  name: 'superapps-auth-vcnetwork',
  services: [testSvc],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: serviceVpc }],
});


// -----------------------------------------------------------------------------
// Account 2 - Service Consumer
// -----------------------------------------------------------------------------
const stack_consumer = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-multi-acct-2', {
  env: { region: 'us-east-1', account: consumerAccount },
});

const clientVpc = new Vpc(stack_consumer, 'ClientVPC', { natGateways: 1 });

// ------------------------------------------------------
// Security Groups
// ------------------------------------------------------
const clientsSg = new SecurityGroup(stack_consumer, 'ResSG', {
  securityGroupName: 'client-sg',
  vpc: clientVpc,
});

clientsSg.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
clientsSg.addIngressRule(Peer.ipv4(ipv4LinkLocalCidrBlock), Port.allTraffic());

// ------------------------------------------------------
// Client
// ------------------------------------------------------
const ec2Client = new Instance(stack_consumer, 'Ec2Instance', {
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
// Association to Service Network
// ------------------------------------------------------
new ServiceNetworkVpcAssociation(stack_consumer, 'ClientVpcAssociation', {
  vpc: clientVpc,
  securityGroups: [clientsSg],
  serviceNetworkId: 'superapps-auth-vcnetwork',
});

// ------------------------------------------------------
// Outputs
// ------------------------------------------------------
new cdk.CfnOutput(stack_provider, 'SvcDomainName', {
  value: `https://${testSvc.domainName}/`,
});

new cdk.CfnOutput(stack_consumer, 'ClientSsmUrl', {
  description: 'SSM Session to the client instance where to run test commands',
  value: `https://${stack_consumer.region}.console.aws.amazon.com/systems-manager/session-manager/${ec2Client.instanceId}?region=${stack_consumer.region}`,
});

// ------------------------------------------------------
// Integ Test Runner
// ------------------------------------------------------
new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack_provider, stack_consumer],
});

app.synth();
