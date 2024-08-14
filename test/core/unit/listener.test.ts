import { EOL } from 'node:os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { HttpFixedResponse, IpTargetGroup, Listener, ListenerProtocol, RuleAction, Service, MatchPath, MatchHeader } from '../../../src';

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
      name: 'mycustomlatticelistener',
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Listener', {
      Name: 'mycustomlatticelistener',
    });
  });

  test('Listener creation with custom protocol', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      protocol: ListenerProtocol.HTTP,
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Listener', {
      Protocol: 'HTTP',
      Port: 80,
    });
  });

  test('Listener creation with custom port', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      port: 443,
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Listener', {
      Protocol: 'HTTPS',
      Port: 443,
    });
  });

  test('Listener creation with default action', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      defaultAction: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Listener', {
      DefaultAction: {
        FixedResponse: {
          StatusCode: 404,
        },
      },
    });
  });

  test('Listener creation with rules', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      rules: [
        {
          name: 'test',
          action: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
          priority: 1,
        },
      ],
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
      rules: [
        {
          name: 'test1',
          action: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
          priority: 1,
        },
        {
          name: 'test2',
          action: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
          priority: 1,
        },
      ],
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
        rules: [
          {
            name: 'test',
            action: RuleAction.fixedResponseAction(HttpFixedResponse.NOT_FOUND),
            priority: priority,
          },
        ],
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
        port: port,
      });
      expect(() => app.synth()).toThrow(`Invalid port ${port}: Out of range (0-65535)`);
    }
  });

  test('Listener creation with no action', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      rules: [
        {
          name: 'test-rule',
          priority: 10,
          action: {},
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test-rule',
      Priority: 10,
      Action: {},
    });
  });

  test('Listener creation with path match default props', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      rules: [
        {
          name: 'test-rule',
          priority: 10,
          action: {},
          matchPath: MatchPath.exact('/'),
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test-rule',
      Priority: 10,
      Action: {},
      Match: {
        HttpMatch: {
          PathMatch: {
            CaseSensitive: false,
            Match: {
              Exact: '/',
            },
          },
        },
      },
    });
  });

  test('Listener creation with path match', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      rules: [
        {
          name: 'test-rule',
          priority: 10,
          action: {},
          matchPath: MatchPath.prefix('/test', true),
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test-rule',
      Priority: 10,
      Action: {},
      Match: {
        HttpMatch: {
          PathMatch: {
            CaseSensitive: true,
            Match: {
              Prefix: '/test',
            },
          },
        },
      },
    });
  });

  test('Listener creation with header match', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      rules: [
        {
          name: 'test-rule',
          priority: 10,
          action: {},
          matchHeader: [MatchHeader.prefix('test', 'x-test', false)],
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test-rule',
      Priority: 10,
      Action: {},
      Match: {
        HttpMatch: {
          HeaderMatches: [
            {
              Match: {
                Prefix: 'test',
              },
              Name: 'x-test',
            },
          ],
        },
      },
    });
  });

  test('Listener creation with forward action to target group', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      rules: [
        {
          name: 'test-rule',
          priority: 10,
          action: RuleAction.forwardAction(
            new IpTargetGroup(stack, 'TargetGroup', {
              vpc: new Vpc(stack, 'Vpc', {}),
            }),
            100,
          ),
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test-rule',
      Priority: 10,
      Action: {
        Forward: {
          TargetGroups: [
            {
              TargetGroupIdentifier: {
                'Fn::GetAtt': ['TargetGroup3D7CD9B8', 'Id'],
              },
              Weight: 100,
            },
          ],
        },
      },
    });
  });

  test('Listener creation with weight forward action to target group', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      rules: [
        {
          name: 'test-rule',
          priority: 10,
          action: RuleAction.weightedForwardAction([
            {
              targetGroup: new IpTargetGroup(stack, 'TargetGroup', {
                vpc: new Vpc(stack, 'Vpc', {}),
              }),
              weight: 50,
            },
            {
              targetGroup: new IpTargetGroup(stack, 'TargetGroup2', {
                vpc: new Vpc(stack, 'Vpc2', {}),
              }),
              weight: 50,
            },
          ]),
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test-rule',
      Priority: 10,
      Action: {
        Forward: {
          TargetGroups: [
            {
              TargetGroupIdentifier: {
                'Fn::GetAtt': ['TargetGroup3D7CD9B8', 'Id'],
              },
              Weight: 50,
            },
            {
              TargetGroupIdentifier: {
                'Fn::GetAtt': ['TargetGroup2D571E5D7', 'Id'],
              },
              Weight: 50,
            },
          ],
        },
      },
    });
  });

  describe('Listener name validation', () => {
    test('Listener name validations', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN
      new Listener(stack, 'Listener1', {
        service: new Service(stack, 'Service1', {}),
        name: 'abc-xyz-34ab',
      });

      // THEN
      expect(() => app.synth()).not.toThrow();

      // WHEN
      new Listener(stack, 'Listener2', {
        service: new Service(stack, 'Service2', {}),
        name: '124pp-33',
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
        name,
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
        name: 'a',
      });

      // THEN
      expect(() => app.synth()).toThrow(/at least 3/);

      // WHEN
      new Listener(stack, 'Listener2', {
        service: new Service(stack, 'Service2', {}),
        name: 'x'.repeat(64),
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
          name,
        });

        // THEN
        expect(() => app.synth()).toThrow(/Listener name must be composed of characters a-z, 0-9, and hyphens/);
      }
    });
  });
});
