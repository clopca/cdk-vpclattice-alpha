import type { aws_ec2 as ec2 } from 'aws-cdk-lib';
import { aws_iam as iam, aws_ram as ram } from 'aws-cdk-lib';
import * as core from 'aws-cdk-lib';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import type { Construct, IConstruct } from 'constructs';
import { AuthPolicyDocument, AuthType } from './auth';
import type { LoggingDestination } from './logging';
import type { IService } from './service';
import { ServiceNetworkServiceAssociation } from './service-network-association';

/**
 * Represents a VPC Lattice Service Network.
 * Implemented by `ServiceNetwork`.
 */
export interface IServiceNetwork extends core.IResource {
  /**
   * The Amazon Resource Name (ARN) of the service network.
   * @attribute
   */
  readonly serviceNetworkArn: string;

  /**
   * The Id of the Service Network
   * @attribute
   * @example "sn-0123456789abcdef0"
   */
  readonly serviceNetworkId: string;

  /**
   * Associate a Lattice Service to the Service Network
   */
  associateService(service: IService): void;

  /**
   * Associate a VPC with the Service Network
   */
  associateVPC(props: AssociateVPCProps): void;
}

/**
 * Properties to share a Service Network
 * @see https://docs.aws.amazon.com/ram/latest/userguide/shareable.html#shareable-vpc-lattice
 */
export interface ShareServiceNetworkProps {
  /**
   * The name of the share.
   */
  readonly name: string;

  /**
   * Specifies whether principals outside your organization in AWS Organizations
   * can be associated with a resource share. A value of `true` lets you share
   * with individual AWS accounts that are *not* in your organization. A value
   * of `false` only has meaning if your account is a member of an AWS
   * Organization.
   * @default true;
   */
  readonly allowExternalPrincipals?: boolean;

  //Principals
  /**
   * Principals to share the Service Network with
   * @default none
   */
  readonly principals?: string[];

  /**
   * Resources to share the Service Network with
   * @default none
   */
  readonly resourceArns?: string[];
}

/**
 * Properties to associate a VPC with a Service Network
 */
export interface AssociateVPCProps {
  /**
   * The VPC to associate with the Service Network
   */
  readonly vpc: ec2.IVpc;

  /**
   * The security groups to associate with the Service Network
   * @default - a security group that allows inbound 443 will be permitted.
   */
  readonly securityGroups?: ec2.SecurityGroup[];
}

/**
 * Properties for defining a VPC Lattice Service Network
 */
export interface ServiceNetworkProps {
  /**
   * The name of the Service Network. If not provided,
   * CloudFormation will generate a name.
   * @default - CloudFormation generated name
   */
  readonly name?: string;

  /**
   * The authentication and authorization that manages client access to the network.
   * If `AuthType.AWS_IAM` is selected, and a policy is not attached, all traffic will be denied
   * by default regardless of the identity or service level permissions.
   * @default AuthType.NONE
   */
  readonly authType?: AuthType;

  /**
   * Where to send access logs. Access log entries represent traffic
   * originated from VPCs associated with that network.
   * @default - No logging
   */
  readonly loggingDestinations?: LoggingDestination[];

  /**
   * Lattice Services that are associated with this Service Network
   * @default - no services are associated with the service network
   */
  readonly services?: IService[];

  /**
   * You can associate VPCs to your service network at or after network creation.
   * After association, services within the VPC can make calls to services in the
   * service network. Any VPC owner with access to the service network can associate
   * their VPCs to it.
   * @default - no VPCs are associated
   */
  readonly vpcAssociations?: AssociateVPCProps[];

  // /**
  //  * Allow external principals
  //  * @default ServiceNetworkAccessMode.NO_STATEMENT
  //  */
  // readonly accessMode?: AuthPolicyAccessMode;

  /**
   * Determine what happens to the repository when the resource/stack is deleted.
   *
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: core.RemovalPolicy;

  // /**
  //  * Allowed principals to access the service network
  //  * @default - No principals are allowed
  //  */
  // readonly allowedPrincipals?: iam.IPrincipal[];

  // /**
  //  * Additional AuthStatements:
  //  */
  // readonly authStatements?: iam.PolicyStatement[];

  /**
   * Policy to apply to the service network
   * @default - No policy is applied
   */
  readonly authPolicy?: AuthPolicyDocument;

  // /**
  //  * Organization ID to allow access to the Service Network
  //  * @default - no org id is used
  //  * @example 'o-1234567890'
  //  */
  // readonly orgId?: string;
}

/**
 * Base class for Service Network. Reused between imported and created service networks.
 */
abstract class ServiceNetworkBase extends core.Resource implements IServiceNetwork {
  /**
   * @inheritdoc
   */
  public abstract readonly serviceNetworkArn: string;

  /**
   * @inheritdoc
   */
  public abstract readonly serviceNetworkId: string;

