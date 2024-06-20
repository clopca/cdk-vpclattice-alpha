import * as core from 'aws-cdk-lib';
//import { InstanceTargetGroup, InstanceTargetGroupProps } from './instance-target';

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
 * Properties for a Target Group, Only supply one of instancetargets, lambdaTargets, albTargets, ipTargets
 */
export abstract class TargetGroupBase extends core.Resource implements ITargetGroup {
  // ------------------------------------------------------
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-128 characters. The name must be unique within the account.
   * The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as
   * the first or last character, or immediately after another hyphen.
   */
  protected static validateTargetGroupName(name: string) {
    const pattern = /^(?!tg-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 128 && pattern.test(name);
    if (!validationSucceeded) {
      throw new Error(`Invalid Target Group Name: ${name} (must be between 3-128 characters, and must be a valid name)`);
    }
  }
  /**
   * Verifies a valid protocol / target Type combination
   */
  protected static validateProtocol(protocol: RequestProtocol, targetType: TargetType) {
    // Ensure that protocol is not set to TCP if targetType is ALB
    if (protocol === RequestProtocol.TCP && targetType === TargetType.ALB) {
      throw new Error(`Invalid Protocol: ${protocol} (must be HTTP or HTTPS if targetType is ALB)`);
    }
  }

  /**
   * Verifies a valid protocol / protocol version combination
   */
  protected static validateProtocolVersion(protocol: RequestProtocol, protocolVersion: RequestProtocolVersion) {
    // Ensure that protocol version is undefine if protocol is TCP
    if (protocol === RequestProtocol.TCP && protocolVersion) {
      throw new Error(`Invalid Protocol Version: ${protocolVersion} (must not be set if protocol is TCP)`);
    }
  }
  // ------------------------------------------------------
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