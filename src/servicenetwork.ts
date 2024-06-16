import { aws_vpclattice, aws_iam as iam, aws_ec2 as ec2, aws_ram as ram, custom_resources as cr } from 'aws-cdk-lib';
import * as core from 'aws-cdk-lib';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { Construct } from 'constructs';
import { IService, AuthType, LoggingDestination } from './index';

/**
 * AccesModes for the Service Network.
 */
export enum ServiceNetworkAccessMode {
  /**
   * Unauthenticated Access to the Service Network.
   */
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  /**
   * Authenticated Access to the Service Network.
   */
  AUTHENTICATED_ONLY = 'AUTHENTICATED',
  /**
   * Only principals from this Org can access the Service Network.
   */
  ORG_ONLY = 'ORG_ONLY',
}

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
   */
  readonly serviceNetworkId: string;
  /**
   * Add Lattice Service to the Service Network
   */
  addService(props: AddServiceProps): void;
  /**
   * Associate a VPC with the Service Network
   * This provides an opinionated default of adding a security group to allow inbound 443
   */
  associateVPC(props: AssociateVPCProps): void;
}

/**
 * Properties to share a Service Network
 */
export interface ShareServiceNetworkProps {
  /**
   * The name of the share.
   */
  readonly name: string;
  /**
   * Whether external principals are allowed.
   * @default false;
   */
  readonly allowExternalPrincipals?: boolean;
  /**
   * Principals to share the Service Network with
   * @default none
   */
  readonly accounts: string[];
  /**
   * disable discovery
   * @default false
   */
  readonly disableDiscovery?: boolean;
  /**
   * The access mode for the Service Network
   * @default 'UNAUTHENTICATED'
   */
  readonly accessMode?: ServiceNetworkAccessMode;
  /**
   * The description of the Service Network
   * @default none
   */
  readonly description?: string;
  /**
   * The tags to apply to the Service Network
   * @default none
   */
  readonly tags?: { [key: string]: string };
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
   * @default a security group that allows inbound 443 will be permitted.
   */
  readonly securityGroups?: ec2.SecurityGroup[];
}
/**
 * Properties to add a logging Destination
 */

export interface AddloggingDestinationProps {
  /**
   * The logging destination
   */
  readonly destination: LoggingDestination;
}

/**
 * Properties to add a Service to the Service Network
 */
export interface AddServiceProps {
  /**
   * The Service to add to the Service Network
   */
  readonly service: IService;
  /**
   * The Service Network to add the Service to
   */
  readonly serviceNetworkId: string;
}

/**
 * Properties for defining a VPC Lattice Service Network
 */
export interface ServiceNetworkProps {
  /**
   * The name of the Service Network.
   * If not provided Cloudformation will provide a name
   * @default cloudformation generated name
   */
  readonly name?: string;

  /**
   * The type of  authentication to use with the Service Network
   * @default 'NONE'
   */
  readonly authType?: AuthType;

  /**
   * Logging destinations
   * @default: no logging
   */
  readonly loggingDestinations?: LoggingDestination[];

  /**
   * Lattice Services that are assocaited with this Service Network
   * @default no services are associated with the service network
   */
  readonly services?: IService[];

  /**
   * Vpcs that are associated with this Service Network
   * @default no vpcs are associated
   */
  readonly vpcs?: ec2.IVpc[];
  /**
   * Allow external principals
   * @default false
   */
  readonly accessmode?: ServiceNetworkAccessMode;
  /**
   * Additional AuthStatments:
   */
  readonly authStatements?: iam.PolicyStatement[];
}

/**
 * Base class for Service Network. Reused between imported and created service networks.
 */
abstract class ServiceNetworkBase extends core.Resource implements IServiceNetwork {
  public abstract readonly serviceNetworkArn: string;
  public abstract readonly serviceNetworkId: string;

  /**
   * Add A lattice service to the Service Network
   */
  public addService(props: AddServiceProps): void {
    new ServiceAssociation(this, `ServiceAssociation${props.service.node.addr}`, {
      service: props.service,
      serviceNetworkId: this.serviceNetworkId,
    });
  }

