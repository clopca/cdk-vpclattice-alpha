import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { Construct } from 'constructs';
import type { IListener } from './listener';
import type { RuleAction } from './rule-action';
import type { RuleMatch } from './rule-match';
import type { IService } from './service';

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
}

export interface RuleProps {
  /**
   * the action for the rule, is either a fixed Response, or a being sent to  Weighted TargetGroup
   */
  readonly action: RuleAction;
  /**
   * The listener to attach the rule to
   */
  readonly listener: IListener;
  /**
   * the Matching criteria for the rule. This must contain at least one of
   * header, method or patchMatches
   */
  readonly match?: RuleMatch;
  /**
   * A name for the the Rule
   */
  readonly name: string;
  /**
   * The priority of this rule, a lower priority will be processed first
   */
  readonly priority: number;
  /**
   * The service to attach the rule to
   */
  readonly service: IService;
}

/**
 * Define a new listener rule
 */
export class ListenerRule extends Construct {
  /**
   * The ARN of this rule
   */
  public readonly listenerRuleArn: string;

  private readonly match?: RuleMatch;

  private readonly listener: IListener;
  private readonly action: RuleAction;
  private readonly service: IService;

  constructor(scope: Construct, id: string, props: RuleProps) {
    super(scope, id);

    this.match = props.match;
    this.action = props.action;
    this.service = props.service;

    this.listener = props.listener;

    const resource = new generated.CfnRule(this, `Rule${props.name}`, {
      name: props.name,
      action: this.action,
      listenerIdentifier: this.listener.listenerId,
      serviceIdentifier: this.service.serviceId,
      match: { httpMatch: this.match ?? {} },
      priority: props.priority,
    });

    this.listenerRuleArn = resource.ref;

    // this.node.addValidation({ validate: () => this.validateListenerRule() });
  }
}
