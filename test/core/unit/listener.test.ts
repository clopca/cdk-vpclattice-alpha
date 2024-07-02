// import { EOL } from 'node:os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
// import * as iam from 'aws-cdk-lib/aws-iam';
// import { Stream } from 'aws-cdk-lib/aws-kinesis';
// import { LogGroup } from 'aws-cdk-lib/aws-logs';
// import { Service, LoggingDestination, AuthType, ListenerProtocol, Listener } from '../../../src';
import { HTTPFixedResponse, Listener, Service } from '../../../src';
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

  test('Listener creation with custom name', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        name: 'mycustomlatticelistener',
      },
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Listener', {
      Name: 'mycustomlatticelistener',
    });
  });

  // Listener creation with rules
  test('Listener creation with rules', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test',
            action: {
              httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
            },
            priority: 1,
          },
        ],
      },
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test',
      Action: {
        FixedResponse: {
          StatusCode: 404,
        },
      },
      Priority: 1,
    });
  });
});
