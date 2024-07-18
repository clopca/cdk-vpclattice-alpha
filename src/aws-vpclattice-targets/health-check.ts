import type { Duration } from 'aws-cdk-lib';
import type { HttpFixedResponse } from '../util';

export enum HealthCheckProtocol {
  /**
   * HTTP
   */
  HTTP = 'HTTP',

  /**
   * HTTPS
   */
  HTTPS = 'HTTPS',
}

export enum HealthCheckProtocolVersion {
  /**
   * Send requests to targets using HTTP/1.1.
   * Supported when the request protocol is HTTP/1.1 or HTTP/2.
   */
  HTTP1 = 'HTTP1',

  /**
   * Send requests to targets using HTTP/2. Supported when the request
   * protocol is HTTP/2 or gRPC, but gRPC-specific features are not available.
   */
  HTTP2 = 'HTTP2',
}

/**
 * Create a Health Check for a target
 * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-group-health-checks.html
 */
export interface HealthCheck {
  /**
   * Whether to enable health checks for the target group
   * @default - true if protocol version is HTTP1, false if protocol version is HTTP2,
   */
  readonly enabled?: boolean;

  /**
   * The approximate amount of time, in seconds, between health checks
   * of an individual target. The range is 5–300 seconds.
   * @default Duration.seconds(30)
   */
  readonly healthCheckInterval?: Duration;

  /**
   * The amount of time, in seconds, during which no response from a target
   * means a failed health check. The range is 1–120 seconds.
   * @default Duration.seconds(5)
   */
  readonly healthCheckTimeout?: Duration;

  /**
   * The number of consecutive successful health checks required before an
   * unhealthy target is considered healthy. The range is 2–10.
   * @default 5
   */
  readonly healthyThresholdCount?: number;

  /**
   * The number of consecutive health check failures required
   * before considering a target unhealthy. The range is 2–10.
   * @default 2
   */
  readonly unhealthyThresholdCount?: number;

  /**
   * The codes to use when checking for a successful response from a target.
   * These are called Success codes in the AWS Console. You can specify multiple
   * values (for example, "200,202") or a range of values (for example, "200-299").
   *
   * @default FixedResponse.OK
   */
  readonly matchers?: HttpFixedResponse | string;

  /**
   * The ping path to the destination on the targets for health checks.
   * @default '/' (ping to the root domain)
   */
  readonly path?: string;

  /**
   * The port the service uses when performing health checks on targets.
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;

  /**
   * The protocol the service uses when performing health checks on targets.
   * Health checks do not support gRPC target group protocol versions.
   * @default HealthCheckProtocol.HTTP
   */
  readonly protocol?: HealthCheckProtocol;

  /**
   * Protocol Version to use for Health Check
   * @default HealthCheckProtocolVersion.HTTP1
   */
  readonly protocolVersion?: HealthCheckProtocolVersion;
}
