# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbTargetGroup <a name="AlbTargetGroup" id="cdk-vpclattice-alpha.AlbTargetGroup"></a>

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.AlbTargetGroup.Initializer"></a>

```typescript
import { AlbTargetGroup } from 'cdk-vpclattice-alpha'

new AlbTargetGroup(scope: Construct, id: string, props: AlbTargetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps">AlbTargetGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.AlbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.AlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.AlbTargetGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AlbTargetGroupProps">AlbTargetGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.AlbTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.AlbTargetGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.AlbTargetGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.AlbTargetGroup.isConstruct"></a>

```typescript
import { AlbTargetGroup } from 'cdk-vpclattice-alpha'

AlbTargetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.AlbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.AlbTargetGroup.isOwnedResource"></a>

```typescript
import { AlbTargetGroup } from 'cdk-vpclattice-alpha'

AlbTargetGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.AlbTargetGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.AlbTargetGroup.isResource"></a>

```typescript
import { AlbTargetGroup } from 'cdk-vpclattice-alpha'

AlbTargetGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.AlbTargetGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The ARN of the target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The ID of the target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | The type of target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.AlbTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.AlbTargetGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.AlbTargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.AlbTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="cdk-vpclattice-alpha.AlbTargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The ARN of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.AlbTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The ID of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.AlbTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

The type of target group.

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="cdk-vpclattice-alpha.AlbTargetGroup.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="cdk-vpclattice-alpha.AlbTargetGroup.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

---

##### `port`<sup>Required</sup> <a name="port" id="cdk-vpclattice-alpha.AlbTargetGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdk-vpclattice-alpha.AlbTargetGroup.property.protocol"></a>

```typescript
public readonly protocol: RequestProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a>

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="cdk-vpclattice-alpha.AlbTargetGroup.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: RequestProtocolVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.AlbTargetGroup.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### InstanceTargetGroup <a name="InstanceTargetGroup" id="cdk-vpclattice-alpha.InstanceTargetGroup"></a>

Supports creating a Target group with instances within a specific VPC.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.InstanceTargetGroup.Initializer"></a>

```typescript
import { InstanceTargetGroup } from 'cdk-vpclattice-alpha'

