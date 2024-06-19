import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Instance, Vpc } from 'aws-cdk-lib/aws-ec2';
import { InstanceTargetGroup } from '../src/aws-vpclattice-targets';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-target-group');

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

const tg1 = new InstanceTargetGroup(stack, 'Ec2TG', {
	vpc,
	targets: [{
		instance: instance1,
		port: 80,
	}]
});

tg1.addTarget({
	instance: instance2,
	port: 80,
},)

new integ.IntegTest(app, 'ServiceTest', {
	testCases: [stack],
});

app.synth();
