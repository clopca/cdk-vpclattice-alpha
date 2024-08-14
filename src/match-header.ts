export interface IMatchHeader {
  readonly name: string;
  readonly match: { [key: string]: string };
  readonly caseSensitive: boolean;
}

export class MatchHeader implements IMatchHeader {
  /**
   * Matches if the header value contains the given value
   * @param header - the header to match.
   * @param ruleMatchName - the name of the rule match.
   * @param caseSensitive - whether the match should be case sensitive.
   * @returns the rule match
   */
  public static contains(header: string, ruleMatchName = header, caseSensitive = false): IMatchHeader {
    return {
      name: ruleMatchName,
      match: { contains: header },
      caseSensitive,
    };
  }

  /**
   * Matches if the header value is exactly the given value
   * @param header - the header to match.
   * @param ruleMatchName - the name of the rule match.
   * @param caseSensitive - whether the match should be case sensitive.
   * @returns the rule match
   */
  public static exact(header: string, ruleMatchName = header, caseSensitive = false): IMatchHeader {
    return {
      name: ruleMatchName,
      match: { exact: header },
      caseSensitive,
    };
  }

  /**
   * Matches if the header value starts with the given value
   * @param header - the header to match.
   * @param ruleMatchName - the name of the rule match.
   * @param caseSensitive - whether the match should be case sensitive.
   * @returns the rule match
   */
  public static prefix(header: string, ruleMatchName = header, caseSensitive = false): IMatchHeader {
    return {
      name: ruleMatchName,
      match: { prefix: header },
      caseSensitive,
    };
  }

  readonly name: string;
  readonly match: { [key: string]: string };
  readonly caseSensitive: boolean;

  //constructor
  constructor(name: string, match: { [key: string]: string }, caseSensitive: boolean) {
    this.name = name;
    this.match = match;
    this.caseSensitive = caseSensitive;
  }
}
