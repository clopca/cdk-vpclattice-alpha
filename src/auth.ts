// import { PolicyDocument } from "aws-cdk-lib/aws-iam";

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
// export class AuthPolicy extends PolicyDocument {

//   // public static validateResourceIdentifier(id: string) {
//   // 	const pattern = /^((((sn)|(svc))-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork\/sn)|(service\/svc))-[0-9a-z]{17}))$/
//   // 	const validationSucceeded = id.length >= 21 && id.length <= 200 && pattern.test(id);
//   // 	if (!validationSucceeded) {
//   // 		throw new Error(`Invalid Resource Identifier: ${id}`);
//   // 	}
//   // }

//   constructor(scope: Construct, id: string) {
//     super(scope, id);
//     // something
//   }
// }
