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

  test('Listener creation with rules', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
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

  test('Listener creation with rules with duplicate priorities', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test1',
            action: {
              httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
            },
            priority: 1,
          },
          {
            name: 'test2',
            action: {
              httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
            },
            priority: 1,
          },
        ],
      },
    });

    // THEN
    expect(() => app.synth()).toThrow('Invalid rule priorities: Duplicate priorities found');
  });

  test('Listener creation with rules with invalid priorities', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test1',
            action: {
              httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
            },
            priority: 0,
          },
          {
            name: 'test2',
            action: {
              httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
            },
            priority: 102,
          },
        ],
      },
    });

    // THEN
    expect(() => app.synth()).toThrow('Invalid rule priorities: Rule priorities must be between 1 and 100');
  });
});
