import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { AuthType, LoggingDestination, Service, ServiceNetwork, ServiceNetworkAccessMode } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ-svcn');

const logGroup = new LogGroup(stack, 'LogsTest', {
  logGroupName: 'vpc-lattice-servicenetwork-1',
  retention: RetentionDays.ONE_MONTH,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

const logGroup2 = new LogGroup(stack, 'LogsTest2', {
  logGroupName: 'vpc-lattice-svc',
  retention: RetentionDays.ONE_MONTH,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});
const logBucket = new Bucket(stack, 'LogsBucket', {});

const vpc = new Vpc(stack, 'VPC', {});

const sampleSvc = new Service(stack, 'Service', {
  loggingDestinations: [LoggingDestination.cloudwatch(logGroup2)],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

const network = new ServiceNetwork(stack, 'ServiceNetwork', {
  authType: AuthType.AWS_IAM,
  name: 'my-custom-name',
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  loggingDestinations: [LoggingDestination.cloudwatch(logGroup), LoggingDestination.s3(logBucket)],
  accessMode: ServiceNetworkAccessMode.AUTHENTICATED_ONLY,
  vpcs: [vpc],
  services: [sampleSvc],
});

network.shareResource({
  accounts: ['851725360407'],
  name: 'my-share',
});

new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();
