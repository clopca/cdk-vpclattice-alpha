import * as generated from 'aws-cdk-lib/aws-vpclattice';
import { Construct } from 'constructs';
import type { IListener } from './listener';
import type { IMatchHeader } from './match-header';
import type { IMatchPath } from './match-path';
import type { RuleAction } from './rule-action';
import type { RuleMatch } from './rule-match';
import type { IService } from './service';
import type { HttpMethod } from './util';

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
   * The method match criteria for the rule.
   */
  readonly matchMethod?: HttpMethod;
  /**
   * The path match criteria for the rule.
   */
  readonly matchPath?: IMatchPath;
  /**
   * The header match criteria for the rule.
   */
  readonly matchHeader?: IMatchHeader[];
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

  private readonly matchMethod?: HttpMethod;
  private readonly matchPath?: IMatchPath;
  private readonly matchHeader?: IMatchHeader[];

  private readonly match: RuleMatch;
  private readonly listener: IListener;
  private readonly action: RuleAction;
  private readonly service: IService;

  constructor(scope: Construct, id: string, props: RuleProps) {
    super(scope, id);

    this.matchMethod = props.matchMethod;
    this.matchPath = props.matchPath;
    this.matchHeader = props.matchHeader;
    this.match = {
      method: this.matchMethod,
      pathMatch: this.matchPath,
      headerMatches: this.matchHeader,
    };
    this.action = props.action;
    this.service = props.service;

    this.listener = props.listener;

    const resource = new generated.CfnRule(this, `Rule${props.name}`, {
      name: props.name,
      action: this.action,
      listenerIdentifier: this.listener.listenerId,
      serviceIdentifier: this.service.serviceId,
      match: { httpMatch: this.match },
      priority: props.priority,
    });

    this.listenerRuleArn = resource.ref;

    // this.node.addValidation({ validate: () => this.validateListenerRule() });
  }
}
