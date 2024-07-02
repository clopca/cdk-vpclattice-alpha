// import { EOL } from 'node:os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
// import * as iam from 'aws-cdk-lib/aws-iam';
// import { Stream } from 'aws-cdk-lib/aws-kinesis';
// import { LogGroup } from 'aws-cdk-lib/aws-logs';
// import { Service, LoggingDestination, AuthType, ListenerProtocol, Listener } from '../../../src';
import { Listener, Service } from '../../../src';
// import { ServiceNetwork } from '../../../src/service-network';

describe('Listener', () => {
  test('Default listener', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Listener', {
      Port: 443,
      Protocol: 'HTTPS',
    });
  });
});
