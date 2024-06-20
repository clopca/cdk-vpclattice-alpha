
import { Duration, aws_vpclattice } from 'aws-cdk-lib';
import { FixedResponse } from './target';

export enum HealthCheckProtocol {
  HTTP = 'HTTP',
  HTTPS = 'HTTPS'
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
  HTTP2 = 'HTTP2'
}

export interface TargetGroupHealthCheckProps {
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
  readonly matchers?: FixedResponse | string;

  /**
   * The ping path to the destination on the targets for health checks.
   * @default '/' (ping to the root domain)
   */
  readonly path?: string;

  /**
   * The port the service uses when performing health checks on targets.
   * @default 443
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

/**
 * Create a Health Check for a target
 * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-group-health-checks.html
 */
export abstract class HealthCheck {
  /**
   * A Health Check configuration object for a target
   * @param props
   * @returns HealthCheck
   */
  public static validateProperties(props: TargetGroupHealthCheckProps): HealthCheck {
    if (props.healthCheckInterval) {
      if (props.healthCheckInterval.toSeconds() < 5 || props.healthCheckInterval.toSeconds() > 300) {
        throw new Error('HealthCheckInterval must be between 5 and 300 seconds');
      }
    }

    if (props.healthCheckTimeout) {
      if (props.healthCheckTimeout.toSeconds() < 1 || props.healthCheckTimeout.toSeconds() > 120) {
        throw new Error('HealthCheckTimeout must be between 1 and 120seconds');
      }
    }

    if (props.healthyThresholdCount) {
      if (props.healthyThresholdCount < 1 || props.healthyThresholdCount > 10) {
        throw new Error('HealthyThresholdCount must be between 1 and 10');
      }
    }

    if (props.unhealthyThresholdCount) {
      if (props.unhealthyThresholdCount < 2 || props.unhealthyThresholdCount > 10) {
        throw new Error('UnhealthyThresholdCount must be between 2 and 10');
      }
    }

    var port: number;
    if (props.port) {
      port = props.port;
    } else if (props.protocol === HealthCheckProtocol.HTTP) {
      port = 80;
    } else {
      port = 443;
    }

    let matcher: aws_vpclattice.CfnTargetGroup.MatcherProperty | undefined = undefined;
    if (props.matchers) {
      const codeAsString = props.matchers.toString();
      matcher = { httpCode: codeAsString };
    }

    return {
      enabled: props.enabled ?? true,
      healthCheckInterval: props.healthCheckInterval ?? Duration.seconds(30),
      healthCheckTimeout: props.healthCheckTimeout ?? Duration.seconds(5),
      path: props.path ?? '/',
      protocol: props.protocol ?? HealthCheckProtocol.HTTPS,
      port: port,
      protocolVersion: props.protocolVersion ?? HealthCheckProtocolVersion.HTTP1,
      unhealthyThresholdCount: props.unhealthyThresholdCount ?? 2,
      healthyThresholdCount: props.healthyThresholdCount ?? 5,
      matcher: matcher,
    };
  }

  /**
   * health check is enabled.
   */
  public abstract readonly enabled: boolean;
  /**
   * healthCheck Interval
   */
  public abstract readonly healthCheckInterval: Duration;
  /**
   * HealthCheck Timeout
   */
  public abstract readonly healthCheckTimeout: Duration;
  /**
   * Target Match reponse
   */
  public abstract readonly matcher: aws_vpclattice.CfnTargetGroup.MatcherProperty | undefined;
  /**
   * Path to check
   */
  public abstract readonly path: string;
  /**
   * Port to check
   */
  public abstract readonly port: number;
  /** 
   * Protocol to use
   */
  public abstract readonly protocol: HealthCheckProtocol;
  /**
   * HTTP Protocol Version
   */
  public abstract readonly protocolVersion: HealthCheckProtocolVersion;
  /**
   * Unhealthy Threshold Count
   */
  public abstract readonly unhealthyThresholdCount: number;
  /**
   * Healthy Threshold Count
   */
  public abstract readonly healthyThresholdCount: number;

  protected constructor() { }
}
