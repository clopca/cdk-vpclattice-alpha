import * as core from 'aws-cdk-lib';
// import * as acm from 'aws-cdk-lib/aws-certificatemanager';
// import * as iam from 'aws-cdk-lib/aws-iam';
// import * as route53 from 'aws-cdk-lib/aws-route53';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { Construct } from 'constructs';
import { AuthType } from './auth';

/**
 * Represents a Vpc Lattice Service Network.
 * Implemented by `Service`.
 */
export interface IService extends core.IResource {
  // /**
  //  * The name of the service.
  //  * @attribute
  //  */
  // readonly serviceName: string;

  /**
   * The ARN of the service.
   * @attribute
   */
  readonly serviceArn: string;

  /**
   * The Id of the service.
   * @attribute
   */
  readonly serviceId: string;

  // /**
  //  * The domain name of the service.
  //  * @attribute
  //  */
  // readonly domainName?: string;

  // /**
  //  * The AuthType of the service.
  //  */
  // authType?: AuthType;

  // /**
  //  * The Auth Policy for the service.
  //  */
  // authPolicy?: iam.PolicyDocument;

  // /**
  //  * A certificate that may be used by the service
  //  */
  // certificate?: acm.Certificate;

  // /**
  //  * A Custom Domain used by the service
  //  */
  // customDomain?: string;

  // /**
  //  * The Hosted Zone for the Service
  //  */
  // hostedZone?: route53.HostedZone
}

abstract class ServiceBase extends core.Resource implements IService {
  //public abstract readonly serviceName: string;
  public abstract readonly serviceArn: string;
  public abstract readonly serviceId: string;
  // public abstract readonly domainName?: string;
  // public abstract readonly authType?: AuthType;
  // public abstract readonly authPolicy?: iam.PolicyDocument;

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
 * Properties for creating a new VPC Lattice Service
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
}

export class Service extends ServiceBase {
  // ------------------------------------------------------
  // Validation
  // ------------------------------------------------------
  /**
   * Must be between 3-40 characters. Lowercase letters, numbers, and hyphens are accepted.
   * Must begin and end with a letter or number. No consecutive hyphens.
   */
  public static validateServiceName(name: string) {
    const pattern = /^(?!svc-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 40 && pattern.test(name) && !name.includes('--');
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
      //public readonly serviceName = core.Arn.extractResourceName(arn, 'service');
    }
    return new Import(scope, id);
  }

  // -----------
  public static fromServiceId(scope: Construct, id: string, serviceId: string): IService {
    class Import extends ServiceBase {
      public readonly serviceId = serviceId;
      // build ARN
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
  // public readonly serviceName: string;
  public authType: AuthType;
  // private readonly _resource: generated.CfnService;

  // ------------------------------------------------------
  // Construct
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: ServiceProps) {
    super(scope, id, {
      physicalName: props.serviceName,
    });

    //Service.validateServiceName(this.serviceName);

    const resource = new generated.CfnService(this, 'Resource', {
      name: this.physicalName,
      authType: props.authType ?? AuthType.AWS_IAM,
    });

    // this._resource = resource;
    //this.serviceName = this.getResourceNameAttribute(resource.ref);
    this.serviceArn = this.getResourceArnAttribute(resource.attrArn, {
      service: 'vpc-lattice',
      resource: 'service',
      resourceName: this.physicalName,
    });
    this.serviceId = this.getResourceNameAttribute(resource.attrId);

    this.authType = resource.authType as AuthType;
  }
}
