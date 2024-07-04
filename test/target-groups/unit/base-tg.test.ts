import { EOL } from 'node:os';
import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { ApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { AlbTargetGroup, IpTargetGroup, RequestProtocol } from '../../../src/aws-vpclattice-targets';

describe('BaseTargetGroup', () => {
  let app: cdk.App;
  let stack: cdk.Stack;
  let vpc: Vpc;

  beforeEach(() => {
    app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');
    vpc = new Vpc(stack, 'VPC', {});
  });

  // Test invalid protocol for ALB targetType
  test('Invalid protocol for ALB targetType', () => {
    // GIVEN

    // WHEN & THEN
    new AlbTargetGroup(stack, 'AlbTG', {
      vpc,
      protocol: RequestProtocol.TCP,
      loadBalancer: new ApplicationLoadBalancer(stack, 'ALB', {
        vpc,
        internetFacing: true,
      }),
    });
    expect(() => app.synth()).toThrow(`Invalid Protocol: ${RequestProtocol.TCP} (must be HTTP or HTTPS if targetType is ALB)`);
  });
  // Invalid health check
  test('Invalid health check', () => {
    // GIVEN
    const invalidHealthCheckTimeout = 350;
    const invalidHealthCheckInterval = 320;
    const expectedErrors = [
      '  [TestStack/IpTG] HealthCheck parameter "HealthyThresholdCount" must be between 1 and 10.',
      '  [TestStack/IpTG] HealthCheck parameter "UnhealthyThresholdCount" must be between 2 and 10.',
      '  [TestStack/IpTG] HealthCheck parameter "HealthCheckTimeout" must be between 1 and 120 seconds.',
      '  [TestStack/IpTG] HealthCheck parameter "HealthCheckInterval" must be between 5 and 300 seconds.',
      `  [TestStack/IpTG] HealthCheck parameter "HealthCheckTimeout" set to ${invalidHealthCheckTimeout} seconds must be greater than or equal to "HealthCheckInterval" which is set to ${invalidHealthCheckInterval} seconds.`,
    ].join(EOL);
    new IpTargetGroup(stack, 'IpTG', {
      vpc,
      healthCheck: {
        healthyThresholdCount: 0,
        unhealthyThresholdCount: 0,
        healthCheckTimeout: cdk.Duration.seconds(invalidHealthCheckTimeout),
        healthCheckInterval: cdk.Duration.seconds(invalidHealthCheckInterval),
        path: '/health',
      },
    });
    // WHEN & THEN
    expect(() => app.synth()).toThrow(`Validation failed with the following errors:${EOL}${expectedErrors}`);
  });

  describe('Target group name validation', () => {
    test('Target group name validations', () => {
      // WHEN
      new IpTargetGroup(stack, 'IpTG1', {
        name: 'abc-xyz-34ab',
        vpc,
      });
      // THEN
      expect(() => app.synth()).not.toThrow();

      // WHEN
      new IpTargetGroup(stack, 'IpTG2', {
        name: '124pp-33',
        vpc,
      });
      // THEN
      expect(() => app.synth()).not.toThrow();
    });

    test('Fails with message on invalid service names', () => {
      // WHEN
      const name = `tg-${'$'.repeat(129)}`;
      const expectedErrors = [
        `  [TestStack/IpTG] Invalid target group name (value: ${name})`,
        '  [TestStack/IpTG] Target group name must be at least 3 characters and no more than 128 characters.',
        '  [TestStack/IpTG] Target group name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "tg-".',
      ].join(EOL);

      new IpTargetGroup(stack, 'IpTG', {
        name,
        vpc,
      });
      // THEN
      expect(() => app.synth()).toThrow(`Validation failed with the following errors:${EOL}${expectedErrors}`);
    });

    test('Fails if service name has less than 3 or more than 40 characters', () => {
      // WHEN
      new IpTargetGroup(stack, 'IpTG1', {
        name: 'a',
        vpc,
      });
      // THEN
      expect(() => app.synth()).toThrow(/at least 3/);

      // WHEN
      new IpTargetGroup(stack, 'IpTG2', {
        name: 'x'.repeat(129),
        vpc,
      });
      // THEN
      expect(() => app.synth()).toThrow(/no more than 128/);
    });

    test('Fails if service name does not follow the specified pattern', () => {
      // WHEN
      const invalidNames = ['aAa', 'a--a', 'a./a-a', 'a//a-a', 'tg-a', '-abc123', 'abc123-'];
      for (const name of invalidNames) {
        new IpTargetGroup(stack, `IpTG-${name}`, {
          name,
          vpc,
        });
        // THEN
        expect(() => app.synth()).toThrow(/Target group name must be composed of characters a-z, 0-9, and hyphens/);
      }
    });
  });
});

// 200-203,205-206,208-209,211-212,218-221
