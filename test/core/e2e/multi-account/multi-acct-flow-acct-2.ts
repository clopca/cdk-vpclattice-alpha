import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Instance, Peer, Port, SecurityGroup, Vpc, AmazonLinuxGeneration } from 'aws-cdk-lib/aws-ec2';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { ServiceNetworkVpcAssociation } from '../../../../src';

const app2 = new cdk.App();
const ipv4LinkLocalCidrBlock = '169.254.0.0/16';
const consumerAccount = '123456789012';

// -----------------------------------------------------------------------------
// Account 2 - Service Consumer
// -----------------------------------------------------------------------------
const stack_consumer = new cdk.Stack(app2, 'aws-cdk-vpclattice-e2e-multi-acct-2', {
  env: { region: 'eu-central-1', account: consumerAccount },
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
  serviceNetworkId: 'arn:aws:vpc-lattice:eu-central-1:694275606777:servicenetwork/sn-01d8737493028116d',
});

// ------------------------------------------------------
// Outputs
// ------------------------------------------------------
new cdk.CfnOutput(stack_consumer, 'ClientSsmUrl', {
  description: 'SSM Session to the client instance where to run test commands',
  value: `https://${stack_consumer.region}.console.aws.amazon.com/systems-manager/session-manager/${ec2Client.instanceId}?region=${stack_consumer.region}`,
});

// ------------------------------------------------------
// Integ Test Runner
// ------------------------------------------------------
new integ.IntegTest(app2, 'ServiceNetworkTest', {
  testCases: [stack_consumer],
});

app2.synth();
