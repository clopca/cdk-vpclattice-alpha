/**
 * The authentication method used to be used.
 */
export enum AuthType {
	/** The resource does not use an IAM policy. */
	NONE = 'NONE',

	/** The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required. **/
	AWS_IAM = 'AWS_IAM',
}


// import { Construct } from 'constructs';


// export interface IAuthPolicyProps {
// 	/**
// 	   * The ID or Amazon Resource Name (ARN) of the service network
// 	   * or service for which the policy is created.
// 	   */
// 	readonly resourceIdentifier: string;
// }

// /**
//  * An Auth Policy
//  * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html
//  */
// export class AuthPolicy extends Construct {

// 	// public static validateResourceIdentifier(id: string) {
// 	// 	const pattern = /^((((sn)|(svc))-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork\/sn)|(service\/svc))-[0-9a-z]{17}))$/
// 	// 	const validationSucceeded = id.length >= 21 && id.length <= 200 && pattern.test(id);
// 	// 	if (!validationSucceeded) {
// 	// 		throw new Error(`Invalid Resource Identifier: ${id}`);
// 	// 	}
// 	// }

// 	constructor(scope: Construct, id: string, props: IAuthPolicyProps) {
// 		super(scope, id);
// 		// something
// 	}
// }