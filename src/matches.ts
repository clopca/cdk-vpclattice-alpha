import type { MatchOperator } from './rules';
import type { HTTPMethod } from './util';

export interface RuleConditions {
  /**
   * Properties to Create A HeaderMatch
   * @default - No header match
   */
  readonly headerMatches?: HeaderMatch[];

  /**
   * Method to match against
   * @default - No header match
   */
  readonly methodMatch?: HTTPMethod;

  /**
   * Properties to Create A PathMatch
   * @default - No path match
   */
  readonly pathMatch?: PathMatch;
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
 * Header Matches for creating rules
 */
export interface HeaderMatch {
  /**
   * The name of the header to match
   */
  readonly headerName: string;

  /**
   * Whether the match should be case sensitive or not
   * @default true
   */
  readonly caseSensitive?: boolean;

  /**
   * Type of match to make
   */
  readonly matchOperator: MatchOperator;

  /**
   * Value to match against
   */
  readonly matchValue: string;
}

/**
 * Properties to create a PathMatch
 */
export interface PathMatch {
  /**
   * Whether the match should be case sensitive or not
   * @default true
   */
  readonly caseSensitive?: boolean;

  /**
   * Type of match to make
   * @default PathMatchType.EXACT
   */
  readonly pathMatchType?: PathMatchType;

  /**
   * Value to match against
   */
  readonly path: string;
}
