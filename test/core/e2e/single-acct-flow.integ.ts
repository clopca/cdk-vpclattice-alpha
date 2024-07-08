import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as integ from '@aws-cdk/integ-tests-alpha';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { AuthType, LambdaTargetGroup, ListenerProtocol, Service, ServiceNetwork, AuthPolicyAccessMode } from '../../../src';



export class VpcLatticeAlphaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  }
}

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-single-acct-flow-auth');

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

// ------------------------------------------------------
// Service
// ------------------------------------------------------
const testSvc = new Service(stack, 'Parking', {
  name: 'test-svc',
  authType: AuthType.AWS_IAM,
  accessMode: AuthPolicyAccessMode.AUTHENTICATED_ONLY,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

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
// Service Domain Name
// ------------------------------------------------------
new cdk.CfnOutput(stack, 'SvcDomainName', {
  value: testSvc.domainName,
});

new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();