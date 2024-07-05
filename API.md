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
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | Targets. |
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

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.AlbTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.AlbTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

Targets.

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


### AssociateVpc <a name="AssociateVpc" id="cdk-vpclattice-alpha.AssociateVpc"></a>

Associate a VPC with Lattice Service Network.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.AssociateVpc.Initializer"></a>

```typescript
import { AssociateVpc } from 'cdk-vpclattice-alpha'

new AssociateVpc(scope: Construct, id: string, props: AssociateVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.AssociateVpcProps">AssociateVpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.AssociateVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.AssociateVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.AssociateVpc.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AssociateVpcProps">AssociateVpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.AssociateVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.AssociateVpc.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.AssociateVpc.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.AssociateVpc.isConstruct"></a>

```typescript
import { AssociateVpc } from 'cdk-vpclattice-alpha'

AssociateVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.AssociateVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.AssociateVpc.isOwnedResource"></a>

```typescript
import { AssociateVpc } from 'cdk-vpclattice-alpha'

AssociateVpc.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.AssociateVpc.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.AssociateVpc.isResource"></a>

```typescript
import { AssociateVpc } from 'cdk-vpclattice-alpha'

AssociateVpc.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.AssociateVpc.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpc.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.AssociateVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.AssociateVpc.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.AssociateVpc.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

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
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |
| <code><a href="#cdk-vpclattice-alpha.InstanceTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | Targets. |
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

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.InstanceTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

Targets.

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
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |
| <code><a href="#cdk-vpclattice-alpha.IpTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | Targets. |
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

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.IpTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.IpTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

Targets.

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
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |
| <code><a href="#cdk-vpclattice-alpha.LambdaTargetGroup.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | Targets. |
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

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.LambdaTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

Targets.

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
| <code><a href="#cdk-vpclattice-alpha.Listener.property.name">name</a></code> | <code>string</code> | The name of the listener. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.rules">rules</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleProps">RuleProps</a>[]</code> | The listener rules to add. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.service">service</a></code> | <code><a href="#cdk-vpclattice-alpha.Service">Service</a></code> | The service this listener is attached to. |

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

##### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.Listener.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* <a href="#cdk-vpclattice-alpha.Service">Service</a>

The service this listener is attached to.

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
| <code><a href="#cdk-vpclattice-alpha.Service.addAuthPolicyStatement">addAuthPolicyStatement</a></code> | Add a statement to the auth policy. |
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

##### `addAuthPolicyStatement` <a name="addAuthPolicyStatement" id="cdk-vpclattice-alpha.Service.addAuthPolicyStatement"></a>

```typescript
public addAuthPolicyStatement(statement: PolicyStatement): void
```

Add a statement to the auth policy.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-vpclattice-alpha.Service.addAuthPolicyStatement.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The Policy Statement to add.

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
| <code><a href="#cdk-vpclattice-alpha.Service.property.allowedPrincipals">allowedPrincipals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | Allowed principals to invoke the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Auth policy to be added to the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The auth type of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Logging destinations of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceArn">serviceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceId">serviceId</a></code> | <code>string</code> | The Id of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |

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

##### `allowedPrincipals`<sup>Required</sup> <a name="allowedPrincipals" id="cdk-vpclattice-alpha.Service.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

Allowed principals to invoke the service.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.Service.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

Auth policy to be added to the service.

---

##### `authType`<sup>Required</sup> <a name="authType" id="cdk-vpclattice-alpha.Service.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.NONE

The auth type of the service.

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
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addAuthPolicyStatement">addAuthPolicyStatement</a></code> | Add a statement to the auth policy. |
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

##### `addAuthPolicyStatement` <a name="addAuthPolicyStatement" id="cdk-vpclattice-alpha.ServiceNetwork.addAuthPolicyStatement"></a>

```typescript
public addAuthPolicyStatement(statement: PolicyStatement): void
```

Add a statement to the auth policy.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-vpclattice-alpha.ServiceNetwork.addAuthPolicyStatement.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The Policy Statement to add.

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
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.allowedPrincipals">allowedPrincipals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | Allowed principals to invoke services in the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Auth policy to be added to the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The auth type of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Logging destinations of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.name">name</a></code> | <code>string</code> | The name of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Id of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.accessMode">accessMode</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a></code> | Access mode to the service network, Authenticated, unauthenticated or only to org principals. |

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

