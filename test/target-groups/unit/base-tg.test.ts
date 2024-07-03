import { EOL } from 'node:os';
import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { IpTargetGroup } from '../../../src/aws-vpclattice-targets';

describe('BaseTargetGroup', () => {
  describe('Target group name validation', () => {
    test('Target group name validations', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const vpc = new Vpc(stack, 'VPC', {});

      // WHEN & THEN
      new IpTargetGroup(stack, 'IpTG1', {
        name: 'abc-xyz-34ab',
        vpc,
      });
      expect(() => app.synth()).not.toThrow();

      // WHEN & THEN
      new IpTargetGroup(stack, 'IpTG2', {
        name: '124pp-33',
        vpc,
      });
      expect(() => app.synth()).not.toThrow();
    });

    test('Fails with message on invalid service names', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const vpc = new Vpc(stack, 'VPC', {});
      const name = `tg-${'$'.repeat(129)}`;
      const expectedErrors = [
        `  [TestStack/IpTG] Invalid target group name (value: ${name})`,
        '  [TestStack/IpTG] Target group name must be at least 3 characters and no more than 128 characters.',
        '  [TestStack/IpTG] Target group name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "tg-".',
      ].join(EOL);

      // WHEN & THEN
      new IpTargetGroup(stack, 'IpTG', {
        name,
        vpc,
      });
      expect(() => app.synth()).toThrow(`Validation failed with the following errors:${EOL}${expectedErrors}`);
    });

    test('Fails if service name has less than 3 or more than 40 characters', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const vpc = new Vpc(stack, 'VPC', {});

      // WHEN & THEN
      new IpTargetGroup(stack, 'IpTG1', {
        name: 'a',
        vpc,
      });
      expect(() => app.synth()).toThrow(/at least 3/);

      // WHEN & THEN
      new IpTargetGroup(stack, 'IpTG2', {
        name: 'x'.repeat(129),
        vpc,
      });
      expect(() => app.synth()).toThrow(/no more than 128/);
    });

    test('Fails if service name does not follow the specified pattern', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const vpc = new Vpc(stack, 'VPC', {});
      const invalidNames = ['aAa', 'a--a', 'a./a-a', 'a//a-a', 'tg-a', '-abc123', 'abc123-'];
      // WHEN & THEN
      for (const name of invalidNames) {
        new IpTargetGroup(stack, `IpTG-${name}`, {
          name,
          vpc,
        });
        expect(() => app.synth()).toThrow(/Target group name must be composed of characters a-z, 0-9, and hyphens/);
      }
    });
  });
});
