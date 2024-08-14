import * as path from 'node:path';
import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Instance, Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';
import { HttpFixedResponse, ListenerProtocol, Service, ServiceNetwork, AuthType, RuleAction, HttpMethod, MatchPath } from '../../../src';
// import { AlbTargetGroup, InstanceTargetGroup, LambdaTargetGroup, RequestProtocol, RequestProtocolVersion } from '../../../src/aws-vpclattice-targets';
import { InstanceTargetGroup, LambdaTargetGroup, RequestProtocol, RequestProtocolVersion } from '../../../src/aws-vpclattice-targets';
import { ListenerRule } from '../../../src/rule';
//import { ApplicationLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
// import * as ecs from 'aws-cdk-lib/aws-ecs';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-basic-e2e');

// ------------------------------------------------------
// VPCs
// ------------------------------------------------------
const ratesVpc = new Vpc(stack, 'RatesVPC', { natGateways: 1 });
const reservationsVpc = new Vpc(stack, 'ReservationVPC', { natGateways: 1 });
const clientsVpc = new Vpc(stack, 'ClientsVPC', { natGateways: 1 });
const paymentsVpc = new Vpc(stack, 'PaymentsVPC', { natGateways: 1 });

// ------------------------------------------------------
// Security Group - Clients
// ------------------------------------------------------
const clientsSg = new SecurityGroup(stack, 'ResSG', {
  securityGroupName: 'reservation-sg',
  vpc: clientsVpc,
});

clientsSg.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
clientsSg.addIngressRule(Peer.ipv4('169.254.0.0/16'), Port.allTraffic());

// ------------------------------------------------------
// Lambda TG
// ------------------------------------------------------
const lambdaFunction = new LambdaFunction(stack, 'LatticeLambdaReservation', {
  runtime: Runtime.PYTHON_3_12,
  code: Code.fromAsset(path.join(__dirname, 'lambda')),
  handler: 'index.lambda_handler',
  timeout: cdk.Duration.minutes(4),
  vpc: reservationsVpc,
});

const reservationTg = new LambdaTargetGroup(stack, 'LambdaTG', {
  name: 'reservation-tg',
  target: lambdaFunction,
});

// ------------------------------------------------------
// Security Group - ASG
// ------------------------------------------------------
const asgSecurityGroup = new SecurityGroup(stack, 'RatesSG', {
  securityGroupName: 'autoscaling-group-sg',
  vpc: ratesVpc,
});

asgSecurityGroup.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
asgSecurityGroup.addIngressRule(Peer.ipv4('169.254.0.0/16'), Port.allTraffic());

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
    enabled: false,
  },
  autoScalingGroups: [
    new autoscaling.AutoScalingGroup(stack, 'ASG', {
      instanceType: new ec2.InstanceType('t3.micro'),
      vpc: ratesVpc,
      securityGroup: asgSecurityGroup,
      vpcSubnets: ratesVpc.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS }),
      machineImage: new ec2.AmazonLinuxImage({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 }),
      userData: ec2.UserData.custom(`
        #!/bin/bash
        sudo yum install -y httpd
        sudo systemctl enable httpd
        sudo systemctl start httpd
        sudo echo "Hello World from $(hostname -f)" > /var/www/html/index.html
      `),
    }),
  ],
});

// ------------------------------------------------------
// Security Group - ALB
// ------------------------------------------------------
const paymentsSecurityGroup = new SecurityGroup(stack, 'PaymentsSG', {
  securityGroupName: 'alb-group-sg',
  vpc: paymentsVpc,
});

paymentsSecurityGroup.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
paymentsSecurityGroup.addIngressRule(Peer.ipv4('169.254.0.0/16'), Port.allTraffic());
paymentsSecurityGroup.addIngressRule(Peer.ipv4('172.16.0.0/16'), Port.tcp(80));

// ------------------------------------------------------
// ALB TG
// ------------------------------------------------------
//const albSvc =
// new ApplicationLoadBalancedFargateService(stack, 'ALBService', {
//   vpc: paymentsVpc,
//   memoryLimitMiB: 1024,
//   cpu: 512,
//   taskImageOptions: {
//     image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
//   },
//   securityGroups: [paymentsSecurityGroup],
//   publicLoadBalancer: false,
// });

// const paymentsTg = new AlbTargetGroup(stack, 'ALBTG', {
//   name: 'payments-tg',
//   vpc: paymentsVpc,
//   loadBalancer: albSvc.loadBalancer,
//   protocol: RequestProtocol.HTTP,
//   protocolVersion: RequestProtocolVersion.HTTP1,
//   port: 80,
// });

// ------------------------------------------------------
// Service: Parking
// ------------------------------------------------------
const parkingSvc = new Service(stack, 'Parking', {
  name: 'parking',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

const parkingListener = parkingSvc.addListener({
  name: 'listener1',
  protocol: ListenerProtocol.HTTP,
  port: 80,
  defaultAction: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
});

// ------------------------------------------------------
// Listener & Rules
// ------------------------------------------------------

const parkingRatesRule = new ListenerRule(stack, 'MyRule', {
  priority: 10,
  listener: parkingListener,
  name: 'header-match-rule',
  service: parkingSvc,
  matchPath: MatchPath.exact('/rates', false),
  action: RuleAction.forwardAction(ratesTg),
});

parkingListener.addRule({
  // action: RuleAction.forwardAction(paymentsTg),
  action: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
  matchPath: MatchPath.exact('/payments', false),
  matchMethod: HttpMethod.GET,
  name: 'payments-rule',
  priority: 20,
});

// ------------------------------------------------------
// Service: Reservation
// ------------------------------------------------------
const reservationSvc = new Service(stack, 'Reservation', {
  name: 'reservation',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

const reservationListener = reservationSvc.addListener({
  name: 'listener1',
  protocol: ListenerProtocol.HTTPS,
  port: 443,
  defaultAction: RuleAction.forwardAction(reservationTg),
});

// ------------------------------------------------------
// Service Network
// ------------------------------------------------------
new ServiceNetwork(stack, 'ServiceNetwork', {
  name: 'superapps-svcnetwork',
  services: [reservationSvc, parkingSvc],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: clientsVpc, securityGroups: [clientsSg] }],
});

// ------------------------------------------------------
// Testing Instance
// ------------------------------------------------------
new Instance(stack, 'Ec2Instance', {
  instanceName: 'client-instance',
  vpc: clientsVpc,
  securityGroup: clientsSg,
  instanceType: new cdk.aws_ec2.InstanceType('t3.micro'),
  machineImage: new cdk.aws_ec2.AmazonLinuxImage({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2023 }),
  ssmSessionPermissions: true,
  userData: cdk.aws_ec2.UserData.custom(`
    #!/bin/bash
    sudo yum install -y jq
  `),
});

// Add explicit dependencies to ensure correct order of deployment and deletion
reservationListener.node.addDependency(reservationTg);
reservationSvc.node.addDependency(reservationTg);
parkingRatesRule.node.addDependency(ratesTg);
parkingSvc.node.addDependency(ratesTg);

// ------------------------------------------------------
// Integ Test Runner
// ------------------------------------------------------
new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();
