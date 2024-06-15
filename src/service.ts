import * as core from 'aws-cdk-lib';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { Construct } from 'constructs';
import { IServiceNetwork, AuthType } from './index';

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
  readonly serviceName?: string;

  /**
   * Determine what happens to the repository when the resource/stack is deleted.
   *
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: core.RemovalPolicy;

  /**
   * The authType of the Service
   * @default AuthType.AWS_IAM
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
   * A customDomainName used by the service
   * @default no custom domain name is used
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
}

/**
 * Properties for associating a VPC with a Service Network
 */
export interface ServiceNetworkAssociationProps {
  /**
   * lattice Service
   */
  readonly serviceNetwork: IServiceNetwork;
  /**
   * Lattice ServiceId
   */
  readonly serviceId: string;
}

/**
 * Base class for Service. Reused between imported and created services.
 */
abstract class ServiceBase extends core.Resource implements IService {
  public abstract readonly serviceArn: string;
  public abstract readonly serviceId: string;
  // public abstract readonly authPolicy?: iam.PolicyDocument;

  public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void {
    new ServiceNetworkAssociation(this, `ServiceNetworkAssociation${serviceNetwork.node.addr}`, {
      serviceNetwork: serviceNetwork,
      serviceId: this.serviceId,
    });
  }

  // public applyAuthPolicy() {
  //   if (this.authType != AuthType.AWS_IAM) {
  //     throw new Error('Cannot apply a policy when authType is not equal to AWS_IAM');
  //   }
  //   else {
  //     //
  //   }
  // }
}

/**
 * Define a VPC Lattice Service.
 *
 * @resource AWS::VpcLattice::Service
 */
export class Service extends ServiceBase {
  // ------------------------------------------------------
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-40 characters. Lowercase letters, numbers, and hyphens are accepted.
   * Must begin and end with a letter or number. No consecutive hyphens.
   */
  public static validateServiceName(name: string) {
    const pattern = /^(?!svc-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 40 && pattern.test(name);
    if (!validationSucceeded) {
      throw new Error(`Invalid Service Name: ${name} (must be between 3-40 characters, and must be a valid DNS name)`);
    }
  }

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
  // -----------

  public readonly serviceArn: string;
  public readonly serviceId: string;
  public readonly serviceName: string;
  public authType: AuthType;
  private readonly _resource: generated.CfnService;

  // ------------------------------------------------------
  // Construct
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id, {
      physicalName: props.serviceName,
    });

    if (props.serviceName) {
      Service.validateServiceName(props.serviceName);
    }

    const resource = new generated.CfnService(this, 'Resource', {
      authType: props.authType ?? AuthType.NONE,
      certificateArn: props.certificateArn,
      customDomainName: props.customDomainName,
      dnsEntry: props.dnsEntry,
      name: this.physicalName,
    });
    this._resource = resource;

    this.serviceArn = this.getResourceArnAttribute(this._resource.attrArn, {
      service: 'vpc-lattice',
      resource: 'service',
      resourceName: this.physicalName,
    });

    this.serviceId = this.getResourceNameAttribute(this._resource.attrId);

    this.serviceName = this.physicalName;

    this.authType = this._resource.authType as AuthType;

    // associate with serviceNetwork if provided
    if (props.serviceNetwork) {
      this.associateWithServiceNetwork(props.serviceNetwork);
    }
  }
}

/**
 * Creates an Association Between a Lattice Service and a Service Network
 * consider using .associateWithServiceNetwork
 */
export class ServiceNetworkAssociation extends core.Resource {
  constructor(scope: Construct, id: string, props: ServiceNetworkAssociationProps) {
    super(scope, id);

    new generated.CfnServiceNetworkServiceAssociation(this, `ServiceNetworkServiceAssociation${this.node.addr}`, {
      serviceIdentifier: props.serviceId,
      serviceNetworkIdentifier: props.serviceNetwork.serviceNetworkId,
    });
  }
}