##### `allowedPrincipals`<sup>Required</sup> <a name="allowedPrincipals" id="cdk-vpclattice-alpha.ServiceNetwork.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

Allowed principals to invoke services in the service network.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.ServiceNetwork.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

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

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="cdk-vpclattice-alpha.ServiceNetwork.property.accessMode"></a>

```typescript
public readonly accessMode: ServiceNetworkAccessMode;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a>

Access mode to the service network, Authenticated, unauthenticated or only to org principals.

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
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupBase.property.targetType">targetType</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetType">TargetType</a></code> | Targets. |

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

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.TargetGroupBase.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="cdk-vpclattice-alpha.TargetGroupBase.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetType">TargetType</a>

Targets.

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
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.AlbTargetGroupProps.property.port">port</a></code> | <code>number</code> | The port on which the target will listen. |
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

The port on which the target will listen.

It should match the port
of your Application Load Balancer's listeners.

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

### AssociateVpcProps <a name="AssociateVpcProps" id="cdk-vpclattice-alpha.AssociateVpcProps"></a>

Props to Associate a VPC with a Service Network.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.AssociateVpcProps.Initializer"></a>

```typescript
import { AssociateVpcProps } from 'cdk-vpclattice-alpha'

const associateVpcProps: AssociateVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpcProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | Service Network Identifier. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpcProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to associate with. |
| <code><a href="#cdk-vpclattice-alpha.AssociateVpcProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | security groups for the lattice endpoint. |

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.AssociateVpcProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

Service Network Identifier.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpclattice-alpha.AssociateVpcProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to associate with.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-vpclattice-alpha.AssociateVpcProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* a security group that will permit inbound 443

security groups for the lattice endpoint.

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
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.config">config</a></code> | <code><a href="#cdk-vpclattice-alpha.ListenerConfig">ListenerConfig</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the service when the resource/stack is deleted. |

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

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-vpclattice-alpha.ListenerProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

Determine what happens to the service when the resource/stack is deleted.

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
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.accessMode">accessMode</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a></code> | Allow external principals. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.allowedPrincipals">allowedPrincipals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | Allowed principals to access the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Policy to apply to the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.authStatements">authStatements</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Additional AuthStatements:. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The type of authentication to use with the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Where to send access logs. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.orgId">orgId</a></code> | <code>string</code> | Organization ID to allow access to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the repository when the resource/stack is deleted. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.services">services</a></code> | <code><a href="#cdk-vpclattice-alpha.IService">IService</a>[]</code> | Lattice Services that are associated with this Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.vpcAssociations">vpcAssociations</a></code> | <code><a href="#cdk-vpclattice-alpha.AssociateVPCProps">AssociateVPCProps</a>[]</code> | You can associate VPCs to your service network at or after network creation. |

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.accessMode"></a>

```typescript
public readonly accessMode: ServiceNetworkAccessMode;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a>
- *Default:* ServiceNetworkAccessMode.NO_STATEMENT

Allow external principals.

---

##### `allowedPrincipals`<sup>Optional</sup> <a name="allowedPrincipals" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]
- *Default:* No principals are allowed

Allowed principals to access the service network.

---

##### `authPolicy`<sup>Optional</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No policy is applied

Policy to apply to the service network.

---

##### `authStatements`<sup>Optional</sup> <a name="authStatements" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.authStatements"></a>

```typescript
public readonly authStatements: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

Additional AuthStatements:.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.NONE

The type of authentication to use with the Service Network.

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

##### `orgId`<sup>Optional</sup> <a name="orgId" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string
- *Default:* no org id is used

Organization ID to allow access to the Service Network.

---

*Example*

