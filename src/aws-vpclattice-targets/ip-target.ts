import { Duration, Lazy } from 'aws-cdk-lib';
import type { IVpc, IpAddresses, Ipv6Addresses } from 'aws-cdk-lib/aws-ec2';
import * as aws_vpclattice from 'aws-cdk-lib/aws-vpclattice';
import type * as constructs from 'constructs';
import { TargetGroupBase, RequestProtocol, TargetType, RequestProtocolVersion } from './base-target-group';
import { HealthCheckProtocol, HealthCheckProtocolVersion } from './health-check';
import type { HealthCheck } from './health-check';
import { HttpFixedResponse } from '../util';

/**
 * The type of IP Address Protocol
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

export interface IpTargetGroupProps {
  /**
   * The name of the target group
   */
  readonly name?: string;

  /**
   * Targets
   */
  readonly targets?: IpTargetGroupTargetProps[];

  /**
   * VPC Identifier
   */
  readonly vpc: IVpc;

  /**
   * The type of IP Address Protocol to use
   * @default IpAddressType.IPv4
   */
  readonly ipAddressType?: IpAddressType;

  /**
   * Port
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;

  /**
   * The application layer protocol to use
   * @default RequestProtocol.HTTPS
   */
  readonly protocol?: RequestProtocol;

  /**
   * ProtocolVersion
   * @default RequestProtocolVersion.HTTP1
   */
  readonly protocolVersion?: RequestProtocolVersion;

  /**
   * Health Check configuration
   */
  readonly healthCheck?: HealthCheck;
}

export interface IpTargetGroupTargetProps {
  /**
   * The IP Address of the target
   */
  readonly ipAddress: Ipv6Addresses | IpAddresses;

  /**
   * Port
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;
}

export class IpTargetGroup extends TargetGroupBase {
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly name: string;
  public readonly targets: IpTargetGroupTargetProps[];
  public readonly port: number;
  public readonly protocol: RequestProtocol;
  public readonly ipAddressType: IpAddressType;
  public readonly protocolVersion?: RequestProtocolVersion;
  public readonly vpc: IVpc;
  public readonly targetType = TargetType.IP;
  private readonly _resource: aws_vpclattice.CfnTargetGroup;
  private readonly healthCheck: HealthCheck;

  constructor(scope: constructs.Construct, id: string, props: IpTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.vpc = props.vpc;
    this.ipAddressType = props.ipAddressType ?? IpAddressType.IPV4;
    this.protocol = props.protocol ?? RequestProtocol.HTTPS;
    this.port = props.port ?? (this.protocol === RequestProtocol.HTTP ? 80 : 443);
    this.protocolVersion = props.protocolVersion ?? (props.protocol !== RequestProtocol.TCP ? RequestProtocolVersion.HTTP1 : undefined);
    this.name = this.physicalName;
    this.targets = props.targets ?? [];
    this.healthCheck = {
      enabled: props.healthCheck?.enabled ?? true,
      healthCheckInterval: props.healthCheck?.healthCheckInterval ?? Duration.seconds(30),
      healthCheckTimeout: props.healthCheck?.healthCheckTimeout ?? Duration.seconds(5),
      path: props.healthCheck?.path ?? '/',
      protocol: props.healthCheck?.protocol ?? HealthCheckProtocol.HTTPS,
      port: props.healthCheck?.port ?? (props.protocol === RequestProtocol.HTTP ? 80 : 443),
      protocolVersion: props.healthCheck?.protocolVersion ?? HealthCheckProtocolVersion.HTTP1,
      unhealthyThresholdCount: props.healthCheck?.unhealthyThresholdCount ?? 2,
      healthyThresholdCount: props.healthCheck?.healthyThresholdCount ?? 5,
      matchers: props.healthCheck?.matchers ?? HttpFixedResponse.OK,
    };

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) {
      this.node.addValidation({ validate: () => this.validateTargetGroupName(this.name) });
    }
    this.node.addValidation({ validate: () => this.validateHealthCheck(this.healthCheck) });

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------

    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: TargetType.IP,
      name: this.name,
      targets: Lazy.any({
        produce: () => this.targets.map(target => ({ id: target.ipAddress.toString(), port: target.port ?? this.port })),
      }),
      config: {
        vpcIdentifier: this.vpc.vpcId,
        ipAddressType: this.ipAddressType,
        protocol: this.protocol,
        port: this.port,
        protocolVersion: this.protocolVersion,
        healthCheck: {
          enabled: this.healthCheck.enabled,
          healthCheckIntervalSeconds: this.healthCheck.healthCheckInterval?.toSeconds(),
          healthCheckTimeoutSeconds: this.healthCheck.healthCheckTimeout?.toSeconds(),
          path: this.healthCheck.path,
          protocol: this.healthCheck.protocol,
          port: this.healthCheck.port,
          protocolVersion: this.healthCheck.protocolVersion,
          unhealthyThresholdCount: this.healthCheck.unhealthyThresholdCount,
          healthyThresholdCount: this.healthCheck.healthyThresholdCount,
          matcher: {
            httpCode: (this.healthCheck.matchers ?? HttpFixedResponse.OK).toString(),
          },
        },
      },
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;
  }

  /**
   * Adds a target to the target Group
   * @param target
   */
  public addTarget(target: IpTargetGroupTargetProps) {
    this.targets.push(target);
  }
}
