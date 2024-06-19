import * as core from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { Construct } from 'constructs';
import { WeightedTargetGroup } from './base-target-group';
import { HTTPMatch } from './matches';
import { Service } from './service';

/**
 * AuthTypes
 */
export enum AuthType {
  /**
   * No Authorization
   */
  NONE = 'NONE',

  /**
   * Use IAM Policy as
   */
  AWS_IAM = 'AWS_IAM',
}

/**
 * HTTP/HTTPS methods
 */
export enum Protocol {
  /**
   * HTTP Protocol
   * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/http-listeners.html
   */
  HTTP = 'HTTP',

  /**
   * HTTPS Protocol
   * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/https-listeners.html
   */
  HTTPS = 'HTTPS',
}

/**
 * This enum maps friendly names to respond codes.
 */
export enum FixedResponse {
  /**
   * Not Found 404
   */
  NOT_FOUND = 404,

  /**
   * OK 200
   */
  OK = 200,
}

/**
 * HTTP Methods
 */
export enum HTTPMethods {
  /**
   * GET Method
   */
  GET = 'GET',

  /**
   * POST Method
   */
  POST = 'POST',

  /**
   * PUT Method
   */
  PUT = 'PUT',

  /**
   * Delete Method
   */
  DELETE = 'DELETE',
}

/**
 * Rule Contitions can leverage different operators for Matches
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
 * Operators for Path Matches
 */
export enum PathMatchType {
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

interface IHttpMatchProperty {
  /**
   * The header matches. Matches incoming requests with rule based on request header value before applying rule action.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-httpmatch.html#cfn-vpclattice-rule-httpmatch-headermatches
   */
  headerMatches?: Array<generated.CfnRule.HeaderMatchProperty | core.IResolvable> | core.IResolvable;
  /**
   * The HTTP method type.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-httpmatch.html#cfn-vpclattice-rule-httpmatch-method
   */
  method?: string;
  /**
   * The path match.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-httpmatch.html#cfn-vpclattice-rule-httpmatch-pathmatch
   */
  pathMatch?: generated.CfnRule.PathMatchProperty | core.IResolvable;
}

/**
 * A default listener action.
 * one of fixed response or forward needs to be provided.
 */
export interface DefaultListenerAction {
  /**
   * Drop client requests and return a custom HTTP response
   * @default - None
   */
  readonly fixedResponse?: FixedResponse;
  /**
   * Forward to a target group
   * @default - None
   */
  readonly forward?: WeightedTargetGroup;
}

/**
 * Propertys to Create a Lattice Listener
 */
export interface ListenerProps {
  /**
   *  * A default action that will be taken if no rules match.
   *  @default FixedResponse.NOT_FOUND
   */
  readonly defaultAction?: DefaultListenerAction;

  /**
   * protocol that the listener will listen on
   * @default HTTPS
   */
  readonly protocol?: Protocol;

  /**
   * Optional port number for the listener. If not supplied, will default to 80 or 443, depending on the Protocol.
   * @default - 80 or 443 depending on the Protocol
   */
  readonly port?: number;

  /**
   * The Name of the service.
   * @default CloudFormation provided name.
   */
  readonly name?: string;

  /**
   * The Id of the service that this listener is associated with.
   */
  readonly service: Service;

  /**
   * rules for the listener
   */
  readonly rules?: RuleProp[];
}

/**
 * Create a VPC Lattice Listener.
 * Implemented by `Listener`.
 * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html
 */
export interface IListener extends core.IResource {
  /**
   * The Amazon Resource Name (ARN) of the service.
   */
  readonly listenerArn: string;

  /**
   * The Id of the Service Network
   * @attribute
   */
  readonly listenerId: string;

