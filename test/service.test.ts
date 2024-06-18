import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Service, LoggingDestination, AuthType } from '../src';


describe('Service', () => {
  test('DeniesInvalidName', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN & THEN
    expect(() => {
      new Service(stack, 'Params', {
        name: 'svc-adgfwg2', // Invalid service name
      });
    }).toThrow();

    expect(() => {
      new Service(stack, 'Params2', {
        name: 'SvcName1', // Invalid service name
      });
    }).toThrow();
  });

  test('BasicCreationNoCustomDNSorDomain', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new Service(stack, 'Params', {
      name: 'mycustomlatticeservicename',
      authType: AuthType.AWS_IAM,
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      AuthType: 'AWS_IAM',
      Name: 'mycustomlatticeservicename',
    });

  });

  test('BasicServiceLoggingCloudWatch', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const logGroup = new LogGroup(stack, 'LogsTest', {
      logGroupName: 'vpc-lattice-name',
    });
    new Service(stack, 'Params', {
      name: 'mycustomlatticeservicename',
      authType: AuthType.AWS_IAM,
      loggingDestinations: [
        LoggingDestination.cloudwatch(logGroup),
      ],
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      AuthType: 'AWS_IAM',
      Name: 'mycustomlatticeservicename',
    });
    Template.fromStack(stack).hasResource('AWS::VpcLattice::AccessLogSubscription', {});

  });

  test('NoDuplicateLoggingDestinationType', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const logGroup1 = new LogGroup(stack, 'LogsTest1', {
      logGroupName: 'vpc-lattice-name-1',
    });
    const logGroup2 = new LogGroup(stack, 'LogsTest2', {
      logGroupName: 'vpc-lattice-name-2',
    });

    //THEN
    expect(() => {
      new Service(stack, 'Params', {
        name: 'mycustomlatticeservicename',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [
          LoggingDestination.cloudwatch(logGroup1),
          LoggingDestination.cloudwatch(logGroup2),
        ],
      });
    }).toThrow();


  });


});
