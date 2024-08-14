/* eslint-disable @typescript-eslint/indent */
import type { IMatchHeader } from './match-header';
import type { IMatchPath } from './match-path';
import type { HttpMethod } from './util';

export class RuleMatch {
  method?: HttpMethod;
  headerMatches?: IMatchHeader[];
  pathMatch?: IMatchPath;

  //constructor
  constructor(method?: HttpMethod, headerMatches?: IMatchHeader[], pathMatch?: IMatchPath) {
    this.method = method;
    this.headerMatches = headerMatches;
    this.pathMatch = pathMatch;
  }
}
