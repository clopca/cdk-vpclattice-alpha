import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { AlbTargetGroup } from '../src/aws-vpclattice-targets';
import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-target-group');

const vpc = new Vpc(stack, 'VPC', {});

const albSvc = new ApplicationLoadBalancedFargateService(stack, 'Service', {
	vpc,
	memoryLimitMiB: 1024,
	cpu: 512,
	taskImageOptions: {
		image: cdk.aws_ecs.ContainerImage.fromRegistry('public.ecr.aws/bitnami/lamp:8.1'),
	},
	publicLoadBalancer: false,

});

new AlbTargetGroup(stack, 'ALBTG', {
	vpc,
	loadBalancer: albSvc.loadBalancer
});

new integ.IntegTest(app, 'ServiceTest', {
	testCases: [stack],
});

app.synth();