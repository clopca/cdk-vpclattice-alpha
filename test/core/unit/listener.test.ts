import { EOL } from 'node:os';
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
    const invalidPriorities = [-1, 101];
    for (const priority of invalidPriorities) {
      new Listener(stack, `Listener-${priority}`, {
        service: new Service(stack, `Service-${priority}`, {}),
        config: {
          rules: [
            {
              name: 'test',
              action: {
                httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
              },
              priority: priority,
            },
          ],
        },
      });
      expect(() => app.synth()).toThrow('Invalid rule priorities: Rule priorities must be between 1 and 100');
    }
  });

  test('Listener creation with invalid port', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const invalidPorts = [-1, 66666];

    for (const port of invalidPorts) {
      new Listener(stack, `Listener-${port}`, {
        service: new Service(stack, `Service-${port}`, {}),
        config: {
          port: port,
        },
      });
      expect(() => app.synth()).toThrow(`Invalid port ${port}: Out of range (0-65535)`);
    }
  });

  describe('Listener name validation', () => {
    test('Listener name validations', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN
      new Listener(stack, 'Listener1', {
        service: new Service(stack, 'Service1', {}),
        config: {
          name: 'abc-xyz-34ab',
        },
      });

      // THEN
      expect(() => app.synth()).not.toThrow();

      // WHEN
      new Listener(stack, 'Listener2', {
        service: new Service(stack, 'Service2', {}),
        config: {
          name: '124pp-33',
        },
      });

      // THEN
      expect(() => app.synth()).not.toThrow();
    });

    test('Fails with message on invalid listener names', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const name = `svc-${'$'.repeat(64)}`;
      const expectedErrors = [
        `  [TestStack/Listener] Invalid listener name (value: ${name})`,
        '  [TestStack/Listener] Listener name must be at least 3 and no more than 63 characters',
        '  [TestStack/Listener] Listener name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "listener-".',
      ].join(EOL);

      // WHEN
      new Listener(stack, 'Listener', {
        service: new Service(stack, 'Service', {}),
        config: {
          name,
        },
      });

      // THEN
      expect(() => app.synth()).toThrow(`Validation failed with the following errors:${EOL}${expectedErrors}`);
    });

    test('Fails if listener name has less than 3 or more than 63 characters', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN
      new Listener(stack, 'Listener1', {
        service: new Service(stack, 'Service1', {}),
        config: {
          name: 'a',
        },
      });

      // THEN
      expect(() => app.synth()).toThrow(/at least 3/);

      // WHEN
      new Listener(stack, 'Listener2', {
        service: new Service(stack, 'Service2', {}),
        config: {
          name: 'x'.repeat(64),
        },
      });

      // THEN
      expect(() => app.synth()).toThrow(/no more than 63/);
    });

    test('Fails if listener name does not follow the specified pattern', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidNames = ['aAa', 'a--a', 'a./a-a', 'a//a-a', 'svc-a', '-abc123', 'abc123-'];

      // WHEN
      for (const name of invalidNames) {
        new Listener(stack, `Listener-${name}`, {
          service: new Service(stack, `Service-${name}`, {}),
          config: {
            name,
          },
        });

        // THEN
        expect(() => app.synth()).toThrow(/Listener name must be composed of characters a-z, 0-9, and hyphens/);
      }
    });
  });
});
