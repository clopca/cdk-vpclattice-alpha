import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { IpTargetGroup, RequestProtocol } from '../../../src/aws-vpclattice-targets';

describe('InstanceTG', () => {
  test('DeniesInvalidProtocolVersionCombo', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const vpc = new Vpc(stack, 'VPC', {});

    // WHEN & THEN
    new IpTargetGroup(stack, 'IpTG', {
      vpc,
      protocol: RequestProtocol.HTTPS,
    });
    expect(() => app.synth()).toThrow('Invalid protocol version combination.');
  });
});