```typescript
'o-1234567890'
```


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
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.allowedPrincipals">allowedPrincipals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | Allowed principals to access the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Policy to apply to the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.authStatements">authStatements</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Additional AuthStatements:. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The authType of the Service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.certificateArn">certificateArn</a></code> | <code>string</code> | A certificate that may be used by the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.customDomainName">customDomainName</a></code> | <code>string</code> | A registered custom domain name for your service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.dnsEntry">dnsEntry</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty</code> | A custom DNS entry. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Where to send access logs. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.name">name</a></code> | <code>string</code> | The name to assign to the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the service when the resource/stack is deleted. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.serviceNetwork">serviceNetwork</a></code> | <code><a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a></code> | ServiceNetwork to associate with. |

---

##### `allowedPrincipals`<sup>Optional</sup> <a name="allowedPrincipals" id="cdk-vpclattice-alpha.ServiceProps.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]
- *Default:* No principals are allowed

Allowed principals to access the service.

---

##### `authPolicy`<sup>Optional</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.ServiceProps.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No policy is attached. All traffic is denied by default.

Policy to apply to the service.

---

##### `authStatements`<sup>Optional</sup> <a name="authStatements" id="cdk-vpclattice-alpha.ServiceProps.property.authStatements"></a>

```typescript
public readonly authStatements: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

Additional AuthStatements:.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.NONE

The authType of the Service.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="cdk-vpclattice-alpha.ServiceProps.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string
- *Default:* no custom certificate is used

A certificate that may be used by the service.

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="cdk-vpclattice-alpha.ServiceProps.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string
- *Default:* Your service will be reachable only by the domain name that VPC Lattice generates

A registered custom domain name for your service.

Requests to the custom
domain are resolved by the DNS server to the VPC Lattice generated domain name.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-custom-domain-name.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-custom-domain-name.html)

---

##### `dnsEntry`<sup>Optional</sup> <a name="dnsEntry" id="cdk-vpclattice-alpha.ServiceProps.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DnsEntryProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty
- *Default:* no custom DNS entry is used

A custom DNS entry.

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

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.Initializer"></a>

```typescript
import { ShareServiceNetworkProps } from 'cdk-vpclattice-alpha'

const shareServiceNetworkProps: ShareServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the share. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | Whether external principals are allowed. |
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
- *Default:* false;

Whether external principals are allowed.

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

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="cdk-vpclattice-alpha.IService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The Id of the service.

---

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

AuthTypes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthType.NONE">NONE</a></code> | No Authorization. |
| <code><a href="#cdk-vpclattice-alpha.AuthType.AWS_IAM">AWS_IAM</a></code> | Use IAM Policy as. |

---

##### `NONE` <a name="NONE" id="cdk-vpclattice-alpha.AuthType.NONE"></a>

No Authorization.

---


##### `AWS_IAM` <a name="AWS_IAM" id="cdk-vpclattice-alpha.AuthType.AWS_IAM"></a>

Use IAM Policy as.

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
| <code><a href="#cdk-vpclattice-alpha.RuleAccessMode.NO_STATEMENT">NO_STATEMENT</a></code> | Do not create a statement. |

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


##### `NO_STATEMENT` <a name="NO_STATEMENT" id="cdk-vpclattice-alpha.RuleAccessMode.NO_STATEMENT"></a>

Do not create a statement.

---


### ServiceNetworkAccessMode <a name="ServiceNetworkAccessMode" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode"></a>

AccessModes for the Service Network.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode.UNAUTHENTICATED">UNAUTHENTICATED</a></code> | Allows for Unauthenticated (Anonymous) Access to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode.AUTHENTICATED_ONLY">AUTHENTICATED_ONLY</a></code> | Authenticated Access to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode.ORG_ONLY">ORG_ONLY</a></code> | Only principals from this Org can access the Service Network. |

---

##### `UNAUTHENTICATED` <a name="UNAUTHENTICATED" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode.UNAUTHENTICATED"></a>

Allows for Unauthenticated (Anonymous) Access to the Service Network.

Anonymous principals are callers that don't sign their AWS requests
with Signature Version 4 (SigV4), and are within a VPC that is connected
to the service network.

---


##### `AUTHENTICATED_ONLY` <a name="AUTHENTICATED_ONLY" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode.AUTHENTICATED_ONLY"></a>

Authenticated Access to the Service Network.

---


##### `ORG_ONLY` <a name="ORG_ONLY" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode.ORG_ONLY"></a>

Only principals from this Org can access the Service Network.

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

