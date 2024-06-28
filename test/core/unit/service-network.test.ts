import { EOL } from 'os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Service, LoggingDestination, AuthType } from '../../../src';
import { ServiceNetwork } from '../../../src/service-network';

describe('Service network', () => {
  // default service
  test('Default service network ', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new ServiceNetwork(stack, 'ServiceNetwork', {});

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetwork', {
      AuthType: 'NONE',
    });
  });

  test('Basic creation with custom name', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new ServiceNetwork(stack, 'Params', {
      name: 'mycustomlatticeservicenetworkname',
      authType: AuthType.AWS_IAM,
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetwork', {
      AuthType: 'AWS_IAM',
      Name: 'mycustomlatticeservicenetworkname',
    });
  });

  test('Service network with removal policy', () => {
    const stack = new cdk.Stack();
    new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    Template.fromStack(stack).hasResource('AWS::VpcLattice::ServiceNetwork', {
      DeletionPolicy: 'Delete',
    });
  });

  test('Service network with resource sharing', () => {
    const stack = new cdk.Stack();
    const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
    });

    serviceNetwork.shareResource({
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
          'Fn::GetAtt': ['ServiceNetworkEF29AF70', 'Arn'],
        },
      ],
    });
  });

  describe('Service network with methods', () => {
    test('Add auth policy statement', () => {
      const stack = new cdk.Stack();
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.addAuthPolicyStatement(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['vpc-lattice-svcs:Invoke'],
          resources: ['*'],
        }),
      );

      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::AuthPolicy', {
        Policy: {
          Statement: [
            {
              Effect: 'Allow',
              Action: 'vpc-lattice-svcs:Invoke',
              Resource: '*',
            },
          ],
        },
      });
    });

    test('Add auth policy statement with invalid statement', () => {
      const stack = new cdk.Stack();
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      expect(() => {
        serviceNetwork.addAuthPolicyStatement(
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:GetObject'],
            resources: ['*'],
          }),
        );
      }).toThrow(/Invalid action detected/);
    });

    test('Add auth policy statement with invalid principal', () => {
      const stack = new cdk.Stack();
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      expect(() => {
        serviceNetwork.addAuthPolicyStatement(
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['vpc-lattice-svcs:Invoke'],
            resources: ['*'],
            principals: [new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})],
          }),
        );
      }).toThrow(/Invalid principal type/);
    });

    test('Add auth policy statement with invalid resource', () => {
      const stack = new cdk.Stack();
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      expect(() => {
        serviceNetwork.addAuthPolicyStatement(
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['vpc-lattice-svcs:Invoke'],
            resources: ['arn:aws:s3:::my-bucket'],
          }),
        );
      }).toThrow(/Invalid resource format/);
    });

    test('Grant access', () => {
      const stack = new cdk.Stack();
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });
      serviceNetwork.grantAccess([new iam.ArnPrincipal('arn:aws:iam::123456789012:role/MyRole')]);

      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::AuthPolicy', {
        Policy: {
          Statement: [
            {
              Effect: 'Allow',
              Action: 'vpc-lattice-svcs:Invoke',
              Resource: '*',
            },
          ],
        },
      });
    });

    test('Grant access with invalid principal', () => {
      const stack = new cdk.Stack();
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      expect(() => {
        serviceNetwork.grantAccess([new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})]);
      }).toThrow(/Invalid principal type/);
    });

    test('Service network with service association', () => {
      const stack = new cdk.Stack();
      const mockService = Service.fromServiceArn(stack, 'MockService', 'arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345');

      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.associateService(mockService);

      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetworkServiceAssociation', {
        ServiceIdentifier: 'svc-12345',
        ServiceNetworkIdentifier: {
          'Fn::GetAtt': ['ServiceNetworkEF29AF70', 'Id'],
        },
      });
    });

    test('Service network with VPC association', () => {
      const stack = new cdk.Stack();
      const vpc = new Vpc(stack, 'VPC', {
        vpcName: 'my-vpc',
      });

      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.associateVPC({
        vpc,
      });

      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetworkVpcAssociation', {
        ServiceNetworkIdentifier: {
          'Fn::GetAtt': ['ServiceNetworkEF29AF70', 'Id'],
        },
        VpcIdentifier: {
          Ref: 'VPCB9E5F0B4',
        },
      });
    });
  });

  describe('Auth policy validation', () => {
    test('Service with auth policy', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const role = new iam.Role(stack, 'TestRole', {
        assumedBy: new iam.AccountRootPrincipal(),
      });

      // WHEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service',
        authType: AuthType.AWS_IAM,
        allowedPrincipals: [role],
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetwork', {
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
                  'Fn::GetAtt': ['TestRole6C9272DF', 'Arn'],
                },
              },
            },
          ],
        },
      });
    });

    test('Error with invalid action', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const invalidActionStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject'],
        resources: ['*'],
      });

      // WHEN & THEN
      expect(() => {
        new ServiceNetwork(stack, 'ServiceInvalidAction', {
          name: 'my-service-invalid-action',
          authType: AuthType.AWS_IAM,
          authStatements: [invalidActionStatement],
        });
      }).toThrow(/Invalid action detected/);
    });

    test('Error with invalid principal type', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const invalidPrincipalStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['*'],
        principals: [new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})],
      });

      // WHEN & THEN
      expect(() => {
        new ServiceNetwork(stack, 'ServiceInvalidPrincipal', {
          name: 'my-service-invalid-principal',
          authType: AuthType.AWS_IAM,
          authStatements: [invalidPrincipalStatement],
        });
      }).toThrow(/Invalid principal type/);
    });

    test('Error with invalid resource format', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const invalidResourceStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['arn:aws:s3:::my-bucket'],
      });

      // WHEN & THEN
      expect(() => {
        new ServiceNetwork(stack, 'ServiceInvalidResource', {
          name: 'my-service-invalid-resource',
          authType: AuthType.AWS_IAM,
          authStatements: [invalidResourceStatement],
        });
      }).toThrow(/Invalid resource format/);
    });

    test('Error with multiple invalid elements', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const multipleInvalidStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject', 'vpc-lattice-svcs:Invoke'],
        resources: ['arn:aws:s3:::my-bucket', '*'],
        principals: [new iam.ServicePrincipal('ec2.amazonaws.com'), new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})],
      });

      // WHEN & THEN
      expect(() => {
        new ServiceNetwork(stack, 'ServiceMultipleInvalid', {
          name: 'my-service-multiple-invalid',
          authType: AuthType.AWS_IAM,
          authStatements: [multipleInvalidStatement],
        });
      }).toThrow(/The following errors were found in the VPC Lattice auth policy/);
    });

    test('Valid policy passes validation', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const validStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['*'],
        principals: [new iam.ArnPrincipal('arn:aws:iam::123456789012:role/MyRole')],
      });

      // WHEN & THEN
      expect(() => {
        new ServiceNetwork(stack, 'ServiceValid', {
          name: 'my-service-valid',
          authType: AuthType.AWS_IAM,
          authStatements: [validStatement],
        });
      }).not.toThrow();
    });

    test('Service with custom auth statement', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const customStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['*'],
        principals: [new iam.ArnPrincipal('arn:aws:iam::123456789012:role/CustomRole')],
      });

      // WHEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
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
              Action: 'vpc-lattice-svcs:Invoke',
              Resource: '*',
              Principal: {
                AWS: 'arn:aws:iam::123456789012:role/CustomRole',
              },
            },
          ],
        },
      });
    });
  });

  describe('Service network logging destination validation', () => {
    test('Service network with logging destination to cloudwatch', () => {
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN
      const logGroup = new LogGroup(stack, 'LogsTest', {
        logGroupName: 'vpc-lattice-name',
      });
      new ServiceNetwork(stack, 'Params', {
        name: 'mycustomlatticeservicename',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.cloudwatch(logGroup)],
      });

      //THEN
      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetwork', {
        AuthType: 'AWS_IAM',
        Name: 'mycustomlatticeservicename',
      });
      Template.fromStack(stack).hasResource('AWS::VpcLattice::AccessLogSubscription', {});
    });

    test('Service network with logging destination to kinesis', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const kinesisStream = Stream.fromStreamArn(stack, 'KinesisStream', 'arn:aws:kinesis:us-east-1:123456789012:stream/my-stream');

      // WHEN
      new ServiceNetwork(stack, 'Params', {
        name: 'mycustomlatticeservicename',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.kinesis(kinesisStream)],
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetwork', {
        AuthType: 'AWS_IAM',
        Name: 'mycustomlatticeservicename',
      });
      Template.fromStack(stack).hasResource('AWS::VpcLattice::AccessLogSubscription', {});
    });

    test('Service network with multiple logging destinations', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const logGroup = new LogGroup(stack, 'LogGroup');
      const kinesisStream = new Stream(stack, 'KinesisStream');

      // WHEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
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
        new ServiceNetwork(stack, 'Params', {
          name: 'mycustomlatticeservicename',
          authType: AuthType.AWS_IAM,
          loggingDestinations: [LoggingDestination.cloudwatch(logGroup1), LoggingDestination.cloudwatch(logGroup2)],
        });
      }).toThrow();

      // WHEN & THEN
      expect(() => {
        new ServiceNetwork(stack, 'Params', {
          name: 'mycustomlatticeservicename',
          authType: AuthType.AWS_IAM,
          loggingDestinations: [LoggingDestination.kinesis(kinesisStream1), LoggingDestination.kinesis(kinesisStream2)],
        });
      }).toThrow();
    });
  });

  describe('Service network name validation', () => {
    test('Service network name validations', () => {
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN & THEN
      expect(
        () =>
          new ServiceNetwork(stack, 'ServiceNetwork1', {
            name: 'abc-xyz-34ab',
          }),
      ).not.toThrow();

      // WHEN & THEN
      expect(
        () =>
          new ServiceNetwork(stack, 'ServiceNetwork2', {
            name: '124pp-33',
          }),
      ).not.toThrow();
    });

    test('Fails with message on invalid service network names', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const name = `servicenetwork-${'$'.repeat(64)}`;
      const expectedErrors = [
        `Invalid service network name (value: ${name})`,
        'Service network name must be at least 3 and no more than 63 characters',
        'Service network name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "servicenetwork-".',
      ].join(EOL);

      // WHEN & THEN
      expect(
        () =>
          new ServiceNetwork(stack, 'ServiceNetwork', {
            name,
          }),
      ).toThrow(expectedErrors);
    });

    test('Fails if service network name has less than 3 or more than 63 characters', () => {
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN & THEN
      expect(
        () =>
          new ServiceNetwork(stack, 'ServiceNetwork1', {
            name: 'a',
          }),
      ).toThrow(/at least 3/);

      // WHEN & THEN
      expect(
        () =>
          new ServiceNetwork(stack, 'ServiceNetwork2', {
            name: 'x'.repeat(64),
          }),
      ).toThrow(/no more than 63/);
    });

    test('Fails if service network name does not follow the specified pattern', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const invalidNames = ['aAa', 'a--a', 'a./a-a', 'a//a-a', 'servicenetwork-a', '-abc123', 'abc123-'];

      // WHEN & THEN
      invalidNames.forEach(name => {
        expect(
          () =>
            new ServiceNetwork(stack, `ServiceNetwork-${name}`, {
              name,
            }),
        ).toThrow(/Service network name must be composed of characters a-z, 0-9, and hyphens/);
      });
    });
  });

  describe('Import', () => {
    test('Import fromArn', () => {
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN
      const service = ServiceNetwork.fromArn(
        stack,
        'ImportedService',
        'arn:aws:vpc-lattice:us-west-2:123456789012:servicenetwork/my-service-network',
      );

      // THEN
      expect(service.serviceNetworkArn).toBe('arn:aws:vpc-lattice:us-west-2:123456789012:servicenetwork/my-service-network');
      expect(service.serviceNetworkId).toBe('my-service-network');
    });

    test('Import with wrong arn format', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const invalidArns = [
        'arn:aws:ec2:us-west-2:123456789012:service/servicenetwork-12345abcdef', // Wrong service
        'arn:aws:vpc-lattice:us-west-2:123456789012:vpc/servicenetwork-12345abcdef', // Wrong resource type
        'arn:aws:vpc-lattice:us-west-2:123456789012:service:servicenetwork-12345abcdef', // Wrong separator
        'arn:aws:vpc-lattice:123456789012:service/servicenetwork-12345abcdef', // Missing region
        'aws:vpc-lattice:us-west-2:123456789012:service/servicenetwork-12345abcdef', // Not starting with 'arn:'
        'arn:aws:vpc-lattice:us-west-2:12345:service/servicenetwork-12345abcdef', // Invalid account number
        'arn:aws:vpc-lattice:us-west-2:123456789012:service/', // Missing service name
        'arn:aws:vpc-lattice::123456789012:service/servicenetwork-12345abcdef', // Missing region
      ];

      // WHEN & THEN
      invalidArns.forEach(invalidArn => {
        expect(() => {
          ServiceNetwork.fromArn(stack, 'ImportedService', invalidArn);
        }).toThrow(/Service network ARN should be in the format/);
      });
    });

    test('Import fromId', () => {
      // GIVEN
      const stack = new cdk.Stack();

      // WHEN
      const service = ServiceNetwork.fromId(stack, 'ImportedService', 'servicenetwork-12345abcdef');

      // THEN
      expect(service.serviceNetworkId).toBe('servicenetwork-12345abcdef');
      expect(service.serviceNetworkArn).toMatch(
        /^arn:\${Token\[AWS\.Partition\.\d+\]}:vpc-lattice:\${Token\[AWS\.Region\.\d+\]}:\${Token\[AWS\.AccountId\.\d+\]}:servicenetwork\/servicenetwork-12345abcdef$/,
      );
    });

    test('Import with wrong serviceId', () => {
      // GIVEN
      const stack = new cdk.Stack();
      const invalidIds = [
        '12345abcdef',
        'servicenetwork-12345ABcd',
        'servicenetwork--abc123',
        'servicenetwork-servicenetwork-12345abc/abc',
        'servicenetwork-abc--ab',
        'servicenetwork-a',
        `servicenetwork-${'x'.repeat(64)}`,
      ];

      // WHEN & THEN
      invalidIds.forEach(invalidId => {
        expect(() => ServiceNetwork.fromId(stack, 'ImportedServiceNetwork', invalidId)).toThrow(/Service network ID should be in the format/);
      });
    });
  });
});
