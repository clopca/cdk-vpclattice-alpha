# AWS VPC Lattice Construct Library

---

<!--BEGIN STABILITY BANNER-->

![cdk-constructs: Experimental](https://img.shields.io/badge/cdk--constructs-experimental-important.svg?style=for-the-badge)

> The APIs of higher level constructs in this module are experimental and under active development.
> They are subject to non-backward compatible changes or removal in any future version. These are
> not subject to the [Semantic Versioning](https://semver.org/) model and breaking changes will be
> announced in the release notes. This means that while you may use them, you may need to update
> your source code when upgrading to a newer version of this package.

<!--END STABILITY BANNER-->

---

This module is part of the [AWS Cloud Development Kit](https://github.com/aws/aws-cdk) project.

```ts nofixture
import * as vpclattice from '@aws-cdk/aws-vpclattice-alpha';
```

# Introduction

AWS VPC Lattice is a fully managed application networking service that helps you
connect, secure, and monitor communications between your services, whether they
run in Amazon VPC, containers, or serverless environments. You can use VPC Lattice
with a single virtual private cloud (VPC) or across multiple VPCs from one or
more accounts.

## Service

In VPC Lattice, we refer to a microservice as a service. It represents an
independently deployable unit of software that delivers a specific task or
function.

To create a service, use the `Service` Construct:

```ts nofixture
const logBucket = new Bucket(stack, 'LogsBucket', {});

new Service(stack, 'Service', {
  authType: vpclattice.AuthType.AWS_IAM,
  name: 'my-custom-name',
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  loggingDestinations: [vpclattice.LoggingDestination.s3(logBucket)],
});
```

### Service access

Access settings enable you to configure and manage client access to a service.
Access settings include auth type and auth policies. Auth policies help you
authenticate and authorize traffic flowing to services within VPC Lattice.

You can apply auth policies at the service network level, the service level, or
both. At the service level, service owners can apply fine-grained controls,
which can be more restrictive.

- You can chooose to not define an auth policy:

```ts
const testSvc = new Service(stack, 'Parking', {
  ...
  authType: AuthType.NONE,
  ...
});
```

- You can chooose a predefined policy template:

```ts
const testSvc = new Service(stack, 'Parking', {
  ...
  authType: AuthType.AWS_IAM,
  authPolicy: AuthPolicyDocument.UNAUTHENTICATED,
  ...
});
```

- You can create a custom auth policy document using higher level statements:

```ts
const testSvc = new Service(stack, 'Parking', {
  ...
  authType: AuthType.AWS_IAM,
  authPolicy: new AuthPolicyDocument({
      statements: [
        AuthPolicyStatement.allowOnlyRole(...)
        AuthPolicyStatement.allowOnlyOrganization(...)
      ]
  }),
  ...
});
```

- You can create a custom auth policy document using low level statements:

```ts
const testSvc = new Service(stack, 'Parking', {
  ...
  authType: AuthType.AWS_IAM,
  authPolicy: new AuthPolicyDocument({
    statements: [
      new PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['vpc-lattice-svcs:*'],
        resources: ['*'],
        principals: [new iam.StarPrincipal()],
        conditions: {
          StringEquals: { 'vpc-lattice-svcs:RequestMethod': 'GET' },
        },
      }),
    ]
  }),
  ...
});
```

## Target Groups

A VPC Lattice target group is a collection of targets, or compute resources,
that run your application. Targets can be EC2 instances, IP addresses, Lambda
functions, Application Load Balancers, or Kubernetes Pods. To register an EKS
pod as a target, use the [AWS Gateway API Controller](https://www.gateway-api-controller.eks.aws.dev/),
which gets the IP addresses from the Kubernetes service.

To create a target group use the appropriate cosntruct according to the target
type.

### Lambda Function

```ts
const lambdaFunction = new LambdaFunction(stack, 'LambdaTargetFunction', {
  runtime: Runtime.NODEJS_18_X,
  code: Code.fromInline(`
        exports.handler = async (event) => {
            return {
                isBase64Encoded: false,
                statusCode: 200,
                body: JSON.stringify({ message: "Hello from Lambda!" }),
            };
        };
    `),
  handler: 'index.handler',
});

const tg1 = new LambdaTargetGroup(stack, 'LambdaTG', {
  name: 'lambda-tg1',
  target: lambdaFunction,
});
```

### Application Load Balancer

```ts
const albSvc = new ApplicationLoadBalancedFargateService(stack, 'Service', {
  vpc,
  memoryLimitMiB: 1024,
  cpu: 512,
  taskImageOptions: {
    image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
    containerPort: 80,
  },
  publicLoadBalancer: false,
});

new AlbTargetGroup(stack, 'ALBTG', {
  vpc,
  loadBalancer: albSvc.loadBalancer,
});
```

### IP Targets

```ts
const instance1 = new Instance(stack, 'Instance1', {
  vpc,
  instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T3, cdk.aws_ec2.InstanceSize.SMALL),
  machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

const instance2 = new Instance(stack, 'Instance2', {
  vpc,
  instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T3, cdk.aws_ec2.InstanceSize.SMALL),
  machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

const tg1 = new IpTargetGroup(stack, 'IpTG', {
  name: 'ip-tg1',
  vpc,
  targets: [
    {
      ipAddress: instance1.instancePrivateIp,
      port: 80,
    },
  ],
});

tg1.addTarget({
  ipAddress: instance2.instancePrivateIp,
  port: 80,
});
```

### Instance

```ts
const instance1 = new Instance(stack, 'Instance1', {
  vpc,
  instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T3, cdk.aws_ec2.InstanceSize.SMALL),
  machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

const instance2 = new Instance(stack, 'Instance2', {
  vpc,
  instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T3, cdk.aws_ec2.InstanceSize.SMALL),
  machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

const tg1 = new InstanceTargetGroup(stack, 'Ec2TG', {
  vpc,
  instances: [
    {
      instance: instance1,
      port: 80,
    },
  ],
  healthCheck: {
    enabled: false,
    protocol: HealthCheckProtocol.HTTP,
    path: '/health',
    port: 8080,
  },
});
```

### Auto-scaling Group

```ts
const asg = new AutoScalingGroup(stack, 'ASG', {
  vpc,
  instanceType: cdk.aws_ec2.InstanceType.of(cdk.aws_ec2.InstanceClass.T2, cdk.aws_ec2.InstanceSize.MICRO),
  machineImage: cdk.aws_ec2.MachineImage.latestAmazonLinux2(),
});

const tg1 = new InstanceTargetGroup(stack, 'ASG-TG', {
  vpc,
  autoScalingGroups: [asg],
  healthCheck: {
    enabled: false,
    protocol: HealthCheckProtocol.HTTP,
    path: '/health',
    port: 8080,
  },
});
```

# Listeners and Rules

Before you start using your VPC Lattice service, you must add a listener. A
listener is a process that checks for connection requests, using the protocol
and port that you configure. The rules that you define for a listener determine
how the service routes requests to its registered targets.

- [Project Information](#project-information)
- [Example Impleentation](#example-implementation)
- [API Design](#proposed-api-design-for-vpclattice)
- [FAQ](#faq)
- [Acceptance](#acceptance)

---

## Project Information

**Status** (DRAFT)

**Original Author(s):** @clopca, @aws-rafams

**Tracking Issue:** #502

**API Bar Raiser:** @TheRealAmazonKendra

**Public Issues ( aws-cdk)**

- (vpclattice): L2 for Amazon VPC Lattice #25452

**Prototype Code**

- https://github.com/clopca/aws-cdk/tree/mrpackethead/aws-vpclattice-alpha/packages/%40aws-cdk/aws-vpclattice-alpha

**Example implementation**

- https://github.com/clopca/vpclattice-prealpha-demo

**Blog**

**VpcLattice**

Amazon VPC Lattice is an application networking service that consistently connects, monitors, and secures communications between your services, helping to improve productivity so that your developers can focus on building features that matter to your business. You can define policies for network traffic management, access, and monitoring to connect compute services in a simplified and consistent way across instances, containers, and serverless applications.

The L2 Construct seeks to assist the consumer to create a lattice service easily by abstracting some of the detail. The major part of this is in creating the underlying auth policy and listener rules together, as their is significant intersection in the properties require for both.

```

```
