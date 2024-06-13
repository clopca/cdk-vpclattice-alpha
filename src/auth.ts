/**
 * The authentication method used to be used
 */
export declare enum AuthType {
	/** The resource does not use an IAM policy. */
	NONE = "NONE",

	/** The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required. **/
	AWS_IAM = "AWS_IAM",
}