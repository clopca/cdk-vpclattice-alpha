# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssociateVpc <a name="AssociateVpc" id="cdk-vpclattice-alpha.AssociateVpc"></a>

Associate a VPO with Lattice Service Network.

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


### Service <a name="Service" id="cdk-vpclattice-alpha.Service"></a>

- *Implements:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

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
| <code><a href="#cdk-vpclattice-alpha.Service.associateWithServiceNetwork">associateWithServiceNetwork</a></code> | Associate with a Service Network. |

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

##### `associateWithServiceNetwork` <a name="associateWithServiceNetwork" id="cdk-vpclattice-alpha.Service.associateWithServiceNetwork"></a>

```typescript
public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void
```

Associate with a Service Network.

###### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.Service.associateWithServiceNetwork.parameter.serviceNetwork"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.Service.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.Service.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpclattice-alpha.Service.fromServiceArn">fromServiceArn</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Service.fromServiceId">fromServiceId</a></code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Service.validateServiceName">validateServiceName</a></code> | Must be between 3-40 characters. |

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

Service.fromServiceArn(scope: Construct, id: string, arn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.Service.fromServiceArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.Service.fromServiceArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-vpclattice-alpha.Service.fromServiceArn.parameter.arn"></a>

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

##### `validateServiceName` <a name="validateServiceName" id="cdk-vpclattice-alpha.Service.validateServiceName"></a>

```typescript
import { Service } from 'cdk-vpclattice-alpha'

Service.validateServiceName(name: string)
```

Must be between 3-40 characters.

Lowercase letters, numbers, and hyphens are accepted.
Must begin and end with a letter or number. No consecutive hyphens.

###### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.Service.validateServiceName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceArn">serviceArn</a></code> | <code>string</code> | The ARN of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceId">serviceId</a></code> | <code>string</code> | The Id of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | *No description.* |

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

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="cdk-vpclattice-alpha.Service.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

The ARN of the service.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="cdk-vpclattice-alpha.Service.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The Id of the service.

---

##### `authType`<sup>Required</sup> <a name="authType" id="cdk-vpclattice-alpha.Service.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>

---


### ServiceAssociation <a name="ServiceAssociation" id="cdk-vpclattice-alpha.ServiceAssociation"></a>

Creates an Association Between a Lattice Service and a Service Network.

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.ServiceAssociation.Initializer"></a>

```typescript
import { ServiceAssociation } from 'cdk-vpclattice-alpha'

new ServiceAssociation(scope: Construct, id: string, props: ServiceAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceAssociationProps">ServiceAssociationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.ServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.ServiceAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceAssociationProps">ServiceAssociationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.ServiceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.ServiceAssociation.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.ServiceAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.ServiceAssociation.isConstruct"></a>

```typescript
import { ServiceAssociation } from 'cdk-vpclattice-alpha'

ServiceAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.ServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.ServiceAssociation.isOwnedResource"></a>

```typescript
import { ServiceAssociation } from 'cdk-vpclattice-alpha'

ServiceAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.ServiceAssociation.isResource"></a>

```typescript
import { ServiceAssociation } from 'cdk-vpclattice-alpha'

ServiceAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.ServiceAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.ServiceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.ServiceAssociation.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.ServiceAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### ServiceNetwork <a name="ServiceNetwork" id="cdk-vpclattice-alpha.ServiceNetwork"></a>

- *Implements:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

Create a vpcLattice Service Network.

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
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addloggingDestination">addloggingDestination</a></code> | send logs to a destination. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addService">addService</a></code> | Add A lattice service to a lattice network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addStatementToAuthPolicy">addStatementToAuthPolicy</a></code> | This will give the principals access to all resources that are on this service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.applyAuthPolicyToServiceNetwork">applyAuthPolicyToServiceNetwork</a></code> | Apply the AuthPolicy to a Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.associateVPC">associateVPC</a></code> | Associate a VPC with the Service Network This provides an opinionated default of adding a security group to allow inbound 443. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.share">share</a></code> | Share the The Service network using RAM. |

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

##### `addloggingDestination` <a name="addloggingDestination" id="cdk-vpclattice-alpha.ServiceNetwork.addloggingDestination"></a>

```typescript
public addloggingDestination(props: AddloggingDestinationProps): void
```

send logs to a destination.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.addloggingDestination.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AddloggingDestinationProps">AddloggingDestinationProps</a>

---

##### `addService` <a name="addService" id="cdk-vpclattice-alpha.ServiceNetwork.addService"></a>

```typescript
public addService(props: AddServiceProps): void
```

Add A lattice service to a lattice network.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.addService.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AddServiceProps">AddServiceProps</a>

---

##### `addStatementToAuthPolicy` <a name="addStatementToAuthPolicy" id="cdk-vpclattice-alpha.ServiceNetwork.addStatementToAuthPolicy"></a>

```typescript
public addStatementToAuthPolicy(statement: PolicyStatement): void
```

This will give the principals access to all resources that are on this service network.

This is a broad permission.
Consider granting Access at the Service
addToResourcePolicy()

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-vpclattice-alpha.ServiceNetwork.addStatementToAuthPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `applyAuthPolicyToServiceNetwork` <a name="applyAuthPolicyToServiceNetwork" id="cdk-vpclattice-alpha.ServiceNetwork.applyAuthPolicyToServiceNetwork"></a>

```typescript
public applyAuthPolicyToServiceNetwork(): void
```

Apply the AuthPolicy to a Service Network.

##### `associateVPC` <a name="associateVPC" id="cdk-vpclattice-alpha.ServiceNetwork.associateVPC"></a>

```typescript
public associateVPC(props: AssociateVPCProps): void
```

Associate a VPC with the Service Network This provides an opinionated default of adding a security group to allow inbound 443.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.associateVPC.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AssociateVPCProps">AssociateVPCProps</a>

---

##### `share` <a name="share" id="cdk-vpclattice-alpha.ServiceNetwork.share"></a>

```typescript
public share(props: ShareServiceNetworkProps): void
```

Share the The Service network using RAM.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.share.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps">ShareServiceNetworkProps</a>

ShareServiceNetwork.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.fromId">fromId</a></code> | Import a Service Network by Id. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.fromName">fromName</a></code> | *No description.* |

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

##### `fromName` <a name="fromName" id="cdk-vpclattice-alpha.ServiceNetwork.fromName"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

ServiceNetwork.fromName(scope: Construct, id: string, serviceNetworkName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.ServiceNetwork.fromName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.ServiceNetwork.fromName.parameter.id"></a>

- *Type:* string

---

###### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="cdk-vpclattice-alpha.ServiceNetwork.fromName.parameter.serviceNetworkName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.imported">imported</a></code> | <code>boolean</code> | imported. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.name">name</a></code> | <code>string</code> | Name of the ServiceNetwork. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Arn of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Id of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | A managed Policy that is the auth policy. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | the authType of the service network. |

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

##### `imported`<sup>Required</sup> <a name="imported" id="cdk-vpclattice-alpha.ServiceNetwork.property.imported"></a>

```typescript
public readonly imported: boolean;
```

- *Type:* boolean

imported.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.ServiceNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ServiceNetwork.

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

The Arn of the service network.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The Id of the Service Network.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.ServiceNetwork.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

A managed Policy that is the auth policy.

---

##### `authType`<sup>Required</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceNetwork.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>

the authType of the service network.

---


### ServiceNetworkAssociation <a name="ServiceNetworkAssociation" id="cdk-vpclattice-alpha.ServiceNetworkAssociation"></a>

Creates an Association Between a Lattice Service and a Service Network consider using .associateWithServiceNetwork.

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


## Structs <a name="Structs" id="Structs"></a>

### AddloggingDestinationProps <a name="AddloggingDestinationProps" id="cdk-vpclattice-alpha.AddloggingDestinationProps"></a>

Properties to add a logging Destination.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.AddloggingDestinationProps.Initializer"></a>

```typescript
import { AddloggingDestinationProps } from 'cdk-vpclattice-alpha'

const addloggingDestinationProps: AddloggingDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AddloggingDestinationProps.property.destination">destination</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a></code> | The logging destination. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="cdk-vpclattice-alpha.AddloggingDestinationProps.property.destination"></a>

```typescript
public readonly destination: LoggingDestination;
```

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>

The logging destination.

---

### AddServiceProps <a name="AddServiceProps" id="cdk-vpclattice-alpha.AddServiceProps"></a>

Properties to add a Service to a Service Network.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.AddServiceProps.Initializer"></a>

```typescript
import { AddServiceProps } from 'cdk-vpclattice-alpha'

const addServiceProps: AddServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AddServiceProps.property.service">service</a></code> | <code><a href="#cdk-vpclattice-alpha.IService">IService</a></code> | The Service to add to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.AddServiceProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Service Network to add the Service to. |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.AddServiceProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

The Service to add to the Service Network.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.AddServiceProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The Service Network to add the Service to.

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

### ImportedServiceNetworkProps <a name="ImportedServiceNetworkProps" id="cdk-vpclattice-alpha.ImportedServiceNetworkProps"></a>

Props for ImportedSearch.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ImportedServiceNetworkProps.Initializer"></a>

```typescript
import { ImportedServiceNetworkProps } from 'cdk-vpclattice-alpha'

const importedServiceNetworkProps: ImportedServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ImportedServiceNetworkProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | Import by Id. |
| <code><a href="#cdk-vpclattice-alpha.ImportedServiceNetworkProps.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | Import by Name. |

---

##### `serviceNetworkId`<sup>Optional</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.ImportedServiceNetworkProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string
- *Default:* No Search by Id

Import by Id.

---

##### `serviceNetworkName`<sup>Optional</sup> <a name="serviceNetworkName" id="cdk-vpclattice-alpha.ImportedServiceNetworkProps.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string
- *Default:* No search By Name

Import by Name.

---

### ServiceAssociationProps <a name="ServiceAssociationProps" id="cdk-vpclattice-alpha.ServiceAssociationProps"></a>

Props for Service Assocaition.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceAssociationProps.Initializer"></a>

```typescript
import { ServiceAssociationProps } from 'cdk-vpclattice-alpha'

const serviceAssociationProps: ServiceAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociationProps.property.service">service</a></code> | <code><a href="#cdk-vpclattice-alpha.IService">IService</a></code> | lattice Service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceAssociationProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | Lattice ServiceId. |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.ServiceAssociationProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

lattice Service.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="cdk-vpclattice-alpha.ServiceAssociationProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

Lattice ServiceId.

---

### ServiceNetworkAssociationProps <a name="ServiceNetworkAssociationProps" id="cdk-vpclattice-alpha.ServiceNetworkAssociationProps"></a>

Props for Service Assocaition.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceNetworkAssociationProps.Initializer"></a>

```typescript
import { ServiceNetworkAssociationProps } from 'cdk-vpclattice-alpha'

const serviceNetworkAssociationProps: ServiceNetworkAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociationProps.property.serviceId">serviceId</a></code> | <code>string</code> | Lattice ServiceId. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAssociationProps.property.serviceNetwork">serviceNetwork</a></code> | <code><a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a></code> | lattice Service. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="cdk-vpclattice-alpha.ServiceNetworkAssociationProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

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

The properties for the ServiceNetwork.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceNetworkProps.Initializer"></a>

```typescript
import { ServiceNetworkProps } from 'cdk-vpclattice-alpha'

const serviceNetworkProps: ServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.accessmode">accessmode</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a></code> | Allow external principals. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.authStatements">authStatements</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Additional AuthStatments:. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The type of  authentication to use with the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Logging destinations. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.services">services</a></code> | <code><a href="#cdk-vpclattice-alpha.IService">IService</a>[]</code> | Lattice Services that are assocaited with this Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.vpcs">vpcs</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc[]</code> | Vpcs that are associated with this Service Network. |

---

##### `accessmode`<sup>Optional</sup> <a name="accessmode" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.accessmode"></a>

```typescript
public readonly accessmode: ServiceNetworkAccessMode;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a>
- *Default:* false

Allow external principals.

---

##### `authStatements`<sup>Optional</sup> <a name="authStatements" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.authStatements"></a>

```typescript
public readonly authStatements: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

Additional AuthStatments:.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* 'AWS_IAM'

The type of  authentication to use with the Service Network.

---

##### `loggingDestinations`<sup>Optional</sup> <a name="loggingDestinations" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.loggingDestinations"></a>

```typescript
public readonly loggingDestinations: LoggingDestination[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]
- *Default:* : no logging

Logging destinations.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* cloudformation generated name

The name of the Service Network.

If not provided Cloudformation will provide
a name

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.services"></a>

```typescript
public readonly services: IService[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>[]
- *Default:* no services are associated with the service network

Lattice Services that are assocaited with this Service Network.

---

##### `vpcs`<sup>Optional</sup> <a name="vpcs" id="cdk-vpclattice-alpha.ServiceNetworkProps.property.vpcs"></a>

```typescript
public readonly vpcs: IVpc[];
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc[]
- *Default:* no vpcs are associated

Vpcs that are associated with this Service Network.

---

### ServiceProps <a name="ServiceProps" id="cdk-vpclattice-alpha.ServiceProps"></a>

Properties for creating a new VPC Lattice Service.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from 'cdk-vpclattice-alpha'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | The authType of the Service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.certificateArn">certificateArn</a></code> | <code>string</code> | A certificate that may be used by the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.customDomainName">customDomainName</a></code> | <code>string</code> | A customDomainName used by the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.dnsEntry">dnsEntry</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty</code> | A custom DNS entry. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the repository when the resource/stack is deleted. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.serviceName">serviceName</a></code> | <code>string</code> | The name to assign to the service. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.serviceNetwork">serviceNetwork</a></code> | <code><a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a></code> | ServiceNetwork to associate with. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.AWS_IAM

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
- *Default:* no custom domain name is used

A customDomainName used by the service.

---

##### `dnsEntry`<sup>Optional</sup> <a name="dnsEntry" id="cdk-vpclattice-alpha.ServiceProps.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DnsEntryProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty
- *Default:* no custom DNS entry is used

A custom DNS entry.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="cdk-vpclattice-alpha.ServiceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

Determine what happens to the repository when the resource/stack is deleted.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="cdk-vpclattice-alpha.ServiceProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string
- *Default:* a CloudFormation generated name

The name to assign to the service.

Note: It must be unique within your AWS account and this name will become part of
the service DNS and can't be changed after the VPC Lattice service is created.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html)

---

##### `serviceNetwork`<sup>Optional</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.ServiceProps.property.serviceNetwork"></a>

```typescript
public readonly serviceNetwork: IServiceNetwork;
```

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>
- *Default:* will not assocaite with any serviceNetwork.

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
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.accounts">accounts</a></code> | <code>string[]</code> | Principals to share the Service Network with. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the share. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.accessMode">accessMode</a></code> | <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a></code> | The access mode for the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | Are external Principals allowed. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.description">description</a></code> | <code>string</code> | The description of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.disableDiscovery">disableDiscovery</a></code> | <code>boolean</code> | disable discovery. |
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags to apply to the Service Network. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]
- *Default:* none

Principals to share the Service Network with.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the share.

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.accessMode"></a>

```typescript
public readonly accessMode: ServiceNetworkAccessMode;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a>
- *Default:* 'UNAUTHENTICATED'

The access mode for the Service Network.

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean;
```

- *Type:* boolean
- *Default:* false;

Are external Principals allowed.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

The description of the Service Network.

---

##### `disableDiscovery`<sup>Optional</sup> <a name="disableDiscovery" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.disableDiscovery"></a>

```typescript
public readonly disableDiscovery: boolean;
```

- *Type:* boolean
- *Default:* false

disable discovery.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-vpclattice-alpha.ShareServiceNetworkProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none

The tags to apply to the Service Network.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingDestination <a name="LoggingDestination" id="cdk-vpclattice-alpha.LoggingDestination"></a>

Logging options.

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
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.cloudwatch">cloudwatch</a></code> | Send to CLoudwatch. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.kinesis">kinesis</a></code> | Stream to Kinesis. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.s3">s3</a></code> | Construct a logging destination for a S3 Bucket. |

---

##### `cloudwatch` <a name="cloudwatch" id="cdk-vpclattice-alpha.LoggingDestination.cloudwatch"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

LoggingDestination.cloudwatch(logGroup: ILogGroup)
```

Send to CLoudwatch.

###### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-vpclattice-alpha.LoggingDestination.cloudwatch.parameter.logGroup"></a>

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

---

##### `kinesis` <a name="kinesis" id="cdk-vpclattice-alpha.LoggingDestination.kinesis"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

LoggingDestination.kinesis(stream: IStream)
```

Stream to Kinesis.

###### `stream`<sup>Required</sup> <a name="stream" id="cdk-vpclattice-alpha.LoggingDestination.kinesis.parameter.stream"></a>

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `s3` <a name="s3" id="cdk-vpclattice-alpha.LoggingDestination.s3"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

LoggingDestination.s3(bucket: IBucket)
```

Construct a logging destination for a S3 Bucket.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-vpclattice-alpha.LoggingDestination.s3.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

an s3 bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.property.addr">addr</a></code> | <code>string</code> | unique addr of the destination. |
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.property.arn">arn</a></code> | <code>string</code> | An Arn of the destination. |
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

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.LoggingDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name of the destination.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IService <a name="IService" id="cdk-vpclattice-alpha.IService"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.Service">Service</a>, <a href="#cdk-vpclattice-alpha.IService">IService</a>

Represents a Vpc Lattice Service.

Implemented by `Service`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IService.associateWithServiceNetwork">associateWithServiceNetwork</a></code> | associate the service with a servicenetwork. |

---

##### `associateWithServiceNetwork` <a name="associateWithServiceNetwork" id="cdk-vpclattice-alpha.IService.associateWithServiceNetwork"></a>

```typescript
public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void
```

associate the service with a servicenetwork.

###### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.IService.associateWithServiceNetwork.parameter.serviceNetwork"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.IService.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.IService.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.IService.property.serviceArn">serviceArn</a></code> | <code>string</code> | The ARN of the service. |
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

The ARN of the service.

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

Create a vpc lattice service network.

Implemented by `ServiceNetwork`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.addService">addService</a></code> | Add Lattice Service. |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.associateVPC">associateVPC</a></code> | Associate a VPC with the Service Network. |

---

##### `addService` <a name="addService" id="cdk-vpclattice-alpha.IServiceNetwork.addService"></a>

```typescript
public addService(props: AddServiceProps): void
```

Add Lattice Service.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.IServiceNetwork.addService.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AddServiceProps">AddServiceProps</a>

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
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.property.imported">imported</a></code> | <code>boolean</code> | Is this an imported serviceNetwork. |
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

##### `imported`<sup>Required</sup> <a name="imported" id="cdk-vpclattice-alpha.IServiceNetwork.property.imported"></a>

```typescript
public readonly imported: boolean;
```

- *Type:* boolean

Is this an imported serviceNetwork.

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

## Enums <a name="Enums" id="Enums"></a>

### AuthType <a name="AuthType" id="cdk-vpclattice-alpha.AuthType"></a>

The authentication method used to be used.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.AuthType.NONE">NONE</a></code> | The resource does not use an IAM policy. |
| <code><a href="#cdk-vpclattice-alpha.AuthType.AWS_IAM">AWS_IAM</a></code> | The resource uses an IAM policy. |

---

##### `NONE` <a name="NONE" id="cdk-vpclattice-alpha.AuthType.NONE"></a>

The resource does not use an IAM policy.

---


##### `AWS_IAM` <a name="AWS_IAM" id="cdk-vpclattice-alpha.AuthType.AWS_IAM"></a>

The resource uses an IAM policy.

When this type is used, auth is enabled and an auth policy is required. *

---


### ServiceNetworkAccessMode <a name="ServiceNetworkAccessMode" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode"></a>

AccesModes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode.UNAUTHENTICATED">UNAUTHENTICATED</a></code> | Unauthenticated Access. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode.AUTHENTICATED_ONLY">AUTHENTICATED_ONLY</a></code> | Unauthenticated Access. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkAccessMode.ORG_ONLY">ORG_ONLY</a></code> | THIS Org only. |

---

##### `UNAUTHENTICATED` <a name="UNAUTHENTICATED" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode.UNAUTHENTICATED"></a>

Unauthenticated Access.

---


##### `AUTHENTICATED_ONLY` <a name="AUTHENTICATED_ONLY" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode.AUTHENTICATED_ONLY"></a>

Unauthenticated Access.

---


##### `ORG_ONLY` <a name="ORG_ONLY" id="cdk-vpclattice-alpha.ServiceNetworkAccessMode.ORG_ONLY"></a>

THIS Org only.

---

