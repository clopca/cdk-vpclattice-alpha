import { EOL } from 'node:os';
import { aws_iam as iam, aws_ram as ram, Resource, Aspects, Arn, Stack } from 'aws-cdk-lib';
import type { IResource, RemovalPolicy } from 'aws-cdk-lib';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import type { Construct, IConstruct } from 'constructs';
import { Listener } from './listener';
import type { ListenerConfig } from './listener';
import type { LoggingDestination } from './logging';
import type { IServiceNetwork } from './service-network';
import { ServiceNetworkAssociation } from './service-network-association';
import { AuthType } from './util';

/**
 * Represents a Vpc Lattice Service.
 * Implemented by `Service`.
 */
export interface IService extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the service.
   * @attribute
   */
  readonly serviceArn: string;

  /**
   * The Id of the service.
   * @attribute
   */
  readonly serviceId: string;

  /**
   * Associate the service with a Service Network.
   */
  associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void;
}

export interface ShareServiceProps {
  /**
   * The name of the share.
   */
  readonly name: string;

  /**
   * Whether external principals are allowed.
   * @default false;
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
 * Properties for defining a VPC Lattice Service
 */
export interface ServiceProps {
  /**
   * The name to assign to the service.
   *
   * Note: It must be unique within your AWS account and this name will become part of
   * the service DNS and can't be changed after the VPC Lattice service is created.
   * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html
   * @default - a CloudFormation generated name
   */
  readonly name?: string;

  /**
   * Determine what happens to the service when the resource/stack is deleted.
   *
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: RemovalPolicy;

  /**
   * The authType of the Service
   * @default AuthType.NONE
   */
  readonly authType?: AuthType;

  /**
   * A certificate that may be used by the service
   * @default no custom certificate is used
   */
  readonly certificateArn?: string;

  /**
   * A registered custom domain name for your service. Requests to the custom
   * domain are resolved by the DNS server to the VPC Lattice generated domain name.
   * @default - Your service will be reachable only by the domain name that VPC Lattice generates
   * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-custom-domain-name.html
   */
  readonly customDomainName?: string;

  /**
   * A custom DNS entry
   * @default no custom DNS entry is used
   */
  readonly dnsEntry?: generated.CfnService.DnsEntryProperty;

  /**
   * ServiceNetwork to associate with.
   * @default will not associate with any serviceNetwork.
   */
  readonly serviceNetwork?: IServiceNetwork;

  /**
   * Where to send access logs. Access log entries represent traffic
   * originated from VPCs associated with that network.
   * @default - No logging
   */
  readonly loggingDestinations?: LoggingDestination[];

  /**
   * Allowed principals to access the service
   * @default - No principals are allowed
   */
  readonly allowedPrincipals?: iam.IPrincipal[];

  /**
   * Additional AuthStatements:
   */
  readonly authStatements?: iam.PolicyStatement[];

  /**
   * Policy to apply to the service
   * @default - No policy is attached. All traffic is denied by default.
   */
  readonly authPolicy?: iam.PolicyDocument;
}

/**
 * Base class for Service. Reused between imported and created services.
 */
abstract class ServiceBase extends Resource implements IService {
  /**
   * @inheritdoc
   */
  public abstract readonly serviceArn: string;

  /**
   * @inheritdoc
   */
  public abstract readonly serviceId: string;

