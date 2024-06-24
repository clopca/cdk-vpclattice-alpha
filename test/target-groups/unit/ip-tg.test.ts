import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { IpTargetGroup, RequestProtocol } from '../../../src/aws-vpclattice-targets';

describe('InstanceTG', () => {
  test('DeniesInvalidProtocolVersionCombo', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const vpc = new Vpc(stack, 'VPC', {});

    // WHEN & THEN
    expect(() => {
      new IpTargetGroup(stack, 'IpTG', {
        vpc,
        protocol: RequestProtocol.HTTPS,
      });
    }).toThrow();
  });
});
