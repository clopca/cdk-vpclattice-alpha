import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { InstanceTargetGroup, RequestProtocol, RequestProtocolVersion } from '../../../src/aws-vpclattice-targets';

describe('InstanceTG', () => {
  test('DeniesInvalidProtocolVersionCombo', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const vpc = new Vpc(stack, 'VPC', {});

    // WHEN & THEN
    const tg1 = new InstanceTargetGroup(stack, 'InstanceTG', {
      vpc,
      protocol: RequestProtocol.TCP,
      protocolVersion: RequestProtocolVersion.GRPC,
    });

    expect(tg1.node.validate).toHaveLength(1);
  });

  test('DeniesInvalidHealthCheckParams', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const vpc = new Vpc(stack, 'VPC', {});

    // WHEN & THEN
    const tg = new InstanceTargetGroup(stack, 'InstanceTG', {
      vpc,
      protocol: RequestProtocol.HTTPS,
      protocolVersion: RequestProtocolVersion.HTTP1,
      healthCheck: {
        path: '/path',
        healthCheckInterval: cdk.Duration.seconds(5),
        healthCheckTimeout: cdk.Duration.seconds(10),
      },
    });

    expect(tg.node.validate).toHaveLength(1);
  });
});
