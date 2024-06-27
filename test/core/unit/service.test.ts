import { EOL } from 'os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Service, LoggingDestination, AuthType } from '../../../src';
import { ServiceNetwork } from '../../../src/service-network';

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

  test('Basic creation with custom name', () => {
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

  describe('Service logging destination validation', () => {
    test('Service with logging destination to cloudwatch', () => {
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

    test('Service with logging destination to kinesis', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const kinesisStream = Stream.fromStreamArn(stack, 'KinesisStream', 'arn:aws:kinesis:us-east-1:123456789012:stream/my-stream');

      // WHEN
      new Service(stack, 'Params', {
        name: 'mycustomlatticeservicename',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.kinesis(kinesisStream)],
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
        AuthType: 'AWS_IAM',
        Name: 'mycustomlatticeservicename',
      });
      Template.fromStack(stack).hasResource('AWS::VpcLattice::AccessLogSubscription', {});
    });

    test('Service with multiple logging destinations', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const logGroup = new LogGroup(stack, 'LogGroup');
      const kinesisStream = new Stream(stack, 'KinesisStream');

      // WHEN
      new Service(stack, 'Service', {
        name: 'my-service',
        loggingDestinations: [LoggingDestination.cloudwatch(logGroup), LoggingDestination.kinesis(kinesisStream)],
      });

      // THEN
      Template.fromStack(stack).resourceCountIs('AWS::VpcLattice::AccessLogSubscription', 2);
    });

    test('Error with duplicate logging destination type', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const logGroup1 = new LogGroup(stack, 'LogGroup1');
      const logGroup2 = new LogGroup(stack, 'LogGroup2');
      const kinesisStream1 = new Stream(stack, 'KinesisStream1');
      const kinesisStream2 = new Stream(stack, 'KinesisStream2');

      // WHEN & THEN
      expect(() => {
        new Service(stack, 'Params', {
          name: 'mycustomlatticeservicename',
          authType: AuthType.AWS_IAM,
          loggingDestinations: [LoggingDestination.cloudwatch(logGroup1), LoggingDestination.cloudwatch(logGroup2)],
        });
      }).toThrow();

      // WHEN & THEN
      expect(() => {
        new Service(stack, 'Params', {
          name: 'mycustomlatticeservicename',
          authType: AuthType.AWS_IAM,
          loggingDestinations: [LoggingDestination.kinesis(kinesisStream1), LoggingDestination.kinesis(kinesisStream2)],
        });
      }).toThrow();
    });
  });

  test('Service with custom domain and certificate', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new Service(stack, 'Service', {
      name: 'my-service',
      customDomainName: 'example.com',
      certificateArn: 'arn:aws:acm:us-west-2:123456789012:certificate/12345678-1234-1234-1234-123456789012',
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      Name: 'my-service',
      CustomDomainName: 'example.com',
      CertificateArn: 'arn:aws:acm:us-west-2:123456789012:certificate/12345678-1234-1234-1234-123456789012',
    });
  });

  test('Service with auth policy', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const role = new iam.Role(stack, 'TestRole', {
      assumedBy: new iam.AccountRootPrincipal(),
    });

    // WHEN
    new Service(stack, 'Service', {
      name: 'my-service',
      authType: AuthType.AWS_IAM,
      allowedPrincipals: [role],
    });

    // THEN
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

  test('Service with custom auth statement', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const customStatement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['vpc-lattice-svcs:CustomAction'],
      resources: ['*'],
      principals: [new iam.ArnPrincipal('arn:aws:iam::123456789012:role/CustomRole')],
    });

    // WHEN
    new Service(stack, 'Service', {
      name: 'my-service',
      authType: AuthType.AWS_IAM,
      authStatements: [customStatement],
    });

    // THEN
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

  test('Service with removal policy', () => {
    const stack = new cdk.Stack();
    new Service(stack, 'Service', {
      name: 'my-service',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    Template.fromStack(stack).hasResource('AWS::VpcLattice::Service', {
      DeletionPolicy: 'Delete',
    });
  });

  test('Service with service network association', () => {
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

  test('Service with resource sharing', () => {
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
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service1', {
            name: 'abc-xyz-34ab',
          }),
      ).not.toThrow();

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service2', {
            name: '124pp-33',
          }),
      ).not.toThrow();
    });

    test('Fails with message on invalid service names', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const name = `svc-${new Array(41).join('$')}`;
      const expectedErrors = [
        `Invalid Service name (value: ${name})`,
        'Service name must be at least 3 and no more than 40 characters',
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      ].join(EOL);

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service', {
            name,
          }),
      ).toThrow(expectedErrors);
    });

    test('Fails if service name has less than 3 or more than 40 characters', () => {
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service1', {
            name: 'a',
          }),
      ).toThrow(/at least 3/);

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service2', {
            name: new Array(41).join('x'),
          }),
      ).toThrow(/no more than 40/);
    });

    test('Fails if service name does not follow the specified pattern', () => {
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service1', {
            name: 'aAa',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service2', {
            name: 'a--a',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service3', {
            name: 'a./a-a',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service4', {
            name: 'a//a-a',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service5', {
            name: 'svc-a',
          }),
      ).toThrow(
        'Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      );

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service6', {
            name: '-abc123',
          }),
      ).toThrow(
        'Service name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, periods and forward slashes',
      );

      // WHEN & THEN
      expect(
        () =>
          new Service(stack, 'Service7', {
            name: 'abc123-',
          }),
      ).toThrow(
        'Service name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, periods and forward slashes',
      );
    });
  });

  test('Error with invalid auth policy', () => {
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

  test('Import fromServiceArn', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const service = Service.fromServiceArn(stack, 'ImportedService', 'arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef');

    // THEN
    expect(service.serviceArn).toBe('arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef');
    expect(service.serviceId).toBe('svc-12345abcdef');
  });

  test('Import with wrong arn format', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const invalidArn1 = 'arn:aws:vpc-lattice:us-east-1:123456789012:svc-12345abcdef';
    const invalidArn2 = 'arn:aws:vpc-lattice:123456789012:service/svc-12345abcdef';
    const invalidArn3 = 'arn:aws:vpc:us-east-1:123456789012:service/svc-12345abcdef';
    const invalidArn4 = 'aws:vpc-lattice:us-east-1:123456789012:service/svc-12345abcdef';

    // WHEN & THEN
    expect(() => {
      Service.fromServiceArn(stack, 'ImportedService1', invalidArn1);
    }).toThrow(`Service arn should be in the format 'arn:<PARTITION>:vpc-lattice:<REGION>:<ACCOUNT>:service/<NAME>', got ${invalidArn1}.`);

    // WHEN & THEN
    expect(() => {
      Service.fromServiceArn(stack, 'ImportedService1', invalidArn2);
    }).toThrow(`Service arn should be in the format 'arn:<PARTITION>:vpc-lattice:<REGION>:<ACCOUNT>:service/<NAME>', got ${invalidArn2}.`);

    // WHEN & THEN
    expect(() => {
      Service.fromServiceArn(stack, 'ImportedService1', invalidArn3);
    }).toThrow(`Service arn should be in the format 'arn:<PARTITION>:vpc-lattice:<REGION>:<ACCOUNT>:service/<NAME>', got ${invalidArn3}.`);

    // WHEN & THEN
    expect(() => {
      Service.fromServiceArn(stack, 'ImportedService1', invalidArn4);
    }).toThrow(`Service arn should be in the format 'arn:<PARTITION>:vpc-lattice:<REGION>:<ACCOUNT>:service/<NAME>', got ${invalidArn4}.`);
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
