import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { AuthType, LoggingDestination, Service } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-integ');

const logGroup = new LogGroup(stack, 'LogsTest', {
  logGroupName: 'vpc-lattice-service-1',
  retention: RetentionDays.ONE_MONTH,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});

new Service(stack, 'Service', {
  authType: AuthType.AWS_IAM,
  serviceName: 'my-custom-name',
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  loggingDestinations: [
    LoggingDestination.cloudwatch(logGroup),
  ],
});

new integ.IntegTest(app, 'ServiceTest', {
  testCases: [stack],
});

app.synth();