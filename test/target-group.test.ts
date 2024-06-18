// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';

// import { LogGroup } from 'aws-cdk-lib/aws-logs';
// import { Service, LoggingDestination, AuthType } from '../src';


// describe('TargetGroup', () => {
// 	test('DeniesInvalidName', () => {
// 		// GIVEN
// 		const stack = new cdk.Stack();

// 		// WHEN & THEN
// 		expect(() => {
// 			new TargetGroup(stack, 'Params', {
// 				name: 'svc-adgfwg2', // Invalid service name
// 			});
// 		}).toThrow();

// 		expect(() => {
// 			new Service(stack, 'Params2', {
// 				name: 'SvcName1', // Invalid service name
// 			});
// 		}).toThrow();
// 	});
// })