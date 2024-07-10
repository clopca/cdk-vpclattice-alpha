import { EOL } from 'node:os';
import type { PolicyDocumentProps } from 'aws-cdk-lib/aws-iam';
import { PolicyDocument } from 'aws-cdk-lib/aws-iam';

import * as iam from 'aws-cdk-lib/aws-iam';
import { IVpc } from 'aws-cdk-lib/aws-ec2';

const validActions = ['vpc-lattice-svcs:Invoke', 'vpc-lattice-svcs:Connect', 'vpc-lattice-svcs:*'];
//const validConditionKeys = ['vpc-lattice-svcs:Port']
const validPrincipalTypes = ['AWS', 'Service'];

/**
 * AccessModes for the Service / Service Network.
 * @enum
 */
export enum AuthPolicyAccessMode {
  /**
   * Allows for Unauthenticated (Anonymous) Access to the Service Network.
   * Anonymous principals are callers that don't sign their AWS requests
   * with Signature Version 4 (SigV4), and are within a VPC that is connected
   * to the service network.
   */
  UNAUTHENTICATED = 'UNAUTHENTICATED',

  /**
   * Means that any request to the service or service network must contain 
   * a valid request signature that is computed using Signature Version 4 
   * (SigV4).
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html
   */
  AUTHENTICATED_ONLY = 'AUTHENTICATED',

  /**
   * Grants permissions to any authenticated request to access as long as
   * the request originates from principals that belong to the AWS 
   * organization specified in the `orgId` parameter.
   */
  ORG_ONLY = 'ORG_ONLY',

  /**
   * Do not create a statement. If AWS IAM selected, and an additional policy is 
   * not attached, all traffic will be denied by default regardless of the 
   * identity or service level permissions. 
   */
  NO_STATEMENT = 'NO_STATEMENT',
}

/**
 * Specifies the authentication and authorization that manages client access to 
 * the service or service network.
 */
export enum AuthType {
  /**
   * No Authentication or Authorization. If an auth policy is present, 
   * it is inactive. 
   */
  NONE = 'NONE',

  /**
   * Use VPC Lattice Auth Policy to control access. If enabled and a policy is 
   * not attached, all traffic will be denied by default regardless of the 
   * identity or service level permissions. 
   */
  AWS_IAM = 'AWS_IAM',
}

/**
 * Helps you create Auth Policies using higher level abstractions which reflect
 * common use cases. 
 * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#example-auth-policies
 */
export class AuthPolicyStatement extends iam.PolicyStatement {
  /**
   * Creates an IAM Auth policy which limits access to requests which orginate 
   * from principals that belong to the AWS organization specified.
   * @param orgId The AWS Organization ID to limit access to.
   * @param resources optional list of resources to limit the statement to (defaults to "*")
   * @returns `AuthPolicyStatement`   
   */
  public static allowOnlyOrganization(orgId: string, resources?: string[]): AuthPolicyStatement {
    const statement = this.getBaseStatement()
    statement.addCondition('StringEquals', { 'aws:PrincipalOrgID': [orgId] });
    // if (authenticated ?? true) {
    //   statement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'anonymous' });
    // }
    statement.addPrincipals(new iam.StarPrincipal())
    statement.addResources(...(resources ?? ["*"]))
    return statement
  }

  /**
   * Grants permissions to any authenticated request that uses the IAM role 
   * specified.
   * @param role the AWS IAM Role
   * @param resources optional list of resources to limit the statement to (defaults to "*")
   * @returns `AuthPolicyStatement`  
   */
  public static allowOnlyRole(role: iam.IRole, resources?: string[]): AuthPolicyStatement {
    const statement = this.getBaseStatement()
    statement.addResources(...(resources ?? ["*"]))
    statement.addArnPrincipal(role.roleArn);
    return statement
  }