  public associateVPC(props: AssociateVPCProps): void {
    new AssociateVpc(this, `AssociateVPC${props.vpc.node.addr}`, {
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
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-63 characters. Lowercase letters, numbers, and hyphens are accepted.
   * Must begin and end with a letter or number. No consecutive hyphens.
   */
  public static validateServiceNetworkName(name: string) {
    const pattern = /^(?!servicenetwork-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 63 && pattern.test(name);
    if (!validationSucceeded) {
      throw new Error(`Invalid Service Network Name: ${name} (must be between 3-63 characters, and must be a valid name)`);
    }
  }

  // ------------------------------------------------------
  // Imports
  // ------------------------------------------------------

  /**
   * Import a Service Network by Arn
   */
  public static fromArn(scope: Construct, id: string, arn: string): IServiceNetwork {
    class Import extends ServiceNetworkBase {
      public readonly serviceNetworkArn = arn;
      public readonly serviceNetworkId = core.Arn.extractResourceName(arn, 'servicenetwork');
    }
    return new Import(scope, id);
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
        core.Stack.of(this),
      );
    }
    return new Import(scope, id);
  }
  // -----------

  public readonly serviceNetworkArn: string;
  public readonly serviceNetworkId: string;
  public authType: AuthType;
  private readonly _resource: generated.CfnServiceNetwork;
  /**
   * Name of the ServiceNetwork
   */
  public readonly name: string;
  /**
   * A managed Policy that is the auth policy
   */
  public authPolicy: iam.PolicyDocument;
  // ------------------------------------------------------
  // Construct
  // ------------------------------------------------------

  constructor(scope: Construct, id: string, props: ServiceNetworkProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    if (props.name) {
      ServiceNetwork.validateServiceNetworkName(props.name);
    }

    this.authType = props.authType ?? AuthType.AWS_IAM;

    // Throw an error if authType and access mode are set
    if (props.accessmode && props.authType === AuthType.NONE) {
      throw new Error('AccessMode can not be set if AuthType is NONE');
    }

    const resource = new generated.CfnServiceNetwork(this, 'Resource', {
      name: this.physicalName,
      authType: this.authType,
    });
    this._resource = resource;

    this.name = this.physicalName;
    this.serviceNetworkId = this._resource.attrId;
    this.serviceNetworkArn = this._resource.attrArn;

    if (props.loggingDestinations !== undefined) {
      props.loggingDestinations.forEach(destination => {
        this.addloggingDestination({
          destination: destination,
        });
      });
    }

    // associate vpcs
    if (props.vpcs) {
      props.vpcs.forEach(vpc => {
        this.associateVPC({ vpc: vpc });
      });
    }

    //associate services
    if (props.services) {
      props.services.forEach(service => {
        this.addService({
          service: service,
          serviceNetworkId: this.serviceNetworkId,
        });
      });
    }

    // create a managedPolicy for the lattice ServiceNetwork.
    this.authPolicy = new iam.PolicyDocument();

    const statement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['vpc-lattice-svcs:Invoke'],
      resources: ['*'],
      principals: [new iam.StarPrincipal()],
    });

    if (props.accessmode === ServiceNetworkAccessMode.ORG_ONLY) {
      const orgIdCr = new cr.AwsCustomResource(this, 'getOrgId', {
        onCreate: {
          region: 'us-east-1',
          service: 'Organizations',
          action: 'describeOrganization',
          physicalResourceId: cr.PhysicalResourceId.of('orgId'),
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });

      const orgId = orgIdCr.getResponseField('Organization.Id');

      // add the condition that requires that the principal is from this org
      statement.addCondition('StringEquals', { 'aws:PrincipalOrgID': [orgId] });
      statement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'Anonymous' });
    } else if (props.accessmode === ServiceNetworkAccessMode.AUTHENTICATED_ONLY) {
      // add the condition that requires that the principal is authenticated
      statement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'Anonymous' });
    }

    this.authPolicy.addStatements(statement);

    if (props.authStatements) {
      props.authStatements.forEach(propstatement => {
        this.authPolicy.addStatements(propstatement);
      });
      this.applyAuthPolicyToServiceNetwork();
    }
  }

  /**
   * This will give the principals access to all resources that are on this
   * service network. This is a broad permission.
   * Consider granting Access at the Service
   * addToResourcePolicy()
   *
   */
  public addStatementToAuthPolicy(statement: iam.PolicyStatement): void {
    this.authPolicy.addStatements(statement);
  }

  /**
   * Apply the AuthPolicy to a Service Network
   */
  public applyAuthPolicyToServiceNetwork(): void {
    // check to see if there are any errors with the auth policy
    if (this.authPolicy.validateForResourcePolicy().length > 0) {
      throw new Error(`Auth Policy for granting access on  Service Network is invalid\n, ${this.authPolicy}`);
    }
    // check to see if the AuthType is AWS_IAM
    if (this.authType !== AuthType.AWS_IAM) {
      throw new Error(`AuthType must be ${AuthType.AWS_IAM} to add an Auth Policy`);
    }

    // attach the AuthPolicy to the Service Network
    new aws_vpclattice.CfnAuthPolicy(this, 'AuthPolicy', {
      policy: this.authPolicy.toJSON(),
      resourceIdentifier: this.serviceNetworkArn,
    });
  }

  /**
   * Send logs to a destination
   */
  public addloggingDestination(props: AddloggingDestinationProps): void {
    new aws_vpclattice.CfnAccessLogSubscription(this, `AccessLogSubscription${props.destination.addr}`, {
      destinationArn: props.destination.arn,
      resourceIdentifier: this.serviceNetworkId,
    });
  }

  /**
   * Share the The Service network using RAM
   */
  public share(props: ShareServiceNetworkProps): void {
    new ram.CfnResourceShare(this, 'ServiceNetworkShare', {
      name: props.name,
      resourceArns: [this.serviceNetworkArn],
      allowExternalPrincipals: props.allowExternalPrincipals,
      principals: props.accounts,
    });
  }
}

