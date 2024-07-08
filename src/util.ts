/**
 * Fixed response codes
 */
export enum HTTPFixedResponse {
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
export enum HTTPMethod {
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

/**
 * AuthTypes
 */
export enum AuthType {
  /**
   * No Authorization
   */
  NONE = 'NONE',

  /**
   * Use IAM Policy as
   */
  AWS_IAM = 'AWS_IAM',
}

/**
 * AccessModes for the Service Network.
 * @enum
 */
export enum AuthPolicyAccessMode {
  /**
   * Allows for Unauthenticated (Anonymous) Access to the Service Network.
   * Anonymous principals are callers that don't sign their AWS requests
   * with Signature Version 4 (SigV4), and are within a VPC that is connected
   * to the service network.
   */
  UNAUTHENTICATED = 'UNAUTHENTICATED',

  /**
   * Authenticated Access to the Service Network.
   */
  AUTHENTICATED_ONLY = 'AUTHENTICATED',

  /**
   * Only principals from this Org can access the Service Network.
   */
  ORG_ONLY = 'ORG_ONLY',
}
