export interface IMatchPath {
  readonly match: { [key: string]: string };
  readonly caseSensitive: boolean;
}

export class MatchPath implements IMatchPath {
  /**
   * Matches if the path is exactly the given value
   * @param path - the path to match.
   * @param caseSensitive - whether the match should be case sensitive.
   * @returns the rule match
   */
  public static exact(path: string, caseSensitive = false): IMatchPath {
    return {
      match: { exact: path },
      caseSensitive,
    };
  }

  /**
   * Matches if the path starts with the given value
   * @param path - the path to match.
   * @param caseSensitive - whether the match should be case sensitive.
   * @returns the rule match
   */
  public static prefix(path: string, caseSensitive = false): IMatchPath {
    return {
      match: { prefix: path },
      caseSensitive,
    };
  }

  readonly match: { [key: string]: string };
  readonly caseSensitive: boolean;

  //constructor
  constructor(match: { [key: string]: string }, caseSensitive: boolean) {
    this.match = match;
    this.caseSensitive = caseSensitive;
  }
}
