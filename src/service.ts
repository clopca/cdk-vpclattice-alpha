import * as core from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { Construct } from 'constructs';
import { AuthType } from './listener';
import { LoggingDestination } from './logging';
import { IServiceNetwork } from './service-network';
import { ServiceNetworkAssociation } from './service-network-association';

/**
 * Represents a Vpc Lattice Service.
 * Implemented by `Service`.
 */
export interface IService extends core.IResource {
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
   * Determine what happens to the repository when the resource/stack is deleted.
   *
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: core.RemovalPolicy;

  /**
   * The authType of the Service
   * @default AuthType.NONE
   */
  readonly authType?: AuthType;

  /**
   * Listeners that will be attached to the service
   * @default no listeners
   */
  // readonly listeners?: IListener[];

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
   * @default will not assocaite with any serviceNetwork.
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
   * Policy to apply to the service
   * @default - No policy is applied
   */
  readonly authPolicy?: iam.PolicyDocument;
}

/**
 * Base class for Service. Reused between imported and created services.
 */
abstract class ServiceBase extends core.Resource implements IService {
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
  public static fromServiceArn(scope: Construct, id: string, arn: string): IService {
    class Import extends ServiceBase {
      public readonly serviceArn = arn;
      public readonly serviceId = core.Arn.extractResourceName(arn, 'service');
    }
    return new Import(scope, id);
  }
  // -----------
  public static fromServiceId(scope: Construct, id: string, serviceId: string): IService {
    class Import extends ServiceBase {
      public readonly serviceId = serviceId;
      public readonly serviceArn = core.Arn.format(
        {
          service: 'vpc-lattice',
          resource: 'service',
          resourceName: serviceId,
        },
        core.Stack.of(this),
      );
    }
    return new Import(scope, id);
  }

  // ------------------------------------------------------
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-40 characters. Lowercase letters, numbers, and hyphens are accepted.
   * Must begin and end with a letter or number. No consecutive hyphens.
   */
  protected static validateServiceName(name: string) {
    const pattern = /^(?!svc-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 40 && pattern.test(name);
    if (!validationSucceeded) {
      throw new Error(`Invalid Service Name: ${name} (must be between 3-40 characters, and must be a valid DNS name)`);
    }
  }

  /**
   * Must specify at most only one destination per destination type
   */
  protected static validateLoggingDestinations(loggingDestinations: LoggingDestination[]) {
    if (loggingDestinations.length) {
      const destinationTypes = loggingDestinations.map(destination => destination.destinationType);
      if (new Set(destinationTypes).size !== destinationTypes.length) {
        throw new Error('A service can only have one logging destination per destination type.');
      }
    }
  }

  /**
   * Must ensure Service has the correct AuthType and policy is a
   * valid IAM Resource-based Policy
   */
  protected static validateAuthPolicy(authType: AuthType, authPolicy: iam.PolicyDocument) {
    if (authType !== AuthType.AWS_IAM) {
      throw new Error('Cannot apply a policy when authType is not equal to AWS_IAM');
    } else if (authPolicy.validateForResourcePolicy().length > 0) {
      throw new Error(`The following errors were found in the policy: \n${authPolicy.validateForResourcePolicy()} \n ${authPolicy}`);
    }
  }

  // -----------
  public readonly serviceArn: string;
  public readonly serviceId: string;
  // variables specific to the non-imported Service
  public readonly serviceName: string;
  public authType: AuthType;
  private readonly _resource: generated.CfnService;
  public readonly allowedPrincipals: iam.IPrincipal[];
  public readonly loggingDestinations: LoggingDestination[];
  public readonly authPolicy: iam.PolicyDocument;

  // ------------------------------------------------------
  // Construct
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id, { physicalName: props.name });

    if (props.name) {
      Service.validateServiceName(props.name);
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
    this.serviceName = this.physicalName;
    this.allowedPrincipals = props.allowedPrincipals ?? [];
    this.loggingDestinations = props.loggingDestinations ?? [];
    this.authPolicy = props.authPolicy ?? new iam.PolicyDocument();

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
      Service.validateLoggingDestinations(this.loggingDestinations);
      // Add the logging destination
      this.loggingDestinations.forEach(destination => {
        this.addLoggingDestination(destination);
      });
    }

    // ------------------------------------------------------
    // Auth Policy
    // ------------------------------------------------------
    if (this.allowedPrincipals.length) this.grantAccess(this.allowedPrincipals);

    this.applyAuthPolicyToService();
  }

  // ------------------------------------------------------
  // Methods
  // ------------------------------------------------------

  /**
   * .grantAccess on a lattice service, will permit the principals to
   * access all of the service. Consider using more granual permissions
   * at the rule level.
   *
   * @param principals a list of IAM principals to grant access.
   */
  public grantAccess(principals: iam.IPrincipal[]): void {
    let policyStatement: iam.PolicyStatement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['vpc-lattice-svcs:Invoke'],
      //TODO: check if possible to add the service arn and still have the policy work
      resources: ['*'],
      principals: principals,
    });
    this.authPolicy.addStatements(policyStatement);
  }

  /**
   * Add a statement to the auth policy
   * @param statement - The Policy Statement to add
   */
  public addAuthPolicyStatement(statement: iam.PolicyStatement): void {
    this.authPolicy.addStatements(statement);
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
   * Apply the AuthPolicy to the Service
   */
  private applyAuthPolicyToService() {
    Service.validateAuthPolicy(this.authType, this.authPolicy);

    // Create an AuthPolicy
    new generated.CfnAuthPolicy(this, 'ServiceAuthPolicy', {
      policy: core.Lazy.any({ produce: () => this.authPolicy.toJSON() }),
      resourceIdentifier: this.serviceId,
    });
  }
}