  /**
   * Add A Listener Rule to the Listener
   */
  addListenerRule(props: RuleProp): void;
}

/**
 * Properties to add rules to to a listener
 * One of headerMatch, PathMatch, or methodMatch can be supplied,
 * the Rule can not match multiple Types
 */
export interface RuleProp {
  /**
   * A name for the the Rule
   */
  readonly name: string;
  /**
   * the action for the rule, is either a fixed Reponse, or a being sent to  Weighted TargetGroup
   */
  readonly action: FixedResponse | WeightedTargetGroup[];
  /**
   * the priority of this rule, a lower priority will be processed first
   * @default 50
   */
  readonly priority?: number;
  /**
   * the Matching criteria for the rule. This must contain at least one of
   * header, method or patchMatches
   */
  readonly httpMatch: HTTPMatch;
  /**
   * List of principals that are allowed to access the resource
   * @default none
   */
  readonly allowedPrincipals?: iam.IPrincipal[];
  /**
   * List of principalArns that are allowed to access the resource
   * @default none
   */
  readonly allowedPrincipalArn?: string[];
  /**
   * Set an access mode.
   * @default false
   */
  readonly accessMode?: RuleAccessMode;
}

/**
 *  A listener is a process that checks for connection requests, using the protocol
 *  and port that you configure. The rules that you define for a listener determine
 *  how the service routes requests to its registered targets.
 *
 *  **This class should not be called directly**.
 *  Use the `.addListener()` method on an instance of a Service construct.
 *
 */
export class Listener extends core.Resource implements IListener {
  /**
   *  The Id of the Listener
   */
  readonly listenerId: string;
  /**
   * THe Arn of the Listener
   */
  readonly listenerArn: string;
  /**
   * A list of priorities, to check for duplicates
   */
  listenerPriorities: number[] = [];
  /**
   * The service this listener is attached to
   */
  service: Service;
  /**
   * Service auth Policy
   * @default none.
   */

  constructor(scope: Construct, id: string, props: ListenerProps) {
    super(scope, id);

    // the default action is a not provided, it will be set to NOT_FOUND
    // let defaultAction: generated.CfnListener.DefaultActionProperty = props.defaultAction ?? {
    //   fixedResponse: {
    //     statusCode: FixedResponse.NOT_FOUND,
    //   },
    // };

    let defaultAction: generated.CfnListener.DefaultActionProperty;
    if (props.defaultAction) {
      // throw an error if both props.defaultAction.fixedaction and props.defaultAction.forward are set
      if (props.defaultAction.fixedResponse && props.defaultAction.forward) {
        throw new Error('Both fixedResponse and foward are set');
      }
      // throw an error if neither of props.defaultAction.fixedaction and props.defaultAction.forward are set
      if (!props.defaultAction.fixedResponse && !props.defaultAction.forward) {
        throw new Error('At least one of fixedResponse or foward must be set');
      }

      // set the default action to the fixedResponse
      if (props.defaultAction.fixedResponse) {
        defaultAction = {
          fixedResponse: {
            statusCode: props.defaultAction.fixedResponse,
          },
        };
      } else {
        // set the default action to the foward
        defaultAction = {
          forward: {
            targetGroups: [
              {
                targetGroupIdentifier: props.defaultAction.forward?.targetGroup.targetGroupId as string,
                // the properties below are optional
                weight: props.defaultAction.forward?.weight,
              },
            ],
          },
        };
      }
    } else {
      defaultAction = {
        fixedResponse: {
          statusCode: FixedResponse.NOT_FOUND,
        },
      };
    }

    // default to using HTTPS
    let protocol = props.protocol ?? Protocol.HTTPS;

    // check the the port is in range if it is specificed
    if (props.port) {
      if (props.port < 0 || props.port > 65535) {
        throw new Error('Port out of range');
      }
    }

    // if its not specified, set it to the default port based on the protcol
    let port: number;
    if (protocol === Protocol.HTTP) {
      port = props.port ?? 80;
    } else if (protocol === Protocol.HTTPS) {
      port = props.port ?? 443;
    } else {
      throw new Error('Protocol not supported');
    }

    if (props.name !== undefined) {
      if (props.name.match(/^[a-z0-9\-]{3,63}$/) === null) {
        throw new Error(
          'The listener name must be between 3 and 63 characters long. The name can only contain  lower case alphanumeric characters and hyphens. The name must be unique to the account.',
        );
      }
    }

    const listener = new generated.CfnListener(this, 'Resource', {
      name: props.name,
      defaultAction: defaultAction,
      protocol: protocol,
      port: port,
      serviceIdentifier: props.service.serviceId,
    });

    this.listenerId = listener.attrId;
    this.listenerArn = listener.attrArn;
    this.service = props.service;

    if (props.rules) {
      props.rules.forEach(rule => {
        this.addListenerRule(rule);
      });
      // this.service.applyAuthPolicy(); // Unnecessary, as the auth policy is updated and applied to the service in synth time
    }
  }

