/* eslint-disable @typescript-eslint/indent */
import type { HttpMethod } from './util';

// Intermediate interfaces
export interface IHeaderMatch {
  readonly name: string;
  readonly match: { [key: string]: string };
  readonly caseSensitive: boolean;
}

export interface IPathMatch {
  readonly match: { [key: string]: string };
  readonly caseSensitive: boolean;
}

export class RuleMatch {
  public static methodMatch(method: HttpMethod) {
    return method;
  }

  /**
   * Matches if the header value contains the given value
   * @param header - The header to match
   * @param ruleMatchName - The name of the rule match
   * @param caseSensitive - Whether the match should be case sensitive
   * @returns The rule match
   */
  public static headerContains(header: string, ruleMatchName = header, caseSensitive = false): IHeaderMatch {
    return {
      name: ruleMatchName,
      match: { contains: header },
      caseSensitive,
    };
  }

  /**
   * Matches if the header value is exactly the given value
   * @param header - The header to match
   * @param ruleMatchName - The name of the rule match
   * @param caseSensitive - Whether the match should be case sensitive
   * @returns The rule match
   */
  public static headerExact(header: string, ruleMatchName = header, caseSensitive = false): IHeaderMatch {
    return {
      name: ruleMatchName,
      match: { exact: header },
      caseSensitive,
    };
  }

  /**
   * Matches if the header value starts with the given value
   * @param header - The header to match
   * @param ruleMatchName - The name of the rule match
   * @param caseSensitive - Whether the match should be case sensitive
   * @returns The rule match
   */
  public static headerPrefix(header: string, ruleMatchName = header, caseSensitive = false): IHeaderMatch {
    return {
      name: ruleMatchName,
      match: { prefix: header },
      caseSensitive,
    };
  }

  /**
   * Matches if the path is exactly the given value
   * @param path - The path to match
   * @param caseSensitive - Whether the match should be case sensitive
   * @returns The rule match
   */
  public static pathExact(path: string, caseSensitive = false): IPathMatch {
    return {
      match: { exact: path },
      caseSensitive,
    };
  }

  /**
   * Matches if the path starts with the given value
   * @param path - The path to match
   * @param caseSensitive - Whether the match should be case sensitive
   * @returns The rule match
   */
  public static pathPrefix(path: string, caseSensitive = false): IPathMatch {
    return {
      match: { prefix: path },
      caseSensitive,
    };
  }

  method?: HttpMethod;
  headerMatches?: IHeaderMatch[];
  pathMatch?: IPathMatch;
}
