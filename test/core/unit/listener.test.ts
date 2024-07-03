import { EOL } from 'node:os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
// import * as iam from 'aws-cdk-lib/aws-iam';
// import { Stream } from 'aws-cdk-lib/aws-kinesis';
// import { LogGroup } from 'aws-cdk-lib/aws-logs';
// import { Service, LoggingDestination, AuthType, ListenerProtocol, Listener } from '../../../src';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { HTTPFixedResponse, IpTargetGroup, Listener, ListenerProtocol, MatchOperator, PathMatchType, Service } from '../../../src';
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

  test('Listener creation with custom protocol', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        protocol: ListenerProtocol.HTTP,
      },
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
      config: {
        port: 443,
      },
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
      config: {
        defaultAction: {
          httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
        },
      },
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

  test('Listener creation with no target group', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test-rule',
            priority: 10,
            action: {},
          },
        ],
      },
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Rule', {
      Name: 'test-rule',
      Priority: 10,
      Action: {},
    });
  });

  test('Listener creation with path match condition default props', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test-rule',
            priority: 10,
            action: {},
            conditions: {
              pathMatch: {
                path: '/',
              },
            },
          },
        ],
      },
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

  test('Listener creation with path match condition', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test-rule',
            priority: 10,
            action: {},
            conditions: {
              pathMatch: {
                path: '/test',
                caseSensitive: true,
                pathMatchType: PathMatchType.PREFIX,
              },
            },
          },
        ],
      },
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

  test('Listener creation with header match condition', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test-rule',
            priority: 10,
            action: {},
            conditions: {
              headerMatches: [
                {
                  headerName: 'x-test',
                  matchOperator: MatchOperator.PREFIX,
                  matchValue: 'test',
                  caseSensitive: false,
                },
              ],
            },
          },
        ],
      },
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

  test('Listener creation with weighted target groups', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test-rule',
            priority: 10,
            action: {
              weightedTargetGroups: [
                {
                  weight: 100,
                  targetGroup: new IpTargetGroup(stack, 'TargetGroup', {
                    vpc: new Vpc(stack, 'Vpc', {}),
                  }),
                },
              ],
            },
          },
        ],
      },
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

  test('Listener creation with target group', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Listener(stack, 'Listener', {
      service: new Service(stack, 'Service', {}),
      config: {
        rules: [
          {
            name: 'test-rule',
            priority: 10,
            action: {
              targetGroup: new IpTargetGroup(stack, 'TargetGroup', {
                vpc: new Vpc(stack, 'Vpc', {}),
              }),
            },
          },
        ],
      },
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
