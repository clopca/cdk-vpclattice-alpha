import { EOL } from 'node:os';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Service, LoggingDestination, AuthType, AuthPolicyDocument } from '../../../src';
import { ServiceNetwork } from '../../../src/service-network';

describe('Service network', () => {
  // default service
  test('Default service network ', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN
    new ServiceNetwork(stack, 'ServiceNetwork', {});

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetwork', {
      AuthType: 'NONE',
    });
  });

  test('Basic creation with custom name', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN
    new ServiceNetwork(stack, 'ServiceNetwork', {
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
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    Template.fromStack(stack).hasResource('AWS::VpcLattice::ServiceNetwork', {
      DeletionPolicy: 'Delete',
    });
  });

  test('Service network with resource sharing', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
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

  test('Service network with VPC associated', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const vpc = new Vpc(stack, 'VPC', {
      vpcName: 'my-vpc',
    });
    new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
      vpcAssociations: [
        {
          vpc,
        },
      ],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetworkVpcAssociation', {
      ServiceNetworkIdentifier: {
        'Fn::GetAtt': ['ServiceNetworkEF29AF70', 'Id'],
      },
      VpcIdentifier: {
        Ref: 'VPCB9E5F0B4',
      },
    });
  });

  // Service network with service in props
  test('Service network with service in props', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const service = new Service(stack, 'Service', {
      name: 'my-service',
    });

    new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
      services: [service],
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetworkServiceAssociation', {
      ServiceIdentifier: {
        'Fn::GetAtt': ['ServiceDBC79909', 'Id'],
      },
      ServiceNetworkIdentifier: {
        'Fn::GetAtt': ['ServiceNetworkEF29AF70', 'Id'],
      },
    });
  });

  // Service network with access mode set
  test('Service network with authenticated access mode set', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
      authPolicy: AuthPolicyDocument.AUTHENTICATED_ONLY,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::AuthPolicy', {
      Policy: {
        Statement: [
          {
            Effect: 'Allow',
            Action: 'vpc-lattice-svcs:*',
            Resource: '*',
            Condition: {
              StringNotEqualsIgnoreCase: { 'aws:PrincipalType': 'anonymous' },
            },
          },
        ],
      },
    });
  });

  // Service network with ORG_ONLY access mode set
  test('Service network with org only access mode set', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
      authPolicy: AuthPolicyDocument.organizationOnly('o-123456789012'),
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::AuthPolicy', {
      Policy: {
        Statement: [
          {
            Effect: 'Allow',
            Action: 'vpc-lattice-svcs:*',
            Resource: '*',
            Condition: {
              StringEquals: { 'aws:PrincipalOrgID': ['o-123456789012'] },
            },
          },
        ],
      },
    });
  });

  test('Service network with org only access mode set and bad orgId provided', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    // WHEN & THEN
    expect(() => {
      new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
        authPolicy: AuthPolicyDocument.organizationOnly(''),
      });
    }).toThrow('Invalid AWS Organization ID');
  });

  test('Service network with provided auth policy', () => {
    // GIVEN
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const customPolicy = new AuthPolicyDocument({
      statements: [
        new iam.PolicyStatement({
          actions: ['vpc-lattice-svcs:Invoke'],
          effect: iam.Effect.ALLOW,
          resources: ['*'],
        }),
      ],
    });

    new ServiceNetwork(stack, 'ServiceNetwork', {
      name: 'my-service-network',
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
      },
    });
  });

  describe('Service network with methods', () => {
    test('Add auth policy statement', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.authPolicy.addStatements(
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
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.authPolicy.addStatements(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:GetObject'],
          resources: ['*'],
        }),
      );
      expect(() => {
        app.synth();
      }).toThrow(/Invalid action detected/);
    });

    test('Add auth policy statement with invalid principal', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.authPolicy.addStatements(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['vpc-lattice-svcs:Invoke'],
          resources: ['*'],
          principals: [new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})],
        }),
      );
      expect(() => {
        app.synth();
      }).toThrow(/Invalid principal type/);
    });

    test('Add auth policy statement with invalid resource', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.authPolicy.addStatements(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['vpc-lattice-svcs:Invoke'],
          resources: ['arn:aws:s3:::my-bucket'],
        }),
      );
      expect(() => {
        app.synth();
      }).toThrow(/Invalid resource format/);
    });

    test('Grant access', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.grantAccess([new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {})]);
      expect(() => {
        app.synth();
      }).toThrow(/Invalid principal type/);
    });

    test('Service network with service association', () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const vpc = new Vpc(stack, 'VPC', {
        vpcName: 'my-vpc',
      });
      const securityGroup = new SecurityGroup(stack, 'SecurityGroup', {
        vpc,
        securityGroupName: 'my-security-group',
      });

      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
      });

      serviceNetwork.associateVPC({
        vpc,
        securityGroups: [securityGroup],
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

    test('Service network adding policy with not resource and not principal', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const serviceNetwork = new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
        authType: AuthType.AWS_IAM,
      });

      serviceNetwork.authPolicy.addStatements(new iam.PolicyStatement());

      // WHEN & THEN
      expect(() => app.synth()).toThrow(/Validation failed with the following errors:.*Invalid action detected.*Invalid resource format/s);
    });
  });

  describe('Auth policy validation', () => {
    test('Service with auth policy', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const role = new iam.Role(stack, 'TestRole', {
        assumedBy: new iam.AccountRootPrincipal(),
      });

      // WHEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service',
        authType: AuthType.AWS_IAM,
        authPolicy: new AuthPolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['vpc-lattice-svcs:Invoke'],
              effect: iam.Effect.ALLOW,
              resources: ['*'],
              principals: [new iam.ArnPrincipal(role.roleArn)],
            }),
          ],
        }),
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidActionStatement = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject'],
        resources: ['*'],
      });

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceInvalidAction', {
        name: 'my-service-invalid-action',
        authType: AuthType.AWS_IAM,
        authPolicy: new AuthPolicyDocument({
          statements: [invalidActionStatement],
        }),
      });
      expect(() => {
        app.synth();
      }).toThrow(/Invalid action detected/);
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
      new ServiceNetwork(stack, 'ServiceInvalidPrincipal', {
        name: 'my-service-invalid-principal',
        authType: AuthType.AWS_IAM,
        authPolicy: new AuthPolicyDocument({
          statements: [invalidPrincipalStatement],
        }),
      });
      expect(() => {
        app.synth();
      }).toThrow(/Invalid principal type/);
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
      new ServiceNetwork(stack, 'ServiceInvalidResource', {
        name: 'my-service-invalid-resource',
        authType: AuthType.AWS_IAM,
        authPolicy: new AuthPolicyDocument({
          statements: [invalidResourceStatement],
        }),
      });
      expect(() => {
        app.synth();
      }).toThrow(/Invalid resource format/);
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
      new ServiceNetwork(stack, 'ServiceMultipleInvalid', {
        name: 'my-service-multiple-invalid',
        authType: AuthType.AWS_IAM,
        authPolicy: new AuthPolicyDocument({
          statements: [multipleInvalidStatement],
        }),
      });
      expect(() => {
        app.synth();
      }).toThrow(/The following errors were found in the VPC Lattice auth policy/);
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
      new ServiceNetwork(stack, 'ServiceValid', {
        name: 'my-service-valid',
        authType: AuthType.AWS_IAM,
        authPolicy: new AuthPolicyDocument({
          statements: [validStatement],
        }),
      });
      expect(() => {
        app.synth();
      }).not.toThrow();
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
      new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service',
        authType: AuthType.AWS_IAM,
        authPolicy: new AuthPolicyDocument({
          statements: [customStatement],
        }),
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN
      const logGroup = new LogGroup(stack, 'LogsTest', {
        logGroupName: 'vpc-lattice-name',
      });
      new ServiceNetwork(stack, 'ServiceNetwork', {
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const kinesisStream = Stream.fromStreamArn(stack, 'KinesisStream', 'arn:aws:kinesis:us-east-1:123456789012:stream/my-stream');

      // WHEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
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

    test('Service network with logging destination to S3', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const bucket = new Bucket(stack, 'Bucket');

      // WHEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'mycustomlatticeservicename',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.s3(bucket)],
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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const logGroup = new LogGroup(stack, 'LogGroup');
      const kinesisStream = new Stream(stack, 'KinesisStream');
      const bucket = new Bucket(stack, 'Bucket');

      // WHEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
        name: 'my-service-network',
        loggingDestinations: [LoggingDestination.cloudwatch(logGroup), LoggingDestination.kinesis(kinesisStream), LoggingDestination.s3(bucket)],
      });

      // THEN
      Template.fromStack(stack).resourceCountIs('AWS::VpcLattice::AccessLogSubscription', 3);
    });

    test('Error with duplicate logging destination type', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const logGroup1 = new LogGroup(stack, 'LogGroup1');
      const logGroup2 = new LogGroup(stack, 'LogGroup2');
      const kinesisStream1 = new Stream(stack, 'KinesisStream1');
      const kinesisStream2 = new Stream(stack, 'KinesisStream2');
      const bucket1 = new Bucket(stack, 'Bucket1');
      const bucket2 = new Bucket(stack, 'Bucket2');

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork1', {
        name: 'my-service-network',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.cloudwatch(logGroup1), LoggingDestination.cloudwatch(logGroup2)],
      });
      expect(() => app.synth()).toThrow('A service network can only have one logging destination per destination type.');

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork2', {
        name: 'my-service-network',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.kinesis(kinesisStream1), LoggingDestination.kinesis(kinesisStream2)],
      });
      expect(() => app.synth()).toThrow('A service network can only have one logging destination per destination type.');

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork3', {
        name: 'my-service-network',
        authType: AuthType.AWS_IAM,
        loggingDestinations: [LoggingDestination.s3(bucket1), LoggingDestination.s3(bucket2)],
      });
      expect(() => app.synth()).toThrow('A service network can only have one logging destination per destination type.');
    });
  });

  describe('Service network name validation', () => {
    test('Service network name validations', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork1', {
        name: 'abc-xyz-34ab',
      });
      expect(() => {
        app.synth();
      }).not.toThrow();

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork2', {
        name: '124pp-33',
      });
      expect(() => {
        app.synth();
      }).not.toThrow();
    });

    test('Fails with message on invalid service network names', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const name = `servicenetwork-${'$'.repeat(64)}`;
      const expectedErrors = [
        `  [TestStack/ServiceNetwork] Invalid service network name (value: ${name})`,
        '  [TestStack/ServiceNetwork] Service network name must be at least 3 and no more than 63 characters',
        '  [TestStack/ServiceNetwork] Service network name must be composed of characters a-z, 0-9, and hyphens (-). You can\'t use a hyphen as the first or last character, or immediately after another hyphen. The name cannot start with "servicenetwork-".',
      ].join(EOL);

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork', {
        name,
      });
      expect(() => {
        app.synth();
      }).toThrow(`Validation failed with the following errors:${EOL}${expectedErrors}`);
    });

    test('Fails if service network name has less than 3 or more than 63 characters', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork1', {
        name: 'a',
      });
      expect(() => {
        app.synth();
      }).toThrow(/at least 3/);

      // WHEN & THEN
      new ServiceNetwork(stack, 'ServiceNetwork2', {
        name: 'x'.repeat(64),
      });
      expect(() => {
        app.synth();
      }).toThrow(/no more than 63/);
    });

    test('Fails if service network name does not follow the specified pattern', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidNames = ['aAa', 'a--a', 'a./a-a', 'a//a-a', 'servicenetwork-a', '-abc123', 'abc123-'];

      // WHEN & THEN
      for (const name of invalidNames) {
        new ServiceNetwork(stack, `ServiceNetwork-${name}`, {
          name,
        });
        expect(() => {
          app.synth();
        }).toThrow(/Service network name must be composed of characters a-z, 0-9, and hyphens/);
      }
    });
  });

  describe('Import', () => {
    test('Import fromArn', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
      const invalidArns = [
        'arn:aws:ec2:us-west-2:123456789012:service-network/servicenetwork-12345abcdef', // Wrong service network
        'arn:aws:vpc-lattice:us-west-2:123456789012:vpc/servicenetwork-12345abcdef', // Wrong resource type
        'arn:aws:vpc-lattice:us-west-2:123456789012:service:servicenetwork-12345abcdef', // Wrong separator
        'arn:aws:vpc-lattice:123456789012:service/servicenetwork-12345abcdef', // Missing region
        'aws:vpc-lattice:us-west-2:123456789012:service/servicenetwork-12345abcdef', // Not starting with 'arn:'
        'arn:aws:vpc-lattice:us-west-2:12345:servicenetwork/servicenetwork-12345abcdef', // Invalid account number
        'arn:aws:vpc-lattice:us-west-2:123456789012:service-network/', // Missing service name
        'arn:aws:vpc-lattice::123456789012:service-network/servicenetwork-12345abcdef', // Missing region
      ];

      // WHEN & THEN
      for (const invalidArn of invalidArns) {
        ServiceNetwork.fromArn(stack, `ImportedService-${invalidArn}`, invalidArn);
        expect(() => {
          app.synth();
        }).toThrow(/Service network ARN should be in the format/);
      }
    });

    test('Import fromId', () => {
      // GIVEN
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');

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
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack');
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
      for (const invalidId of invalidIds) {
        ServiceNetwork.fromId(stack, `ImportedServiceNetwork-${invalidId}`, invalidId);
        expect(() => {
          app.synth();
        }).toThrow(/Service network ID should be in the format/);
      }
    });
  });
});