new InstanceTargetGroup(scope: Construct, id: string, props: InstanceTargetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps">InstanceTargetGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.InstanceTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.InstanceTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.InstanceTargetGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps">InstanceTargetGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.addTarget">addTarget</a></code> | Adds a target to the target Group. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.InstanceTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.InstanceTargetGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.InstanceTargetGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addTarget` <a name="addTarget" id="cdk-vpclattice-alpha.InstanceTargetGroup.addTarget"></a>

```typescript
public addTarget(target: InstanceTarget): void
```

Adds a target to the target Group.

###### `target`<sup>Required</sup> <a name="target" id="cdk-vpclattice-alpha.InstanceTargetGroup.addTarget.parameter.target"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.InstanceTarget">InstanceTarget</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.InstanceTargetGroup.isConstruct"></a>

```typescript
import { InstanceTargetGroup } from 'cdk-vpclattice-alpha'

InstanceTargetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.InstanceTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.InstanceTargetGroup.isOwnedResource"></a>

```typescript
import { InstanceTargetGroup } from 'cdk-vpclattice-alpha'

InstanceTargetGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.InstanceTargetGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.InstanceTargetGroup.isResource"></a>

```typescript
import { InstanceTargetGroup } from 'cdk-vpclattice-alpha'

InstanceTargetGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.InstanceTargetGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The ARN of the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The ID of the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | The type of target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.autoScalingGroups">autoScalingGroups</a></code> | <code>aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.healthCheck">healthCheck</a></code> | <code><a href="#cdk-vpclattice-alpha.HealthCheck">HealthCheck</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.instances">instances</a></code> | <code><a href="#cdk-vpclattice-alpha.InstanceTarget">InstanceTarget</a>[]</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The ARN of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The ID of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

The type of target group.

---

##### `autoScalingGroups`<sup>Required</sup> <a name="autoScalingGroups" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.autoScalingGroups"></a>

```typescript
public readonly autoScalingGroups: IAutoScalingGroup[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.healthCheck"></a>

```typescript
public readonly healthCheck: HealthCheck;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HealthCheck">HealthCheck</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.instances"></a>

```typescript
public readonly instances: InstanceTarget[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.InstanceTarget">InstanceTarget</a>[]

---

##### `port`<sup>Required</sup> <a name="port" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.protocol"></a>

```typescript
public readonly protocol: RequestProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: RequestProtocolVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a>

---


### IpTargetGroup <a name="IpTargetGroup" id="cdk-vpclattice-alpha.IpTargetGroup"></a>

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.IpTargetGroup.Initializer"></a>

```typescript
import { IpTargetGroup } from 'cdk-vpclattice-alpha'

new IpTargetGroup(scope: Construct, id: string, props: IpTargetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps">IpTargetGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.IpTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.IpTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.IpTargetGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IpTargetGroupProps">IpTargetGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.addTarget">addTarget</a></code> | Adds a target to the target Group. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.IpTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.IpTargetGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.IpTargetGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addTarget` <a name="addTarget" id="cdk-vpclattice-alpha.IpTargetGroup.addTarget"></a>

```typescript
public addTarget(target: IpTargetGroupTargetProps): void
```

Adds a target to the target Group.

###### `target`<sup>Required</sup> <a name="target" id="cdk-vpclattice-alpha.IpTargetGroup.addTarget.parameter.target"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IpTargetGroupTargetProps">IpTargetGroupTargetProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.IpTargetGroup.isConstruct"></a>

```typescript
import { IpTargetGroup } from 'cdk-vpclattice-alpha'

IpTargetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.IpTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.IpTargetGroup.isOwnedResource"></a>

```typescript
import { IpTargetGroup } from 'cdk-vpclattice-alpha'

IpTargetGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.IpTargetGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.IpTargetGroup.isResource"></a>

```typescript
import { IpTargetGroup } from 'cdk-vpclattice-alpha'

IpTargetGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.IpTargetGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The ARN of the target group. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The ID of the target group. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | The type of target group. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.ipAddressType">ipAddressType</a></code> | <code><a href="#cdk-vpclattice-alpha.IpAddressType">IpAddressType</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.targets">targets</a></code> | <code><a href="#cdk-vpclattice-alpha.IpTargetGroupTargetProps">IpTargetGroupTargetProps</a>[]</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.IpTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.IpTargetGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.IpTargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.IpTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="cdk-vpclattice-alpha.IpTargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The ARN of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.IpTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The ID of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.IpTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

The type of target group.

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="cdk-vpclattice-alpha.IpTargetGroup.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IpAddressType">IpAddressType</a>

---

##### `port`<sup>Required</sup> <a name="port" id="cdk-vpclattice-alpha.IpTargetGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdk-vpclattice-alpha.IpTargetGroup.property.protocol"></a>

```typescript
public readonly protocol: RequestProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-vpclattice-alpha.IpTargetGroup.property.targets"></a>

```typescript
public readonly targets: IpTargetGroupTargetProps[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.IpTargetGroupTargetProps">IpTargetGroupTargetProps</a>[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.IpTargetGroup.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="cdk-vpclattice-alpha.IpTargetGroup.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: RequestProtocolVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a>

---


### LambdaTargetGroup <a name="LambdaTargetGroup" id="cdk-vpclattice-alpha.LambdaTargetGroup"></a>

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.LambdaTargetGroup.Initializer"></a>

```typescript
import { LambdaTargetGroup } from 'cdk-vpclattice-alpha'

new LambdaTargetGroup(scope: Construct, id: string, props: LambdaTargetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroupProps">LambdaTargetGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.LambdaTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.LambdaTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.LambdaTargetGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.LambdaTargetGroupProps">LambdaTargetGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.LambdaTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.LambdaTargetGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.LambdaTargetGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.LambdaTargetGroup.isConstruct"></a>

```typescript
import { LambdaTargetGroup } from 'cdk-vpclattice-alpha'

LambdaTargetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.LambdaTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.LambdaTargetGroup.isOwnedResource"></a>

```typescript
import { LambdaTargetGroup } from 'cdk-vpclattice-alpha'

LambdaTargetGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.LambdaTargetGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.LambdaTargetGroup.isResource"></a>

```typescript
import { LambdaTargetGroup } from 'cdk-vpclattice-alpha'

LambdaTargetGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.LambdaTargetGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The ARN of the target group. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The ID of the target group. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | The type of target group. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.lambdaEventStructureVersion">lambdaEventStructureVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.LambdaEventStructureVersion">LambdaEventStructureVersion</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.target">target</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The ARN of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The ID of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

The type of target group.

---

##### `lambdaEventStructureVersion`<sup>Required</sup> <a name="lambdaEventStructureVersion" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.lambdaEventStructureVersion"></a>

```typescript
public readonly lambdaEventStructureVersion: LambdaEventStructureVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.LambdaEventStructureVersion">LambdaEventStructureVersion</a>

---

##### `target`<sup>Required</sup> <a name="target" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.target"></a>

```typescript
public readonly target: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


### Listener <a name="Listener" id="cdk-vpclattice-alpha.Listener"></a>

- *Implements:* <a href="#cdk-vpclattice-alpha.IListener">IListener</a>

A listener is a process that checks for connection requests, using the protocol and port that you configure.

The rules that you define for a listener determine
how the service routes requests to its registered targets.

**This class should not be called directly**.
Use the `.addListener()` method on an instance of a Service construct.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.Listener.Initializer"></a>

```typescript
import { Listener } from 'cdk-vpclattice-alpha'

new Listener(scope: Construct, id: string, props: ListenerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Listener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Listener.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Listener.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.ListenerProps">ListenerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.Listener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.Listener.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.Listener.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ListenerProps">ListenerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Listener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.Listener.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-vpclattice-alpha.Listener.addListenerRule">addListenerRule</a></code> | Adds a rule to the listener. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.Listener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.Listener.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.Listener.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addListenerRule` <a name="addListenerRule" id="cdk-vpclattice-alpha.Listener.addListenerRule"></a>

```typescript
public addListenerRule(rule: RuleProps): void
```

Adds a rule to the listener.

###### `rule`<sup>Required</sup> <a name="rule" id="cdk-vpclattice-alpha.Listener.addListenerRule.parameter.rule"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.RuleProps">RuleProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Listener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.Listener.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.Listener.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.Listener.isConstruct"></a>

```typescript
import { Listener } from 'cdk-vpclattice-alpha'

Listener.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.Listener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.Listener.isOwnedResource"></a>

```typescript
import { Listener } from 'cdk-vpclattice-alpha'

Listener.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.Listener.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.Listener.isResource"></a>

```typescript
import { Listener } from 'cdk-vpclattice-alpha'

Listener.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.Listener.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.defaultAction">defaultAction</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleAction">RuleAction</a></code> | The default action for this listener. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.listenerArn">listenerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.listenerId">listenerId</a></code> | <code>string</code> | The Id of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.port">port</a></code> | <code>number</code> | The listener port. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.ListenerProtocol">ListenerProtocol</a></code> | The listener protocol. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.service">service</a></code> | <code><a href="#cdk-vpclattice-alpha.Service">Service</a></code> | The service this listener is attached to. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.name">name</a></code> | <code>string</code> | The name of the listener. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.rules">rules</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleProps">RuleProps</a>[]</code> | The listener rules to add. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.Listener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.Listener.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.Listener.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="cdk-vpclattice-alpha.Listener.property.defaultAction"></a>

```typescript
public readonly defaultAction: RuleAction;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleAction">RuleAction</a>

The default action for this listener.

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="cdk-vpclattice-alpha.Listener.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="cdk-vpclattice-alpha.Listener.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The Id of the Service Network.

---

##### `port`<sup>Required</sup> <a name="port" id="cdk-vpclattice-alpha.Listener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The listener port.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdk-vpclattice-alpha.Listener.property.protocol"></a>

```typescript
public readonly protocol: ListenerProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ListenerProtocol">ListenerProtocol</a>

The listener protocol.

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.Listener.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* <a href="#cdk-vpclattice-alpha.Service">Service</a>

The service this listener is attached to.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.Listener.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the listener.

---

##### `rules`<sup>Required</sup> <a name="rules" id="cdk-vpclattice-alpha.Listener.property.rules"></a>

```typescript
public readonly rules: RuleProps[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleProps">RuleProps</a>[]

The listener rules to add.

---


### Service <a name="Service" id="cdk-vpclattice-alpha.Service"></a>

- *Implements:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

Define a VPC Lattice Service.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.Service.Initializer"></a>

```typescript
import { Service } from 'cdk-vpclattice-alpha'

new Service(scope: Construct, id: string, props: ServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Service.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceProps">ServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.Service.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.Service.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceProps">ServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.Service.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-vpclattice-alpha.Service.addListener">addListener</a></code> | Add Listener. |
| <code><a href="#cdk-vpclattice-alpha.Service.associateWithServiceNetwork">associateWithServiceNetwork</a></code> | Associate a Lattice Service with a Service Network. |
| <code><a href="#cdk-vpclattice-alpha.Service.grantAccess">grantAccess</a></code> | .grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granular permissions at the rule level. |
| <code><a href="#cdk-vpclattice-alpha.Service.shareResource">shareResource</a></code> | Amazon VPC Lattice integrates with AWS Resource Access Manager (AWS RAM) to enable resource sharing across AWS accounts or through AWS Organizations. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.Service.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.Service.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addListener` <a name="addListener" id="cdk-vpclattice-alpha.Service.addListener"></a>

```typescript
public addListener(config: ListenerConfig): Listener
```

Add Listener.

###### `config`<sup>Required</sup> <a name="config" id="cdk-vpclattice-alpha.Service.addListener.parameter.config"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ListenerConfig">ListenerConfig</a>

---

##### `associateWithServiceNetwork` <a name="associateWithServiceNetwork" id="cdk-vpclattice-alpha.Service.associateWithServiceNetwork"></a>

```typescript
public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void
```

Associate a Lattice Service with a Service Network.

###### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.Service.associateWithServiceNetwork.parameter.serviceNetwork"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

---

##### `grantAccess` <a name="grantAccess" id="cdk-vpclattice-alpha.Service.grantAccess"></a>

```typescript
public grantAccess(principals: IPrincipal[]): void
```

.grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granular permissions at the rule level.

###### `principals`<sup>Required</sup> <a name="principals" id="cdk-vpclattice-alpha.Service.grantAccess.parameter.principals"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

a list of IAM principals to grant access.

---

##### `shareResource` <a name="shareResource" id="cdk-vpclattice-alpha.Service.shareResource"></a>

```typescript
public shareResource(props: ShareServiceProps): void
```

Amazon VPC Lattice integrates with AWS Resource Access Manager (AWS RAM) to enable resource sharing across AWS accounts or through AWS Organizations.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.Service.shareResource.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ShareServiceProps">ShareServiceProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.Service.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.Service.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpclattice-alpha.Service.fromServiceArn">fromServiceArn</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Service.fromServiceId">fromServiceId</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.Service.isConstruct"></a>

```typescript
import { Service } from 'cdk-vpclattice-alpha'

Service.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.Service.isOwnedResource"></a>

```typescript
import { Service } from 'cdk-vpclattice-alpha'

Service.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.Service.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.Service.isResource"></a>

```typescript
import { Service } from 'cdk-vpclattice-alpha'

Service.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.Service.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromServiceArn` <a name="fromServiceArn" id="cdk-vpclattice-alpha.Service.fromServiceArn"></a>

```typescript
import { Service } from 'cdk-vpclattice-alpha'

Service.fromServiceArn(scope: Construct, id: string, serviceArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.Service.fromServiceArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.Service.fromServiceArn.parameter.id"></a>

- *Type:* string

---

###### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="cdk-vpclattice-alpha.Service.fromServiceArn.parameter.serviceArn"></a>

- *Type:* string

---

##### `fromServiceId` <a name="fromServiceId" id="cdk-vpclattice-alpha.Service.fromServiceId"></a>

```typescript
import { Service } from 'cdk-vpclattice-alpha'

Service.fromServiceId(scope: Construct, id: string, serviceId: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.Service.fromServiceId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.Service.fromServiceId.parameter.id"></a>

- *Type:* string

---

###### `serviceId`<sup>Required</sup> <a name="serviceId" id="cdk-vpclattice-alpha.Service.fromServiceId.parameter.serviceId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.authPolicy">authPolicy</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a></code> | Auth policy to be added to the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The auth type of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.domainName">domainName</a></code> | <code>string</code> | VPC Lattice Domain Name. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Logging destinations of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceArn">serviceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceId">serviceId</a></code> | <code>string</code> | The Id of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.customDomainName">customDomainName</a></code> | <code>string</code> | Custom Domain Name. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.Service.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.Service.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.Service.property.authPolicy"></a>

```typescript
public readonly authPolicy: AuthPolicyDocument;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a>

Auth policy to be added to the service.

---

##### `authType`<sup>Required</sup> <a name="authType" id="cdk-vpclattice-alpha.Service.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>

The auth type of the service.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-vpclattice-alpha.Service.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

VPC Lattice Domain Name.

---

##### `loggingDestinations`<sup>Required</sup> <a name="loggingDestinations" id="cdk-vpclattice-alpha.Service.property.loggingDestinations"></a>

```typescript
public readonly loggingDestinations: LoggingDestination[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]

Logging destinations of the service.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="cdk-vpclattice-alpha.Service.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="cdk-vpclattice-alpha.Service.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The Id of the service.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="cdk-vpclattice-alpha.Service.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the service.

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="cdk-vpclattice-alpha.Service.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string

Custom Domain Name.

---


### ServiceNetwork <a name="ServiceNetwork" id="cdk-vpclattice-alpha.ServiceNetwork"></a>

- *Implements:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

Define a VPC Lattice Service Network.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.ServiceNetwork.Initializer"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

new ServiceNetwork(scope: Construct, id: string, props: ServiceNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps">ServiceNetworkProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.ServiceNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.ServiceNetwork.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceNetworkProps">ServiceNetworkProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addLoggingDestination">addLoggingDestination</a></code> | Send logs to a destination. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.associateService">associateService</a></code> | Associate a Lattice Service with a Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.associateVPC">associateVPC</a></code> | Apply the VPC to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.grantAccess">grantAccess</a></code> | .grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granular permissions at the rule level. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.shareResource">shareResource</a></code> | Amazon VPC Lattice integrates with AWS Resource Access Manager (AWS RAM) to enable resource sharing across AWS accounts or through AWS Organizations. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.ServiceNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.ServiceNetwork.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.ServiceNetwork.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addLoggingDestination` <a name="addLoggingDestination" id="cdk-vpclattice-alpha.ServiceNetwork.addLoggingDestination"></a>

```typescript
public addLoggingDestination(destination: LoggingDestination): void
```

Send logs to a destination.

###### `destination`<sup>Required</sup> <a name="destination" id="cdk-vpclattice-alpha.ServiceNetwork.addLoggingDestination.parameter.destination"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>

---

##### `associateService` <a name="associateService" id="cdk-vpclattice-alpha.ServiceNetwork.associateService"></a>

```typescript
public associateService(service: IService): void
```

Associate a Lattice Service with a Service Network.

###### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.ServiceNetwork.associateService.parameter.service"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

---

##### `associateVPC` <a name="associateVPC" id="cdk-vpclattice-alpha.ServiceNetwork.associateVPC"></a>

```typescript
public associateVPC(props: AssociateVPCProps): void
```

Apply the VPC to the Service Network.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.associateVPC.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AssociateVPCProps">AssociateVPCProps</a>

---

##### `grantAccess` <a name="grantAccess" id="cdk-vpclattice-alpha.ServiceNetwork.grantAccess"></a>

```typescript
public grantAccess(principals: IPrincipal[]): void
```

.grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granular permissions at the rule level.

###### `principals`<sup>Required</sup> <a name="principals" id="cdk-vpclattice-alpha.ServiceNetwork.grantAccess.parameter.principals"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

a list of IAM principals to grant access.

---

##### `shareResource` <a name="shareResource" id="cdk-vpclattice-alpha.ServiceNetwork.shareResource"></a>

```typescript
public shareResource(props: ShareServiceNetworkProps): void
```

Amazon VPC Lattice integrates with AWS Resource Access Manager (AWS RAM) to enable resource sharing across AWS accounts or through AWS Organizations.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.shareResource.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps">ShareServiceNetworkProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.fromArn">fromArn</a></code> | Import a Service Network by Arn. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.fromId">fromId</a></code> | Import a Service Network by Id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.ServiceNetwork.isConstruct"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

ServiceNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.ServiceNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.ServiceNetwork.isOwnedResource"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

ServiceNetwork.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceNetwork.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.ServiceNetwork.isResource"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

ServiceNetwork.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceNetwork.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromArn` <a name="fromArn" id="cdk-vpclattice-alpha.ServiceNetwork.fromArn"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

ServiceNetwork.fromArn(scope: Construct, id: string, arn: string)
```

Import a Service Network by Arn.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.ServiceNetwork.fromArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.ServiceNetwork.fromArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-vpclattice-alpha.ServiceNetwork.fromArn.parameter.arn"></a>

- *Type:* string

---

##### `fromId` <a name="fromId" id="cdk-vpclattice-alpha.ServiceNetwork.fromId"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

ServiceNetwork.fromId(scope: Construct, id: string, serviceNetworkId: string)
```

Import a Service Network by Id.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.ServiceNetwork.fromId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.ServiceNetwork.fromId.parameter.id"></a>

- *Type:* string

---

###### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.ServiceNetwork.fromId.parameter.serviceNetworkId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authPolicy">authPolicy</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a></code> | Auth policy to be added to the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The auth type of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Logging destinations of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.name">name</a></code> | <code>string</code> | The name of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Id of the Service Network. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.ServiceNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.ServiceNetwork.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.ServiceNetwork.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.ServiceNetwork.property.authPolicy"></a>

```typescript
public readonly authPolicy: AuthPolicyDocument;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a>

Auth policy to be added to the service network.

---

##### `authType`<sup>Required</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceNetwork.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.NONE

The auth type of the service network.

---

##### `loggingDestinations`<sup>Required</sup> <a name="loggingDestinations" id="cdk-vpclattice-alpha.ServiceNetwork.property.loggingDestinations"></a>

```typescript
public readonly loggingDestinations: LoggingDestination[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]

Logging destinations of the service network.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.ServiceNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service network.

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service network.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The Id of the Service Network.

---


### ServiceNetworkAssociation <a name="ServiceNetworkAssociation" id="cdk-vpclattice-alpha.ServiceNetworkAssociation"></a>

Creates an Association Between a Lattice Service and a Service Network.

Consider using `.addService` of the ServiceNetwork construct

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.Initializer"></a>

```typescript
import { ServiceNetworkAssociation } from 'cdk-vpclattice-alpha'

new ServiceNetworkAssociation(scope: Construct, id: string, props: ServiceNetworkAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociationProps">ServiceNetworkAssociationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceNetworkAssociationProps">ServiceNetworkAssociationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.isConstruct"></a>

```typescript
import { ServiceNetworkAssociation } from 'cdk-vpclattice-alpha'

ServiceNetworkAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.isOwnedResource"></a>

```typescript
import { ServiceNetworkAssociation } from 'cdk-vpclattice-alpha'

ServiceNetworkAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.isResource"></a>

```typescript
import { ServiceNetworkAssociation } from 'cdk-vpclattice-alpha'

ServiceNetworkAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.ServiceNetworkAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### ServiceNetworkVpcAssociation <a name="ServiceNetworkVpcAssociation" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation"></a>

Associate a VPC with Lattice Service Network.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.Initializer"></a>

```typescript
import { ServiceNetworkVpcAssociation } from 'cdk-vpclattice-alpha'

new ServiceNetworkVpcAssociation(scope: Construct, id: string, props: ServiceNetworkVpcAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps">ServiceNetworkVpcAssociationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps">ServiceNetworkVpcAssociationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isConstruct"></a>

```typescript
import { ServiceNetworkVpcAssociation } from 'cdk-vpclattice-alpha'

ServiceNetworkVpcAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isOwnedResource"></a>

```typescript
import { ServiceNetworkVpcAssociation } from 'cdk-vpclattice-alpha'

ServiceNetworkVpcAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isResource"></a>

```typescript
import { ServiceNetworkVpcAssociation } from 'cdk-vpclattice-alpha'

ServiceNetworkVpcAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### TargetGroupBase <a name="TargetGroupBase" id="cdk-vpclattice-alpha.TargetGroupBase"></a>

- *Implements:* <a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a>

Properties for a Target Group, Only supply one of instanceTargets, lambdaTargets, albTargets, ipTargets.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.TargetGroupBase.Initializer"></a>

```typescript
import { TargetGroupBase } from 'cdk-vpclattice-alpha'

new TargetGroupBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.TargetGroupBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.TargetGroupBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-vpclattice-alpha.TargetGroupBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.TargetGroupBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.TargetGroupBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.TargetGroupBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.TargetGroupBase.isConstruct"></a>

```typescript
import { TargetGroupBase } from 'cdk-vpclattice-alpha'

TargetGroupBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.TargetGroupBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.TargetGroupBase.isOwnedResource"></a>

```typescript
import { TargetGroupBase } from 'cdk-vpclattice-alpha'

TargetGroupBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.TargetGroupBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.TargetGroupBase.isResource"></a>

```typescript
import { TargetGroupBase } from 'cdk-vpclattice-alpha'

TargetGroupBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.TargetGroupBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The ARN of the target group. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The ID of the target group. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | The type of target group. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.TargetGroupBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.TargetGroupBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.TargetGroupBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.TargetGroupBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="cdk-vpclattice-alpha.TargetGroupBase.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The ARN of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.TargetGroupBase.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The ID of the target group.

---

*Example*

```typescript
"tg-1332423"
```


##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.TargetGroupBase.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

The type of target group.

---


## Structs <a name="Structs" id="Structs"></a>

### AlbTargetGroupProps <a name="AlbTargetGroupProps" id="cdk-vpclattice-alpha.AlbTargetGroupProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.AlbTargetGroupProps.Initializer"></a>

```typescript
import { AlbTargetGroupProps } from 'cdk-vpclattice-alpha'

const albTargetGroupProps: AlbTargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | You can specify a single **internal** Application Load Balancer as the target. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.listenerPort">listenerPort</a></code> | <code>number</code> | This port is used for routing traffic to the target,  and defaults to the target group port. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.port">port</a></code> | <code>number</code> | The port on which the target group will listen. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a></code> | The protocol to use for routing traffic to the targets. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.protocolVersion">protocolVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a></code> | Choose the protocol version for requests to be sent to targets. |

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="cdk-vpclattice-alpha.AlbTargetGroupProps.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

You can specify a single **internal** Application Load Balancer as the target.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.AlbTargetGroupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC.

---

##### `listenerPort`<sup>Optional</sup> <a name="listenerPort" id="cdk-vpclattice-alpha.AlbTargetGroupProps.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

This port is used for routing traffic to the target,  and defaults to the target group port.

However, you can 
override the default and specify a custom port that matches 
the port of your Application Load Balancer's listeners

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.AlbTargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.AlbTargetGroupProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 443

The port on which the target group will listen.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk-vpclattice-alpha.AlbTargetGroupProps.property.protocol"></a>

```typescript
public readonly protocol: RequestProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a>
- *Default:* Protocol.HTTPS

The protocol to use for routing traffic to the targets.

Can't be changed after creation.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="cdk-vpclattice-alpha.AlbTargetGroupProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: RequestProtocolVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a>
- *Default:* Protocol.HTTP1

Choose the protocol version for requests to be sent to targets.

The protocol version you choose must support the request protocols
from clients.

---

### AssociateVPCProps <a name="AssociateVPCProps" id="cdk-vpclattice-alpha.AssociateVPCProps"></a>

Properties to associate a VPC with a Service Network.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.AssociateVPCProps.Initializer"></a>

```typescript
import { AssociateVPCProps } from 'cdk-vpclattice-alpha'

const associateVPCProps: AssociateVPCProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AssociateVPCProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to associate with the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVPCProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup[]</code> | The security groups to associate with the Service Network. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.AssociateVPCProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to associate with the Service Network.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-vpclattice-alpha.AssociateVPCProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: SecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup[]
- *Default:* a security group that allows inbound 443 will be permitted.

The security groups to associate with the Service Network.

---

### BaseTargetGroupProps <a name="BaseTargetGroupProps" id="cdk-vpclattice-alpha.BaseTargetGroupProps"></a>

Basic properties for a Target Group.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.BaseTargetGroupProps.Initializer"></a>

```typescript
import { BaseTargetGroupProps } from 'cdk-vpclattice-alpha'

const baseTargetGroupProps: BaseTargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.BaseTargetGroupProps.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.BaseTargetGroupProps.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | The type of targets registered to this TargetGroup, either IP or Instance. |

---

##### `targetGroupName`<sup>Optional</sup> <a name="targetGroupName" id="cdk-vpclattice-alpha.BaseTargetGroupProps.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string
- *Default:* Automatically generated.

The name of the target group.

Must be between 3-128 characters. The name must be unique within the account.
The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as
the first or last character, or immediately after another hyphen.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="cdk-vpclattice-alpha.BaseTargetGroupProps.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>
- *Default:* Determined automatically.

The type of targets registered to this TargetGroup, either IP or Instance.

All targets registered into the group must be of this type. If you
register targets to the TargetGroup in the CDK app, the TargetType is
determined automatically.

---

### CustomDomainProps <a name="CustomDomainProps" id="cdk-vpclattice-alpha.CustomDomainProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.CustomDomainProps.Initializer"></a>

```typescript
import { CustomDomainProps } from 'cdk-vpclattice-alpha'

const customDomainProps: CustomDomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.CustomDomainProps.property.domainName">domainName</a></code> | <code>string</code> | A registered custom domain name for your service. |
| <code><a href="#cdk-vpclattice-alpha.CustomDomainProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | A certificate that may be used by the service. |
| <code><a href="#cdk-vpclattice-alpha.CustomDomainProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route53 Private Hosted Zone or Public Hosted Zone. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-vpclattice-alpha.CustomDomainProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string
- *Default:* Your service will be reachable only by the domain name that VPC Lattice generates

A registered custom domain name for your service.

Requests to the custom
domain are resolved by the DNS server to the VPC Lattice generated domain 
name. Note: **Changing it requires recreating the service.**

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-custom-domain-name.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-custom-domain-name.html)

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="cdk-vpclattice-alpha.CustomDomainProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* No custom certificate is used.

A certificate that may be used by the service.

To receive HTTPS requests,
you must provide your own certificate in AWS Certificate Manager.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-byoc.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-byoc.html)

---

##### `hostedZone`<sup>Optional</sup> <a name="hostedZone" id="cdk-vpclattice-alpha.CustomDomainProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The Route53 Private Hosted Zone or Public Hosted Zone.

This will add a CNAME record between the custom domain name and the VPC
Lattice service generated DNS name. Leave empty if DNS is managed outside
of Route53 or if you want to manually add the Route53 CNAME record.

---

### DnsEntryProperty <a name="DnsEntryProperty" id="cdk-vpclattice-alpha.DnsEntryProperty"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.DnsEntryProperty.Initializer"></a>

```typescript
import { DnsEntryProperty } from 'cdk-vpclattice-alpha'

const dnsEntryProperty: DnsEntryProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.DnsEntryProperty.property.domainName">domainName</a></code> | <code>string</code> | The domain name of the service. |
| <code><a href="#cdk-vpclattice-alpha.DnsEntryProperty.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route53 Private Hosted Zone or Public Hosted Zone. |

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="cdk-vpclattice-alpha.DnsEntryProperty.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name of the service.

---

##### `hostedZone`<sup>Optional</sup> <a name="hostedZone" id="cdk-vpclattice-alpha.DnsEntryProperty.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The Route53 Private Hosted Zone or Public Hosted Zone.

---

### HeaderMatch <a name="HeaderMatch" id="cdk-vpclattice-alpha.HeaderMatch"></a>

Header Matches for creating rules.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.HeaderMatch.Initializer"></a>

```typescript
import { HeaderMatch } from 'cdk-vpclattice-alpha'

const headerMatch: HeaderMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.headerName">headerName</a></code> | <code>string</code> | The name of the header to match. |
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.matchOperator">matchOperator</a></code> | <code><a href="#cdk-vpclattice-alpha.MatchOperator">MatchOperator</a></code> | Type of match to make. |
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.matchValue">matchValue</a></code> | <code>string</code> | Value to match against. |
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.caseSensitive">caseSensitive</a></code> | <code>boolean</code> | Whether the match should be case sensitive or not. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="cdk-vpclattice-alpha.HeaderMatch.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The name of the header to match.

---

##### `matchOperator`<sup>Required</sup> <a name="matchOperator" id="cdk-vpclattice-alpha.HeaderMatch.property.matchOperator"></a>

```typescript
public readonly matchOperator: MatchOperator;
```

- *Type:* <a href="#cdk-vpclattice-alpha.MatchOperator">MatchOperator</a>

Type of match to make.

---

##### `matchValue`<sup>Required</sup> <a name="matchValue" id="cdk-vpclattice-alpha.HeaderMatch.property.matchValue"></a>

```typescript
public readonly matchValue: string;
```

- *Type:* string

Value to match against.

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="cdk-vpclattice-alpha.HeaderMatch.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the match should be case sensitive or not.

---

### HealthCheck <a name="HealthCheck" id="cdk-vpclattice-alpha.HealthCheck"></a>

Create a Health Check for a target.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-group-health-checks.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-group-health-checks.html)

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.HealthCheck.Initializer"></a>

```typescript
import { HealthCheck } from 'cdk-vpclattice-alpha'

const healthCheck: HealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.enabled">enabled</a></code> | <code>boolean</code> | Whether to enable health checks for the target group. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.healthCheckInterval">healthCheckInterval</a></code> | <code>aws-cdk-lib.Duration</code> | The approximate amount of time, in seconds, between health checks of an individual target. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.healthCheckTimeout">healthCheckTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The amount of time, in seconds, during which no response from a target means a failed health check. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | The number of consecutive successful health checks required before an unhealthy target is considered healthy. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.matchers">matchers</a></code> | <code>string \| <a href="#cdk-vpclattice-alpha.HTTPFixedResponse">HTTPFixedResponse</a></code> | The codes to use when checking for a successful response from a target. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.path">path</a></code> | <code>string</code> | The ping path to the destination on the targets for health checks. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.port">port</a></code> | <code>number</code> | The port the service uses when performing health checks on targets. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.HealthCheckProtocol">HealthCheckProtocol</a></code> | The protocol the service uses when performing health checks on targets. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.protocolVersion">protocolVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.HealthCheckProtocolVersion">HealthCheckProtocolVersion</a></code> | Protocol Version to use for Health Check. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheck.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | The number of consecutive health check failures required before considering a target unhealthy. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk-vpclattice-alpha.HealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true if protocol version is HTTP1, false if protocol version is HTTP2,

Whether to enable health checks for the target group.

---

##### `healthCheckInterval`<sup>Optional</sup> <a name="healthCheckInterval" id="cdk-vpclattice-alpha.HealthCheck.property.healthCheckInterval"></a>

```typescript
public readonly healthCheckInterval: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(30)

The approximate amount of time, in seconds, between health checks of an individual target.

The range is 5–300 seconds.

---

##### `healthCheckTimeout`<sup>Optional</sup> <a name="healthCheckTimeout" id="cdk-vpclattice-alpha.HealthCheck.property.healthCheckTimeout"></a>

```typescript
public readonly healthCheckTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(5)

The amount of time, in seconds, during which no response from a target means a failed health check.

The range is 1–120 seconds.

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="cdk-vpclattice-alpha.HealthCheck.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number
- *Default:* 5

The number of consecutive successful health checks required before an unhealthy target is considered healthy.

The range is 2–10.

---

##### `matchers`<sup>Optional</sup> <a name="matchers" id="cdk-vpclattice-alpha.HealthCheck.property.matchers"></a>

```typescript
public readonly matchers: string | HTTPFixedResponse;
```

- *Type:* string | <a href="#cdk-vpclattice-alpha.HTTPFixedResponse">HTTPFixedResponse</a>
- *Default:* FixedResponse.OK

The codes to use when checking for a successful response from a target.

These are called Success codes in the AWS Console. You can specify multiple
values (for example, "200,202") or a range of values (for example, "200-299").

---

##### `path`<sup>Optional</sup> <a name="path" id="cdk-vpclattice-alpha.HealthCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string
- *Default:* '/' (ping to the root domain)

The ping path to the destination on the targets for health checks.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.HealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* Defaults to port 80 for HTTP, or 443 for HTTPS

The port the service uses when performing health checks on targets.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk-vpclattice-alpha.HealthCheck.property.protocol"></a>

```typescript
public readonly protocol: HealthCheckProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HealthCheckProtocol">HealthCheckProtocol</a>
- *Default:* HealthCheckProtocol.HTTP

The protocol the service uses when performing health checks on targets.

Health checks do not support gRPC target group protocol versions.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="cdk-vpclattice-alpha.HealthCheck.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: HealthCheckProtocolVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HealthCheckProtocolVersion">HealthCheckProtocolVersion</a>
- *Default:* HealthCheckProtocolVersion.HTTP1

Protocol Version to use for Health Check.

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="cdk-vpclattice-alpha.HealthCheck.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number
- *Default:* 2

The number of consecutive health check failures required before considering a target unhealthy.

The range is 2–10.

---

### InstanceTarget <a name="InstanceTarget" id="cdk-vpclattice-alpha.InstanceTarget"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.InstanceTarget.Initializer"></a>

```typescript
import { InstanceTarget } from 'cdk-vpclattice-alpha'

const instanceTarget: InstanceTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.InstanceTarget.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The EC2 Instance. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTarget.property.port">port</a></code> | <code>number</code> | The port on which the target is listening. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-vpclattice-alpha.InstanceTarget.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The EC2 Instance.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.InstanceTarget.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* Defaults to port 80 for HTTP, or 443 for HTTPS

The port on which the target is listening.

---

### InstanceTargetGroupProps <a name="InstanceTargetGroupProps" id="cdk-vpclattice-alpha.InstanceTargetGroupProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.Initializer"></a>

```typescript
import { InstanceTargetGroupProps } from 'cdk-vpclattice-alpha'

const instanceTargetGroupProps: InstanceTargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the target instances reside. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.autoScalingGroups">autoScalingGroups</a></code> | <code>aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]</code> | The ASGs to associate with the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.healthCheck">healthCheck</a></code> | <code><a href="#cdk-vpclattice-alpha.HealthCheck">HealthCheck</a></code> | Healthcheck. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.intances">intances</a></code> | <code><a href="#cdk-vpclattice-alpha.InstanceTarget">InstanceTarget</a>[]</code> | The targets to associate with the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a></code> | The protocol to use for routing traffic to the targets. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroupProps.property.protocolVersion">protocolVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a></code> | Choose the protocol version for requests to be sent to targets. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the target instances reside.

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="autoScalingGroups" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.autoScalingGroups"></a>

```typescript
public readonly autoScalingGroups: IAutoScalingGroup[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]

The ASGs to associate with the target group.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.healthCheck"></a>

```typescript
public readonly healthCheck: HealthCheck;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HealthCheck">HealthCheck</a>

Healthcheck.

---

##### `intances`<sup>Optional</sup> <a name="intances" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.intances"></a>

```typescript
public readonly intances: InstanceTarget[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.InstanceTarget">InstanceTarget</a>[]

The targets to associate with the target group.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* Automatically generated name

The name of the target group.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* Defaults to port 80 for HTTP, or 443 for HTTPS

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.protocol"></a>

```typescript
public readonly protocol: RequestProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a>
- *Default:* Protocol.HTTPS

The protocol to use for routing traffic to the targets.

Can't be changed after creation.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="cdk-vpclattice-alpha.InstanceTargetGroupProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: RequestProtocolVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a>
- *Default:* Protocol.HTTP1 if HTTP or HTTPS is selected

Choose the protocol version for requests to be sent to targets.

The protocol version you choose must support the request protocols
from clients.

---

### IpTargetGroupProps <a name="IpTargetGroupProps" id="cdk-vpclattice-alpha.IpTargetGroupProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.IpTargetGroupProps.Initializer"></a>

```typescript
import { IpTargetGroupProps } from 'cdk-vpclattice-alpha'

const ipTargetGroupProps: IpTargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC Identifier. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.healthCheck">healthCheck</a></code> | <code><a href="#cdk-vpclattice-alpha.HealthCheck">HealthCheck</a></code> | Health Check configuration. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.ipAddressType">ipAddressType</a></code> | <code><a href="#cdk-vpclattice-alpha.IpAddressType">IpAddressType</a></code> | The type of IP Address Protocol to use. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.port">port</a></code> | <code>number</code> | Port. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a></code> | The application layer protocol to use. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.protocolVersion">protocolVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a></code> | ProtocolVersion. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupProps.property.targets">targets</a></code> | <code><a href="#cdk-vpclattice-alpha.IpTargetGroupTargetProps">IpTargetGroupTargetProps</a>[]</code> | Targets. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC Identifier.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.healthCheck"></a>

```typescript
public readonly healthCheck: HealthCheck;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HealthCheck">HealthCheck</a>

Health Check configuration.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IpAddressType">IpAddressType</a>
- *Default:* IpAddressType.IPv4

The type of IP Address Protocol to use.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* Defaults to port 80 for HTTP, or 443 for HTTPS

Port.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.protocol"></a>

```typescript
public readonly protocol: RequestProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocol">RequestProtocol</a>
- *Default:* RequestProtocol.HTTPS

The application layer protocol to use.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: RequestProtocolVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RequestProtocolVersion">RequestProtocolVersion</a>
- *Default:* RequestProtocolVersion.HTTP1

ProtocolVersion.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="cdk-vpclattice-alpha.IpTargetGroupProps.property.targets"></a>

```typescript
public readonly targets: IpTargetGroupTargetProps[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.IpTargetGroupTargetProps">IpTargetGroupTargetProps</a>[]

Targets.

---

### IpTargetGroupTargetProps <a name="IpTargetGroupTargetProps" id="cdk-vpclattice-alpha.IpTargetGroupTargetProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.IpTargetGroupTargetProps.Initializer"></a>

```typescript
import { IpTargetGroupTargetProps } from 'cdk-vpclattice-alpha'

const ipTargetGroupTargetProps: IpTargetGroupTargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupTargetProps.property.ipAddress">ipAddress</a></code> | <code>aws-cdk-lib.aws_ec2.Ipv6Addresses \| aws-cdk-lib.aws_ec2.IpAddresses</code> | The IP Address of the target. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroupTargetProps.property.port">port</a></code> | <code>number</code> | Port. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="cdk-vpclattice-alpha.IpTargetGroupTargetProps.property.ipAddress"></a>

```typescript
public readonly ipAddress: Ipv6Addresses | IpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.Ipv6Addresses | aws-cdk-lib.aws_ec2.IpAddresses

The IP Address of the target.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.IpTargetGroupTargetProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* Defaults to port 80 for HTTP, or 443 for HTTPS

Port.

---

### LambdaTargetGroupProps <a name="LambdaTargetGroupProps" id="cdk-vpclattice-alpha.LambdaTargetGroupProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.LambdaTargetGroupProps.Initializer"></a>

```typescript
import { LambdaTargetGroupProps } from 'cdk-vpclattice-alpha'

const lambdaTargetGroupProps: LambdaTargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroupProps.property.target">target</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | Facilitates routing to a **single** Lambda function. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroupProps.property.lambdaEventStructureVersion">lambdaEventStructureVersion</a></code> | <code><a href="#cdk-vpclattice-alpha.LambdaEventStructureVersion">LambdaEventStructureVersion</a></code> | The version of the event structure that Lambda function receives. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the target group. |

---

##### `target`<sup>Required</sup> <a name="target" id="cdk-vpclattice-alpha.LambdaTargetGroupProps.property.target"></a>

```typescript
public readonly target: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

Facilitates routing to a **single** Lambda function.

---

##### `lambdaEventStructureVersion`<sup>Optional</sup> <a name="lambdaEventStructureVersion" id="cdk-vpclattice-alpha.LambdaTargetGroupProps.property.lambdaEventStructureVersion"></a>

```typescript
public readonly lambdaEventStructureVersion: LambdaEventStructureVersion;
```

- *Type:* <a href="#cdk-vpclattice-alpha.LambdaEventStructureVersion">LambdaEventStructureVersion</a>
- *Default:* LambdaEventStructureVersion.V1

The version of the event structure that Lambda function receives.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.LambdaTargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

### ListenerConfig <a name="ListenerConfig" id="cdk-vpclattice-alpha.ListenerConfig"></a>

Listener Config.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ListenerConfig.Initializer"></a>

```typescript
import { ListenerConfig } from 'cdk-vpclattice-alpha'

const listenerConfig: ListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ListenerConfig.property.defaultAction">defaultAction</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleAction">RuleAction</a></code> | * A default action that will be taken if no rules match. |
| <code><a href="#cdk-vpclattice-alpha.ListenerConfig.property.name">name</a></code> | <code>string</code> | The Name of the listener. |
| <code><a href="#cdk-vpclattice-alpha.ListenerConfig.property.port">port</a></code> | <code>number</code> | Optional port number for the listener. |
| <code><a href="#cdk-vpclattice-alpha.ListenerConfig.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.ListenerProtocol">ListenerProtocol</a></code> | Protocol that the listener will listen on. |
| <code><a href="#cdk-vpclattice-alpha.ListenerConfig.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the service when the resource/stack is deleted. |
| <code><a href="#cdk-vpclattice-alpha.ListenerConfig.property.rules">rules</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleProps">RuleProps</a>[]</code> | Rules to add to the listener. |

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="cdk-vpclattice-alpha.ListenerConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: RuleAction;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleAction">RuleAction</a>
- *Default:* HTTPFixedResponse.NOT_FOUND

* A default action that will be taken if no rules match.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.ListenerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name of the listener.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.ListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 80 or 443 depending on the Protocol

Optional port number for the listener.

If not supplied, will default to 80 or 443, depending on the Protocol.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk-vpclattice-alpha.ListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: ListenerProtocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ListenerProtocol">ListenerProtocol</a>

Protocol that the listener will listen on.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-vpclattice-alpha.ListenerConfig.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

Determine what happens to the service when the resource/stack is deleted.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="cdk-vpclattice-alpha.ListenerConfig.property.rules"></a>

```typescript
public readonly rules: RuleProps[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleProps">RuleProps</a>[]

Rules to add to the listener.

---

### ListenerProps <a name="ListenerProps" id="cdk-vpclattice-alpha.ListenerProps"></a>

Properties to Create a Lattice Listener.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ListenerProps.Initializer"></a>

```typescript
import { ListenerProps } from 'cdk-vpclattice-alpha'

const listenerProps: ListenerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.service">service</a></code> | <code><a href="#cdk-vpclattice-alpha.Service">Service</a></code> | The Id of the service that this listener is associated with. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.config">config</a></code> | <code><a href="#cdk-vpclattice-alpha.ListenerConfig">ListenerConfig</a></code> | The configuration properties for the listener. |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.ListenerProps.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* <a href="#cdk-vpclattice-alpha.Service">Service</a>

The Id of the service that this listener is associated with.

---

##### `config`<sup>Optional</sup> <a name="config" id="cdk-vpclattice-alpha.ListenerProps.property.config"></a>

```typescript
public readonly config: ListenerConfig;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ListenerConfig">ListenerConfig</a>

The configuration properties for the listener.

---

### PathMatch <a name="PathMatch" id="cdk-vpclattice-alpha.PathMatch"></a>

Properties to create a PathMatch.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.PathMatch.Initializer"></a>

```typescript
import { PathMatch } from 'cdk-vpclattice-alpha'

const pathMatch: PathMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.PathMatch.property.path">path</a></code> | <code>string</code> | Value to match against. |
| <code><a href="#cdk-vpclattice-alpha.PathMatch.property.caseSensitive">caseSensitive</a></code> | <code>boolean</code> | Whether the match should be case sensitive or not. |
| <code><a href="#cdk-vpclattice-alpha.PathMatch.property.pathMatchType">pathMatchType</a></code> | <code><a href="#cdk-vpclattice-alpha.PathMatchType">PathMatchType</a></code> | Type of match to make. |

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-vpclattice-alpha.PathMatch.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Value to match against.

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="cdk-vpclattice-alpha.PathMatch.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the match should be case sensitive or not.

---

##### `pathMatchType`<sup>Optional</sup> <a name="pathMatchType" id="cdk-vpclattice-alpha.PathMatch.property.pathMatchType"></a>

```typescript
public readonly pathMatchType: PathMatchType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.PathMatchType">PathMatchType</a>
- *Default:* PathMatchType.EXACT

Type of match to make.

---

### RuleAction <a name="RuleAction" id="cdk-vpclattice-alpha.RuleAction"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.RuleAction.Initializer"></a>

```typescript
import { RuleAction } from 'cdk-vpclattice-alpha'

const ruleAction: RuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.RuleAction.property.httpFixedResponse">httpFixedResponse</a></code> | <code><a href="#cdk-vpclattice-alpha.HTTPFixedResponse">HTTPFixedResponse</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.RuleAction.property.targetGroup">targetGroup</a></code> | <code><a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.RuleAction.property.weightedTargetGroups">weightedTargetGroups</a></code> | <code><a href="#cdk-vpclattice-alpha.WeightedTargetGroup">WeightedTargetGroup</a>[]</code> | *No description.* |

---

##### `httpFixedResponse`<sup>Optional</sup> <a name="httpFixedResponse" id="cdk-vpclattice-alpha.RuleAction.property.httpFixedResponse"></a>

```typescript
public readonly httpFixedResponse: HTTPFixedResponse;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HTTPFixedResponse">HTTPFixedResponse</a>

---

##### `targetGroup`<sup>Optional</sup> <a name="targetGroup" id="cdk-vpclattice-alpha.RuleAction.property.targetGroup"></a>

```typescript
public readonly targetGroup: ITargetGroup;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a>

---

##### `weightedTargetGroups`<sup>Optional</sup> <a name="weightedTargetGroups" id="cdk-vpclattice-alpha.RuleAction.property.weightedTargetGroups"></a>

```typescript
public readonly weightedTargetGroups: WeightedTargetGroup[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.WeightedTargetGroup">WeightedTargetGroup</a>[]

---

### RuleConditions <a name="RuleConditions" id="cdk-vpclattice-alpha.RuleConditions"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.RuleConditions.Initializer"></a>

```typescript
import { RuleConditions } from 'cdk-vpclattice-alpha'

const ruleConditions: RuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.RuleConditions.property.headerMatches">headerMatches</a></code> | <code><a href="#cdk-vpclattice-alpha.HeaderMatch">HeaderMatch</a>[]</code> | Properties to Create A HeaderMatch. |
| <code><a href="#cdk-vpclattice-alpha.RuleConditions.property.methodMatch">methodMatch</a></code> | <code><a href="#cdk-vpclattice-alpha.HTTPMethod">HTTPMethod</a></code> | Method to match against. |
| <code><a href="#cdk-vpclattice-alpha.RuleConditions.property.pathMatch">pathMatch</a></code> | <code><a href="#cdk-vpclattice-alpha.PathMatch">PathMatch</a></code> | Properties to Create A PathMatch. |

---

##### `headerMatches`<sup>Optional</sup> <a name="headerMatches" id="cdk-vpclattice-alpha.RuleConditions.property.headerMatches"></a>

```typescript
public readonly headerMatches: HeaderMatch[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.HeaderMatch">HeaderMatch</a>[]
- *Default:* No header match

Properties to Create A HeaderMatch.

---

##### `methodMatch`<sup>Optional</sup> <a name="methodMatch" id="cdk-vpclattice-alpha.RuleConditions.property.methodMatch"></a>

```typescript
public readonly methodMatch: HTTPMethod;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HTTPMethod">HTTPMethod</a>
- *Default:* No header match

Method to match against.

---

##### `pathMatch`<sup>Optional</sup> <a name="pathMatch" id="cdk-vpclattice-alpha.RuleConditions.property.pathMatch"></a>

```typescript
public readonly pathMatch: PathMatch;
```

- *Type:* <a href="#cdk-vpclattice-alpha.PathMatch">PathMatch</a>
- *Default:* No path match

Properties to Create A PathMatch.

---

### RuleProps <a name="RuleProps" id="cdk-vpclattice-alpha.RuleProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.RuleProps.Initializer"></a>

```typescript
import { RuleProps } from 'cdk-vpclattice-alpha'

const ruleProps: RuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.RuleProps.property.action">action</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleAction">RuleAction</a></code> | the action for the rule, is either a fixed Response, or a being sent to  Weighted TargetGroup. |
| <code><a href="#cdk-vpclattice-alpha.RuleProps.property.name">name</a></code> | <code>string</code> | A name for the the Rule. |
| <code><a href="#cdk-vpclattice-alpha.RuleProps.property.priority">priority</a></code> | <code>number</code> | The priority of this rule, a lower priority will be processed first. |
| <code><a href="#cdk-vpclattice-alpha.RuleProps.property.conditions">conditions</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleConditions">RuleConditions</a></code> | the Matching criteria for the rule. |

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-vpclattice-alpha.RuleProps.property.action"></a>

```typescript
public readonly action: RuleAction;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleAction">RuleAction</a>

the action for the rule, is either a fixed Response, or a being sent to  Weighted TargetGroup.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.RuleProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the the Rule.

---

##### `priority`<sup>Required</sup> <a name="priority" id="cdk-vpclattice-alpha.RuleProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of this rule, a lower priority will be processed first.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="cdk-vpclattice-alpha.RuleProps.property.conditions"></a>

```typescript
public readonly conditions: RuleConditions;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleConditions">RuleConditions</a>

the Matching criteria for the rule.

This must contain at least one of
header, method or patchMatches

---

### ServiceNetworkAssociationProps <a name="ServiceNetworkAssociationProps" id="cdk-vpclattice-alpha.ServiceNetworkAssociationProps"></a>

Properties for associating a VPC with a Service Network.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceNetworkAssociationProps.Initializer"></a>

```typescript
import { ServiceNetworkAssociationProps } from 'cdk-vpclattice-alpha'

const serviceNetworkAssociationProps: ServiceNetworkAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociationProps.property.service">service</a></code> | <code><a href="#cdk-vpclattice-alpha.IService">IService</a></code> | Lattice ServiceId. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociationProps.property.serviceNetwork">serviceNetwork</a></code> | <code><a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a></code> | lattice Service. |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.ServiceNetworkAssociationProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

Lattice ServiceId.

---

##### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.ServiceNetworkAssociationProps.property.serviceNetwork"></a>

```typescript
public readonly serviceNetwork: IServiceNetwork;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

lattice Service.

---

### ServiceNetworkProps <a name="ServiceNetworkProps" id="cdk-vpclattice-alpha.ServiceNetworkProps"></a>

Properties for defining a VPC Lattice Service Network.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceNetworkProps.Initializer"></a>

```typescript
import { ServiceNetworkProps } from 'cdk-vpclattice-alpha'

const serviceNetworkProps: ServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.authPolicy">authPolicy</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a></code> | Policy to apply to the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The authentication and authorization that manages client access to the network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Where to send access logs. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the repository when the resource/stack is deleted. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.services">services</a></code> | <code><a href="#cdk-vpclattice-alpha.IService">IService</a>[]</code> | Lattice Services that are associated with this Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.vpcAssociations">vpcAssociations</a></code> | <code><a href="#cdk-vpclattice-alpha.AssociateVPCProps">AssociateVPCProps</a>[]</code> | You can associate VPCs to your service network at or after network creation. |

---

##### `authPolicy`<sup>Optional</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.authPolicy"></a>

```typescript
public readonly authPolicy: AuthPolicyDocument;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a>
- *Default:* No policy is applied

Policy to apply to the service network.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.NONE

The authentication and authorization that manages client access to the network.

If `AuthType.AWS_IAM` is selected, and a policy is not attached, all traffic will be denied 
by default regardless of the identity or service level permissions.

---

##### `loggingDestinations`<sup>Optional</sup> <a name="loggingDestinations" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.loggingDestinations"></a>

```typescript
public readonly loggingDestinations: LoggingDestination[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]
- *Default:* No logging

Where to send access logs.

Access log entries represent traffic
originated from VPCs associated with that network.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* CloudFormation generated name

The name of the Service Network.

If not provided,
CloudFormation will generate a name.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

Determine what happens to the repository when the resource/stack is deleted.

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.services"></a>

```typescript
public readonly services: IService[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>[]
- *Default:* no services are associated with the service network

Lattice Services that are associated with this Service Network.

---

##### `vpcAssociations`<sup>Optional</sup> <a name="vpcAssociations" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.vpcAssociations"></a>

```typescript
public readonly vpcAssociations: AssociateVPCProps[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.AssociateVPCProps">AssociateVPCProps</a>[]
- *Default:* no VPCs are associated

You can associate VPCs to your service network at or after network creation.

After association, services within the VPC can make calls to services in the
service network. Any VPC owner with access to the service network can associate
their VPCs to it.

---

### ServiceNetworkVpcAssociationProps <a name="ServiceNetworkVpcAssociationProps" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps"></a>

Props to Associate a VPC with a Service Network.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps.Initializer"></a>

```typescript
import { ServiceNetworkVpcAssociationProps } from 'cdk-vpclattice-alpha'

const serviceNetworkVpcAssociationProps: ServiceNetworkVpcAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | Service Network Identifier. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to associate with. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | security groups for the lattice endpoint. |

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

Service Network Identifier.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to associate with.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-vpclattice-alpha.ServiceNetworkVpcAssociationProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* a security group that will permit inbound 443

security groups for the lattice endpoint.

---

### ServiceProps <a name="ServiceProps" id="cdk-vpclattice-alpha.ServiceProps"></a>

Properties for defining a VPC Lattice Service.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from 'cdk-vpclattice-alpha'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.authPolicy">authPolicy</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a></code> | Policy to apply to the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The authentication and authorization that manages client access to the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.customDomain">customDomain</a></code> | <code><a href="#cdk-vpclattice-alpha.CustomDomainProps">CustomDomainProps</a></code> | A registered custom domain name for your service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.dnsEntry">dnsEntry</a></code> | <code><a href="#cdk-vpclattice-alpha.DnsEntryProperty">DnsEntryProperty</a></code> | A custom DNS entry. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Where to send access logs. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.name">name</a></code> | <code>string</code> | The name to assign to the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the service when the resource/stack is deleted. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.serviceNetwork">serviceNetwork</a></code> | <code><a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a></code> | ServiceNetwork to associate with. |

---

##### `authPolicy`<sup>Optional</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.ServiceProps.property.authPolicy"></a>

```typescript
public readonly authPolicy: AuthPolicyDocument;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a>
- *Default:* No policy is attached. All traffic is denied by default.

Policy to apply to the service.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.NONE

The authentication and authorization that manages client access to the service.

If AuthType.AWS_IAM is selected, and an auth policy is not attached or an access mode 
is not specified, all traffic will be denied to the service, regardless of the identity 
or permissions associated with the service network-level policy.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="cdk-vpclattice-alpha.ServiceProps.property.customDomain"></a>

```typescript
public readonly customDomain: CustomDomainProps;
```

- *Type:* <a href="#cdk-vpclattice-alpha.CustomDomainProps">CustomDomainProps</a>
- *Default:* Your service will be reachable only by the domain name that VPC Lattice generates

A registered custom domain name for your service.

Requests to the custom
domain are resolved by the DNS server to the VPC Lattice generated domain name.
Note: **Changing it requires recreating the service.**

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-custom-domain-name.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-custom-domain-name.html)

---

##### `dnsEntry`<sup>Optional</sup> <a name="dnsEntry" id="cdk-vpclattice-alpha.ServiceProps.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DnsEntryProperty;
```

- *Type:* <a href="#cdk-vpclattice-alpha.DnsEntryProperty">DnsEntryProperty</a>
- *Default:* No custom DNS entry is used.

A custom DNS entry.

Note Changing it requires recreating the service.

---

##### `loggingDestinations`<sup>Optional</sup> <a name="loggingDestinations" id="cdk-vpclattice-alpha.ServiceProps.property.loggingDestinations"></a>

```typescript
public readonly loggingDestinations: LoggingDestination[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]
- *Default:* No logging

Where to send access logs.

Access log entries represent traffic
originated from VPCs associated with that network.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.ServiceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* a CloudFormation generated name

The name to assign to the service.

Note: It must be unique within your AWS account and this name will become part of
the service DNS and can't be changed after the VPC Lattice service is created.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html)

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-vpclattice-alpha.ServiceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

Determine what happens to the service when the resource/stack is deleted.

---

##### `serviceNetwork`<sup>Optional</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.ServiceProps.property.serviceNetwork"></a>

```typescript
public readonly serviceNetwork: IServiceNetwork;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>
- *Default:* will not associate with any serviceNetwork.

ServiceNetwork to associate with.

---

### ShareServiceNetworkProps <a name="ShareServiceNetworkProps" id="cdk-vpclattice-alpha.ShareServiceNetworkProps"></a>

Properties to share a Service Network.

> [https://docs.aws.amazon.com/ram/latest/userguide/shareable.html#shareable-vpc-lattice](https://docs.aws.amazon.com/ram/latest/userguide/shareable.html#shareable-vpc-lattice)

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.Initializer"></a>

```typescript
import { ShareServiceNetworkProps } from 'cdk-vpclattice-alpha'

const shareServiceNetworkProps: ShareServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the share. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | Specifies whether principals outside your organization in AWS Organizations  can be associated with a resource share. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.principals">principals</a></code> | <code>string[]</code> | Principals to share the Service Network with. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | Resources to share the Service Network with. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the share.

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean;
```

- *Type:* boolean
- *Default:* true;

Specifies whether principals outside your organization in AWS Organizations  can be associated with a resource share.

A value of `true` lets you share 
with individual AWS accounts that are *not* in your organization. A value 
of `false` only has meaning if your account is a member of an AWS 
Organization.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]
- *Default:* none

Principals to share the Service Network with.

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]
- *Default:* none

Resources to share the Service Network with.

---

### ShareServiceProps <a name="ShareServiceProps" id="cdk-vpclattice-alpha.ShareServiceProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ShareServiceProps.Initializer"></a>

```typescript
import { ShareServiceProps } from 'cdk-vpclattice-alpha'

const shareServiceProps: ShareServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceProps.property.name">name</a></code> | <code>string</code> | The name of the share. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceProps.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | Whether external principals are allowed. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceProps.property.principals">principals</a></code> | <code>string[]</code> | Principals to share the Service Network with. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceProps.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | Resources to share the Service Network with. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.ShareServiceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the share.

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="cdk-vpclattice-alpha.ShareServiceProps.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean;
```

- *Type:* boolean
- *Default:* false;

Whether external principals are allowed.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="cdk-vpclattice-alpha.ShareServiceProps.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]
- *Default:* none

Principals to share the Service Network with.

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="cdk-vpclattice-alpha.ShareServiceProps.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]
- *Default:* none

Resources to share the Service Network with.

---

### WeightedTargetGroup <a name="WeightedTargetGroup" id="cdk-vpclattice-alpha.WeightedTargetGroup"></a>

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.WeightedTargetGroup.Initializer"></a>

```typescript
import { WeightedTargetGroup } from 'cdk-vpclattice-alpha'

const weightedTargetGroup: WeightedTargetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.WeightedTargetGroup.property.targetGroup">targetGroup</a></code> | <code><a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a></code> | A target Group. |
| <code><a href="#cdk-vpclattice-alpha.WeightedTargetGroup.property.weight">weight</a></code> | <code>number</code> | A weight for the target group. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="cdk-vpclattice-alpha.WeightedTargetGroup.property.targetGroup"></a>

```typescript
public readonly targetGroup: ITargetGroup;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a>

A target Group.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="cdk-vpclattice-alpha.WeightedTargetGroup.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number
- *Default:* 100

A weight for the target group.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthPolicyDocument <a name="AuthPolicyDocument" id="cdk-vpclattice-alpha.AuthPolicyDocument"></a>

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.AuthPolicyDocument.Initializer"></a>

```typescript
import { AuthPolicyDocument } from 'cdk-vpclattice-alpha'

new AuthPolicyDocument(props?: PolicyDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocumentProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-vpclattice-alpha.AuthPolicyDocument.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyDocumentProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.addStatements">addStatements</a></code> | Adds a statement to the policy document. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.toJSON">toJSON</a></code> | JSON-ify the document. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.toString">toString</a></code> | Encode the policy document as a string. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.validateForAnyPolicy">validateForAnyPolicy</a></code> | Validate that all policy statements in the policy document satisfies the requirements for any policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.validateForIdentityPolicy">validateForIdentityPolicy</a></code> | Validate that all policy statements in the policy document satisfies the requirements for an identity-based policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.validateForResourcePolicy">validateForResourcePolicy</a></code> | Validate that all policy statements in the policy document satisfies the requirements for a resource-based policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.validateAuthPolicy">validateAuthPolicy</a></code> | Must ensure Service has the correct AuthType and policy is a valid IAM Resource-based Policy for VPC Lattice. |

---

##### `addStatements` <a name="addStatements" id="cdk-vpclattice-alpha.AuthPolicyDocument.addStatements"></a>

```typescript
public addStatements(statement: PolicyStatement): void
```

Adds a statement to the policy document.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-vpclattice-alpha.AuthPolicyDocument.addStatements.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the statement to add.

---

##### `resolve` <a name="resolve" id="cdk-vpclattice-alpha.AuthPolicyDocument.resolve"></a>

```typescript
public resolve(context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `context`<sup>Required</sup> <a name="context" id="cdk-vpclattice-alpha.AuthPolicyDocument.resolve.parameter.context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---

##### `toJSON` <a name="toJSON" id="cdk-vpclattice-alpha.AuthPolicyDocument.toJSON"></a>

```typescript
public toJSON(): any
```

JSON-ify the document.

Used when JSON.stringify() is called

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.AuthPolicyDocument.toString"></a>

```typescript
public toString(): string
```

Encode the policy document as a string.

##### `validateForAnyPolicy` <a name="validateForAnyPolicy" id="cdk-vpclattice-alpha.AuthPolicyDocument.validateForAnyPolicy"></a>

```typescript
public validateForAnyPolicy(): string[]
```

Validate that all policy statements in the policy document satisfies the requirements for any policy.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json)

##### `validateForIdentityPolicy` <a name="validateForIdentityPolicy" id="cdk-vpclattice-alpha.AuthPolicyDocument.validateForIdentityPolicy"></a>

```typescript
public validateForIdentityPolicy(): string[]
```

Validate that all policy statements in the policy document satisfies the requirements for an identity-based policy.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json)

##### `validateForResourcePolicy` <a name="validateForResourcePolicy" id="cdk-vpclattice-alpha.AuthPolicyDocument.validateForResourcePolicy"></a>

```typescript
public validateForResourcePolicy(): string[]
```

Validate that all policy statements in the policy document satisfies the requirements for a resource-based policy.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json)

##### `validateAuthPolicy` <a name="validateAuthPolicy" id="cdk-vpclattice-alpha.AuthPolicyDocument.validateAuthPolicy"></a>

```typescript
public validateAuthPolicy(): string[]
```

Must ensure Service has the correct AuthType and policy is a valid IAM Resource-based Policy for VPC Lattice.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.fromJson">fromJson</a></code> | Creates a new PolicyDocument based on the object provided. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.organizationOnly">organizationOnly</a></code> | Grants permissions to any authenticated request to access as long as the request originates from principals that belong to the AWS organization specified in the `orgId` parameter. |

---

##### `fromJson` <a name="fromJson" id="cdk-vpclattice-alpha.AuthPolicyDocument.fromJson"></a>

```typescript
import { AuthPolicyDocument } from 'cdk-vpclattice-alpha'

AuthPolicyDocument.fromJson(obj: any)
```

Creates a new PolicyDocument based on the object provided.

This will accept an object created from the `.toJSON()` call

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-vpclattice-alpha.AuthPolicyDocument.fromJson.parameter.obj"></a>

- *Type:* any

the PolicyDocument in object form.

---

##### `organizationOnly` <a name="organizationOnly" id="cdk-vpclattice-alpha.AuthPolicyDocument.organizationOnly"></a>

```typescript
import { AuthPolicyDocument } from 'cdk-vpclattice-alpha'

AuthPolicyDocument.organizationOnly(orgId: string, resources?: string[])
```

Grants permissions to any authenticated request to access as long as the request originates from principals that belong to the AWS organization specified in the `orgId` parameter.

###### `orgId`<sup>Required</sup> <a name="orgId" id="cdk-vpclattice-alpha.AuthPolicyDocument.organizationOnly.parameter.orgId"></a>

- *Type:* string

---

###### `resources`<sup>Optional</sup> <a name="resources" id="cdk-vpclattice-alpha.AuthPolicyDocument.organizationOnly.parameter.resources"></a>

- *Type:* string[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.property.isEmpty">isEmpty</a></code> | <code>boolean</code> | Whether the policy document contains any statements. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.property.statementCount">statementCount</a></code> | <code>number</code> | The number of statements already added to this policy. |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="cdk-vpclattice-alpha.AuthPolicyDocument.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

This may return an array with a single informational element indicating how
to get this property populated, if it was skipped for performance reasons.

---

##### `isEmpty`<sup>Required</sup> <a name="isEmpty" id="cdk-vpclattice-alpha.AuthPolicyDocument.property.isEmpty"></a>

```typescript
public readonly isEmpty: boolean;
```

- *Type:* boolean

Whether the policy document contains any statements.

---

##### `statementCount`<sup>Required</sup> <a name="statementCount" id="cdk-vpclattice-alpha.AuthPolicyDocument.property.statementCount"></a>

```typescript
public readonly statementCount: number;
```

- *Type:* number

The number of statements already added to this policy.

Can be used, for example, to generate unique "sid"s within the policy.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.property.AUTHENTICATED_ONLY">AUTHENTICATED_ONLY</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a></code> | Means that any request to the service or service network must contain a valid request signature that is computed using Signature Version 4 (SigV4). |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument.property.UNAUTHENTICATED">UNAUTHENTICATED</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a></code> | Allows for Unauthenticated (Anonymous) Access to the Service Network. |

---

##### `AUTHENTICATED_ONLY`<sup>Required</sup> <a name="AUTHENTICATED_ONLY" id="cdk-vpclattice-alpha.AuthPolicyDocument.property.AUTHENTICATED_ONLY"></a>

```typescript
public readonly AUTHENTICATED_ONLY: AuthPolicyDocument;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a>

Means that any request to the service or service network must contain a valid request signature that is computed using Signature Version 4 (SigV4).

> [https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html)

---

##### `UNAUTHENTICATED`<sup>Required</sup> <a name="UNAUTHENTICATED" id="cdk-vpclattice-alpha.AuthPolicyDocument.property.UNAUTHENTICATED"></a>

```typescript
public readonly UNAUTHENTICATED: AuthPolicyDocument;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthPolicyDocument">AuthPolicyDocument</a>

Allows for Unauthenticated (Anonymous) Access to the Service Network.

Anonymous principals are callers that don't sign their AWS requests
with Signature Version 4 (SigV4), and are within a VPC that is connected
to the service network.

---

### AuthPolicyStatement <a name="AuthPolicyStatement" id="cdk-vpclattice-alpha.AuthPolicyStatement"></a>

Helps you create Auth Policies using higher level abstractions which reflect common use cases.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#example-auth-policies](https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#example-auth-policies)

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.AuthPolicyStatement.Initializer"></a>

```typescript
import { AuthPolicyStatement } from 'cdk-vpclattice-alpha'

new AuthPolicyStatement(props?: PolicyStatementProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-vpclattice-alpha.AuthPolicyStatement.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addAccountCondition">addAccountCondition</a></code> | Add a `StringEquals` condition that limits to a given account from `sts:ExternalId`. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addAccountRootPrincipal">addAccountRootPrincipal</a></code> | Adds an AWS account root user principal to this policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addActions">addActions</a></code> | Specify allowed actions into the "Action" section of the policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addAllResources">addAllResources</a></code> | Adds a ``"*"`` resource to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addAnyPrincipal">addAnyPrincipal</a></code> | Adds all identities in all accounts ("*") to this policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addArnPrincipal">addArnPrincipal</a></code> | Specify a principal using the ARN  identifier of the principal. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addAwsAccountPrincipal">addAwsAccountPrincipal</a></code> | Specify AWS account ID as the principal entity to the "Principal" section of a policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addCanonicalUserPrincipal">addCanonicalUserPrincipal</a></code> | Adds a canonical user ID principal to this policy document. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addCondition">addCondition</a></code> | Add a condition to the Policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addConditions">addConditions</a></code> | Add multiple conditions to the Policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addFederatedPrincipal">addFederatedPrincipal</a></code> | Adds a federated identity provider such as Amazon Cognito to this policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addNotActions">addNotActions</a></code> | Explicitly allow all actions except the specified list of actions into the "NotAction" section of the policy document. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addNotPrincipals">addNotPrincipals</a></code> | Specify principals that is not allowed or denied access to the "NotPrincipal" section of a policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addNotResources">addNotResources</a></code> | Specify resources that this policy statement will not apply to in the "NotResource" section of this policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addPrincipals">addPrincipals</a></code> | Adds principals to the "Principal" section of a policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addResources">addResources</a></code> | Specify resources that this policy statement applies into the "Resource" section of this policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addServicePrincipal">addServicePrincipal</a></code> | Adds a service principal to this policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addSourceAccountCondition">addSourceAccountCondition</a></code> | Add an `StringEquals` condition that limits to a given account from `aws:SourceAccount`. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.addSourceArnCondition">addSourceArnCondition</a></code> | Add an `ArnEquals` condition that limits to a given resource arn from `aws:SourceArn`. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.copy">copy</a></code> | Create a new `PolicyStatement` with the same exact properties as this one, except for the overrides. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.freeze">freeze</a></code> | Make the PolicyStatement immutable. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.toJSON">toJSON</a></code> | JSON-ify the statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.toStatementJson">toStatementJson</a></code> | JSON-ify the policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.toString">toString</a></code> | String representation of this policy statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.validateForAnyPolicy">validateForAnyPolicy</a></code> | Validate that the policy statement satisfies base requirements for a policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.validateForIdentityPolicy">validateForIdentityPolicy</a></code> | Validate that the policy statement satisfies all requirements for an identity-based policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.validateForResourcePolicy">validateForResourcePolicy</a></code> | Validate that the policy statement satisfies all requirements for a resource-based policy. |

---

##### `addAccountCondition` <a name="addAccountCondition" id="cdk-vpclattice-alpha.AuthPolicyStatement.addAccountCondition"></a>

```typescript
public addAccountCondition(accountId: string): void
```

Add a `StringEquals` condition that limits to a given account from `sts:ExternalId`.

This method can only be called once: subsequent calls will overwrite earlier calls.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html)

###### `accountId`<sup>Required</sup> <a name="accountId" id="cdk-vpclattice-alpha.AuthPolicyStatement.addAccountCondition.parameter.accountId"></a>

- *Type:* string

---

##### `addAccountRootPrincipal` <a name="addAccountRootPrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.addAccountRootPrincipal"></a>

```typescript
public addAccountRootPrincipal(): void
```

Adds an AWS account root user principal to this policy statement.

##### `addActions` <a name="addActions" id="cdk-vpclattice-alpha.AuthPolicyStatement.addActions"></a>

```typescript
public addActions(actions: string): void
```

Specify allowed actions into the "Action" section of the policy statement.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html)

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-vpclattice-alpha.AuthPolicyStatement.addActions.parameter.actions"></a>

- *Type:* string

actions that will be allowed.

---

##### `addAllResources` <a name="addAllResources" id="cdk-vpclattice-alpha.AuthPolicyStatement.addAllResources"></a>

```typescript
public addAllResources(): void
```

Adds a ``"*"`` resource to this statement.

##### `addAnyPrincipal` <a name="addAnyPrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.addAnyPrincipal"></a>

```typescript
public addAnyPrincipal(): void
```

Adds all identities in all accounts ("*") to this policy statement.

##### `addArnPrincipal` <a name="addArnPrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.addArnPrincipal"></a>

```typescript
public addArnPrincipal(arn: string): void
```

Specify a principal using the ARN  identifier of the principal.

You cannot specify IAM groups and instance profiles as principals.

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-vpclattice-alpha.AuthPolicyStatement.addArnPrincipal.parameter.arn"></a>

- *Type:* string

ARN identifier of AWS account, IAM user, or IAM role (i.e. arn:aws:iam::123456789012:user/user-name).

---

##### `addAwsAccountPrincipal` <a name="addAwsAccountPrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.addAwsAccountPrincipal"></a>

```typescript
public addAwsAccountPrincipal(accountId: string): void
```

Specify AWS account ID as the principal entity to the "Principal" section of a policy statement.

###### `accountId`<sup>Required</sup> <a name="accountId" id="cdk-vpclattice-alpha.AuthPolicyStatement.addAwsAccountPrincipal.parameter.accountId"></a>

- *Type:* string

---

##### `addCanonicalUserPrincipal` <a name="addCanonicalUserPrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.addCanonicalUserPrincipal"></a>

```typescript
public addCanonicalUserPrincipal(canonicalUserId: string): void
```

Adds a canonical user ID principal to this policy document.

###### `canonicalUserId`<sup>Required</sup> <a name="canonicalUserId" id="cdk-vpclattice-alpha.AuthPolicyStatement.addCanonicalUserPrincipal.parameter.canonicalUserId"></a>

- *Type:* string

unique identifier assigned by AWS for every account.

---

##### `addCondition` <a name="addCondition" id="cdk-vpclattice-alpha.AuthPolicyStatement.addCondition"></a>

```typescript
public addCondition(key: string, value: any): void
```

Add a condition to the Policy.

If multiple calls are made to add a condition with the same operator and field, only
the last one wins. For example:

```ts
declare const stmt: iam.PolicyStatement;

stmt.addCondition('StringEquals', { 'aws:SomeField': '1' });
stmt.addCondition('StringEquals', { 'aws:SomeField': '2' });
```

Will end up with the single condition `StringEquals: { 'aws:SomeField': '2' }`.

If you meant to add a condition to say that the field can be *either* `1` or `2`, write
this:

```ts
declare const stmt: iam.PolicyStatement;

stmt.addCondition('StringEquals', { 'aws:SomeField': ['1', '2'] });
```

###### `key`<sup>Required</sup> <a name="key" id="cdk-vpclattice-alpha.AuthPolicyStatement.addCondition.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-vpclattice-alpha.AuthPolicyStatement.addCondition.parameter.value"></a>

- *Type:* any

---

##### `addConditions` <a name="addConditions" id="cdk-vpclattice-alpha.AuthPolicyStatement.addConditions"></a>

```typescript
public addConditions(conditions: {[ key: string ]: any}): void
```

Add multiple conditions to the Policy.

See the `addCondition` function for a caveat on calling this method multiple times.

###### `conditions`<sup>Required</sup> <a name="conditions" id="cdk-vpclattice-alpha.AuthPolicyStatement.addConditions.parameter.conditions"></a>

- *Type:* {[ key: string ]: any}

---

##### `addFederatedPrincipal` <a name="addFederatedPrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.addFederatedPrincipal"></a>

```typescript
public addFederatedPrincipal(federated: any, conditions: {[ key: string ]: any}): void
```

Adds a federated identity provider such as Amazon Cognito to this policy statement.

###### `federated`<sup>Required</sup> <a name="federated" id="cdk-vpclattice-alpha.AuthPolicyStatement.addFederatedPrincipal.parameter.federated"></a>

- *Type:* any

federated identity provider (i.e. 'cognito-identity.amazonaws.com').

---

###### `conditions`<sup>Required</sup> <a name="conditions" id="cdk-vpclattice-alpha.AuthPolicyStatement.addFederatedPrincipal.parameter.conditions"></a>

- *Type:* {[ key: string ]: any}

The conditions under which the policy is in effect.

See [the IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html).

---

##### `addNotActions` <a name="addNotActions" id="cdk-vpclattice-alpha.AuthPolicyStatement.addNotActions"></a>

```typescript
public addNotActions(notActions: string): void
```

Explicitly allow all actions except the specified list of actions into the "NotAction" section of the policy document.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html)

###### `notActions`<sup>Required</sup> <a name="notActions" id="cdk-vpclattice-alpha.AuthPolicyStatement.addNotActions.parameter.notActions"></a>

- *Type:* string

actions that will be denied.

All other actions will be permitted.

---

##### `addNotPrincipals` <a name="addNotPrincipals" id="cdk-vpclattice-alpha.AuthPolicyStatement.addNotPrincipals"></a>

```typescript
public addNotPrincipals(notPrincipals: IPrincipal): void
```

Specify principals that is not allowed or denied access to the "NotPrincipal" section of a policy statement.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html)

###### `notPrincipals`<sup>Required</sup> <a name="notPrincipals" id="cdk-vpclattice-alpha.AuthPolicyStatement.addNotPrincipals.parameter.notPrincipals"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

IAM principals that will be denied access.

---

##### `addNotResources` <a name="addNotResources" id="cdk-vpclattice-alpha.AuthPolicyStatement.addNotResources"></a>

```typescript
public addNotResources(arns: string): void
```

Specify resources that this policy statement will not apply to in the "NotResource" section of this policy statement.

All resources except the specified list will be matched.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html)

###### `arns`<sup>Required</sup> <a name="arns" id="cdk-vpclattice-alpha.AuthPolicyStatement.addNotResources.parameter.arns"></a>

- *Type:* string

Amazon Resource Names (ARNs) of the resources that this policy statement does not apply to.

---

##### `addPrincipals` <a name="addPrincipals" id="cdk-vpclattice-alpha.AuthPolicyStatement.addPrincipals"></a>

```typescript
public addPrincipals(principals: IPrincipal): void
```

Adds principals to the "Principal" section of a policy statement.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html)

###### `principals`<sup>Required</sup> <a name="principals" id="cdk-vpclattice-alpha.AuthPolicyStatement.addPrincipals.parameter.principals"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

IAM principals that will be added.

---

##### `addResources` <a name="addResources" id="cdk-vpclattice-alpha.AuthPolicyStatement.addResources"></a>

```typescript
public addResources(arns: string): void
```

Specify resources that this policy statement applies into the "Resource" section of this policy statement.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html)

###### `arns`<sup>Required</sup> <a name="arns" id="cdk-vpclattice-alpha.AuthPolicyStatement.addResources.parameter.arns"></a>

- *Type:* string

Amazon Resource Names (ARNs) of the resources that this policy statement applies to.

---

##### `addServicePrincipal` <a name="addServicePrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.addServicePrincipal"></a>

```typescript
public addServicePrincipal(service: string, opts?: ServicePrincipalOpts): void
```

Adds a service principal to this policy statement.

###### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.AuthPolicyStatement.addServicePrincipal.parameter.service"></a>

- *Type:* string

the service name for which a service principal is requested (e.g: `s3.amazonaws.com`).

---

###### `opts`<sup>Optional</sup> <a name="opts" id="cdk-vpclattice-alpha.AuthPolicyStatement.addServicePrincipal.parameter.opts"></a>

- *Type:* aws-cdk-lib.aws_iam.ServicePrincipalOpts

options for adding the service principal (such as specifying a principal in a different region).

---

##### `addSourceAccountCondition` <a name="addSourceAccountCondition" id="cdk-vpclattice-alpha.AuthPolicyStatement.addSourceAccountCondition"></a>

```typescript
public addSourceAccountCondition(accountId: string): void
```

Add an `StringEquals` condition that limits to a given account from `aws:SourceAccount`.

This method can only be called once: subsequent calls will overwrite earlier calls.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceaccount](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceaccount)

###### `accountId`<sup>Required</sup> <a name="accountId" id="cdk-vpclattice-alpha.AuthPolicyStatement.addSourceAccountCondition.parameter.accountId"></a>

- *Type:* string

---

##### `addSourceArnCondition` <a name="addSourceArnCondition" id="cdk-vpclattice-alpha.AuthPolicyStatement.addSourceArnCondition"></a>

```typescript
public addSourceArnCondition(arn: string): void
```

Add an `ArnEquals` condition that limits to a given resource arn from `aws:SourceArn`.

This method can only be called once: subsequent calls will overwrite earlier calls.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn)

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-vpclattice-alpha.AuthPolicyStatement.addSourceArnCondition.parameter.arn"></a>

- *Type:* string

---

##### `copy` <a name="copy" id="cdk-vpclattice-alpha.AuthPolicyStatement.copy"></a>

```typescript
public copy(overrides?: PolicyStatementProps): PolicyStatement
```

Create a new `PolicyStatement` with the same exact properties as this one, except for the overrides.

###### `overrides`<sup>Optional</sup> <a name="overrides" id="cdk-vpclattice-alpha.AuthPolicyStatement.copy.parameter.overrides"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps

---

##### `freeze` <a name="freeze" id="cdk-vpclattice-alpha.AuthPolicyStatement.freeze"></a>

```typescript
public freeze(): PolicyStatement
```

Make the PolicyStatement immutable.

After calling this, any of the `addXxx()` methods will throw an exception.

Libraries that lazily generate statement bodies can override this method to
fill the actual PolicyStatement fields. Be aware that this method may be called
multiple times.

##### `toJSON` <a name="toJSON" id="cdk-vpclattice-alpha.AuthPolicyStatement.toJSON"></a>

```typescript
public toJSON(): any
```

JSON-ify the statement.

Used when JSON.stringify() is called

##### `toStatementJson` <a name="toStatementJson" id="cdk-vpclattice-alpha.AuthPolicyStatement.toStatementJson"></a>

```typescript
public toStatementJson(): any
```

JSON-ify the policy statement.

Used when JSON.stringify() is called

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.AuthPolicyStatement.toString"></a>

```typescript
public toString(): string
```

String representation of this policy statement.

##### `validateForAnyPolicy` <a name="validateForAnyPolicy" id="cdk-vpclattice-alpha.AuthPolicyStatement.validateForAnyPolicy"></a>

```typescript
public validateForAnyPolicy(): string[]
```

Validate that the policy statement satisfies base requirements for a policy.

##### `validateForIdentityPolicy` <a name="validateForIdentityPolicy" id="cdk-vpclattice-alpha.AuthPolicyStatement.validateForIdentityPolicy"></a>

```typescript
public validateForIdentityPolicy(): string[]
```

Validate that the policy statement satisfies all requirements for an identity-based policy.

##### `validateForResourcePolicy` <a name="validateForResourcePolicy" id="cdk-vpclattice-alpha.AuthPolicyStatement.validateForResourcePolicy"></a>

```typescript
public validateForResourcePolicy(): string[]
```

Validate that the policy statement satisfies all requirements for a resource-based policy.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.fromJson">fromJson</a></code> | Creates a new PolicyStatement based on the object provided. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.allowAnonymous">allowAnonymous</a></code> | Grants permissions to both authenticated and unauthenticated (anonymous) requests. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyAuthenticated">allowOnlyAuthenticated</a></code> | Grants permissions to any authenticated request. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyOrganization">allowOnlyOrganization</a></code> | Creates an IAM Auth policy which limits access to requests which originate from principals that belong to the AWS organization specified. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyRole">allowOnlyRole</a></code> | Grants permissions to any authenticated request that uses the IAM role specified. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.allowVpc">allowVpc</a></code> | Grants permissions to authenticated requests originating from principals in the specified VPC. |

---

##### `fromJson` <a name="fromJson" id="cdk-vpclattice-alpha.AuthPolicyStatement.fromJson"></a>

```typescript
import { AuthPolicyStatement } from 'cdk-vpclattice-alpha'

AuthPolicyStatement.fromJson(obj: any)
```

Creates a new PolicyStatement based on the object provided.

This will accept an object created from the `.toJSON()` call

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-vpclattice-alpha.AuthPolicyStatement.fromJson.parameter.obj"></a>

- *Type:* any

the PolicyStatement in object form.

---

##### `allowAnonymous` <a name="allowAnonymous" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowAnonymous"></a>

```typescript
import { AuthPolicyStatement } from 'cdk-vpclattice-alpha'

AuthPolicyStatement.allowAnonymous(resources?: string[])
```

Grants permissions to both authenticated and unauthenticated (anonymous) requests.

###### `resources`<sup>Optional</sup> <a name="resources" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowAnonymous.parameter.resources"></a>

- *Type:* string[]

optional list of resources to limit the statement to (defaults to "*").

---

##### `allowOnlyAuthenticated` <a name="allowOnlyAuthenticated" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyAuthenticated"></a>

```typescript
import { AuthPolicyStatement } from 'cdk-vpclattice-alpha'

AuthPolicyStatement.allowOnlyAuthenticated(resources?: string[])
```

Grants permissions to any authenticated request.

###### `resources`<sup>Optional</sup> <a name="resources" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyAuthenticated.parameter.resources"></a>

- *Type:* string[]

optional list of resources to limit the statement to (defaults to "*").

---

##### `allowOnlyOrganization` <a name="allowOnlyOrganization" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyOrganization"></a>

```typescript
import { AuthPolicyStatement } from 'cdk-vpclattice-alpha'

AuthPolicyStatement.allowOnlyOrganization(orgId: string, resources?: string[])
```

Creates an IAM Auth policy which limits access to requests which originate from principals that belong to the AWS organization specified.

###### `orgId`<sup>Required</sup> <a name="orgId" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyOrganization.parameter.orgId"></a>

- *Type:* string

The AWS Organization ID to limit access to.

---

###### `resources`<sup>Optional</sup> <a name="resources" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyOrganization.parameter.resources"></a>

- *Type:* string[]

optional list of resources to limit the statement to (defaults to "*").

---

##### `allowOnlyRole` <a name="allowOnlyRole" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyRole"></a>

```typescript
import { AuthPolicyStatement } from 'cdk-vpclattice-alpha'

AuthPolicyStatement.allowOnlyRole(role: IRole, resources?: string[])
```

Grants permissions to any authenticated request that uses the IAM role specified.

###### `role`<sup>Required</sup> <a name="role" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyRole.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

the AWS IAM Role.

---

###### `resources`<sup>Optional</sup> <a name="resources" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowOnlyRole.parameter.resources"></a>

- *Type:* string[]

optional list of resources to limit the statement to (defaults to "*").

---

##### `allowVpc` <a name="allowVpc" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowVpc"></a>

```typescript
import { AuthPolicyStatement } from 'cdk-vpclattice-alpha'

AuthPolicyStatement.allowVpc(vpc: IVpc, resources?: string[], authenticated?: boolean)
```

Grants permissions to authenticated requests originating from principals in the specified VPC.

###### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowVpc.parameter.vpc"></a>

- *Type:* aws-cdk-lib.aws_ec2.IVpc

the VPC to restrict requests from.

---

###### `resources`<sup>Optional</sup> <a name="resources" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowVpc.parameter.resources"></a>

- *Type:* string[]

optional list of resources to limit the statement to (defaults to "*").

---

###### `authenticated`<sup>Optional</sup> <a name="authenticated" id="cdk-vpclattice-alpha.AuthPolicyStatement.allowVpc.parameter.authenticated"></a>

- *Type:* boolean

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.actions">actions</a></code> | <code>string[]</code> | The Actions added to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.conditions">conditions</a></code> | <code>any</code> | The conditions added to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.frozen">frozen</a></code> | <code>boolean</code> | Whether the PolicyStatement has been frozen. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.hasPrincipal">hasPrincipal</a></code> | <code>boolean</code> | Indicates if this permission has a "Principal" section. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.hasResource">hasResource</a></code> | <code>boolean</code> | Indicates if this permission has at least one resource associated with it. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.notActions">notActions</a></code> | <code>string[]</code> | The NotActions added to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.notPrincipals">notPrincipals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | The NotPrincipals added to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.notResources">notResources</a></code> | <code>string[]</code> | The NotResources added to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.principals">principals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | The Principals added to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.resources">resources</a></code> | <code>string[]</code> | The Resources added to this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.effect">effect</a></code> | <code>aws-cdk-lib.aws_iam.Effect</code> | Whether to allow or deny the actions in this statement Set effect for this statement. |
| <code><a href="#cdk-vpclattice-alpha.AuthPolicyStatement.property.sid">sid</a></code> | <code>string</code> | Statement ID for this statement Set Statement ID for this statement. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

The Actions added to this statement.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.conditions"></a>

```typescript
public readonly conditions: any;
```

- *Type:* any

The conditions added to this statement.

---

##### `frozen`<sup>Required</sup> <a name="frozen" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.frozen"></a>

```typescript
public readonly frozen: boolean;
```

- *Type:* boolean

Whether the PolicyStatement has been frozen.

The statement object is frozen when `freeze()` is called.

---

##### `hasPrincipal`<sup>Required</sup> <a name="hasPrincipal" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.hasPrincipal"></a>

```typescript
public readonly hasPrincipal: boolean;
```

- *Type:* boolean

Indicates if this permission has a "Principal" section.

---

##### `hasResource`<sup>Required</sup> <a name="hasResource" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.hasResource"></a>

```typescript
public readonly hasResource: boolean;
```

- *Type:* boolean

Indicates if this permission has at least one resource associated with it.

---

##### `notActions`<sup>Required</sup> <a name="notActions" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

The NotActions added to this statement.

---

##### `notPrincipals`<sup>Required</sup> <a name="notPrincipals" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.notPrincipals"></a>

```typescript
public readonly notPrincipals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

The NotPrincipals added to this statement.

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

The NotResources added to this statement.

---

##### `principals`<sup>Required</sup> <a name="principals" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.principals"></a>

```typescript
public readonly principals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

The Principals added to this statement.

---

##### `resources`<sup>Required</sup> <a name="resources" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

The Resources added to this statement.

---

##### `effect`<sup>Required</sup> <a name="effect" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.effect"></a>

```typescript
public readonly effect: Effect;
```

- *Type:* aws-cdk-lib.aws_iam.Effect

Whether to allow or deny the actions in this statement Set effect for this statement.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="cdk-vpclattice-alpha.AuthPolicyStatement.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

Statement ID for this statement Set Statement ID for this statement.

---


### LoggingDestination <a name="LoggingDestination" id="cdk-vpclattice-alpha.LoggingDestination"></a>

Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and/or Amazon Kinesis Data Firehose.

The service network owner can
use the access logs to audit the services in the network.
At most one destination per destination type.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html)

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.LoggingDestination.Initializer"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

new LoggingDestination()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.cloudwatch">cloudwatch</a></code> | Send logs to Amazon CloudWatch. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.kinesis">kinesis</a></code> | Use Amazon Kinesis Data Firehose for delivering real-time streaming data to destinations such as Amazon S3, Amazon Redshift, Amazon OpenSearch, or any custom HTTP endpoint. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.s3">s3</a></code> | Send logs to Amazon S3. |

---

##### `cloudwatch` <a name="cloudwatch" id="cdk-vpclattice-alpha.LoggingDestination.cloudwatch"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

LoggingDestination.cloudwatch(logGroup: ILogGroup)
```

Send logs to Amazon CloudWatch.

###### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-vpclattice-alpha.LoggingDestination.cloudwatch.parameter.logGroup"></a>

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

the log group in CloudWatch Logs to use.

---

##### `kinesis` <a name="kinesis" id="cdk-vpclattice-alpha.LoggingDestination.kinesis"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

LoggingDestination.kinesis(stream: IStream)
```

Use Amazon Kinesis Data Firehose for delivering real-time streaming data to destinations such as Amazon S3, Amazon Redshift, Amazon OpenSearch, or any custom HTTP endpoint.

###### `stream`<sup>Required</sup> <a name="stream" id="cdk-vpclattice-alpha.LoggingDestination.kinesis.parameter.stream"></a>

- *Type:* aws-cdk-lib.aws_kinesis.IStream

the delivery stream to send logs to.

---

##### `s3` <a name="s3" id="cdk-vpclattice-alpha.LoggingDestination.s3"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

LoggingDestination.s3(bucket: IBucket)
```

Send logs to Amazon S3.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-vpclattice-alpha.LoggingDestination.s3.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

the S3 bucket to send logs to.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.property.addr">addr</a></code> | <code>string</code> | unique addr of the destination. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.property.arn">arn</a></code> | <code>string</code> | An Arn of the destination. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.property.destinationType">destinationType</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestinationType">LoggingDestinationType</a></code> | Type of the destination. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.property.name">name</a></code> | <code>string</code> | A name of the destination. |

---

##### `addr`<sup>Required</sup> <a name="addr" id="cdk-vpclattice-alpha.LoggingDestination.property.addr"></a>

```typescript
public readonly addr: string;
```

- *Type:* string

unique addr of the destination.

---

##### `arn`<sup>Required</sup> <a name="arn" id="cdk-vpclattice-alpha.LoggingDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

An Arn of the destination.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="cdk-vpclattice-alpha.LoggingDestination.property.destinationType"></a>

```typescript
public readonly destinationType: LoggingDestinationType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestinationType">LoggingDestinationType</a>

Type of the destination.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.LoggingDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name of the destination.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IListener <a name="IListener" id="cdk-vpclattice-alpha.IListener"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.Listener">Listener</a>, <a href="#cdk-vpclattice-alpha.IListener">IListener</a>

Create a VPC Lattice Listener.

It is simply a process that checks for
connection requests, and routes them to targets in a target group according
to the defined rules.
Implemented by `Listener`.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html)

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IListener.addListenerRule">addListenerRule</a></code> | Add A Listener Rule to the Listener. |

---

##### `addListenerRule` <a name="addListenerRule" id="cdk-vpclattice-alpha.IListener.addListenerRule"></a>

```typescript
public addListenerRule(rule: RuleProps): void
```

Add A Listener Rule to the Listener.

###### `rule`<sup>Required</sup> <a name="rule" id="cdk-vpclattice-alpha.IListener.addListenerRule.parameter.rule"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.RuleProps">RuleProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.IListener.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.IListener.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.IListener.property.listenerArn">listenerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#cdk-vpclattice-alpha.IListener.property.listenerId">listenerId</a></code> | <code>string</code> | The Id of the Service Network. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.IListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.IListener.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.IListener.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="cdk-vpclattice-alpha.IListener.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="cdk-vpclattice-alpha.IListener.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The Id of the Service Network.

---

### IService <a name="IService" id="cdk-vpclattice-alpha.IService"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.Service">Service</a>, <a href="#cdk-vpclattice-alpha.IService">IService</a>

Represents a Vpc Lattice Service.

Implemented by `Service`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IService.associateWithServiceNetwork">associateWithServiceNetwork</a></code> | Associate the service with a Service Network. |

---

##### `associateWithServiceNetwork` <a name="associateWithServiceNetwork" id="cdk-vpclattice-alpha.IService.associateWithServiceNetwork"></a>

```typescript
public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void
```

Associate the service with a Service Network.

###### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.IService.associateWithServiceNetwork.parameter.serviceNetwork"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.IService.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.IService.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.IService.property.serviceArn">serviceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#cdk-vpclattice-alpha.IService.property.serviceId">serviceId</a></code> | <code>string</code> | The Id of the service. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.IService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.IService.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.IService.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="cdk-vpclattice-alpha.IService.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service.

---

*Example*

```typescript
"arn:aws:vpc-lattice:eu-central-1:123456789123:service/svc-03537cbda06ea0823"
```


##### `serviceId`<sup>Required</sup> <a name="serviceId" id="cdk-vpclattice-alpha.IService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The Id of the service.

---

*Example*

```typescript
"svc-03537cbda06ea0823"
```


### IServiceNetwork <a name="IServiceNetwork" id="cdk-vpclattice-alpha.IServiceNetwork"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.ServiceNetwork">ServiceNetwork</a>, <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

Represents a VPC Lattice Service Network.

Implemented by `ServiceNetwork`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.associateService">associateService</a></code> | Associate a Lattice Service to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.associateVPC">associateVPC</a></code> | Associate a VPC with the Service Network. |

---

##### `associateService` <a name="associateService" id="cdk-vpclattice-alpha.IServiceNetwork.associateService"></a>

```typescript
public associateService(service: IService): void
```

Associate a Lattice Service to the Service Network.

###### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.IServiceNetwork.associateService.parameter.service"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

---

##### `associateVPC` <a name="associateVPC" id="cdk-vpclattice-alpha.IServiceNetwork.associateVPC"></a>

```typescript
public associateVPC(props: AssociateVPCProps): void
```

Associate a VPC with the Service Network.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.IServiceNetwork.associateVPC.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AssociateVPCProps">AssociateVPCProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Id of the Service Network. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.IServiceNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.IServiceNetwork.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.IServiceNetwork.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="cdk-vpclattice-alpha.IServiceNetwork.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service network.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.IServiceNetwork.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The Id of the Service Network.

---

*Example*

```typescript
"sn-0123456789abcdef0"
```


### ITargetGroup <a name="ITargetGroup" id="cdk-vpclattice-alpha.ITargetGroup"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.AlbTargetGroup">AlbTargetGroup</a>, <a href="#cdk-vpclattice-alpha.InstanceTargetGroup">InstanceTargetGroup</a>, <a href="#cdk-vpclattice-alpha.IpTargetGroup">IpTargetGroup</a>, <a href="#cdk-vpclattice-alpha.LambdaTargetGroup">LambdaTargetGroup</a>, <a href="#cdk-vpclattice-alpha.TargetGroupBase">TargetGroupBase</a>, <a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a>

Create a vpc lattice TargetGroup.

Implemented by `TargetGroup`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ITargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.ITargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.ITargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.ITargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#cdk-vpclattice-alpha.ITargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.ITargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.ITargetGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.ITargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="cdk-vpclattice-alpha.ITargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.ITargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---

## Enums <a name="Enums" id="Enums"></a>

### AuthType <a name="AuthType" id="cdk-vpclattice-alpha.AuthType"></a>

Specifies the authentication and authorization that manages client access to the service or service network.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthType.NONE">NONE</a></code> | No Authentication or Authorization. |
| <code><a href="#cdk-vpclattice-alpha.AuthType.AWS_IAM">AWS_IAM</a></code> | Use VPC Lattice Auth Policy to control access. |

---

##### `NONE` <a name="NONE" id="cdk-vpclattice-alpha.AuthType.NONE"></a>

No Authentication or Authorization.

If an auth policy is present,
it is inactive.

---


##### `AWS_IAM` <a name="AWS_IAM" id="cdk-vpclattice-alpha.AuthType.AWS_IAM"></a>

Use VPC Lattice Auth Policy to control access.

If enabled and a policy is
not attached, all traffic will be denied by default regardless of the
identity or service level permissions.

---


### HealthCheckProtocol <a name="HealthCheckProtocol" id="cdk-vpclattice-alpha.HealthCheckProtocol"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HealthCheckProtocol.HTTP">HTTP</a></code> | HTTP. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheckProtocol.HTTPS">HTTPS</a></code> | HTTPS. |

---

##### `HTTP` <a name="HTTP" id="cdk-vpclattice-alpha.HealthCheckProtocol.HTTP"></a>

HTTP.

---


##### `HTTPS` <a name="HTTPS" id="cdk-vpclattice-alpha.HealthCheckProtocol.HTTPS"></a>

HTTPS.

---


### HealthCheckProtocolVersion <a name="HealthCheckProtocolVersion" id="cdk-vpclattice-alpha.HealthCheckProtocolVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HealthCheckProtocolVersion.HTTP1">HTTP1</a></code> | Send requests to targets using HTTP/1.1. Supported when the request protocol is HTTP/1.1 or HTTP/2. |
| <code><a href="#cdk-vpclattice-alpha.HealthCheckProtocolVersion.HTTP2">HTTP2</a></code> | Send requests to targets using HTTP/2. |

---

##### `HTTP1` <a name="HTTP1" id="cdk-vpclattice-alpha.HealthCheckProtocolVersion.HTTP1"></a>

Send requests to targets using HTTP/1.1. Supported when the request protocol is HTTP/1.1 or HTTP/2.

---


##### `HTTP2` <a name="HTTP2" id="cdk-vpclattice-alpha.HealthCheckProtocolVersion.HTTP2"></a>

Send requests to targets using HTTP/2.

Supported when the request
protocol is HTTP/2 or gRPC, but gRPC-specific features are not available.

---


### HTTPFixedResponse <a name="HTTPFixedResponse" id="cdk-vpclattice-alpha.HTTPFixedResponse"></a>

Fixed response codes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HTTPFixedResponse.OK">OK</a></code> | OK 200. |
| <code><a href="#cdk-vpclattice-alpha.HTTPFixedResponse.CREATED">CREATED</a></code> | Created 201. |
| <code><a href="#cdk-vpclattice-alpha.HTTPFixedResponse.ACCEPTED">ACCEPTED</a></code> | Accepted. |
| <code><a href="#cdk-vpclattice-alpha.HTTPFixedResponse.NO_CONTENT">NO_CONTENT</a></code> | No Content 204. |
| <code><a href="#cdk-vpclattice-alpha.HTTPFixedResponse.NOT_FOUND">NOT_FOUND</a></code> | Not Found 404. |
| <code><a href="#cdk-vpclattice-alpha.HTTPFixedResponse.INTERNAL_SERVER_ERROR">INTERNAL_SERVER_ERROR</a></code> | Internal server error 500. |

---

##### `OK` <a name="OK" id="cdk-vpclattice-alpha.HTTPFixedResponse.OK"></a>

OK 200.

---


##### `CREATED` <a name="CREATED" id="cdk-vpclattice-alpha.HTTPFixedResponse.CREATED"></a>

Created 201.

---


##### `ACCEPTED` <a name="ACCEPTED" id="cdk-vpclattice-alpha.HTTPFixedResponse.ACCEPTED"></a>

Accepted.

---


##### `NO_CONTENT` <a name="NO_CONTENT" id="cdk-vpclattice-alpha.HTTPFixedResponse.NO_CONTENT"></a>

No Content 204.

---


##### `NOT_FOUND` <a name="NOT_FOUND" id="cdk-vpclattice-alpha.HTTPFixedResponse.NOT_FOUND"></a>

Not Found 404.

---


##### `INTERNAL_SERVER_ERROR` <a name="INTERNAL_SERVER_ERROR" id="cdk-vpclattice-alpha.HTTPFixedResponse.INTERNAL_SERVER_ERROR"></a>

Internal server error 500.

---


### HTTPMethod <a name="HTTPMethod" id="cdk-vpclattice-alpha.HTTPMethod"></a>

HTTP Methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.GET">GET</a></code> | GET Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.POST">POST</a></code> | POST Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.PUT">PUT</a></code> | PUT Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.DELETE">DELETE</a></code> | Delete Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.PATCH">PATCH</a></code> | PATCH Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.HEAD">HEAD</a></code> | Head Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.CONNECT">CONNECT</a></code> | Connect Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.OPTIONS">OPTIONS</a></code> | Options Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethod.TRACE">TRACE</a></code> | Trace Method. |

---

##### `GET` <a name="GET" id="cdk-vpclattice-alpha.HTTPMethod.GET"></a>

GET Method.

---


##### `POST` <a name="POST" id="cdk-vpclattice-alpha.HTTPMethod.POST"></a>

POST Method.

---


##### `PUT` <a name="PUT" id="cdk-vpclattice-alpha.HTTPMethod.PUT"></a>

PUT Method.

---


##### `DELETE` <a name="DELETE" id="cdk-vpclattice-alpha.HTTPMethod.DELETE"></a>

Delete Method.

---


##### `PATCH` <a name="PATCH" id="cdk-vpclattice-alpha.HTTPMethod.PATCH"></a>

PATCH Method.

---


##### `HEAD` <a name="HEAD" id="cdk-vpclattice-alpha.HTTPMethod.HEAD"></a>

Head Method.

---


##### `CONNECT` <a name="CONNECT" id="cdk-vpclattice-alpha.HTTPMethod.CONNECT"></a>

Connect Method.

---


##### `OPTIONS` <a name="OPTIONS" id="cdk-vpclattice-alpha.HTTPMethod.OPTIONS"></a>

Options Method.

---


##### `TRACE` <a name="TRACE" id="cdk-vpclattice-alpha.HTTPMethod.TRACE"></a>

Trace Method.

---


### IpAddressType <a name="IpAddressType" id="cdk-vpclattice-alpha.IpAddressType"></a>

The type of IP Address Protocol.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IpAddressType.IPV4">IPV4</a></code> | IPv4 (Internet Protocol version 4). |
| <code><a href="#cdk-vpclattice-alpha.IpAddressType.IPV6">IPV6</a></code> | IPv6 (Internet Protocol version 6). |

---

##### `IPV4` <a name="IPV4" id="cdk-vpclattice-alpha.IpAddressType.IPV4"></a>

IPv4 (Internet Protocol version 4).

---


##### `IPV6` <a name="IPV6" id="cdk-vpclattice-alpha.IpAddressType.IPV6"></a>

IPv6 (Internet Protocol version 6).

---


### LambdaEventStructureVersion <a name="LambdaEventStructureVersion" id="cdk-vpclattice-alpha.LambdaEventStructureVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LambdaEventStructureVersion.V1">V1</a></code> | Version 1.0. |
| <code><a href="#cdk-vpclattice-alpha.LambdaEventStructureVersion.V2">V2</a></code> | Version 2.0. |

---

##### `V1` <a name="V1" id="cdk-vpclattice-alpha.LambdaEventStructureVersion.V1"></a>

Version 1.0.

---


##### `V2` <a name="V2" id="cdk-vpclattice-alpha.LambdaEventStructureVersion.V2"></a>

Version 2.0.

---


### ListenerProtocol <a name="ListenerProtocol" id="cdk-vpclattice-alpha.ListenerProtocol"></a>

It is not required that the listener and target group protocols match.

VPC Lattice manages the entire process of upgrading and downgrading between protocols and versions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ListenerProtocol.HTTP">HTTP</a></code> | HTTP Protocol. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProtocol.HTTPS">HTTPS</a></code> | HTTPS Protocol VPC Lattice will provision and manage a TLS certificate that is associated with the VPC Lattice generated FQDN. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProtocol.TLS_PASSTHROUGH">TLS_PASSTHROUGH</a></code> | TLS Passthrough. |

---

##### `HTTP` <a name="HTTP" id="cdk-vpclattice-alpha.ListenerProtocol.HTTP"></a>

HTTP Protocol.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/http-listeners.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/http-listeners.html)

---


##### `HTTPS` <a name="HTTPS" id="cdk-vpclattice-alpha.ListenerProtocol.HTTPS"></a>

HTTPS Protocol VPC Lattice will provision and manage a TLS certificate that is associated with the VPC Lattice generated FQDN.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/https-listeners.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/https-listeners.html)

---


##### `TLS_PASSTHROUGH` <a name="TLS_PASSTHROUGH" id="cdk-vpclattice-alpha.ListenerProtocol.TLS_PASSTHROUGH"></a>

TLS Passthrough.

This ensures that your application
decrypts the encrypted traffic instead of VPC Lattice.

---


### LoggingDestinationType <a name="LoggingDestinationType" id="cdk-vpclattice-alpha.LoggingDestinationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestinationType.S3">S3</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestinationType.CLOUDWATCH_LOGS">CLOUDWATCH_LOGS</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestinationType.KINESIS_DATA_STREAM">KINESIS_DATA_STREAM</a></code> | *No description.* |

---

##### `S3` <a name="S3" id="cdk-vpclattice-alpha.LoggingDestinationType.S3"></a>

---


##### `CLOUDWATCH_LOGS` <a name="CLOUDWATCH_LOGS" id="cdk-vpclattice-alpha.LoggingDestinationType.CLOUDWATCH_LOGS"></a>

---


##### `KINESIS_DATA_STREAM` <a name="KINESIS_DATA_STREAM" id="cdk-vpclattice-alpha.LoggingDestinationType.KINESIS_DATA_STREAM"></a>

---


### MatchOperator <a name="MatchOperator" id="cdk-vpclattice-alpha.MatchOperator"></a>

Rule Conditions can leverage different operators for Matches.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.MatchOperator.CONTAINS">CONTAINS</a></code> | Contains Match. |
| <code><a href="#cdk-vpclattice-alpha.MatchOperator.EXACT">EXACT</a></code> | Exact Match. |
| <code><a href="#cdk-vpclattice-alpha.MatchOperator.PREFIX">PREFIX</a></code> | Prefix Match. |

---

##### `CONTAINS` <a name="CONTAINS" id="cdk-vpclattice-alpha.MatchOperator.CONTAINS"></a>

Contains Match.

---


##### `EXACT` <a name="EXACT" id="cdk-vpclattice-alpha.MatchOperator.EXACT"></a>

Exact Match.

---


##### `PREFIX` <a name="PREFIX" id="cdk-vpclattice-alpha.MatchOperator.PREFIX"></a>

Prefix Match.

---


### PathMatchType <a name="PathMatchType" id="cdk-vpclattice-alpha.PathMatchType"></a>

Operators for Path Matches.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.PathMatchType.EXACT">EXACT</a></code> | Exact Match. |
| <code><a href="#cdk-vpclattice-alpha.PathMatchType.PREFIX">PREFIX</a></code> | Prefix Match. |

---

##### `EXACT` <a name="EXACT" id="cdk-vpclattice-alpha.PathMatchType.EXACT"></a>

Exact Match.

---


##### `PREFIX` <a name="PREFIX" id="cdk-vpclattice-alpha.PathMatchType.PREFIX"></a>

Prefix Match.

---


### RequestProtocol <a name="RequestProtocol" id="cdk-vpclattice-alpha.RequestProtocol"></a>

HTTP/HTTPS methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.RequestProtocol.HTTP">HTTP</a></code> | HTTP Protocol (Unencrypted traffic). |
| <code><a href="#cdk-vpclattice-alpha.RequestProtocol.HTTPS">HTTPS</a></code> | HTTPS Protocol (Encrypted traffic - TLS termination). |
| <code><a href="#cdk-vpclattice-alpha.RequestProtocol.TCP">TCP</a></code> | TCP Protocol (Encrypted traffic - TLS passthrough). |

---

##### `HTTP` <a name="HTTP" id="cdk-vpclattice-alpha.RequestProtocol.HTTP"></a>

HTTP Protocol (Unencrypted traffic).

---


##### `HTTPS` <a name="HTTPS" id="cdk-vpclattice-alpha.RequestProtocol.HTTPS"></a>

HTTPS Protocol (Encrypted traffic - TLS termination).

---


##### `TCP` <a name="TCP" id="cdk-vpclattice-alpha.RequestProtocol.TCP"></a>

TCP Protocol (Encrypted traffic - TLS passthrough).

---


### RequestProtocolVersion <a name="RequestProtocolVersion" id="cdk-vpclattice-alpha.RequestProtocolVersion"></a>

ProtocolVersion.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion.HTTP1">HTTP1</a></code> | Http1. |
| <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion.HTTP2">HTTP2</a></code> | Http2. |
| <code><a href="#cdk-vpclattice-alpha.RequestProtocolVersion.GRPC">GRPC</a></code> | GRPC. |

---

##### `HTTP1` <a name="HTTP1" id="cdk-vpclattice-alpha.RequestProtocolVersion.HTTP1"></a>

Http1.

---


##### `HTTP2` <a name="HTTP2" id="cdk-vpclattice-alpha.RequestProtocolVersion.HTTP2"></a>

Http2.

---


##### `GRPC` <a name="GRPC" id="cdk-vpclattice-alpha.RequestProtocolVersion.GRPC"></a>

GRPC.

---


### RuleAccessMode <a name="RuleAccessMode" id="cdk-vpclattice-alpha.RuleAccessMode"></a>

Access mode for the rule.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.RuleAccessMode.UNAUTHENTICATED">UNAUTHENTICATED</a></code> | Unauthenticated Access. |
| <code><a href="#cdk-vpclattice-alpha.RuleAccessMode.AUTHENTICATED_ONLY">AUTHENTICATED_ONLY</a></code> | Unauthenticated Access. |
| <code><a href="#cdk-vpclattice-alpha.RuleAccessMode.ORG_ONLY">ORG_ONLY</a></code> | THIS Org only. |

---

##### `UNAUTHENTICATED` <a name="UNAUTHENTICATED" id="cdk-vpclattice-alpha.RuleAccessMode.UNAUTHENTICATED"></a>

Unauthenticated Access.

---


##### `AUTHENTICATED_ONLY` <a name="AUTHENTICATED_ONLY" id="cdk-vpclattice-alpha.RuleAccessMode.AUTHENTICATED_ONLY"></a>

Unauthenticated Access.

---


##### `ORG_ONLY` <a name="ORG_ONLY" id="cdk-vpclattice-alpha.RuleAccessMode.ORG_ONLY"></a>

THIS Org only.

---


### TargetType <a name="TargetType" id="cdk-vpclattice-alpha.TargetType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetType.LAMBDA">LAMBDA</a></code> | Lambda Target. |
| <code><a href="#cdk-vpclattice-alpha.TargetType.IP">IP</a></code> | IP Address Target. |
| <code><a href="#cdk-vpclattice-alpha.TargetType.INSTANCE">INSTANCE</a></code> | EC2 Instance Targets. |
| <code><a href="#cdk-vpclattice-alpha.TargetType.ALB">ALB</a></code> | Application Load Balancer Target. |

---

##### `LAMBDA` <a name="LAMBDA" id="cdk-vpclattice-alpha.TargetType.LAMBDA"></a>

Lambda Target.

---


##### `IP` <a name="IP" id="cdk-vpclattice-alpha.TargetType.IP"></a>

IP Address Target.

---


##### `INSTANCE` <a name="INSTANCE" id="cdk-vpclattice-alpha.TargetType.INSTANCE"></a>

EC2 Instance Targets.

---


##### `ALB` <a name="ALB" id="cdk-vpclattice-alpha.TargetType.ALB"></a>

Application Load Balancer Target.

---

