export enum MappingRecordType {
  CNAME = 'CNAME',
  ALIAS = 'ALIAS',
}

// export function getLatticePrefixList(region: string, networkProtocol: string): string {
//   let prefixListId = ""
//   switch (region) {
//     case "eu-central-1":
//       if (networkProtocol == "ipv4") { prefixListId = "pl-08d9db512f7ada124" }
//       if (networkProtocol == "ipv6") { prefixListId = "pl-059d8786dae17d9ec" }
//       break;
//     case "eu-west-1":
//       if (networkProtocol == "ipv4") { prefixListId = "XXXXXXXXXXXXXXXXXXXX" }
//       if (networkProtocol == "ipv6") { prefixListId = "XXXXXXXXXXXXXXXXXXXX" }
//     case "us-east-1":
//       if (networkProtocol == "ipv4") { prefixListId = "XXXXXXXXXXXXXXXXXXXX" }
//       if (networkProtocol == "ipv6") { prefixListId = "XXXXXXXXXXXXXXXXXXXX" }

//   }
//   return prefixListId
// }

/**
 * Fixed response codes
 */
export enum HttpFixedResponse {
  /**
   * OK 200
   */
  OK = 200,

  /**
   * Created 201
   */
  CREATED = 201,

  /**
   * Accepted
   */
  ACCEPTED = 202,

  /**
   * No Content 204
   */
  NO_CONTENT = 204,

  /**
   * Not Found 404
   */
  NOT_FOUND = 404,

  /**
   * Internal server error 500
   */
  INTERNAL_SERVER_ERROR = 500,
}

/**
 * HTTP Methods
 */
export enum HttpMethod {
  /**
   * GET Method
   */
  GET = 'GET',

  /**
   * POST Method
   */
  POST = 'POST',

  /**
   * PUT Method
   */
  PUT = 'PUT',

  /**
   * Delete Method
   */
  DELETE = 'DELETE',

  /**
   * PATCH Method
   */
  PATCH = 'PATCH',

  /**
   * Head Method
   */
  HEAD = 'HEAD',

  /**
   * Connect Method
   */
  CONNECT = 'CONNECT',

  /**
   * Options Method
   */
  OPTIONS = 'OPTIONS',

  /**
   * Trace Method
   */
  TRACE = 'TRACE',
}
