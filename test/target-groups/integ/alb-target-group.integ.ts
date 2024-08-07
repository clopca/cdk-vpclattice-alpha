import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
import { AlbTargetGroup } from '../../../src/aws-vpclattice-targets';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-alb-target-group');

const vpc = new Vpc(stack, 'VPC', { natGateways: 1 });

const albSvc = new ApplicationLoadBalancedFargateService(stack, 'Service', {
  vpc,
  memoryLimitMiB: 1024,
  cpu: 512,
  taskImageOptions: {
    image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
    containerPort: 80,
  },
  publicLoadBalancer: false,
});

new AlbTargetGroup(stack, 'ALBTG', {
  vpc,
  loadBalancer: albSvc.loadBalancer,
});

new integ.IntegTest(app, 'ServiceTest', {
  testCases: [stack],
});

app.synth();