  /**
   * add a rule to the listener
   * @param props AddRuleProps
   */
  addListenerRule(props: RuleProp): void {
    let policyStatement: iam.PolicyStatement = new iam.PolicyStatement();

    // add the action for the statement. There is only one permissiable action
    policyStatement.addActions('vpc-lattice-svcs:Invoke');

    if (props.accessMode === RuleAccessMode.UNAUTHENTICATED) {
      if (props.allowedPrincipals) {
        throw new Error('An unauthenticated rule cannot have allowedPrincipals');
      }
      policyStatement.addPrincipals(new iam.StarPrincipal());
    }

    if (props.accessMode === RuleAccessMode.AUTHENTICATED_ONLY) {
      policyStatement.addPrincipals(new iam.StarPrincipal());
      policyStatement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'Anonymous' });
    }

    if (props.accessMode === RuleAccessMode.ORG_ONLY) {
      policyStatement.addPrincipals(new iam.StarPrincipal());
      // policyStatement.addCondition('StringEquals', { 'aws:PrincipalOrgID': [this.service.orgId] }); // TODO: add orgId to the auth policy
      policyStatement.addCondition('StringNotEqualsIgnoreCase', { 'aws:PrincipalType': 'Anonymous' });
    }

    // conditionaly build a policy statement if principals were provided
    if (props.allowedPrincipals) {
      // add principals to the statement
      // if needed, explicity permit all principals by using iam.StarPrincipal();
      props.allowedPrincipals.forEach(principal => {
        policyStatement.addPrincipals(principal);
      });
    }

    // conditionally add principals by arn to the the policy
    if (props.allowedPrincipalArn) {
      props.allowedPrincipalArn.forEach(arn => {
        policyStatement.addPrincipals(new iam.ArnPrincipal(arn));
      });
    }

    /**
     * Create the Action for the Rule
     */
    let action: generated.CfnRule.ActionProperty;

    // if priority is undefined set it to 50.  This should only be used if there is a single rule
    const priority = props.priority ?? 50;

    // if the rule has a fixed response
    if (typeof props.action === 'number') {
      action = {
        fixedResponse: {
          statusCode: props.action,
        },
      };
    } else {
      // this is a forwarding action

      let targetGroups: generated.CfnRule.WeightedTargetGroupProperty[] = [];

      // loop through the action to build a set of target groups
      props.action.forEach(targetGroup => {
        targetGroups.push({
          targetGroupIdentifier: targetGroup.targetGroup.targetGroupId,
          // if the targetGroup is no specified set sensible default of 100
          // this is an opinionated choice.
          weight: targetGroup.weight ?? 100,
        });
      });
      action = {
        forward: {
          targetGroups: targetGroups,
        },
      };
    }

    /**
     * Validate the priority is not already in use.
     */
    if (priority in this.listenerPriorities) {
      throw new Error('Priority is already in use, ensure all listerner rules have unique prioritys');
    }
    this.listenerPriorities.push(priority);
    // check to see if priority is between 1 and 100
    if (priority < 1 || priority > 100) {
      throw new Error('Priority must be between 1 and 100');
    }
    // process the match
    // fail if at least one method is not selected
    if (Object.keys(props.httpMatch).length < 1) {
      throw new Error('At least one of pathMatches, headerMatches, or method must be provided');
    }

