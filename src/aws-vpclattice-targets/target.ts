import { aws_ec2 as ec2 } from 'aws-cdk-lib';
import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import { HealthCheck } from './health-check';

export interface ITarget {
  /**
   * Target Type
   */
  readonly type: TargetType;
  /**
   * References to the targets, ids or Arns
   */
  readonly targets: aws_vpclattice.CfnTargetGroup.TargetProperty[];
  /**
   * Configuration for the TargetGroup, if it is not a lambda
   */
  readonly config?: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty;
}

/**
 * HTTP/HTTPS methods
 */
export enum Protocol {
  /**
   * HTTP Protocol (Unencrypted traffic)
   */
  HTTP = 'HTTP',

  /**
   * HTTPS Protocol (Encrypted traffic - TLS termination)
   */
  HTTPS = 'HTTPS',

  /**
   * TCP Protocol (Encrypted traffic - TLS passthrough)
   */
  TCP = 'TCP',
}


export enum LambdaEventStructureVersion {
  /**
   * Version 1.0
   */
  V1 = 'V1',

  /**
   * Version 2.0
   */
  V2 = 'V2',
}

/**
 * TargetConfiguration
 */
export interface TargetConfig {
  /**
   * VPC where the target(s) are located
   */
  readonly vpc: ec2.IVpc;

  /**
   * HealthCheckParameters - Can supply for IpAddress and ALB targets only.
   * @default - No HealthCheck
   */
  readonly healthcheck?: HealthCheck;

  /**
   * The type of IP Addresss Protocol to use
   * @default IpAddressType.IPv4
   */
  readonly ipAddressType?: IpAddressType;

  /**
   * The application layer protocol to use
   * @default HTTPS
   */
  readonly protocol?: Protocol;

  /**
   * ProtocolVersion
   * @default HTTP1
   */
  readonly protocolVersion?: ProtocolVersion;

  /**
   * Port
   * @default Defaults to port 80 for HTTP, or 443 for HTTPS and GRPC
   */
  readonly port?: number;
}

/**
 * Types of Targets that are usable with vpclattice
 */
export enum TargetType {
  /**
   * Lambda Target
   */
  LAMBDA = 'LAMBDA',

  /**
   * IP Address Target
   */
  IP = 'IP',

  /**
   * EC2 Instance Targets
   */
  INSTANCE = 'INSTANCE',

  /**
   * Application Load Balancer Target
   */
  ALB = 'ALB',
}

/**
 * The type of IP Addresss Protocol
 */
export enum IpAddressType {
  /**
   * IPv4 (Internet Protocol version 4)
   */
  IPV4 = 'IPV4',

  /**
   * IPv6 (Internet Protocol version 6)
   */
  IPV6 = 'IPV6',
}

/**
 * ProtocolVersion
 */
export enum ProtocolVersion {
  /**
   * Http1
   */
  HTTP1 = 'HTTP1',
  /**
   * Http2
   */
  HTTP2 = 'HTTP2',
  /**
   * GRPC
   */
  GRPC = 'GRPC',
}

/**
 * Fixed response codes
 */
export enum FixedResponse {
  /**
   * Not Found 404
   */
  NOT_FOUND = 404,
  /**
   * OK 200
   */
  OK = 200,
}

export interface TargetGroup {
  /**
   * Target Type
   */
  readonly type: string;

  /**
   * References to the targets, ids or Arns
   */
  readonly targets: aws_vpclattice.CfnTargetGroup.TargetProperty[];

  /**
   * Configuration for the TargetGroup, if it is not a lambda
   */
  readonly config?: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty;
}
