import { EOL } from 'os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Service, LoggingDestination, AuthType } from '../../src';
import { ServiceNetwork } from '../../src/service-network';

// Let's define first all the tests we want to have in the service.test.ts file

// default service
// default service with custom domain and certificate
// service with auth policy
// service with custom auth statements
// service with removal policy
// service with service network association
// service with share resource
// service with multiple logging destinations
// service with invalid name
// import from service arn
// import from service id
// import with wrong arn format
// import with wrong id format

describe('Service', () => {
  // default service
  test('Default service', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new Service(stack, 'Service', {});

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      AuthType: 'NONE',
    });
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
      loggingDestinations: [LoggingDestination.cloudwatch(logGroup)],
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
        loggingDestinations: [LoggingDestination.cloudwatch(logGroup1), LoggingDestination.cloudwatch(logGroup2)],
      });
    }).toThrow();
  });

  test('CustomDomainAndCertificate', () => {
    const stack = new cdk.Stack();
    new Service(stack, 'Service', {
      name: 'my-service',
      customDomainName: 'example.com',
      certificateArn: 'arn:aws:acm:us-west-2:123456789012:certificate/12345678-1234-1234-1234-123456789012',
    });

    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      Name: 'my-service',
      CustomDomainName: 'example.com',
      CertificateArn: 'arn:aws:acm:us-west-2:123456789012:certificate/12345678-1234-1234-1234-123456789012',
    });
  });

  test('ServiceWithAuthPolicy', () => {
    const stack = new cdk.Stack();
    const role = new iam.Role(stack, 'TestRole', {
      assumedBy: new iam.AccountRootPrincipal(),
    });

    new Service(stack, 'Service', {
      name: 'my-service',
      authType: AuthType.AWS_IAM,
      allowedPrincipals: [role],
    });

    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      Name: 'my-service',
      AuthType: 'AWS_IAM',
    });

    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::AuthPolicy', {
      Policy: {
        Statement: [
          {
            Effect: 'Allow',
            Action: 'vpc-lattice-svcs:Invoke',
            Resource: '*',
            Principal: {
              AWS: {
                'Fn::GetAtt': ['TestRole', 'Arn'],
              },
            },
          },
        ],
      },
    });
  });

  test('ServiceWithCustomAuthStatements', () => {
    const stack = new cdk.Stack();
    const customStatement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['vpc-lattice-svcs:CustomAction'],
      resources: ['*'],
      principals: [new iam.ArnPrincipal('arn:aws:iam::123456789012:role/CustomRole')],
    });

    new Service(stack, 'Service', {
      name: 'my-service',
      authType: AuthType.AWS_IAM,
      authStatements: [customStatement],
    });

    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::AuthPolicy', {
      Policy: {
        Statement: [
          {
            Effect: 'Allow',
            Action: 'vpc-lattice-svcs:CustomAction',
            Resource: '*',
            Principal: {
              AWS: 'arn:aws:iam::123456789012:role/CustomRole',
            },
          },
        ],
      },
    });
  });

  test('ServiceWithRemovalPolicy', () => {
    const stack = new cdk.Stack();
    new Service(stack, 'Service', {
      name: 'my-service',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    Template.fromStack(stack).hasResource('AWS::VpcLattice::Service', {
      DeletionPolicy: 'Delete',
    });
  });

  test('ServiceNetworkAssociation', () => {
    const stack = new cdk.Stack();
    const mockServiceNetwork = ServiceNetwork.fromArn(
      stack,
      'MockServiceNetwork',
      'arn:aws:vpc-lattice:us-west-2:123456789012:servicenetwork/sn-12345',
    );

    const service = new Service(stack, 'Service', {
      name: 'my-service',
    });

    service.associateWithServiceNetwork(mockServiceNetwork);

    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetworkServiceAssociation', {
      ServiceIdentifier: {
        'Fn::GetAtt': ['Service', 'Id'],
      },
      ServiceNetworkIdentifier: 'sn-12345',
    });
  });

  test('ShareResource', () => {
    const stack = new cdk.Stack();
    const service = new Service(stack, 'Service', {
      name: 'my-service',
    });

    service.shareResource({
      name: 'MySharedService',
      allowExternalPrincipals: true,
      principals: ['arn:aws:iam::123456789012:root'],
    });

    Template.fromStack(stack).hasResourceProperties('AWS::RAM::ResourceShare', {
      Name: 'MySharedService',
      AllowExternalPrincipals: true,
      Principals: ['arn:aws:iam::123456789012:root'],
      ResourceArns: [
        {
          'Fn::GetAtt': ['Service', 'Arn'],
        },
      ],
    });
  });

  describe('Service name validation', () => {
    test('Service name validations', () => {
      const stack = new cdk.Stack();

      expect(
        () =>
          new Service(stack, 'Service1', {
            name: 'abc-xyz-34ab',
          }),
      ).not.toThrow();

      expect(
        () =>
          new Service(stack, 'Service2', {
            name: '124pp-33',
          }),
      ).not.toThrow();
    });

    test('Fails with message on invalid service names', () => {
      const stack = new cdk.Stack();
      const name = `svc-${new Array(41).join('$')}`;
      const expectedErrors = [
        `Invalid Service name (value: ${name})`,
        'Service name must be at least 3 and no more than 40 characters',
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      ].join(EOL);

      expect(
        () =>
          new Service(stack, 'Service', {
            name,
          }),
      ).toThrow(expectedErrors);
    });

    test('Fails if service name has less than 3 or more than 40 characters', () => {
      const stack = new cdk.Stack();

      expect(
        () =>
          new Service(stack, 'Service1', {
            name: 'a',
          }),
      ).toThrow(/at least 3/);

      expect(
        () =>
          new Service(stack, 'Service2', {
            name: new Array(41).join('x'),
          }),
      ).toThrow(/no more than 40/);
    });

    test('Fails if service name does not follow the specified pattern', () => {
      const stack = new cdk.Stack();

      expect(
        () =>
          new Service(stack, 'Service1', {
            name: 'aAa',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      expect(
        () =>
          new Service(stack, 'Service2', {
            name: 'a--a',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      expect(
        () =>
          new Service(stack, 'Service3', {
            name: 'a./a-a',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      expect(
        () =>
          new Service(stack, 'Service4', {
            name: 'a//a-a',
          }),
      ).toThrow(
        'Service name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, periods and forward slashes',
      );
    });
  });

  test('InvalidAuthPolicy', () => {
    const stack = new cdk.Stack();
    const invalidStatement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['invalid:Action'],
      resources: ['*'],
    });

    expect(() => {
      new Service(stack, 'Service', {
        name: 'my-service',
        authType: AuthType.AWS_IAM,
        authStatements: [invalidStatement],
      });
    }).toThrow(/The following errors were found in the policy/);
  });

  test('MultipleLoggingDestinations', () => {
    const stack = new cdk.Stack();
    const logGroup = new LogGroup(stack, 'LogGroup');
    const firehoseArn = 'arn:aws:firehose:us-west-2:123456789012:deliverystream/my-stream';
    const kinesisStream = Stream.fromStreamArn(stack, 'KinesisStream', firehoseArn);

    new Service(stack, 'Service', {
      name: 'my-service',
      loggingDestinations: [LoggingDestination.cloudwatch(logGroup), LoggingDestination.kinesis(kinesisStream)],
    });

    Template.fromStack(stack).resourceCountIs('AWS::VpcLattice::AccessLogSubscription', 2);
  });

  test('Import with wrong arn format', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const invalidArn = 'arn:aws:vpc-lattice:us-east-1:123456789012:svc-12345abcdef';
    expect(() => {
      Service.fromServiceArn(stack, 'ImportedService', invalidArn);
    }).toThrow(Error(`Service arn should be in the format 'arn:<PARTITION>:vpc-lattice:<REGION>:<ACCOUNT>:service/<NAME>', got ${invalidArn}.`));
  });

  test('Import fromServiceArn', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const service = Service.fromServiceArn(stack, 'ImportedService', 'arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef');

    // THEN
    expect(service.serviceArn).toBe('arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef');
    expect(service.serviceId).toBe('svc-12345abcdef');
  });

  test('Import fromServiceId', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const service = Service.fromServiceId(stack, 'ImportedService', 'svc-12345abcdef');

    // THEN
    expect(service.serviceId).toBe('svc-12345abcdef');
    expect(service.serviceArn).toMatch(/^arn:aws:vpc-lattice:[^:]+:\d+:service\/svc-12345abcdef$/);
  });
});
