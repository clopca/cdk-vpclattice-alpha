# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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


## Structs <a name="Structs" id="Structs"></a>

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
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the repository when the resource/stack is deleted. |
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.serviceName">serviceName</a></code> | <code>string</code> | The name to assign to the service. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>
- *Default:* AuthType.AWS_IAM

The authType of the Service.

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


## Protocols <a name="Protocols" id="Protocols"></a>

### IService <a name="IService" id="cdk-vpclattice-alpha.IService"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.Service">Service</a>, <a href="#cdk-vpclattice-alpha.IService">IService</a>

Represents a Vpc Lattice Service Network.

Implemented by `Service`.


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