  /**
   * Associate a Lattice Service with a Service Network
   */
  public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void {
    new ServiceNetworkAssociation(this, `ServiceAssociation${serviceNetwork.node.addr}`, {
      service: this,
      serviceNetwork: serviceNetwork,
    });
  }
}

/**
 * Define a VPC Lattice Service.
 *
 * @resource AWS::VpcLattice::Service
 */
export class Service extends ServiceBase {
  // ------------------------------------------------------
  // Imports
  // ------------------------------------------------------
  public static fromServiceArn(scope: Construct, id: string, serviceArn: string): IService {
    class Import extends ServiceBase {
      public readonly serviceArn = serviceArn;
      public readonly serviceId: string;

      constructor() {
        super(scope, id);
        this.node.addValidation({ validate: () => this.validateServiceArn() });
        this.serviceId = this.extractServiceId();
      }

      private extractServiceId(): string {
        try {
          return Arn.extractResourceName(this.serviceArn, 'service');
        } catch (error) {
          return '';
        }
      }

      private validateServiceArn(): string[] {
        const errors: string[] = [];
        const arnPattern = /^arn:aws:vpc-lattice:[a-z0-9-]+:\d{12}:service\/[a-zA-Z0-9-]+$/;
        if (!arnPattern.test(this.serviceArn)) {
          errors.push(`Service ARN should be in the format 'arn:aws:vpc-lattice:<REGION>:<ACCOUNT>:service/<NAME>', got ${this.serviceArn}.`);
        }
        return errors;
      }
    }
    return new Import();
  }
  // -----------
  public static fromServiceId(scope: Construct, id: string, serviceId: string): IService {
    class Import extends ServiceBase {
      public readonly serviceId = serviceId;
      public readonly serviceArn = Arn.format(
        {
          service: 'vpc-lattice',
          resource: 'service',
          resourceName: serviceId,
        },
        Stack.of(scope),
      );

      constructor() {
        super(scope, id);
        this.node.addValidation({ validate: () => this.validateServiceId() });
      }

      private validateServiceId(): string[] {
        const errors: string[] = [];
        const idPattern = /^svc-(?!svc-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]{3,40}$/;
        if (!idPattern.test(this.serviceId)) {
          errors.push(
            `Service ID should be in the format 'svc-<NAME>', where <NAME> is 3-40 characters long, starts and ends with a letter or number, cannot start with "svc-", and can contain lowercase letters, numbers, and hyphens (no consecutive hyphens). Got ${this.serviceId}.`,
          );
        }
        return errors;
      }
    }
    return new Import();
  }

  // -----------
  public readonly serviceArn: string;
  public readonly serviceId: string;
  // variables specific to the non-imported Service
  /**
   * The name of the service
   */
  public readonly serviceName: string;
  /**
   * The auth type of the service
   * @default AuthType.NONE
   */
  public readonly authType: AuthType;
  /**
   * Allowed principals to invoke the service
   */
  public readonly allowedPrincipals: iam.IPrincipal[];
  /**
   * Logging destinations of the service
   */
  public readonly loggingDestinations: LoggingDestination[];
  /**
   * Auth policy to be added to the service
   */
  public readonly authPolicy: iam.PolicyDocument;
  private readonly _resource: generated.CfnService;

