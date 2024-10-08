import { Duration, Lazy, aws_vpclattice } from 'aws-cdk-lib';
import type { IAutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import type { IInstance, IVpc } from 'aws-cdk-lib/aws-ec2';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import type { Construct } from 'constructs';
import { RequestProtocol, RequestProtocolVersion, TargetGroupBase, TargetType } from './base-target-group';
import { HealthCheckProtocolVersion, HealthCheckProtocol } from './health-check';
import type { HealthCheck } from './health-check';
import { HttpFixedResponse } from '../util';

export interface InstanceTarget {
  /**
   * The EC2 Instance
   */
  readonly instance: IInstance;

  /**
   * The port on which the target is listening
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;
}

export interface InstanceTargetGroupProps {
  /**
   * The name of the target group
   * @default - Automatically generated name
   */
  readonly name?: string;

  /**
   * The VPC where the target instances reside
   */
  readonly vpc: IVpc;

  /**
   * The targets to associate with the target group
   */
  readonly instances?: InstanceTarget[];

  /**
   * The ASGs to associate with the target group
   */
  readonly autoScalingGroups?: IAutoScalingGroup[];

  /**
   * The protocol to use for routing traffic to the targets.
   * Can't be changed after creation.
   * @default Protocol.HTTPS
   */
  readonly protocol?: RequestProtocol;

  /**
   * Choose the protocol version for requests to be sent to targets.
   * The protocol version you choose must support the request protocols
   * from clients.
   * @default - Protocol.HTTP1 if HTTP or HTTPS is selected
   */
  readonly protocolVersion?: RequestProtocolVersion;

  /**
   *
   * @default - Defaults to port 80 for HTTP, or 443 for HTTPS
   */
  readonly port?: number;

  /**
   * Healthcheck
   */
  readonly healthCheck?: HealthCheck;
}

/**
 * Supports creating a Target group with instances within a specific VPC
 */
export class InstanceTargetGroup extends TargetGroupBase {
  public readonly name: string;
  public readonly targetType = TargetType.INSTANCE;
  public readonly protocol: RequestProtocol;
  public readonly protocolVersion?: RequestProtocolVersion;
  public readonly targetGroupArn: string;
  public readonly targetGroupId: string;
  public readonly port: number;
  public readonly vpc: IVpc;
  public readonly healthCheck: HealthCheck;
  public readonly instances: InstanceTarget[];
  public readonly autoScalingGroups: IAutoScalingGroup[];
  private readonly _resource: aws_vpclattice.CfnTargetGroup;

  constructor(scope: Construct, id: string, props: InstanceTargetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.vpc = props.vpc;
    this.name = this.physicalName;
    this.protocol = props.protocol ?? RequestProtocol.HTTPS;
    this.protocolVersion = props.protocolVersion ?? (props.protocol !== RequestProtocol.TCP ? RequestProtocolVersion.HTTP1 : undefined);
    this.port = props.port ?? (props.protocol === RequestProtocol.HTTP ? 80 : 443);
    this.instances = props.instances ?? [];
    this.autoScalingGroups = props.autoScalingGroups ?? [];
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
    this.node.addValidation({ validate: () => this.validateProtocol(this.protocol, this.targetType) });
    this.node.addValidation({ validate: () => this.validateProtocolVersion(this.protocol, this.protocolVersion) });
    this.node.addValidation({ validate: () => this.validateHealthCheck(this.healthCheck) });

    // ------------------------------------------------------
    // L1 Properties
    // ------------------------------------------------------
    const config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty = {
      vpcIdentifier: this.vpc.vpcId,
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
    };

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    this._resource = new aws_vpclattice.CfnTargetGroup(this, 'Resource', {
      type: this.targetType,
      name: this.name,
      // Lazy basically processes this line at synthesis time, making additions after instantiation possible
      targets: Lazy.any({
        produce: () => this.instances.map(target => ({ id: target.instance.instanceId, port: target.port ?? this.port })),
      }),
      config,
    });

    this.targetGroupId = this._resource.attrId;
    this.targetGroupArn = this._resource.attrArn;

    // ------------------------------------------------------
    // ASG Associations
    // ------------------------------------------------------
    if (this.autoScalingGroups.length > 0) {
      for (const asg of this.autoScalingGroups) {
        new AwsCustomResource(this, `AsgLatticeAssociation${asg.node.addr}`, {
          installLatestAwsSdk: true,
          onCreate: {
            service: 'AutoScaling',
            action: 'attachTrafficSources',
            parameters: {
              AutoScalingGroupName: asg.autoScalingGroupName,
              TrafficSources: [
                {
                  Identifier: this.targetGroupArn,
                },
              ],
            },
            physicalResourceId: PhysicalResourceId.of(`${this.targetGroupId}-${asg.autoScalingGroupName}`),
          },
          onDelete: {
            service: 'AutoScaling',
            action: 'detachTrafficSources',
            parameters: {
              AutoScalingGroupName: asg.autoScalingGroupName,
              TrafficSources: [
                {
                  Identifier: this.targetGroupArn,
                },
              ],
            },
          },
          policy: AwsCustomResourcePolicy.fromStatements([
            new PolicyStatement({
              actions: ['autoscaling:AttachTrafficSources', 'autoscaling:DetachTrafficSources'],
              resources: [asg.autoScalingGroupArn],
            }),
            new PolicyStatement({
              actions: ['vpc-lattice:RegisterTargets', 'vpc-lattice:DeregisterTargets'],
              resources: [this.targetGroupArn],
            }),
            new PolicyStatement({
              actions: ['iam:PassRole', 'ec2:DescribeInstances'],
              resources: ['*'],
            }),
          ]),
        });
      }
    }
  }

  /**
   * Adds a target to the target Group
   * @param target
   */
  public addTarget(target: InstanceTarget) {
    this.instances.push(target);
  }
}
