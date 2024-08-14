import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { HealthCheckProtocol, InstanceTargetGroup } from '../../../src/aws-vpclattice-targets';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-target-group-instance');

const vpc = new Vpc(stack, 'VPC', { natGateways: 1 });
const asg = new AutoScalingGroup(stack, 'ASG', {
  vpc,
  instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T2, cdk.aws_ec2.InstanceSize.MICRO),
  machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

new InstanceTargetGroup(stack, 'ASG-TG', {
  vpc,
  autoScalingGroups: [asg],
  healthCheck: {
    enabled: false,
    protocol: HealthCheckProtocol.HTTP,
    path: '/health',
    port: 8080,
  },
});

new integ.IntegTest(app, 'ServiceTest', {
  testCases: [stack],
});

app.synth();