    let match: IHttpMatchProperty = {};

    // method match
    if (props.httpMatch.method) {
      // set the method match for the lattice rule
      match.method = props.httpMatch.method;

      // add a policy statemenet for the Auth Rule
      policyStatement.addCondition('StringEquals', { 'vpc-lattice-svcs:RequestMethod': props.httpMatch.method });
    }

    // path match
    if (props.httpMatch.pathMatches) {
      const matchType = props.httpMatch.pathMatches.pathMatchType ?? PathMatchType.EXACT;

      if (matchType === PathMatchType.EXACT) {
        match.pathMatch = {
          match: {
            exact: props.httpMatch.pathMatches.path,
          },
          caseSensitive: props.httpMatch.pathMatches.caseSensitive ?? true,
        };
        const arn = `arn:${core.Aws.PARTITION}:vpc-lattice:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:service/${this.service.serviceId}`;
        policyStatement.addResources(arn + props.httpMatch.pathMatches.path);
      }

      if (matchType === PathMatchType.PREFIX) {
        match.pathMatch = {
          match: {
            prefix: props.httpMatch.pathMatches.path,
          },
          caseSensitive: props.httpMatch.pathMatches.caseSensitive ?? true,
        };
        const arn = `arn:${core.Aws.PARTITION}:vpc-lattice:${core.Aws.REGION}:${core.Aws.ACCOUNT_ID}:service/${this.service.serviceId}`;
        policyStatement.addResources(arn + props.httpMatch.pathMatches.path + '*');
      }
    }
    // header Match
    if (props.httpMatch.headerMatches) {
      let headerMatches: generated.CfnRule.HeaderMatchProperty[] = [];

      props.httpMatch.headerMatches.forEach(headerMatch => {
        const matchOperator = headerMatch.matchOperator ?? MatchOperator.EXACT;

        if (matchOperator === MatchOperator.EXACT) {
          headerMatches.push({
            name: headerMatch.headername,
            match: {
              exact: headerMatch.matchValue,
            },
            caseSensitive: headerMatch.caseSensitive ?? false,
          });
          policyStatement.addCondition('StringEquals', { [`vpc-lattice-svcs:RequestHeader/${headerMatch.headername}`]: headerMatch.matchValue });
        } else if (matchOperator === MatchOperator.CONTAINS) {
          headerMatches.push({
            name: headerMatch.headername,
            match: {
              contains: headerMatch.matchValue,
            },
            caseSensitive: headerMatch.caseSensitive ?? false,
          });
          policyStatement.addCondition('StringEquals', {
            [`vpc-lattice-svcs:RequestHeader/${headerMatch.headername}`]: `*${headerMatch.matchValue}*`,
          });
        } else if (matchOperator === MatchOperator.PREFIX) {
          headerMatches.push({
            name: headerMatch.headername,
            match: {
              prefix: headerMatch.matchValue,
            },
            caseSensitive: headerMatch.caseSensitive ?? false,
          });
          policyStatement.addCondition('StringEquals', {
            [`vpc-lattice-svcs:RequestHeader/${headerMatch.headername}`]: `${headerMatch.matchValue}*`,
          });
        }
      });
      match.headerMatches = headerMatches;
    }

    if (props.accessMode !== RuleAccessMode.NO_STATEMENT) {
      this.service.addAuthPolicyStatement(policyStatement);
    }

    // finally create a rule
    new generated.CfnRule(this, `${props.name}-Rule`, {
      action: action,
      match: {
        httpMatch: match,
      },
      priority: priority,
      listenerIdentifier: this.listenerId,
      serviceIdentifier: this.service.serviceId,
    });
  }
}