  /**
   * Associate a Lattice Service with a Service Network
   */
  public associateService(service: IService): void {
    new ServiceNetworkServiceAssociation(this, `ServiceAssociation${service.node.addr}`, {
      service: service,
      serviceNetwork: this,
    });
  }
  /**
   * Apply the VPC to the Service Network
   */
  public associateVPC(props: AssociateVPCProps): void {
    new ServiceNetworkVpcAssociation(this, `AssociateVPC${props.vpc.node.addr}`, {
      vpc: props.vpc,
      securityGroups: props.securityGroups,
      serviceNetworkId: this.serviceNetworkId,
    });
  }
}

/**
 * Define a VPC Lattice Service Network.
 *
 * @resource AWS::VpcLattice::ServiceNetwork
 */
export class ServiceNetwork extends ServiceNetworkBase {
  // ------------------------------------------------------
  // Imports
  // ------------------------------------------------------
  /**
   * Import a Service Network by Arn
   */
  public static fromArn(scope: Construct, id: string, arn: string): IServiceNetwork {
    class Import extends ServiceNetworkBase {
      public readonly serviceNetworkArn = arn;
      public readonly serviceNetworkId: string;

      constructor() {
        super(scope, id);
        this.serviceNetworkId = this.extractServiceNetworkId();
        this.node.addValidation({ validate: () => this.validateServiceNetworkArn() });
      }

      private extractServiceNetworkId(): string {
        try {
          return core.Arn.extractResourceName(this.serviceNetworkArn, 'servicenetwork');
        } catch (error) {
          // If extraction fails, return an empty string
          // The validation will catch this and report the error
          return '';
        }
      }

      private validateServiceNetworkArn() {
        const errors: string[] = [];
        const arnPattern = /^arn:aws:vpc-lattice:[a-z0-9-]+:\d{12}:servicenetwork\/[a-zA-Z0-9-]+$/;
        if (!arnPattern.test(arn)) {
          errors.push(`Service network ARN should be in the format 'arn:aws:vpc-lattice:<REGION>:<ACCOUNT>:servicenetwork/<NAME>', got ${arn}.`);
        }
        return errors;
      }
    }
    return new Import();
  }
  // -----------
  /**
   * Import a Service Network by Id
   */
  public static fromId(scope: Construct, id: string, serviceNetworkId: string): IServiceNetwork {
    class Import extends ServiceNetworkBase {
      public readonly serviceNetworkId = serviceNetworkId;
      public readonly serviceNetworkArn = core.Arn.format(
        {
          service: 'vpc-lattice',
          resource: 'servicenetwork',
          resourceName: serviceNetworkId,
        },
        core.Stack.of(scope),
      );

      constructor() {
        super(scope, id);
        this.node.addValidation({ validate: () => this.validateServiceNetworkId() });
      }

      private validateServiceNetworkId() {
        const errors: string[] = [];
        const idPattern = /^servicenetwork-(?!servicenetwork-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]{3,63}$/;
        if (!idPattern.test(serviceNetworkId)) {
          errors.push(
            `Service network ID should be in the format 'servicenetwork-<NAME>', where <NAME> is 3-63 characters long, starts and ends with a letter or number, cannot start with "servicenetwork-", and can contain lowercase letters, numbers, and hyphens (no consecutive hyphens). Got ${serviceNetworkId}.`,
          );
        }
        return errors;
      }
    }
    return new Import();
  }

  // -----------
  public readonly serviceNetworkArn: string;
  public readonly serviceNetworkId: string;
  // variables specific to the non-imported Service Network
  /**
   * The name of the service network
   */
  public readonly name: string;
  /**
   * The auth type of the service network
   * @default AuthType.NONE
   */
  public readonly authType: AuthType;
  // /**
  //  * Allowed principals to invoke services in the service network
  //  */
  // public readonly allowedPrincipals: iam.IPrincipal[];
  // /**
  //  * Access mode to the service network,
  //  * Authenticated, unauthenticated or only to org principals
  //  */
  // public readonly accessMode?: AuthPolicyAccessMode;
  /**
   * Logging destinations of the service network
   */
  public readonly loggingDestinations: LoggingDestination[];
  /**
   * Auth policy to be added to the service network
   */
  public readonly authPolicy: AuthPolicyDocument;
  private readonly _resource: generated.CfnServiceNetwork;

