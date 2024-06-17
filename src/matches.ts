import { MatchOperator, PathMatchType, HTTPMethods } from './index';
/**
 * An HTTPMatch for creating rules
 * At least one of headermatch, method or patchmatches must be created
 */
export interface HTTPMatch {
  /**
   * Properties to Create A HeaderMatch
   * @default - No header match
   */
  readonly headerMatches?: HeaderMatch[];

  /**
   * Method to match against
   * @default - No header match
   */
  readonly method?: HTTPMethods;

  /**
   * Properties to Create A PathMatch
   * @default - No path match
   */
  readonly pathMatches?: PathMatch;
}

/**
 * Header Matches for creating rules
 */
export interface HeaderMatch {
  /**
   * The name of the header to match
   */
  readonly headername: string;

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
