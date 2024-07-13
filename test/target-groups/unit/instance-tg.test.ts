import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { InstanceTargetGroup, RequestProtocol, RequestProtocolVersion } from '../../../src/aws-vpclattice-targets';

describe('InstanceTG', () => {
  test('DeniesInvalidProtocolVersionCombo', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'Stack');
    const vpc = new Vpc(stack, 'VPC', {});

    // WHEN & THEN
    new InstanceTargetGroup(stack, 'InstanceTG', {
      vpc,
      protocol: RequestProtocol.TCP,
      protocolVersion: RequestProtocolVersion.GRPC,
    });

    expect(() => app.synth()).toThrow(
      /Validation failed with the following errors:.*\[Stack\/InstanceTG\] Invalid Protocol Version: GRPC \(must not be set if protocol is TCP\)/s,
    );
  });

  test('DeniesInvalidHealthCheckParams', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'Stack');
    const vpc = new Vpc(stack, 'VPC', {});

    // WHEN & THEN
    new InstanceTargetGroup(stack, 'InstanceTG', {
      vpc,
      protocol: RequestProtocol.HTTPS,
      protocolVersion: RequestProtocolVersion.HTTP1,
      healthCheck: {
        path: '/path',
        healthCheckInterval: cdk.Duration.seconds(5),
        healthCheckTimeout: cdk.Duration.seconds(10),
      },
    });
    expect(() => app.synth()).toThrow('HealthCheck parameter "HealthCheckTimeout" set to 10');
  });
});