  /**
   * Grants permissions to any authenticated request.
   * @param resources optional list of resources to limit the statement to (defaults to "*")
   * @returns `AuthPolicyStatement`  
   */
  public static allowOnlyAuthenticated(resources?: string[]): AuthPolicyStatement {
    const statement = this.getBaseStatement()
    statement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'anonymous' });
    statement.addPrincipals(new iam.StarPrincipal())
    statement.addResources(...(resources ?? ["*"]))
    return statement
  }

  /**
   * Grants permissions to both authenticated and unauthenticated (anonymous) 
   * requests.
   * @param resources optional list of resources to limit the statement to (defaults to "*")
   * @returns `AuthPolicyStatement`  
   */
  public static allowAnonymous(resources?: string[]): AuthPolicyStatement {
    const statement = this.getBaseStatement()
    statement.addPrincipals(new iam.StarPrincipal())
    statement.addResources(...(resources ?? ["*"]))
    return statement
  }

  /**
   * Grants permissions to authenticated requests originating from principals 
   * in the specified VPC 
   * @param vpc the VPC to restrict requests from
   * @param resources optional list of resources to limit the statement to (defaults to "*")
   * @returns `AuthPolicyStatement`  
   */
  public static allowVpc(vpc: IVpc, resources?: string[], authenticated?: boolean): AuthPolicyStatement {
    const statement = this.getBaseStatement()
    if (authenticated ?? true) {
      statement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'anonymous' });
    }
    statement.addCondition('StringEquals', { 'vpc-lattice-svcs:SourceVpc': vpc.vpcId });
    statement.addPrincipals(new iam.StarPrincipal())
    statement.addResources(...(resources ?? ["*"]))
    return statement
  }

  protected static getBaseStatement(): AuthPolicyStatement {
    return new AuthPolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['vpc-lattice-svcs:*'],
    })
  }

  constructor(props?: iam.PolicyStatementProps) {
    super(props)
  }
}

export class AuthPolicyDocument extends PolicyDocument {

  public readonly accessMode?: AuthPolicyAccessMode;

  /**
   * Means that any request to the service or service network must contain 
   * a valid request signature that is computed using Signature Version 4 
   * (SigV4).
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html
   */
  public static AUTHENTICATED_ONLY = new AuthPolicyDocument(
    { statements: [AuthPolicyStatement.allowOnlyAuthenticated()] }
  )

  /**
   * Allows for Unauthenticated (Anonymous) Access to the Service Network.
   * Anonymous principals are callers that don't sign their AWS requests
   * with Signature Version 4 (SigV4), and are within a VPC that is connected
   * to the service network.
   */
  public static UNAUTHENTICATED = new AuthPolicyDocument(
    { statements: [AuthPolicyStatement.allowAnonymous()] }
  )

  /**
   * Grants permissions to any authenticated request to access as long as
   * the request originates from principals that belong to the AWS 
   * organization specified in the `orgId` parameter.
   */
  public static organizationOnly(orgId: string, resources?: string[]): AuthPolicyDocument {
    return new AuthPolicyDocument(
      { statements: [AuthPolicyStatement.allowOnlyOrganization(orgId, resources)] })
  }

  constructor(props?: PolicyDocumentProps) {
    super(props);
  }

  /**
   * Validate that Access mode ORG_ONLY can be set only if orgId is provided
   */
  protected validateAccessMode(orgId?: string): string[] {
    const errors: string[] = [];
    if (this.accessMode === AuthPolicyAccessMode.ORG_ONLY && !orgId) {
      errors.push('orgId is required when accessMode is set to ORG_ONLY');
    }
    return errors;
  }

  /**
   * Must ensure Service has the correct AuthType and policy is a
   * valid IAM Resource-based Policy for VPC Lattice
   */
  public validateAuthPolicy(): string[] {
    const errors: string[] = [];
    if (!this.isEmpty) {
      const policyJson = this.toJSON();
      for (const statement of policyJson.Statement) {
        // Check for valid VPC Lattice actions
        if (!this.validateActions(statement.Action)) {
          errors.push(`Invalid action detected. Allowed actions for VPC Lattice are: ${validActions.join(', ')} or '*'.`);
        }

        // Check for valid principal types
        if (statement.Principal && typeof statement.Principal === 'object') {
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

      // Error message
      if (errors.length > 0) {
        errors.unshift(`The following errors were found in the VPC Lattice auth policy:${EOL}${JSON.stringify(policyJson, null, 2)}`);
      }
    }
    return errors;
  }

  private validateActions(action: string | string[]): boolean {
    if (typeof action === 'string') {
      return action === '*' || validActions.includes(action);
    }
    if (Array.isArray(action)) {
      return action.every(a => a === '*' || validActions.includes(a));
    }
    return false;
  }

  private validateResources(resources: string | string[]): boolean {
    const isValidResource = (resource: string): boolean => resource === '*' || resource.startsWith('arn:aws:vpc-lattice:');
    // When only one resource is specified
    if (typeof resources === 'string') {
      return isValidResource(resources);
    }
    // When more than one resources are specified
    if (Array.isArray(resources)) {
      return resources.every(isValidResource);
    }
    return false;
  }
}

