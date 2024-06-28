import * as path from 'path';
import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Instance, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { AuthType, HTTPFixedResponse, ListenerProtocol, PathMatchType, Service, ServiceNetwork } from '../../../src';
import { AlbTargetGroup, HealthCheckProtocol, InstanceTargetGroup, LambdaTargetGroup, RequestProtocol, RequestProtocolVersion } from '../../../src/aws-vpclattice-targets';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-listener');

const ratesVpc = new Vpc(stack, 'RatesVPC', {});
const paymentsVpc = new Vpc(stack, 'PaymentsVPC', {});
const reservationsVpc = new Vpc(stack, 'ReservationVPC', {});
const clientsVpc = new Vpc(stack, 'ClientsVPC', {});

const clientsSg = new SecurityGroup(stack, 'ResSG', {
  securityGroupName: 'reservation-sg',
  vpc: clientsVpc,
});


// ------------------------------------------------------
// Lambda TG
// ------------------------------------------------------
const lambdaFunction = new Function(stack, 'LatticeLambdaReservation', {
  runtime: Runtime.PYTHON_3_12,
  code: Code.fromAsset(path.join(__dirname, 'lambda')),
  handler: 'index.lambda_handler',
  timeout: cdk.Duration.minutes(4),
  vpc: reservationsVpc,
  securityGroups: [],
});


const reservationTg = new LambdaTargetGroup(stack, 'LambdaTG', {
  name: 'reservation-tg',
  target: lambdaFunction,
});

// ------------------------------------------------------
// EC2 TG
// ------------------------------------------------------
const ratesTg = new InstanceTargetGroup(stack, 'Ec2TG', {
  vpc: ratesVpc,
  name: 'rates-tg',
  protocol: RequestProtocol.HTTP,
  protocolVersion: RequestProtocolVersion.HTTP1,
  port: 80,
  healthCheck: {
    protocol: HealthCheckProtocol.HTTP,
    path: '/',
    port: 4242,
  },
  autoScalingGroups: [
    new cdk.aws_autoscaling.AutoScalingGroup(stack, 'ASG', {
      instanceType: new cdk.aws_ec2.InstanceType('t3.micro'),
      vpc: ratesVpc,
      machineImage: new cdk.aws_ec2.AmazonLinuxImage(),
    }),
  ],
});

// ------------------------------------------------------
// ALB TG
// ------------------------------------------------------
const albSvc = new ApplicationLoadBalancedFargateService(stack, 'ALBService', {
  vpc: paymentsVpc,
  memoryLimitMiB: 1024,
  cpu: 512,
  taskImageOptions: {
    image: cdk.aws_ecs.ContainerImage.fromRegistry('public.ecr.aws/bitnami/lamp:8.1'),
    containerPort: 80,
  },
  publicLoadBalancer: false,
});

const paymentsTg = new AlbTargetGroup(stack, 'ALBTG', {
  name: 'payments-tg',
  vpc: paymentsVpc,
  loadBalancer: albSvc.loadBalancer,
  protocol: RequestProtocol.HTTP,
  protocolVersion: RequestProtocolVersion.HTTP1,
  port: 80,
});

// ------------------------------------------------------
// Service: Parking
// ------------------------------------------------------
const svcParking = new Service(stack, 'Parking', {
  name: 'parking',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

const parkingListener = svcParking.addListener({
  name: 'listener1',
  protocol: ListenerProtocol.HTTP,
  port: 80,
  defaultAction: HTTPFixedResponse.NOT_FOUND,
});


parkingListener.addListenerRule({
  name: 'rates-rule',
  priority: 10,
  conditions: {
    pathMatch: {
      pathMatchType: PathMatchType.EXACT,
      path: '/rates',
    },
  },
  action: ratesTg,
});

parkingListener.addListenerRule({
  name: 'payments-rule',
  priority: 20,
  conditions: {
    pathMatch: {
      pathMatchType: PathMatchType.EXACT,
      path: '/payments',
    },
  },
  action: paymentsTg,
});

// ------------------------------------------------------
// Service: Reservation
// ------------------------------------------------------
const svcReservation = new Service(stack, 'Reservation', {
  name: 'reservation',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

svcReservation.addListener({
  name: 'listener1',
  protocol: ListenerProtocol.HTTPS,
  port: 443,
  defaultAction: reservationTg,
});


// ------------------------------------------------------
// Service Network
// ------------------------------------------------------
new ServiceNetwork(stack, 'ServiceNetwork', {
  name: 'superapps-vcnetwork',
  services: [svcParking, svcReservation],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: clientsVpc, securityGroups: [clientsSg] }],
});

new Instance(stack, 'Ec2Instance', {
  instanceName: 'client-instance',
  vpc: clientsVpc,
  securityGroup: clientsSg,
  instanceType: new cdk.aws_ec2.InstanceType('t3.micro'),
  machineImage: new cdk.aws_ec2.AmazonLinuxImage(),
  ssmSessionPermissions: true,
});

new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();