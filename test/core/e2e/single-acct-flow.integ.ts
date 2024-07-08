import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as integ from '@aws-cdk/integ-tests-alpha';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Instance, Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { LambdaTargetGroup, ListenerProtocol, Service, ServiceNetwork } from '../../../src';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { AuthPolicyAccessMode, AuthType } from '../../../src/auth';

export class VpcLatticeAlphaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  }
}

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
const clientsSg = new SecurityGroup(stack, 'ResSG', {
  securityGroupName: 'client-sg',
  vpc: clientVpc,
});
clientsSg.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
clientsSg.addIngressRule(Peer.ipv4('169.254.0.0/16'), Port.allTraffic());


const serviceSecurityGroup = new SecurityGroup(stack, 'ServiceSG', {
  securityGroupName: 'service-sg',
  vpc: serviceVpc,
});

serviceSecurityGroup.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
serviceSecurityGroup.addIngressRule(Peer.ipv4('169.254.0.0/16'), Port.allTraffic());

// ------------------------------------------------------
// Service
// ------------------------------------------------------
const testSvc = new Service(stack, 'Parking', {
  name: 'test-svc',
  authType: AuthType.AWS_IAM,
  accessMode: AuthPolicyAccessMode.AUTHENTICATED_ONLY,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

testSvc.authPolicy.addStatements(
  new PolicyStatement({
    effect: iam.Effect.ALLOW,
    actions: ['vpc-lattice-svcs:*'],
    resources: ['*'],
    principals: [new iam.StarPrincipal()],
    conditions: {
      'StringEquals': { "vpc-lattice-svcs:RequestMethod": "GET" },
    }
  })
)

new ServiceNetwork(stack, 'ServiceNetwork', {
  name: 'superapps-auth-vcnetwork',
  services: [testSvc],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: serviceVpc }, { vpc: clientVpc, securityGroups: [clientsSg] }],
});

// ------------------------------------------------------
// Target group
// ------------------------------------------------------
const lambdaFunction = new Function(stack, 'LatticeLambdaReservation', {
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
});

// ------------------------------------------------------
// Client
// ------------------------------------------------------
const ec2Client = new Instance(stack, 'Ec2Instance', {
  instanceName: 'client-instance',
  vpc: clientVpc,
  securityGroup: clientsSg,
  instanceType: new cdk.aws_ec2.InstanceType('t3.micro'),
  machineImage: new cdk.aws_ec2.AmazonLinuxImage({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 }),
  userData: cdk.aws_ec2.UserData.custom(`
    #!/bin/bash
    yum update -y
    yum install -y jq
  `),
  ssmSessionPermissions: true,
});

ec2Client.addToRolePolicy(new PolicyStatement({
  actions: ['vpc-lattice-svcs:Invoke'],
  resources: ['*'],
}));

// ------------------------------------------------------
// Service Domain Name
// ------------------------------------------------------
new cdk.CfnOutput(stack, 'SvcDomainName', {
  value: `https://${testSvc.domainName}`,
});

new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();
