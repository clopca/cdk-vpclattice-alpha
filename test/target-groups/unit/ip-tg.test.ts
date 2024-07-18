import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { HttpFixedResponse } from '../../../src';
import {
  HealthCheckProtocol,
  HealthCheckProtocolVersion,
  IpAddressType,
  IpTargetGroup,
  RequestProtocol,
  RequestProtocolVersion,
  TargetType,
} from '../../../src/aws-vpclattice-targets';

describe('IP Target Group', () => {
  let app: cdk.App;
  let stack: cdk.Stack;
  let vpc: Vpc;

  beforeEach(() => {
    // GIVEN
    app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');
    vpc = new Vpc(stack, 'VPC', {});
  });

  //default ip target group
  test('Default IP Target Group', () => {
    // WHEN & THEN
    new IpTargetGroup(stack, 'IpTG', {
      vpc,
    });
    // Check the target group has been created
    Template.fromStack(stack).hasResource('AWS::VpcLattice::TargetGroup', {
      Properties: {
        Type: TargetType.IP,
        Config: {
          IpAddressType: IpAddressType.IPV4,
          Protocol: RequestProtocol.HTTPS,
        },
      },
    });
  });

  test('Add target', () => {
    // WHEN & THEN
    const ipTargetGroup = new IpTargetGroup(stack, 'IpTG', {
      name: 'ip-tg',
      ipAddressType: IpAddressType.IPV4,
      vpc,
      targets: [],
    });

    ipTargetGroup.addTarget({
      ipAddress: '10.0.0.1',
      port: 80,
    });
    // Check the target has been added
    Template.fromStack(stack).hasResource('AWS::VpcLattice::TargetGroup', {
      Properties: {
        Name: 'ip-tg',
        Type: TargetType.IP,
        Config: {
          IpAddressType: IpAddressType.IPV4,
          Protocol: RequestProtocol.HTTPS,
        },
        Targets: [
          {
            Id: '10.0.0.1',
            Port: 80,
          },
        ],
      },
    });
  });
  test('Add target with ipv6 and healthCheck', () => {
    // WHEN & THEN
    new IpTargetGroup(stack, 'IpTG', {
      vpc,
      ipAddressType: IpAddressType.IPV6,
      protocol: RequestProtocol.HTTP,
      protocolVersion: RequestProtocolVersion.HTTP2,
      healthCheck: {
        enabled: false,
        healthCheckInterval: cdk.Duration.seconds(30),
        healthCheckTimeout: cdk.Duration.seconds(5),
        path: '/health',
        protocol: HealthCheckProtocol.HTTP,
        port: 80,
        protocolVersion: HealthCheckProtocolVersion.HTTP2,
        unhealthyThresholdCount: 2,
        healthyThresholdCount: 5,
        matchers: HttpFixedResponse.OK,
      },
    });
    // Check the target has been added
    Template.fromStack(stack).hasResource('AWS::VpcLattice::TargetGroup', {
      Properties: {
        Type: TargetType.IP,
        Config: {
          IpAddressType: IpAddressType.IPV6,
          Protocol: RequestProtocol.HTTP,
        },
      },
    });
  });
});
