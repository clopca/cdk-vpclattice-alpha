import { IResource, Resource } from "aws-cdk-lib";
import { Service } from "./service";
import { Construct } from "constructs";
import { RuleAction, IRule, MatchOperator } from "./rules";
import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { HTTPFixedResponse } from "./util";
import { PathMatchType, RuleConditions } from "./matches";

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
  addListenerRule(rule: IRule): void;
}

/**
 * Properties to Create a Lattice Listener
 */
export interface ListenerProps {
  /**
   *  * A default action that will be taken if no rules match.
   *  @default HTTPFixedResponse.NOT_FOUND
   */
  readonly defaultAction?: RuleAction;

  /**
   * protocol that the listener will listen on
   * @default ListenerProtocol.HTTPS
   */
  readonly protocol?: ListenerProtocol;

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
   * Rules to add to the listener.
   */
  readonly rules?: IRule[];
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
  readonly listenerId: string;
  readonly listenerArn: string;

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
  readonly defaultAction: RuleAction

  /**
   * The service this listener is attached to
   */
  service: Service;

  /**
   * The listener rules to add
   */
  rules: IRule[];



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
      errors.push(`Port ${this.port} out of range (0-65535)`)
    }
    return errors;
  }

  protected validateListenerName(name: string) {
    const errors: string[] = [];
    const pattern = /^(?!listener-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$/;
    const validationSucceeded = name.length >= 3 && name.length <= 63 && pattern.test(name)
    if (!validationSucceeded) {
      errors.push(`Invalid Listener Name: ${name} (must be between 3-63 characters, and must be a valid name)`);
    }
    return errors;
  }

  protected validateRulePriorities(): string[] {
    const errors: string[] = [];
    const rulePriorities = new Set(this.rules.map((rule) => rule.priority));
    if (this.rules.length > rulePriorities.size) {
      errors.push('Invalid Rule Priorities: Duplicate priorities found');
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
    if (typeof ruleAction === 'number') {
      // RuleAction is an HTTPFixedResponse
      return {
        fixedResponse: {
          statusCode: ruleAction,
        },
      }
    } else {
      // RuleAction is an array of WeightedTargetGroup
      const targetGroups = ruleAction.map((weightedTargetGroup) => ({
        targetGroupIdentifier: weightedTargetGroup.targetGroup.node.id,
        weight: weightedTargetGroup.weight,
      }))

      return {
        forward: {
          targetGroups,
        },
      }
    }
  }

  private transformRuleConditionsToCfnProperty(ruleConditions: RuleConditions): generated.CfnRule.MatchProperty {
    const { headerMatches, methodMatch, pathMatch } = ruleConditions;

    const matchProperty: generated.CfnRule.MatchProperty = {
      httpMatch:
      {
        headerMatches: headerMatches?.map(({ headerName, matchValue, caseSensitive = false, matchOperator }) => ({
          name: headerName,
          match: { [MatchOperator[matchOperator].toLowerCase()]: matchValue },
          caseSensitive,
        })),
        method: methodMatch,
        pathMatch: {
          caseSensitive: pathMatch?.caseSensitive ?? false,
          match: {
            [(pathMatch?.pathMatchType ?? PathMatchType.EXACT).toLowerCase()]: pathMatch?.path,
          },
        },
      }
    }

    return matchProperty;
  }

  // /**
  //  * In case a priority is not specified, a default priority is created
  //  * E.g. generateDefaultPriority(7); // Output: [15, 15, 14, 14, 14, 14, 14]
  //  */
  // private generateDefaultPriority(numberOfRules: number): number[] {
  //   const defaultPriorities: number[] = Array(numberOfRules).fill(100 / numberOfRules);

  //   const remainder = 100 % numberOfRules;
  //   for (let i = 0; i < remainder; i++) {
  //     defaultPriorities[i]++;
  //   }

  //   return defaultPriorities;
  // }

  // ------------------------------------------------------
  // Constructor
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: ListenerProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    // ------------------------------------------------------
    // Set properties or defaults
    // ------------------------------------------------------
    this.name = this.physicalName
    this.service = props.service
    this.protocol = props.protocol ?? ListenerProtocol.HTTPS
    this.port = props.port ?? (props.protocol === ListenerProtocol.HTTP ? 80 : 443)
    this.rules = props.rules ?? []
    this.defaultAction = props.defaultAction ?? HTTPFixedResponse.NOT_FOUND


    // ------------------------------------------------------
    // Validation
    // ------------------------------------------------------
    if (props.name) { this.node.addValidation({ validate: () => this.validateListenerName(this.physicalName) }) }
    if (props.rules) { this.node.addValidation({ validate: () => this.validateRulePriorities() }) }
    this.node.addValidation({ validate: () => this.validatePort() })


    // ------------------------------------------------------
    // L1 Instantiation
    // ------------------------------------------------------
    const listener = new generated.CfnListener(this, 'Resource', {
      name: props.name,
      defaultAction: this.transformRuleActionToCfnProperty(this.defaultAction),
      protocol: this.protocol,
      port: this.port,
      serviceIdentifier: this.service.serviceId,
    });

    // ------------------------------------------------------
    // Construct properties
    // ------------------------------------------------------
    this.listenerId = listener.attrId;
    this.listenerArn = listener.attrArn;

    // ------------------------------------------------------
    // Adds Listener Rules
    // ------------------------------------------------------
    if (props.rules) {
      props.rules.forEach((rule) => {
        this.addListenerRule(rule);
      });
    }

  }
  /**
   * Adds a target to the target Group
   * @param target
   */
  public addListenerRule(rule: IRule) {
    new generated.CfnRule(this, `${rule.node.addr}-Rule`, {
      action: this.transformRuleActionToCfnProperty(rule.action),
      priority: rule.priority,
      match: this.transformRuleConditionsToCfnProperty(rule.conditions),
      listenerIdentifier: this.listenerId,
      serviceIdentifier: this.service.serviceId,
    });
  }
}

