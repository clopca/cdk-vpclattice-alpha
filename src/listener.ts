import type { IResource, RemovalPolicy } from 'aws-cdk-lib';
import { Resource } from 'aws-cdk-lib';
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import type { Construct } from 'constructs';
import type { RuleConditions } from './matches';
import { PathMatchType } from './matches';
import type { RuleAction, RuleProps } from './rules';
import { MatchOperator } from './rules';
import type { Service } from './service';
import { HTTPFixedResponse } from './util';

/**
 * It is not required that the listener and target group protocols match.
 * VPC Lattice manages the entire process of upgrading and downgrading between protocols and versions.
 */
export enum ListenerProtocol {
  /**
   * HTTP Protocol
   * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/http-listeners.html
   */
  HTTP = 'HTTP',

  /**
   * HTTPS Protocol
   * VPC Lattice will provision and manage a TLS certificate that is associated
   * with the VPC Lattice generated FQDN.
   * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/https-listeners.html
   */
  HTTPS = 'HTTPS',

  /**
   * TLS Passthrough. This ensures that your application
   * decrypts the encrypted traffic instead of VPC Lattice.
   */
  TLS_PASSTHROUGH = 'TLS_PASSTHROUGH',
}

/**
 * Create a VPC Lattice Listener. It is simply a process that checks for
 * connection requests, and routes them to targets in a target group according
 * to the defined rules.
 * Implemented by `Listener`.
 * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html
 */
export interface IListener extends IResource {
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
  addListenerRule(rule: RuleProps): void;
}

/**
 * Properties to Create a Lattice Listener
 */
export interface ListenerProps {
  /**
   * The Id of the service that this listener is associated with.
   */
  readonly service: Service;

  /**
   * The configuration properties for the listener.
   */
  readonly config?: ListenerConfig;
}

/**
 * Listener Config
 */
export interface ListenerConfig {
  /**
   * The Name of the listener.
   */
  readonly name?: string;

  /**
   * Protocol that the listener will listen on
   */
  readonly protocol?: ListenerProtocol;

  /**
   * Optional port number for the listener. If not supplied, will default to 80 or 443, depending on the Protocol.
   * @default - 80 or 443 depending on the Protocol
   */
  readonly port?: number;

  /**
   *  * A default action that will be taken if no rules match.
   *  @default HTTPFixedResponse.NOT_FOUND
   */
  readonly defaultAction?: RuleAction;

  /**
   * Rules to add to the listener.
   */
  readonly rules?: RuleProps[];

  /**
   * Determine what happens to the service when the resource/stack is deleted.
   *
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 *  A listener is a process that checks for connection requests, using the protocol
 *  and port that you configure. The rules that you define for a listener determine
 *  how the service routes requests to its registered targets.
 *
 *  **This class should not be called directly**.
 *  Use the `.addListener()` method on an instance of a Service construct.
 * @resource AWS::VpcLattice::Listener
 *
 */
export class Listener extends Resource implements IListener {
  readonly listenerArn: string;
  readonly listenerId: string;

  /**
   * The listener protocol
   */
  readonly protocol: ListenerProtocol;

  /**
   * The listener port.
   */
  readonly port: number;

  /**
   * The name of the listener
   */
  readonly name?: string;

  /**
   * The default action for this listener
   */
  readonly defaultAction: RuleAction;

  /**
   * The service this listener is attached to
   */
  readonly service: Service;

  /**
   * The listener rules to add
   */
  rules: RuleProps[];

  private readonly _resource: generated.CfnListener;

  // ------------------------------------------------------
  // Constructor
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: ListenerProps) {
    super(scope, id, {
      physicalName: props.config?.name,
    });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.name = this.physicalName;
    this.service = props.service;
    this.protocol = props.config?.protocol ?? ListenerProtocol.HTTPS;
    this.port = props.config?.port ?? (props.config?.protocol === ListenerProtocol.HTTP ? 80 : 443);
    this.rules = props.config?.rules ?? [];
    this.defaultAction = props.config?.defaultAction ?? {
      httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
    };

    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.config?.name) {
      const name = props.config.name;
      this.node.addValidation({ validate: () => this.validateListenerName(name) });
    }
    if (props.config?.rules) {
      this.node.addValidation({ validate: () => this.validateRulePriorities() });
    }
    this.node.addValidation({ validate: () => this.validatePort() });

    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    this._resource = new generated.CfnListener(this, 'Resource', {
      name: props.config?.name,
      defaultAction: this.transformRuleActionToCfnProperty(this.defaultAction),
      protocol: this.protocol,
      port: this.port,
      serviceIdentifier: this.service.serviceId,
    });

    // ------------------------------------------------------
    // Construct properties
    // ------------------------------------------------------
    this._resource.applyRemovalPolicy(props.config?.removalPolicy);
    this.listenerArn = this._resource.attrArn;
    this.listenerId = this._resource.attrId;

