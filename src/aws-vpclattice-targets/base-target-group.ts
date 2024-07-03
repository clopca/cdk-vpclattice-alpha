import * as core from 'aws-cdk-lib';
import type { HealthCheck } from './health-check';
import { HEALTH_CHECK, TARGET_GROUP } from '../constants';

/**
 * ProtocolVersion
 */
export enum RequestProtocolVersion {
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
 * HTTP/HTTPS methods
 */
export enum RequestProtocol {
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

/**
 * Basic properties for a Target Group
 */
export interface BaseTargetGroupProps {
  /**
   * The name of the target group.
   * Must be between 3-128 characters. The name must be unique within the account.
   * The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as
   * the first or last character, or immediately after another hyphen.
   *
   * @default - Automatically generated.
   */
  readonly targetGroupName?: string;

  /**
   * The type of targets registered to this TargetGroup, either IP or Instance.
   *
   * All targets registered into the group must be of this type. If you
   * register targets to the TargetGroup in the CDK app, the TargetType is
   * determined automatically.
   *
   * @default - Determined automatically.
   */
  readonly targetType?: TargetType;
}

/**
 * Create a vpc lattice TargetGroup.
 * Implemented by `TargetGroup`.
 */
export interface ITargetGroup extends core.IResource {
  /**
   * The id of the target group
   */
  readonly targetGroupId: string;
  /**
   * The Arn of the target group
   */
  readonly targetGroupArn: string;
}

/**
 * Properties for a Target Group, Only supply one of instanceTargets, lambdaTargets, albTargets, ipTargets
 */
export abstract class TargetGroupBase extends core.Resource implements ITargetGroup {
  /**
   * The id of the target group
   */
  public abstract readonly targetGroupId: string;
  /**
   * The Arn of the target group
   */
  public abstract readonly targetGroupArn: string;
  /**
   * The name of the target group
   */
  public abstract readonly name: string;
  /**
   * Targets
   */
  public abstract readonly targetType: TargetType;
  // ------------------------------------------------------
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-128 characters. The name must be unique within the account.
   * The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as
   * the first or last character, or immediately after another hyphen.
   */
  protected validateTargetGroupName(name: string): string[] {
    const errors = [];
    const validationSucceeded =
      name.length >= TARGET_GROUP.NAME_MIN_LENGTH && name.length <= TARGET_GROUP.NAME_MAX_LENGTH && TARGET_GROUP.NAME_FORMAT.test(name);
    if (!validationSucceeded) {
      errors.push(`Invalid Target Group Name: ${name} (must be between 3-128 characters, and must be a valid name)`);
    }
    return errors;
  }
  /**
   * Verifies a valid protocol / target Type combination
   */
  protected validateProtocol(protocol: RequestProtocol, targetType: TargetType): string[] {
    const errors = [];
    // Ensure that protocol is not set to TCP if targetType is ALB
    if (protocol === RequestProtocol.TCP && targetType === TargetType.ALB) {
      errors.push(`Invalid Protocol: ${protocol} (must be HTTP or HTTPS if targetType is ALB)`);
    }
    return errors;
  }

  /**
   * Verifies a valid protocol / protocol version combination
   */
  protected validateProtocolVersion(protocol: RequestProtocol, protocolVersion?: RequestProtocolVersion): string[] {
    const errors = new Array<string>();
    // Ensure that protocol version is undefined if protocol is TCP
    if (protocol === RequestProtocol.TCP && protocolVersion) {
      errors.push(`Invalid Protocol Version: ${protocolVersion} (must not be set if protocol is TCP)`);
    }
    return errors;
  }

  /**
   * Verifies a valid protocol / target Type combination
   */
  protected validateProtocolPort(protocol: RequestProtocol, port: number): string[] {
    const errors = new Array<string>();
    if (protocol === RequestProtocol.HTTP && port !== 80) {
      errors.push('HTTP protocol must use port 80');
    } else if (protocol === RequestProtocol.HTTPS && port !== 443) {
      errors.push('HTTPS protocol must use port 443');
    }
    return errors;
  }

  /**
   * Validates the HealthCheck
   */
  protected validateHealthCheck(healthCheck: HealthCheck): string[] {
    const errors = new Array<string>();
    if (
      healthCheck?.healthyThresholdCount &&
      (healthCheck.healthyThresholdCount < HEALTH_CHECK.MIN_HEALTHY_THRESHOLD_COUNT ||
        healthCheck.healthyThresholdCount > HEALTH_CHECK.MAX_HEALTHY_THRESHOLD_COUNT)
    ) {
      errors.push(
        `HealthCheck parameter "HealthyThresholdCount" must be between ${HEALTH_CHECK.MIN_HEALTHY_THRESHOLD_COUNT} and ${HEALTH_CHECK.MAX_HEALTHY_THRESHOLD_COUNT}`,
      );
    }
    if (healthCheck?.unhealthyThresholdCount && (healthCheck.unhealthyThresholdCount < 2 || healthCheck.unhealthyThresholdCount > 10)) {
      errors.push('HealthCheck parameter `HealthyThresholdCount` must be between `2` and `10`.');
    }
    if (healthCheck?.healthCheckTimeout && (healthCheck.healthCheckTimeout.toSeconds() < 1 || healthCheck.healthCheckTimeout.toSeconds() > 120)) {
      errors.push('HealthCheck parameter `HealthCheckTimeout` must be between `1` and `120` seconds.');
    }
    if (healthCheck?.healthCheckInterval && (healthCheck.healthCheckInterval.toSeconds() < 1 || healthCheck.healthCheckInterval.toSeconds() > 120)) {
      errors.push('HealthCheck parameter `HealthCheckInterval` must be between `5` and `300` seconds.');
    }
    if (
      healthCheck?.healthCheckTimeout &&
      healthCheck?.healthCheckInterval &&
      healthCheck.healthCheckInterval.toSeconds() < healthCheck.healthCheckTimeout.toSeconds()
    ) {
      errors.push(
        `HealthCheck parameter 'HealthCheckInterval' set to ${healthCheck.healthCheckInterval} must be greater than or equal to 'HealthCheckTimeout' which is set to  ${healthCheck.healthCheckTimeout} .`,
      );
    }
    return errors;
  }
}

export interface WeightedTargetGroup {
  /**
   * A target Group
   */
  readonly targetGroup: ITargetGroup;
  /**
   * A weight for the target group.
   * @default 100
   */
  readonly weight?: number;
}

// export class TargetGroup extends TargetGroupBase {
//   public static instance(props: InstanceTargetGroupProps) {
//     return new InstanceTargetGroup(props)
//   }
// }