/**
 * Props to Associate a VPC with a Service Network
 */
export interface AssociateVpcProps {
  /**
   * security groups for the lattice endpoint
   * @default a security group that will permit inbound 443
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
 * Associate a VPO with Lattice Service Network
 */
export class AssociateVpc extends core.Resource {
  constructor(scope: Construct, id: string, props: AssociateVpcProps) {
    super(scope, id);

    const securityGroupIds: string[] = [];

    if (props.securityGroups === undefined) {
      const securityGroup = new ec2.SecurityGroup(this, `ServiceNetworkSecurityGroup${this.node.addr}`, {
        vpc: props.vpc,
        allowAllOutbound: true,
        description: 'ServiceNetworkSecurityGroup',
      });

      securityGroup.addIngressRule(ec2.Peer.ipv4(props.vpc.vpcCidrBlock), ec2.Port.tcp(443));
      securityGroupIds.push(securityGroup.securityGroupId);
    }

    new aws_vpclattice.CfnServiceNetworkVpcAssociation(this, `VpcAssociation${this.node.addr}`, {
      securityGroupIds: securityGroupIds,
      serviceNetworkIdentifier: props.serviceNetworkId,
      vpcIdentifier: props.vpc.vpcId,
    });
  }
}

/**
 * Props for Service Assocaition
 */
export interface ServiceAssociationProps {
  /**
   * lattice Service
   */
  readonly service: IService;
  /**
   * Lattice ServiceId
   */
  readonly serviceNetworkId: string;
}

/**
 * Creates an Association Between a Lattice Service and a Service Network
 */
export class ServiceAssociation extends core.Resource {
  constructor(scope: Construct, id: string, props: ServiceAssociationProps) {
    super(scope, id);

    new aws_vpclattice.CfnServiceNetworkServiceAssociation(this, `LatticeService${this.node.addr}`, {
      serviceIdentifier: props.service.serviceId,
      serviceNetworkIdentifier: props.serviceNetworkId,
    });
  }
}
