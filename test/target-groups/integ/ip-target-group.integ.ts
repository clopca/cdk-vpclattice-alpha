import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Instance, Vpc } from 'aws-cdk-lib/aws-ec2';
import { IpTargetGroup } from '../../../src/aws-vpclattice-targets';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-target-group-ip');

const vpc = new Vpc(stack, 'VPC', {});
const instance1 = new Instance(stack, 'Instance1', {
	vpc,
	instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T3, cdk.aws_ec2.InstanceSize.SMALL),
	machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

const instance2 = new Instance(stack, 'Instance2', {
	vpc,
	instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T3, cdk.aws_ec2.InstanceSize.SMALL),
	machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

const tg1 = new IpTargetGroup(stack, 'IpTG', {
	name: "ip-tg1",
	targets: [
		{
			ipAddress: instance1.instancePrivateIp,
			port: 80,
		},
	],
	config: {
		vpc,
	}
});

tg1.addTarget({
	ipAddress: instance2.instancePrivateIp,
	port: 80,
});

new integ.IntegTest(app, 'IpTGTest', {
	testCases: [stack],
});

app.synth();