  // ------------------------------------------------------
  // Construct
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: ServiceNetworkProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.name = this.physicalName;
    // this.allowedPrincipals = props.allowedPrincipals ?? [];
    this.loggingDestinations = props.loggingDestinations ?? [];
    this.authPolicy = props.authPolicy ?? new AuthPolicyDocument();
    this.authType = props.authType ?? AuthType.NONE;
    // this.accessMode = props.accessMode;

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) {
      const name = props.name;
      this.node.addValidation({ validate: () => this.validateServiceNetworkName(name) });
    }

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    this._resource = new generated.CfnServiceNetwork(this, 'Resource', {
      name: this.physicalName,
      authType: this.authType,
    });

    // ------------------------------------------------------
    // Construct properties
    // ------------------------------------------------------
    // Apply the specified removal policy (what happens on delete)
    this._resource.applyRemovalPolicy(props.removalPolicy);
    this.serviceNetworkArn = this._resource.attrArn;
    this.serviceNetworkId = this._resource.attrId;

    // ------------------------------------------------------
    // VPC & Service Association
    // ------------------------------------------------------
    if (props.vpcAssociations) {
      for (const vpcProps of props.vpcAssociations) {
        this.associateVPC({ ...vpcProps });
      }
    }

    if (props.services) {
      for (const service of props.services) {
        this.associateService(service);
      }
    }

    // ------------------------------------------------------
    // Logging Configuration
    // ------------------------------------------------------
    if (this.loggingDestinations.length) {
      this.node.addValidation({ validate: () => this.validateLoggingDestinations(this.loggingDestinations) });
      for (const destination of this.loggingDestinations) {
        this.addLoggingDestination(destination);
      }
    }

    // ------------------------------------------------------
    // Auth Policy
    // ------------------------------------------------------
    this.node.addValidation({ validate: () => this.authPolicy.validateAuthPolicy() });
    core.Aspects.of(this).add({
      visit: (node: IConstruct) => {
        if (node === this && !this.authPolicy.isEmpty) {
          new generated.CfnAuthPolicy(this, 'ServiceNetworkAuthPolicy', {
            policy: this.authPolicy.toJSON(),
            resourceIdentifier: this.serviceNetworkArn,
          });
        }
      },
    });
  }

  // ------------------------------------------------------
  // Validation Methods
  // ------------------------------------------------------
  /**
   * Must be between 3-63 characters. Lowercase letters, numbers, and hyphens are accepted.
   * Must begin and end with a letter or number. No consecutive hyphens.
   */
  protected validateServiceNetworkName(name: string): string[] {
    const errors: string[] = [];

    if (name.length < 3 || name.length > 63) {
      errors.push('Service network name must be at least 3 and no more than 63 characters');
    }

    const isPatternMatch = /^(?!servicenetwork-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/.test(name);
    if (!isPatternMatch) {
      errors.push(
        'Service network name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "servicenetwork-".',
      );
    }

    if (errors.length > 0) {
      errors.unshift(`Invalid service network name (value: ${name})`);
    }
    return errors;
  }

  /**
   * Must specify at most only one destination per destination type
   */
  protected validateLoggingDestinations(loggingDestinations: LoggingDestination[]): string[] {
    const errors: string[] = [];
    if (loggingDestinations.length) {
      const destinationTypes = loggingDestinations.map(destination => destination.destinationType);
      if (new Set(destinationTypes).size !== destinationTypes.length) {
        errors.push('A service network can only have one logging destination per destination type.');
      }
    }
    return errors;
  }

  // ------------------------------------------------------
  // Methods
  // ------------------------------------------------------

  /**
   * .grantAccess on a lattice service, will permit the principals to
   * access all of the service. Consider using more granular permissions
   * at the rule level.
   *
   * @param principals a list of IAM principals to grant access.
   */
  public grantAccess(principals: iam.IPrincipal[]): void {
    const policyStatement: iam.PolicyStatement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['vpc-lattice-svcs:Invoke'],
      resources: ['*'],
      principals: principals,
    });
    this.authPolicy.addStatements(policyStatement);
    this.node.addValidation({ validate: () => this.authPolicy.validateAuthPolicy() });
  }

  /**
   * Send logs to a destination
   */
  public addLoggingDestination(destination: LoggingDestination): void {
    new generated.CfnAccessLogSubscription(this, `AccessLogSubscription${destination.addr}`, {
      destinationArn: destination.arn,
      resourceIdentifier: this.serviceNetworkId,
    });
  }

  /**
   * Associates a VPC with the service network.
   */

  /**
   * Amazon VPC Lattice integrates with AWS Resource Access Manager (AWS RAM) to enable
   * resource sharing across AWS accounts or through AWS Organizations.
   */
  public shareResource(props: ShareServiceNetworkProps): void {
    new ram.CfnResourceShare(this, 'ServiceNetworkShare', {
      name: props.name,
      resourceArns: [this.serviceNetworkArn],
      allowExternalPrincipals: props.allowExternalPrincipals,
      principals: props.principals,
    });
  }
}

/**
 * Props to Associate a VPC with a Service Network
 */
export interface ServiceNetworkVpcAssociationProps {
  /**
   * Security groups for the lattice endpoint
   */
  readonly securityGroups?: ec2.ISecurityGroup[];

  /**
   * The VPC to associate with
   */
  readonly vpc: ec2.IVpc;

  /**
   * Service Network Identifier
   */
  readonly serviceNetworkId: string;
}

/**
 * Associate a VPC with Lattice Service Network
 */
export class ServiceNetworkVpcAssociation extends core.Resource {
  constructor(scope: Construct, id: string, props: ServiceNetworkVpcAssociationProps) {
    super(scope, id);

    new generated.CfnServiceNetworkVpcAssociation(this, `VpcAssociation-${props.vpc.node.addr}`, {
      securityGroupIds: props.securityGroups?.flatMap(sg => sg.securityGroupId),
      serviceNetworkIdentifier: props.serviceNetworkId,
      vpcIdentifier: props.vpc.vpcId,
    });
  }
}
