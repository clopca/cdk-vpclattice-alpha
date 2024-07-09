import { PolicyDocument, PolicyDocumentProps } from 'aws-cdk-lib/aws-iam';
import * as iam from 'aws-cdk-lib/aws-iam';
import { EOL } from 'node:os';

const validActions = ['vpc-lattice-svcs:Invoke', 'vpc-lattice-svcs:Connect', 'vpc-lattice-svcs:*']
//const validConditionKeys = ['vpc-lattice-svcs:Port']
const validPrincipalTypes = ['AWS', 'Service'];

/**
 * AccessModes for the Service Network.
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
   * Authenticated Access to the Service Network.
   */
  AUTHENTICATED_ONLY = 'AUTHENTICATED',

  /**
   * Only principals from this Org can access the Service Network.
   */
  ORG_ONLY = 'ORG_ONLY',
}

/**
 * AuthTypes
 */
export enum AuthType {
  /**
   * No Authorization.
   */
  NONE = 'NONE',

  /**
   * Use VPC Lattice Auth Policy to control access.
   */
  AWS_IAM = 'AWS_IAM'
}

export interface IAuthPolicyProps {
  /**
   * The Access Mode
  */
  readonly accessMode?: AuthPolicyAccessMode;

  /**
   * Organization ID to limit access to.
   * @default - no org id is used
   * @example 'o-1234567890'
   */
  readonly orgId?: string;

  /**
   * Policy document config
   */
  readonly config?: PolicyDocumentProps;
}

export class AuthPolicyDocument extends PolicyDocument {

  public readonly accessMode?: AuthPolicyAccessMode

  constructor(props?: IAuthPolicyProps) {

    super(props?.config);
    this.accessMode = props?.accessMode;

    // If access mode is defined
    if (this.accessMode) {

      // Validate it is a valid combination of params
      this.validateAccessMode(props?.orgId);

      // Start from a permissive template
      const statement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['*'],
        principals: [new iam.StarPrincipal()],
      });

      // ------- ORG Only Access ------------------------------
      if (this.accessMode === AuthPolicyAccessMode.ORG_ONLY) {
        if (props?.orgId) {
          statement.addCondition('StringEquals', { 'aws:PrincipalOrgID': [props.orgId] });
          statement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'anonymous' });
        }
      }
      // ------- Auth Only Access ------------------------------
      else if (this.accessMode === AuthPolicyAccessMode.AUTHENTICATED_ONLY) {
        statement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'anonymous' });
      }

      // Add the built statement
      this.addStatements(statement);
    }

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
        if (!this.validateActions(statement.Action, validActions)) {
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

  private validateActions(action: string | string[], validActions: string[]): boolean {
    if (typeof action === 'string') {
      return action === '*' || validActions.includes(action);
    }
    if (Array.isArray(action)) {
      return action.every(a => a === '*' || validActions.includes(a));
    }
    return false;
  }

  private validateResources(resources: string | string[]): boolean {
    const isValidResource = (resource: string): boolean =>
      resource === '*' || resource.startsWith('arn:aws:vpc-lattice:');
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