  // ------------------------------------------------------
  // Construct
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id, { physicalName: props.name });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.serviceName = this.physicalName;
    this.allowedPrincipals = props.allowedPrincipals ?? [];
    this.loggingDestinations = props.loggingDestinations ?? [];
    this.authPolicy = props.authPolicy ?? new iam.PolicyDocument();

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) {
      const name = props.name;
      this.node.addValidation({ validate: () => this.validateServiceName(name) });
    }
    this.authType = props.authType ?? AuthType.NONE;

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    this._resource = new generated.CfnService(this, 'Resource', {
      authType: this.authType,
      certificateArn: props.certificateArn,
      customDomainName: props.customDomainName,
      dnsEntry: props.dnsEntry,
      name: this.physicalName,
    });

    // ------------------------------------------------------
    // Construct properties
    // ------------------------------------------------------
    // Apply the specified removal policy (what happens on delete)
    this._resource.applyRemovalPolicy(props.removalPolicy);
    this.serviceArn = this._resource.attrArn;
    this.serviceId = this._resource.attrId;

    // ------------------------------------------------------
    // Service Network Association
    // ------------------------------------------------------
    if (props.serviceNetwork) {
      this.associateWithServiceNetwork(props.serviceNetwork);
    }

    // ------------------------------------------------------
    // Logging Configuration
    // ------------------------------------------------------
    if (this.loggingDestinations.length) {
      this.node.addValidation({ validate: () => this.validateLoggingDestinations(this.loggingDestinations) });
      for (const destination of this.loggingDestinations) {
        this.addLoggingDestination(destination);
      }
      for (const destination of this.loggingDestinations) {
        this.addLoggingDestination(destination);
      }
    }

    // ------------------------------------------------------
    // Auth Policy
    // ------------------------------------------------------
    if (this.allowedPrincipals.length) {
      this.grantAccess(this.allowedPrincipals);
    }

    if (props.authStatements) {
      for (const propStatement of props.authStatements) {
        this.authPolicy.addStatements(propStatement);
      }
    }

    if (!this.authPolicy.isEmpty) {
      this.node.addValidation({ validate: () => this.validateAuthPolicy(this.authPolicy) });
    }

    Aspects.of(this).add({
      visit: (node: IConstruct) => {
        if (node === this && !this.authPolicy.isEmpty) {
          new generated.CfnAuthPolicy(this, 'ServiceAuthPolicy', {
            policy: this.authPolicy.toJSON(),
            resourceIdentifier: this.serviceId,
          });
        }
      },
    });
  }

  // ------------------------------------------------------
  // Validation Methods
  // ------------------------------------------------------
  /**
   * Must be between 3-40 characters. Lowercase letters, numbers, and hyphens are accepted.
   * Must begin and end with a letter or number. No consecutive hyphens.
   */
  protected validateServiceName(name: string): string[] {
    const errors: string[] = [];

    // Rules codified from https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html
    if (name.length < 3 || name.length > 40) {
      errors.push('Service name must be at least 3 and no more than 40 characters');
    }

    const isPatternMatch = /^(?!svc-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/.test(name);
    if (!isPatternMatch) {
      errors.push(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );
    }

    if (errors.length > 0) {
      errors.unshift(`Invalid service name (value: ${name})`);
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
        errors.push('A service can only have one logging destination per destination type.');
      }
    }
    return errors;
  }

  /**
   * Must ensure Service has the correct AuthType and policy is a
   * valid IAM Resource-based Policy for VPC Lattice
   */
  protected validateAuthPolicy(authPolicy: iam.PolicyDocument): string[] {
    const errors: string[] = [];

    const policyJson = authPolicy.toJSON();
    for (const statement of policyJson.Statement) {
      // Check for valid VPC Lattice actions
      const validActions = ['vpc-lattice-svcs:Invoke'];
      if (!this.validateActions(statement.Action, validActions)) {
        errors.push(`Invalid action detected. Allowed actions for VPC Lattice are: ${validActions.join(', ')} or '*'.`);
      }

      // Check for valid principal types
      if (statement.Principal && typeof statement.Principal === 'object') {
        const validPrincipalTypes = ['AWS', 'Service'];
        for (const key of Object.keys(statement.Principal)) {
          if (!validPrincipalTypes.includes(key)) {
            errors.push(`Invalid principal type: ${key}. Allowed types are: ${validPrincipalTypes.join(', ')}.`);
          }
        }
      }

      // Check for valid resource format
      if (!this.validateResources(statement.Resource)) {
        errors.push('Invalid resource format. Resources should be "*" or start with "arn:aws:vpc-lattice:".');
      }
    }

    if (errors.length > 0) {
      errors.unshift(`The following errors were found in the VPC Lattice auth policy:${EOL}${JSON.stringify(policyJson, null, 2)}`);
    }
    return errors;
  }

  private validateActions(action: string | string[], validActions: string[]): boolean {
    if (typeof action === 'string') {
      return action === '*' || validActions.includes(action);
    }
    if (Array.isArray(action)) {
      return action.every(a => a === '*' || validActions.includes(a));
    }
    return false;
  }

  private validateResources(resource: string | string[]): boolean {
    const isValidResource = (r: string) => r === '*' || r.startsWith('arn:aws:vpc-lattice:');
    if (typeof resource === 'string') {
      return isValidResource(resource);
    }
    if (Array.isArray(resource)) {
      return resource.every(isValidResource);
    }
    return false;
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
    this.node.addValidation({ validate: () => this.validateAuthPolicy(this.authPolicy) });
  }

  /**
   * Add a statement to the auth policy
   * @param statement - The Policy Statement to add
   */
  public addAuthPolicyStatement(statement: iam.PolicyStatement): void {
    this.authPolicy.addStatements(statement);
    this.node.addValidation({ validate: () => this.validateAuthPolicy(this.authPolicy) });
  }

  /**
   * Send logs to a destination
   */
  private addLoggingDestination(destination: LoggingDestination): void {
    new generated.CfnAccessLogSubscription(this, `AccessLogSubscription${destination.addr}`, {
      destinationArn: destination.arn,
      resourceIdentifier: this.serviceArn,
    });
  }

  /**
   * Add Listener
   */
  public addListener(config: ListenerConfig): Listener {
    return new Listener(this, `Listener${config.name}`, {
      service: this,
      config,
    });
  }

  /**
   * Amazon VPC Lattice integrates with AWS Resource Access Manager (AWS RAM) to enable
   * resource sharing across AWS accounts or through AWS Organizations.
   */
  public shareResource(props: ShareServiceProps): void {
    new ram.CfnResourceShare(this, 'ServiceShare', {
      name: props.name,
      resourceArns: [this.serviceArn],
      allowExternalPrincipals: props.allowExternalPrincipals,
      principals: props.principals,
    });
  }
}