    // ------------------------------------------------------
    // Adds Listener Rules
    // ------------------------------------------------------
    if (props.config?.rules) {
      for (const rule of props.config.rules) {
        this.addListenerRule(rule);
      }
    }
  }
  // ------------------------------------------------------
  // Validation Methods
  // ------------------------------------------------------
  /**
   * Verifies a valid protocol / target Type combination
   */
  protected validatePort(): string[] {
    const errors: string[] = [];
    // Ensure that protocol is not set to TCP if targetType is ALB
    if (this.port < 0 || this.port > 65535) {
      errors.push(`Invalid port ${this.port}: Out of range (0-65535)`);
    }
    return errors;
  }

  protected validateListenerName(name: string) {
    const errors: string[] = [];
    // Rules codified from https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html
    if (name.length < 3 || name.length > 63) {
      errors.push('Listener name must be at least 3 and no more than 63 characters');
    }

    const isPatternMatch = /^(?!listener-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/.test(name);
    if (!isPatternMatch) {
      errors.push(
        'Listener name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "listener-".',
      );
    }
    if (errors.length > 0) {
      errors.unshift(`Invalid listener name (value: ${name})`);
    }
    return errors;
  }

  protected validateRulePriorities(): string[] {
    const errors: string[] = [];
    const rulePriorities = new Set(this.rules.map(rule => rule.priority));
    if (this.rules.length > rulePriorities.size) {
      errors.push('Invalid rule priorities: Duplicate priorities found');
    }
    // check if any of the values of rulePriorities set is not between 1 and 1000
    if (this.rules.some(rule => rule.priority < 1 || rule.priority > 100)) {
      errors.push('Invalid rule priorities: Rule priorities must be between 1 and 100');
    }
    return errors;
  }

  // ------------------------------------------------------
  // Util Methods
  // ------------------------------------------------------
  /**
   * Transforms the L2 Rule Action to the CFN-L1 format
   */
  private transformRuleActionToCfnProperty(ruleAction: RuleAction): generated.CfnListener.DefaultActionProperty {
    if (ruleAction.httpFixedResponse) {
      // RuleAction is an HTTPFixedResponse
      return {
        fixedResponse: {
          statusCode: ruleAction.httpFixedResponse,
        },
      };
    }
    if (ruleAction.weightedTargetGroups) {
      const targetGroups = ruleAction.weightedTargetGroups.map(weightedTargetGroup => {
        //this.node.addDependency(weightedTargetGroup.targetGroup);
        return {
          targetGroupIdentifier: weightedTargetGroup.targetGroup.targetGroupId,
          weight: weightedTargetGroup.weight,
        }
      });

      return {
        forward: {
          targetGroups,
        },
      };
    }
    if (ruleAction.targetGroup) {
      //this._resource.node.addDependency(ruleAction.targetGroup)
      return {
        forward: {
          targetGroups: [
            {
              targetGroupIdentifier: ruleAction.targetGroup.targetGroupId,
              weight: 100,
            },
          ],
        },
      };
    }
    return {};
  }

  private transformRuleConditionsToCfnProperty(ruleConditions?: RuleConditions): generated.CfnRule.MatchProperty {
    const { headerMatches, methodMatch, pathMatch } = ruleConditions ?? {};

    const matchProperty: generated.CfnRule.MatchProperty = {
      httpMatch: {
        headerMatches: headerMatches?.map(({ headerName, matchValue, caseSensitive = false, matchOperator }) => ({
          name: headerName,
          match: { [MatchOperator[matchOperator].toLowerCase()]: matchValue },
          caseSensitive,
        })),
        method: methodMatch,
        pathMatch: pathMatch && {
          caseSensitive: pathMatch?.caseSensitive ?? false,
          match: {
            [(pathMatch?.pathMatchType ?? PathMatchType.EXACT).toLowerCase()]: pathMatch?.path,
          },
        },
      },
    };

    return matchProperty;
  }

  // /**
  //  * In case a weight is not specified, a default weight is created
  //  * E.g. generateDefaultWeight(7); // Output: [15, 15, 14, 14, 14, 14, 14]
  //  */
  // private generateDefaultWeight(numberOfTargets: number): number[] {
  //   const defaultWeights: number[] = Array(numberOfTargets).fill(100 / numberOfTargets);

  //   const remainder = 100 % numberOfTargets;
  //   for (let i = 0; i < remainder; i++) {
  //     defaultWeights[i]++;
  //   }

  //   return defaultWeights;
  // }

  /**
   * Adds a rule to the listener
   * @param rule
   */
  public addListenerRule(rule: RuleProps) {
    new generated.CfnRule(this, `${rule.name}Rule`, {
      name: rule.name,
      action: this.transformRuleActionToCfnProperty(rule.action),
      priority: rule.priority,
      match: this.transformRuleConditionsToCfnProperty(rule.conditions),
      listenerIdentifier: this.listenerId,
      serviceIdentifier: this.service.serviceId,
    });

    // TODO Modify the Auth Policy of the service
    // this ruleStatement = this.buildStatement()
    //this.service.authPolicy.addStatements({})
  }
}

