import { EOL } from 'os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Service, LoggingDestination, AuthType, ListenerProtocol } from '../../../src';
import { ServiceNetwork } from '../../../src/service-network';

describe('Service', () => {
  test('Default service', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN
    new Service(stack, 'Service', {});

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      AuthType: 'NONE',
    });
  });

  test('Basic creation with custom name', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN
    new Service(stack, 'Service', {
      name: 'mycustomlatticeservicename',
      authType: AuthType.AWS_IAM,
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Service', {
      AuthType: 'AWS_IAM',
      Name: 'mycustomlatticeservicename',
    });
  });

  test('Service with custom domain and certificate', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

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

  test('Service with removal policy', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Service(stack, 'Service', {
      name: 'my-service',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    Template.fromStack(stack).hasResource('AWS::VpcLattice::Service', {
      DeletionPolicy: 'Delete',
    });
  });

  test('Service with service network association from props', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const mockServiceNetwork = ServiceNetwork.fromArn(
      stack,
      'MockServiceNetwork',
      'arn:aws:vpc-lattice:us-west-2:123456789012:servicenetwork/sn-12345',
    );

    new Service(stack, 'Service', {
      name: 'my-service',
      serviceNetwork: mockServiceNetwork,
    });

    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetworkServiceAssociation', {
      ServiceIdentifier: {
        'Fn::GetAtt': ['ServiceDBC79909', 'Id'],
      },
      ServiceNetworkIdentifier: 'sn-12345',
    });
  });

  test('Service with resource sharing', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
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
          'Fn::GetAtt': ['ServiceDBC79909', 'Arn'],
        },
      ],
    });
  });

  describe('Service with methods', () => {
    test('Add auth policy statement', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });

      service.addAuthPolicyStatement(
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });

      service.addAuthPolicyStatement(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:GetObject'],
          resources: ['*'],
        }),
      );

      // Expect synthesis to throw an error
      expect(() => app.synth()).toThrow(/Invalid action detected/);
    });

    test('Add auth policy statement with invalid principal', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });

      service.addAuthPolicyStatement(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['vpc-lattice-svcs:Invoke'],
          resources: ['*'],
          principals: [new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})],
        }),
      );

      // Expect synthesis to throw an error
      expect(() => app.synth()).toThrow(/Invalid principal type/);
    });

    test('Add auth policy statement with invalid resource', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });

      service.addAuthPolicyStatement(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['vpc-lattice-svcs:Invoke'],
          resources: ['arn:aws:s3:::my-bucket'],
        }),
      );

      // Expect synthesis to throw an error
      expect(() => app.synth()).toThrow(/Invalid resource format/);
    });

    test('Grant access', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });
      service.grantAccess([new iam.ArnPrincipal('arn:aws:iam::123456789012:role/MyRole')]);

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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });

      service.grantAccess([new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})]);
      expect(() => {
        app.synth();
      }).toThrow(/Invalid principal type/);
    });

    test('Associate with service network', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const mockServiceNetwork = ServiceNetwork.fromArn(
        stack,
        'MockServiceNetwork',
        'arn:aws:vpc-lattice:us-west-2:123456789012:servicenetwork/sn-12345',
      );
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });

      // WHEN
      service.associateWithServiceNetwork(mockServiceNetwork);

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetworkServiceAssociation', {
        ServiceIdentifier: {
          'Fn::GetAtt': ['ServiceDBC79909', 'Id'],
        },
        ServiceNetworkIdentifier: 'sn-12345',
      });
    });

    //test Service with addListener method
    test('Service with addListener method', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
      });

      // WHEN
      service.addListener({
        name: 'listener1',
        protocol: ListenerProtocol.HTTPS,
      });

      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::Listener', {
        Name: 'listener1',
        Protocol: 'HTTPS',
        Port: 443,
        ServiceIdentifier: {
          'Fn::GetAtt': ['ServiceDBC79909', 'Id'],
        },
        DefaultAction: {
          FixedResponse: {
            StatusCode: 404,
          },
        },
      });
    });

    test('Service adding policy with not resource and not principal', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const service = new Service(stack, 'Service', {
        name: 'my-service',
        authType: AuthType.AWS_IAM,
      });

      service.addAuthPolicyStatement(new iam.PolicyStatement());

      // WHEN & THEN
      expect(() => app.synth()).toThrow(/Validation failed with the following errors:.*Invalid action detected.*Invalid resource format/s);
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
                  'Fn::GetAtt': ['TestRole6C9272DF', 'Arn'],
                },
              },
            },
          ],
        },
      });
    });

    test('Service with provided auth policy', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const customPolicy = new iam.PolicyDocument({
        statements: [
          new iam.PolicyStatement({
            actions: ['vpc-lattice-svcs:Invoke'],
            effect: iam.Effect.ALLOW,
            resources: ['*'],
          }),
        ],
      });

      new Service(stack, 'Service', {
        name: 'my-service',
        authType: AuthType.AWS_IAM,
        authPolicy: customPolicy,
      });

      Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::AuthPolicy', {
        Policy: {
          Statement: [
            {
              Action: 'vpc-lattice-svcs:Invoke',
              Effect: 'Allow',
              Resource: '*',
            },
          ],
          Version: '2012-10-17',
        },
      });
    });

    test('Error with invalid action', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidActionStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject'],
        resources: ['*'],
      });

      // WHEN & THEN
      new Service(stack, 'ServiceInvalidAction', {
        name: 'my-service-invalid-action',
        authType: AuthType.AWS_IAM,
        authStatements: [invalidActionStatement],
      });
      expect(() => app.synth()).toThrow(/Invalid action detected/);
    });

    test('Error with invalid principal type', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidPrincipalStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['*'],
        principals: [new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})],
      });

      // WHEN & THEN
      new Service(stack, 'ServiceInvalidPrincipal', {
        name: 'my-service-invalid-principal',
        authType: AuthType.AWS_IAM,
        authStatements: [invalidPrincipalStatement],
      });
      expect(() => app.synth()).toThrow(/Invalid principal type/);
    });

    test('Error with invalid resource format', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidResourceStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['arn:aws:s3:::my-bucket'],
      });

      // WHEN & THEN
      new Service(stack, 'ServiceInvalidResource', {
        name: 'my-service-invalid-resource',
        authType: AuthType.AWS_IAM,
        authStatements: [invalidResourceStatement],
      });
      expect(() => app.synth()).toThrow(/Invalid resource format/);
    });

    test('Error with multiple invalid elements', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const multipleInvalidStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject', 'vpc-lattice-svcs:Invoke'],
        resources: ['arn:aws:s3:::my-bucket', '*'],
        principals: [new iam.ServicePrincipal('ec2.amazonaws.com'), new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})],
      });

      // WHEN & THEN
      new Service(stack, 'ServiceMultipleInvalid', {
        name: 'my-service-multiple-invalid',
        authType: AuthType.AWS_IAM,
        authStatements: [multipleInvalidStatement],
      });
      expect(() => app.synth()).toThrow(/The following errors were found in the VPC Lattice auth policy/);
    });

    test('Valid policy passes validation', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const validStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
        resources: ['*'],
        principals: [new iam.ArnPrincipal('arn:aws:iam::123456789012:role/MyRole')],
      });

      // WHEN & THEN
      new Service(stack, 'ServiceValid', {
        name: 'my-service-valid',
        authType: AuthType.AWS_IAM,
        authStatements: [validStatement],
      });
      expect(() => app.synth()).not.toThrow();
    });

    test('Service with custom auth statement', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const customStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:Invoke'],
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

  describe('Service logging destination validation', () => {
    test('Service with logging destination to cloudwatch', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN
      const logGroup = new LogGroup(stack, 'LogsTest', {
        logGroupName: 'vpc-lattice-name',
      });
      new Service(stack, 'Service', {
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const kinesisStream = Stream.fromStreamArn(stack, 'KinesisStream', 'arn:aws:kinesis:us-east-1:123456789012:stream/my-stream');

      // WHEN
      new Service(stack, 'Service', {
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const logGroup1 = new LogGroup(stack, 'LogGroup1');
      const logGroup2 = new LogGroup(stack, 'LogGroup2');
      const kinesisStream1 = new Stream(stack, 'KinesisStream1');
      const kinesisStream2 = new Stream(stack, 'KinesisStream2');

      // WHEN & THEN
      new Service(stack, 'Service1', {
        name: 'mycustomlatticeservicename',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.cloudwatch(logGroup1), LoggingDestination.cloudwatch(logGroup2)],
      });
      expect(() => app.synth()).toThrow('A service can only have one logging destination per destination type.');

      // WHEN & THEN
      new Service(stack, 'Service2', {
        name: 'mycustomlatticeservicename',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.kinesis(kinesisStream1), LoggingDestination.kinesis(kinesisStream2)],
      });
      expect(() => app.synth()).toThrow('A service can only have one logging destination per destination type.');
    });
  });

  describe('Service name validation', () => {
    test('Service name validations', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN & THEN
      new Service(stack, 'Service1', {
        name: 'abc-xyz-34ab',
      });
      expect(() => app.synth()).not.toThrow();

      // WHEN & THEN
      new Service(stack, 'Service2', {
        name: '124pp-33',
      });
      expect(() => app.synth()).not.toThrow();
    });

    test('Fails with message on invalid service names', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const name = `svc-${'$'.repeat(41)}`;
      const expectedErrors = [
        `  [TestStack/Service] Invalid service name (value: ${name})`,
        '  [TestStack/Service] Service name must be at least 3 and no more than 40 characters',
        '  [TestStack/Service] Service name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "svc-".',
      ].join(EOL);

      // WHEN & THEN
      new Service(stack, 'Service', {
        name,
      });
      expect(() => app.synth()).toThrow(`Validation failed with the following errors:${EOL}${expectedErrors}`);
    });

    test('Fails if service name has less than 3 or more than 40 characters', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN & THEN
      new Service(stack, 'Service1', {
        name: 'a',
      });
      expect(() => app.synth()).toThrow(/at least 3/);

      // WHEN & THEN
      new Service(stack, 'Service2', {
        name: 'x'.repeat(41),
      });
      expect(() => app.synth()).toThrow(/no more than 40/);
    });

    test('Fails if service name does not follow the specified pattern', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidNames = ['aAa', 'a--a', 'a./a-a', 'a//a-a', 'svc-a', '-abc123', 'abc123-'];

      // WHEN & THEN
      invalidNames.forEach(name => {
        new Service(stack, `Service-${name}`, {
          name,
        });
        expect(() => app.synth()).toThrow(/Service name must be composed of characters a-z, 0-9, and hyphens/);
      });
    });
  });

  describe('Import', () => {
    test('Import fromServiceArn', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN
      const service = Service.fromServiceArn(stack, 'ImportedService', 'arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef');

      // THEN
      expect(service.serviceArn).toBe('arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef');
      expect(service.serviceId).toBe('svc-12345abcdef');
    });

    test('Import fromServiceArn', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const arn = 'arn:aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef';

      // WHEN
      const service = Service.fromServiceArn(stack, 'ImportedService', arn);

      // THEN
      expect(service.serviceArn).toBe(arn);
      expect(service.serviceId).toBe('svc-12345abcdef');
    });

    test('Import with wrong arn format', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidArns = [
        'arn:aws:ec2:us-west-2:123456789012:service/svc-12345abcdef', // Wrong service
        'arn:aws:vpc-lattice:us-west-2:123456789012:vpc/svc-12345abcdef', // Wrong resource type
        'arn:aws:vpc-lattice:us-west-2:123456789012:service:svc-12345abcdef', // Wrong separator
        'arn:aws:vpc-lattice:123456789012:service/svc-12345abcdef', // Missing region
        'aws:vpc-lattice:us-west-2:123456789012:service/svc-12345abcdef', // Not starting with 'arn:'
        'arn:aws:vpc-lattice:us-west-2:12345:service/svc-12345abcdef', // Invalid account number
        'arn:aws:vpc-lattice:us-west-2:123456789012:service/', // Missing service name
        'arn:aws:vpc-lattice::123456789012:service/svc-12345abcdef', // Missing region
      ];

      // WHEN & THEN
      invalidArns.forEach(invalidArn => {
        Service.fromServiceArn(stack, `ImportedService-${invalidArn}`, invalidArn);
        expect(() => app.synth()).toThrow(/Service ARN should be in the format/);
      });
    });

    test('Import fromServiceId', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN
      const service = Service.fromServiceId(stack, 'ImportedService', 'svc-12345abcdef');

      // THEN
      expect(service.serviceId).toBe('svc-12345abcdef');
      expect(service.serviceArn).toMatch(
        /^arn:\${Token\[AWS\.Partition\.\d+\]}:vpc-lattice:\${Token\[AWS\.Region\.\d+\]}:\${Token\[AWS\.AccountId\.\d+\]}:service\/svc-12345abcdef$/,
      );
    });

    test('Import with wrong serviceId', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidIds = ['12345abcdef', 'svc-12345ABcd', 'svc--abc123', 'svc-svc-12345abc/abc', 'svc-abc--ab', 'svc-a', `svc-${'x'.repeat(41)}`];

      // WHEN & THEN
      invalidIds.forEach(invalidId => {
        Service.fromServiceId(stack, `ImportedService-${invalidId}`, invalidId);
        expect(() => app.synth()).toThrow(/Service ID should be in the format/);
      });
    });
  });
});
