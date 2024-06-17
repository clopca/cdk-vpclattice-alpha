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
   * Allows for Unauthenticated (Anonymous) Access to the Service Network.
   * Anonymous principals are callers that don't sign their AWS requests
   * with Signature Version 4 (SigV4), and are within a VPC that is connected
   * to the service network.
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
  addService(service: IService): void;

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
   * @default - a security group that allows inbound 443 will be permitted.
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
 * Properties for defining a VPC Lattice Service Network
 */
export interface ServiceNetworkProps {
  /**
   * The name of the Service Network.
   * If not provided CloudFormation will provide a name
   * @default - CloudFormation generated name
   */
  readonly name?: string;

  /**
   * The type of  authentication to use with the Service Network
   * @default 'NONE'
   */
  readonly authType?: AuthType;

  /**
   * Where to send access logs. Access log entries represent traffic
   * originated from VPCs associated with that network.
   * @default - No logging
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
  public addService(service: IService): void {
    new ServiceAssociation(this, `ServiceAssociation${service.node.addr}`, {
      service: service,
      serviceNetworkId: this.serviceNetworkId,
    });
  }
  /**
   * Apply the AuthPolicy to the Service Network
   */
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
  // variables specific to the non-imported Service Network
  public readonly name: string;
  public authType: AuthType;
  private readonly _resource: generated.CfnServiceNetwork;
  public readonly authPolicy: iam.PolicyDocument;

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

    this.authType = props.authType ?? AuthType.NONE;

    // Throw an error if authType and access mode are set
    if (props.accessmode && this.authType === AuthType.NONE) {
      throw new Error('AccessMode can not be set if AuthType is not set to AWS_IAM');
    }

    const resource = new generated.CfnServiceNetwork(this, 'Resource', {
      name: this.physicalName,
      authType: this.authType,
    });
    this._resource = resource;

    this.serviceNetworkArn = this._resource.attrArn;
    this.serviceNetworkId = this._resource.attrId;
    this.name = this.physicalName;
    this.authPolicy = new iam.PolicyDocument();

    // Define logging destinations
    if (props.loggingDestinations !== undefined) {
      props.loggingDestinations.forEach(destination => {
        this.addloggingDestination({
          destination: destination,
        });
      });
    }

    // Associate VPCs
    if (props.vpcs) {
      props.vpcs.forEach(vpc => {
        this.associateVPC({ vpc: vpc });
      });
    }

    // Associate Services
    if (props.services) {
      props.services.forEach(service => {
        this.addService(service);
      });
    }

    // Create a Policy for the Service Network
    // Start with the default policy allowing unauthenticated access
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

  // ------------------------------------------------------
  // Methods
  // ------------------------------------------------------

  /**
   * Add a Policy Statement to the Auth Policy
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
      throw new Error(`The following errors were found in the policy: \n${this.authPolicy.validateForResourcePolicy()} \n ${this.authPolicy}`);
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
   * @default - a security group that will permit inbound 443
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
 * Creates an Association Between a Lattice Service and a Service Network.
 * Consider using `.addService` of the ServiceNetwork construct
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
