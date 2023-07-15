
import {
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';

import {
  HealthCheck,
} from './index';

/**
 * HTTP/HTTPS methods
 */
export enum Protocol {
  /**
   * HTTP Protocol
   */
  HTTP = 'HTTP',
  /**
   * HTTPS Protocol
   */
  HTTPS = 'HTTPS',
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
   * @default No HealthCheck
   */
  readonly healthcheck?: HealthCheck | undefined;
  /**
   * IpAddressType
   * @default IPv4
   */
  readonly ipAddressType?: IpAddressType;
  /**
   * Protocol
   * @default HTTPS
   */
  readonly protocol?: Protocol | undefined;
  /**
   * Port
   * @default Defaults to port 80 for HTTP, or 443 for HTTPS and GRPC
   */
  readonly port?: number | undefined;
  /**
   * ProtocolVersion
   * @default HTTP1
   */
  readonly protocolVersion?: ProtocolVersion;
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
  ALB = 'ALB'
}


/**
 * IpAddressType
 */
export enum IpAddressType {
  /**
   * ipv4
   */
  IPV4 = 'IPV4',
  /**
   * Ipv6
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
  OK = 200
}
