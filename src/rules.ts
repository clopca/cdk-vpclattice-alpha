import type { ITargetGroup, WeightedTargetGroup } from './aws-vpclattice-targets';
import type { RuleConditions } from './matches';
import type { HTTPFixedResponse } from './util';
/**
 * Rule Conditions can leverage different operators for Matches
 */
export enum MatchOperator {
  /**
   * Contains Match
   */
  CONTAINS = 'CONTAINS',

  /**
   * Exact Match
   */
  EXACT = 'EXACT',

  /**
   * Prefix Match
   */
  PREFIX = 'PREFIX',
}

/**
 * Access mode for the rule.
 */
export enum RuleAccessMode {
  /**
   * Unauthenticated Access
   */
  UNAUTHENTICATED = 'UNAUTHENTICATED',

  /**
   * Unauthenticated Access
   */
  AUTHENTICATED_ONLY = 'AUTHENTICATED',

  /**
   * THIS Org only
   */
  ORG_ONLY = 'ORG_ONLY',

  /**
   * Do not create a statement
   */
  NO_STATEMENT = 'NO_STATEMENT',
}

export interface RuleAction {
  readonly httpFixedResponse?: HTTPFixedResponse;
  readonly targetGroup?: ITargetGroup;
  readonly weightedTargetGroups?: WeightedTargetGroup[];
}

export interface RuleProps {
  /**
   * A name for the the Rule
   */
  readonly name: string;
  /**
   * the action for the rule, is either a fixed Response, or a being sent to  Weighted TargetGroup
   */
  readonly action: RuleAction;
  /**
   * The priority of this rule, a lower priority will be processed first
   */
  readonly priority: number;
  /**
   * the Matching criteria for the rule. This must contain at least one of
   * header, method or patchMatches
   */
  readonly conditions?: RuleConditions;
  // /**
  //  * List of principals that are allowed to access the resource
  //  * @default none
  //  */
  // readonly allowedPrincipals?: IPrincipal[];
  // /**
  //  * List of principalArns that are allowed to access the resource
  //  * @default none
  //  */
  // readonly allowedPrincipalArn?: string[];
  // /**
  //  * Set an access mode.
  //  * @default RuleAccessMode.NO_STATEMENT
  //  */
  // readonly accessMode?: RuleAccessMode;
  // /**
  //  * Organization ID to allow access to the Service Network
  //  * @default - no org id is used
  //  * @example 'o-1234567890'
  //  */
  // readonly orgId?: string;
}
