# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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
| <code><a href="#cdk-vpclattice-alpha.Listener.addListenerRule">addListenerRule</a></code> | add a rule to the listener. |

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
public addListenerRule(props: RuleProp): void
```

add a rule to the listener.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.Listener.addListenerRule.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.RuleProp">RuleProp</a>

AddRuleProps.

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
| <code><a href="#cdk-vpclattice-alpha.Listener.property.listenerArn">listenerArn</a></code> | <code>string</code> | THe Arn of the Listener. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.listenerId">listenerId</a></code> | <code>string</code> | The Id of the Listener. |
| <code><a href="#cdk-vpclattice-alpha.Listener.property.listenerPriorities">listenerPriorities</a></code> | <code>number[]</code> | A list of priorities, to check for duplicates. |
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

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="cdk-vpclattice-alpha.Listener.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

THe Arn of the Listener.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="cdk-vpclattice-alpha.Listener.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The Id of the Listener.

---

##### `listenerPriorities`<sup>Required</sup> <a name="listenerPriorities" id="cdk-vpclattice-alpha.Listener.property.listenerPriorities"></a>

```typescript
public readonly listenerPriorities: number[];
```

- *Type:* number[]

A list of priorities, to check for duplicates.

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
| <code><a href="#cdk-vpclattice-alpha.Service.addloggingDestination">addloggingDestination</a></code> | Send logs to a destination. |
| <code><a href="#cdk-vpclattice-alpha.Service.applyAuthPolicy">applyAuthPolicy</a></code> | Apply the AuthPolicy to the Service. |
| <code><a href="#cdk-vpclattice-alpha.Service.associateWithServiceNetwork">associateWithServiceNetwork</a></code> | Associate the service with a Service Network. |
| <code><a href="#cdk-vpclattice-alpha.Service.grantAccess">grantAccess</a></code> | .grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granual permissions at the rule level. |

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

##### `addloggingDestination` <a name="addloggingDestination" id="cdk-vpclattice-alpha.Service.addloggingDestination"></a>

```typescript
public addloggingDestination(props: AddloggingDestinationProps): void
```

Send logs to a destination.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.Service.addloggingDestination.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AddloggingDestinationProps">AddloggingDestinationProps</a>

---

##### `applyAuthPolicy` <a name="applyAuthPolicy" id="cdk-vpclattice-alpha.Service.applyAuthPolicy"></a>

```typescript
public applyAuthPolicy(): PolicyDocument
```

Apply the AuthPolicy to the Service.

##### `associateWithServiceNetwork` <a name="associateWithServiceNetwork" id="cdk-vpclattice-alpha.Service.associateWithServiceNetwork"></a>

```typescript
public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void
```

Associate the service with a Service Network.

###### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="cdk-vpclattice-alpha.Service.associateWithServiceNetwork.parameter.serviceNetwork"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IServiceNetwork">IServiceNetwork</a>

---

##### `grantAccess` <a name="grantAccess" id="cdk-vpclattice-alpha.Service.grantAccess"></a>

```typescript
public grantAccess(principals: IPrincipal[]): void
```

.grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granual permissions at the rule level.

###### `principals`<sup>Required</sup> <a name="principals" id="cdk-vpclattice-alpha.Service.grantAccess.parameter.principals"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

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
| <code><a href="#cdk-vpclattice-alpha.Service.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceArn">serviceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceId">serviceId</a></code> | <code>string</code> | The Id of the service. |
| <code><a href="#cdk-vpclattice-alpha.Service.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
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

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="cdk-vpclattice-alpha.Service.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

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

---

##### `authType`<sup>Required</sup> <a name="authType" id="cdk-vpclattice-alpha.Service.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>

---


### ServiceAssociation <a name="ServiceAssociation" id="cdk-vpclattice-alpha.ServiceAssociation"></a>

Creates an Association Between a Lattice Service and a Service Network.

Consider using `.addService` of the ServiceNetwork construct

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
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addloggingDestination">addloggingDestination</a></code> | Send logs to a destination. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addService">addService</a></code> | Add A lattice service to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.addStatementToAuthPolicy">addStatementToAuthPolicy</a></code> | Add a Policy Statement to the Auth Policy. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.applyAuthPolicyToServiceNetwork">applyAuthPolicyToServiceNetwork</a></code> | Apply the AuthPolicy to a Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.associateVPC">associateVPC</a></code> | Apply the AuthPolicy to the Service Network. |
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

Send logs to a destination.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.ServiceNetwork.addloggingDestination.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.AddloggingDestinationProps">AddloggingDestinationProps</a>

---

##### `addService` <a name="addService" id="cdk-vpclattice-alpha.ServiceNetwork.addService"></a>

```typescript
public addService(service: IService): void
```

Add A lattice service to the Service Network.

###### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.ServiceNetwork.addService.parameter.service"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

---

##### `addStatementToAuthPolicy` <a name="addStatementToAuthPolicy" id="cdk-vpclattice-alpha.ServiceNetwork.addStatementToAuthPolicy"></a>

```typescript
public addStatementToAuthPolicy(statement: PolicyStatement): void
```

Add a Policy Statement to the Auth Policy.

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

Apply the AuthPolicy to the Service Network.

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

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.fromArn">fromArn</a></code> | Import a Service Network by Arn. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.fromId">fromId</a></code> | Import a Service Network by Id. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.validateServiceNetworkName">validateServiceNetworkName</a></code> | Must be between 3-63 characters. |

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

##### `validateServiceNetworkName` <a name="validateServiceNetworkName" id="cdk-vpclattice-alpha.ServiceNetwork.validateServiceNetworkName"></a>

```typescript
import { ServiceNetwork } from 'cdk-vpclattice-alpha'

ServiceNetwork.validateServiceNetworkName(name: string)
```

Must be between 3-63 characters.

Lowercase letters, numbers, and hyphens are accepted.
Must begin and end with a letter or number. No consecutive hyphens.

###### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.ServiceNetwork.validateServiceNetworkName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Id of the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.ServiceNetwork.property.authType">authType</a></code> | <code><a href="#cdk-vpclattice-alpha.AuthType">AuthType</a></code> | *No description.* |

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
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.ServiceNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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

##### `authType`<sup>Required</sup> <a name="authType" id="cdk-vpclattice-alpha.ServiceNetwork.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#cdk-vpclattice-alpha.AuthType">AuthType</a>

---


### ServiceNetworkAssociation <a name="ServiceNetworkAssociation" id="cdk-vpclattice-alpha.ServiceNetworkAssociation"></a>

Creates an Association Between a Lattice Service and a Service Network.

Consider using `.associateWithServiceNetwork` of the Service construct

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


### TargetGroup <a name="TargetGroup" id="cdk-vpclattice-alpha.TargetGroup"></a>

- *Implements:* <a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a>

Creates a VPC Lattice Target Group.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html)

#### Initializers <a name="Initializers" id="cdk-vpclattice-alpha.TargetGroup.Initializer"></a>

```typescript
import { TargetGroup } from 'cdk-vpclattice-alpha'

new TargetGroup(scope: Construct, id: string, props: TargetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetGroupProps">TargetGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpclattice-alpha.TargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpclattice-alpha.TargetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.TargetGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.TargetGroupProps">TargetGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-vpclattice-alpha.TargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpclattice-alpha.TargetGroup.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpclattice-alpha.TargetGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.validateTargetGroupName">validateTargetGroupName</a></code> | Must be between 3-128 characters. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpclattice-alpha.TargetGroup.isConstruct"></a>

```typescript
import { TargetGroup } from 'cdk-vpclattice-alpha'

TargetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpclattice-alpha.TargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpclattice-alpha.TargetGroup.isOwnedResource"></a>

```typescript
import { TargetGroup } from 'cdk-vpclattice-alpha'

TargetGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.TargetGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpclattice-alpha.TargetGroup.isResource"></a>

```typescript
import { TargetGroup } from 'cdk-vpclattice-alpha'

TargetGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpclattice-alpha.TargetGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `validateTargetGroupName` <a name="validateTargetGroupName" id="cdk-vpclattice-alpha.TargetGroup.validateTargetGroupName"></a>

```typescript
import { TargetGroup } from 'cdk-vpclattice-alpha'

TargetGroup.validateTargetGroupName(name: string)
```

Must be between 3-128 characters.

The name must be unique within the account.
The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as
the first or last character, or immediately after another hyphen.

###### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.TargetGroup.validateTargetGroupName.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpclattice-alpha.TargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpclattice-alpha.TargetGroup.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpclattice-alpha.TargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="cdk-vpclattice-alpha.TargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="cdk-vpclattice-alpha.TargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

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

### DefaultListenerAction <a name="DefaultListenerAction" id="cdk-vpclattice-alpha.DefaultListenerAction"></a>

A default listener action.

one of fixed response or forward needs to be provided.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.DefaultListenerAction.Initializer"></a>

```typescript
import { DefaultListenerAction } from 'cdk-vpclattice-alpha'

const defaultListenerAction: DefaultListenerAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.DefaultListenerAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#cdk-vpclattice-alpha.FixedResponse">FixedResponse</a></code> | Drop client requests and return a custom HTTP response. |
| <code><a href="#cdk-vpclattice-alpha.DefaultListenerAction.property.forward">forward</a></code> | <code><a href="#cdk-vpclattice-alpha.WeightedTargetGroup">WeightedTargetGroup</a></code> | Forward to a target group. |

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="cdk-vpclattice-alpha.DefaultListenerAction.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: FixedResponse;
```

- *Type:* <a href="#cdk-vpclattice-alpha.FixedResponse">FixedResponse</a>
- *Default:* None

Drop client requests and return a custom HTTP response.

---

##### `forward`<sup>Optional</sup> <a name="forward" id="cdk-vpclattice-alpha.DefaultListenerAction.property.forward"></a>

```typescript
public readonly forward: WeightedTargetGroup;
```

- *Type:* <a href="#cdk-vpclattice-alpha.WeightedTargetGroup">WeightedTargetGroup</a>
- *Default:* None

Forward to a target group.

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
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.headername">headername</a></code> | <code>string</code> | The name of the header to match. |
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.matchOperator">matchOperator</a></code> | <code><a href="#cdk-vpclattice-alpha.MatchOperator">MatchOperator</a></code> | Type of match to make. |
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.matchValue">matchValue</a></code> | <code>string</code> | Value to match against. |
| <code><a href="#cdk-vpclattice-alpha.HeaderMatch.property.caseSensitive">caseSensitive</a></code> | <code>boolean</code> | Whether the match should be case sensitive or not. |

---

##### `headername`<sup>Required</sup> <a name="headername" id="cdk-vpclattice-alpha.HeaderMatch.property.headername"></a>

```typescript
public readonly headername: string;
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

### HTTPMatch <a name="HTTPMatch" id="cdk-vpclattice-alpha.HTTPMatch"></a>

An HTTPMatch for creating rules At least one of headermatch, method or patchmatches must be created.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.HTTPMatch.Initializer"></a>

```typescript
import { HTTPMatch } from 'cdk-vpclattice-alpha'

const hTTPMatch: HTTPMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HTTPMatch.property.headerMatches">headerMatches</a></code> | <code><a href="#cdk-vpclattice-alpha.HeaderMatch">HeaderMatch</a>[]</code> | Properties to Create A HeaderMatch. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMatch.property.method">method</a></code> | <code><a href="#cdk-vpclattice-alpha.HTTPMethods">HTTPMethods</a></code> | Method to match against. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMatch.property.pathMatches">pathMatches</a></code> | <code><a href="#cdk-vpclattice-alpha.PathMatch">PathMatch</a></code> | Properties to Create A PathMatch. |

---

##### `headerMatches`<sup>Optional</sup> <a name="headerMatches" id="cdk-vpclattice-alpha.HTTPMatch.property.headerMatches"></a>

```typescript
public readonly headerMatches: HeaderMatch[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.HeaderMatch">HeaderMatch</a>[]
- *Default:* No header match

Properties to Create A HeaderMatch.

---

##### `method`<sup>Optional</sup> <a name="method" id="cdk-vpclattice-alpha.HTTPMatch.property.method"></a>

```typescript
public readonly method: HTTPMethods;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HTTPMethods">HTTPMethods</a>
- *Default:* No header match

Method to match against.

---

##### `pathMatches`<sup>Optional</sup> <a name="pathMatches" id="cdk-vpclattice-alpha.HTTPMatch.property.pathMatches"></a>

```typescript
public readonly pathMatches: PathMatch;
```

- *Type:* <a href="#cdk-vpclattice-alpha.PathMatch">PathMatch</a>
- *Default:* No path match

Properties to Create A PathMatch.

---

### ListenerProps <a name="ListenerProps" id="cdk-vpclattice-alpha.ListenerProps"></a>

Propertys to Create a Lattice Listener.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.ListenerProps.Initializer"></a>

```typescript
import { ListenerProps } from 'cdk-vpclattice-alpha'

const listenerProps: ListenerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.service">service</a></code> | <code><a href="#cdk-vpclattice-alpha.Service">Service</a></code> | The Id of the service that this listener is associated with. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.defaultAction">defaultAction</a></code> | <code><a href="#cdk-vpclattice-alpha.DefaultListenerAction">DefaultListenerAction</a></code> | * A default action that will be taken if no rules match. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.name">name</a></code> | <code>string</code> | The Name of the service. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.port">port</a></code> | <code>number</code> | Optional port number for the listener. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.protocol">protocol</a></code> | <code><a href="#cdk-vpclattice-alpha.Protocol">Protocol</a></code> | protocol that the listener will listen on. |
| <code><a href="#cdk-vpclattice-alpha.ListenerProps.property.rules">rules</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleProp">RuleProp</a>[]</code> | rules for the listener. |

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.ListenerProps.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* <a href="#cdk-vpclattice-alpha.Service">Service</a>

The Id of the service that this listener is associated with.

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="cdk-vpclattice-alpha.ListenerProps.property.defaultAction"></a>

```typescript
public readonly defaultAction: DefaultListenerAction;
```

- *Type:* <a href="#cdk-vpclattice-alpha.DefaultListenerAction">DefaultListenerAction</a>
- *Default:* FixedResponse.NOT_FOUND

* A default action that will be taken if no rules match.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-vpclattice-alpha.ListenerProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* CloudFormation provided name.

The Name of the service.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-vpclattice-alpha.ListenerProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 80 or 443 depending on the Protocol

Optional port number for the listener.

If not supplied, will default to 80 or 443, depending on the Protocol.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="cdk-vpclattice-alpha.ListenerProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#cdk-vpclattice-alpha.Protocol">Protocol</a>
- *Default:* HTTPS

protocol that the listener will listen on.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="cdk-vpclattice-alpha.ListenerProps.property.rules"></a>

```typescript
public readonly rules: RuleProp[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleProp">RuleProp</a>[]

rules for the listener.

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

### RuleProp <a name="RuleProp" id="cdk-vpclattice-alpha.RuleProp"></a>

Properties to add rules to to a listener One of headerMatch, PathMatch, or methodMatch can be supplied, the Rule can not match multiple Types.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.RuleProp.Initializer"></a>

```typescript
import { RuleProp } from 'cdk-vpclattice-alpha'

const ruleProp: RuleProp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.RuleProp.property.action">action</a></code> | <code><a href="#cdk-vpclattice-alpha.FixedResponse">FixedResponse</a> \| <a href="#cdk-vpclattice-alpha.WeightedTargetGroup">WeightedTargetGroup</a>[]</code> | the action for the rule, is either a fixed Reponse, or a being sent to  Weighted TargetGroup. |
| <code><a href="#cdk-vpclattice-alpha.RuleProp.property.httpMatch">httpMatch</a></code> | <code><a href="#cdk-vpclattice-alpha.HTTPMatch">HTTPMatch</a></code> | the Matching criteria for the rule. |
| <code><a href="#cdk-vpclattice-alpha.RuleProp.property.name">name</a></code> | <code>string</code> | A name for the the Rule. |
| <code><a href="#cdk-vpclattice-alpha.RuleProp.property.accessMode">accessMode</a></code> | <code><a href="#cdk-vpclattice-alpha.RuleAccessMode">RuleAccessMode</a></code> | Set an access mode. |
| <code><a href="#cdk-vpclattice-alpha.RuleProp.property.allowedPrincipalArn">allowedPrincipalArn</a></code> | <code>string[]</code> | List of principalArns that are allowed to access the resource. |
| <code><a href="#cdk-vpclattice-alpha.RuleProp.property.allowedPrincipals">allowedPrincipals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | List of principals that are allowed to access the resource. |
| <code><a href="#cdk-vpclattice-alpha.RuleProp.property.priority">priority</a></code> | <code>number</code> | the priority of this rule, a lower priority will be processed first. |

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-vpclattice-alpha.RuleProp.property.action"></a>

```typescript
public readonly action: FixedResponse | WeightedTargetGroup[];
```

- *Type:* <a href="#cdk-vpclattice-alpha.FixedResponse">FixedResponse</a> | <a href="#cdk-vpclattice-alpha.WeightedTargetGroup">WeightedTargetGroup</a>[]

the action for the rule, is either a fixed Reponse, or a being sent to  Weighted TargetGroup.

---

##### `httpMatch`<sup>Required</sup> <a name="httpMatch" id="cdk-vpclattice-alpha.RuleProp.property.httpMatch"></a>

```typescript
public readonly httpMatch: HTTPMatch;
```

- *Type:* <a href="#cdk-vpclattice-alpha.HTTPMatch">HTTPMatch</a>

the Matching criteria for the rule.

This must contain at least one of
header, method or patchMatches

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.RuleProp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the the Rule.

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="cdk-vpclattice-alpha.RuleProp.property.accessMode"></a>

```typescript
public readonly accessMode: RuleAccessMode;
```

- *Type:* <a href="#cdk-vpclattice-alpha.RuleAccessMode">RuleAccessMode</a>
- *Default:* false

Set an access mode.

---

##### `allowedPrincipalArn`<sup>Optional</sup> <a name="allowedPrincipalArn" id="cdk-vpclattice-alpha.RuleProp.property.allowedPrincipalArn"></a>

```typescript
public readonly allowedPrincipalArn: string[];
```

- *Type:* string[]
- *Default:* none

List of principalArns that are allowed to access the resource.

---

##### `allowedPrincipals`<sup>Optional</sup> <a name="allowedPrincipals" id="cdk-vpclattice-alpha.RuleProp.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]
- *Default:* none

List of principals that are allowed to access the resource.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="cdk-vpclattice-alpha.RuleProp.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* 50

the priority of this rule, a lower priority will be processed first.

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

Properties for associating a VPC with a Service Network.

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

Properties for defining a VPC Lattice Service Network.

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
| <code><a href="#cdk-vpclattice-alpha.ServiceNetworkProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Where to send access logs. |
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
- *Default:* 'NONE'

The type of  authentication to use with the Service Network.

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

If not provided CloudFormation will provide a name

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

Properties for defining a VPC Lattice Service.

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
| <code><a href="#cdk-vpclattice-alpha.ServiceProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#cdk-vpclattice-alpha.LoggingDestination">LoggingDestination</a>[]</code> | Where to send access logs. |
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
| <code><a href="#cdk-vpclattice-alpha.ShareServiceNetworkProps.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | Whether external principals are allowed. |
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

Whether external principals are allowed.

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

### TargetGroupProps <a name="TargetGroupProps" id="cdk-vpclattice-alpha.TargetGroupProps"></a>

Properties for a Target Group, Only supply one of instancetargets, lambdaTargets, albTargets, ipTargets.

#### Initializer <a name="Initializer" id="cdk-vpclattice-alpha.TargetGroupProps.Initializer"></a>

```typescript
import { TargetGroupProps } from 'cdk-vpclattice-alpha'

const targetGroupProps: TargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#cdk-vpclattice-alpha.TargetGroupProps.property.target">target</a></code> | <code><a href="#cdk-vpclattice-alpha.ITarget">ITarget</a></code> | Targets. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-vpclattice-alpha.TargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `target`<sup>Required</sup> <a name="target" id="cdk-vpclattice-alpha.TargetGroupProps.property.target"></a>

```typescript
public readonly target: ITarget;
```

- *Type:* <a href="#cdk-vpclattice-alpha.ITarget">ITarget</a>

Targets.

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
| <code><a href="#cdk-vpclattice-alpha.WeightedTargetGroup.property.targetGroup">targetGroup</a></code> | <code><a href="#cdk-vpclattice-alpha.TargetGroup">TargetGroup</a></code> | A target Group. |
| <code><a href="#cdk-vpclattice-alpha.WeightedTargetGroup.property.weight">weight</a></code> | <code>number</code> | A weight for the target group. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="cdk-vpclattice-alpha.WeightedTargetGroup.property.targetGroup"></a>

```typescript
public readonly targetGroup: TargetGroup;
```

- *Type:* <a href="#cdk-vpclattice-alpha.TargetGroup">TargetGroup</a>

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
| <code><a href="#cdk-vpclattice-alpha.LoggingDestination.kinesis">kinesis</a></code> | Stream logs to Kinesis. |
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

Stream logs to Kinesis.

###### `stream`<sup>Required</sup> <a name="stream" id="cdk-vpclattice-alpha.LoggingDestination.kinesis.parameter.stream"></a>

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `s3` <a name="s3" id="cdk-vpclattice-alpha.LoggingDestination.s3"></a>

```typescript
import { LoggingDestination } from 'cdk-vpclattice-alpha'

LoggingDestination.s3(bucket: IBucket)
```

Send logs to Amazon S3.

###### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-vpclattice-alpha.LoggingDestination.s3.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

the S3 bucket where to send logs.

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

### IListener <a name="IListener" id="cdk-vpclattice-alpha.IListener"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.Listener">Listener</a>, <a href="#cdk-vpclattice-alpha.IListener">IListener</a>

Create a VPC Lattice Listener.

Implemented by `Listener`.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html)

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.IListener.addListenerRule">addListenerRule</a></code> | Add A Listener Rule to the Listener. |

---

##### `addListenerRule` <a name="addListenerRule" id="cdk-vpclattice-alpha.IListener.addListenerRule"></a>

```typescript
public addListenerRule(props: RuleProp): void
```

Add A Listener Rule to the Listener.

###### `props`<sup>Required</sup> <a name="props" id="cdk-vpclattice-alpha.IListener.addListenerRule.parameter.props"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.RuleProp">RuleProp</a>

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
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.addService">addService</a></code> | Add Lattice Service to the Service Network. |
| <code><a href="#cdk-vpclattice-alpha.IServiceNetwork.associateVPC">associateVPC</a></code> | Associate a VPC with the Service Network This provides an opinionated default of adding a security group to allow inbound 443. |

---

##### `addService` <a name="addService" id="cdk-vpclattice-alpha.IServiceNetwork.addService"></a>

```typescript
public addService(service: IService): void
```

Add Lattice Service to the Service Network.

###### `service`<sup>Required</sup> <a name="service" id="cdk-vpclattice-alpha.IServiceNetwork.addService.parameter.service"></a>

- *Type:* <a href="#cdk-vpclattice-alpha.IService">IService</a>

---

##### `associateVPC` <a name="associateVPC" id="cdk-vpclattice-alpha.IServiceNetwork.associateVPC"></a>

```typescript
public associateVPC(props: AssociateVPCProps): void
```

Associate a VPC with the Service Network This provides an opinionated default of adding a security group to allow inbound 443.

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

### ITarget <a name="ITarget" id="cdk-vpclattice-alpha.ITarget"></a>

- *Implemented By:* <a href="#cdk-vpclattice-alpha.ITarget">ITarget</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpclattice-alpha.ITarget.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetProperty[]</code> | References to the targets, ids or Arns. |
| <code><a href="#cdk-vpclattice-alpha.ITarget.property.type">type</a></code> | <code>string</code> | Target Type. |
| <code><a href="#cdk-vpclattice-alpha.ITarget.property.config">config</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty</code> | Configuration for the TargetGroup, if it is not a lambda. |

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-vpclattice-alpha.ITarget.property.targets"></a>

```typescript
public readonly targets: TargetProperty[];
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetProperty[]

References to the targets, ids or Arns.

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-vpclattice-alpha.ITarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Target Type.

---

##### `config`<sup>Optional</sup> <a name="config" id="cdk-vpclattice-alpha.ITarget.property.config"></a>

```typescript
public readonly config: TargetGroupConfigProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty

Configuration for the TargetGroup, if it is not a lambda.

---

### ITargetGroup <a name="ITargetGroup" id="cdk-vpclattice-alpha.ITargetGroup"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-vpclattice-alpha.TargetGroup">TargetGroup</a>, <a href="#cdk-vpclattice-alpha.ITargetGroup">ITargetGroup</a>

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


### FixedResponse <a name="FixedResponse" id="cdk-vpclattice-alpha.FixedResponse"></a>

This enum maps friendly names to respond codes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.FixedResponse.NOT_FOUND">NOT_FOUND</a></code> | Not Found 404. |
| <code><a href="#cdk-vpclattice-alpha.FixedResponse.OK">OK</a></code> | OK 200. |

---

##### `NOT_FOUND` <a name="NOT_FOUND" id="cdk-vpclattice-alpha.FixedResponse.NOT_FOUND"></a>

Not Found 404.

---


##### `OK` <a name="OK" id="cdk-vpclattice-alpha.FixedResponse.OK"></a>

OK 200.

---


### HTTPMethods <a name="HTTPMethods" id="cdk-vpclattice-alpha.HTTPMethods"></a>

HTTP Methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethods.GET">GET</a></code> | GET Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethods.POST">POST</a></code> | POST Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethods.PUT">PUT</a></code> | PUT Method. |
| <code><a href="#cdk-vpclattice-alpha.HTTPMethods.DELETE">DELETE</a></code> | Delete Method. |

---

##### `GET` <a name="GET" id="cdk-vpclattice-alpha.HTTPMethods.GET"></a>

GET Method.

---


##### `POST` <a name="POST" id="cdk-vpclattice-alpha.HTTPMethods.POST"></a>

POST Method.

---


##### `PUT` <a name="PUT" id="cdk-vpclattice-alpha.HTTPMethods.PUT"></a>

PUT Method.

---


##### `DELETE` <a name="DELETE" id="cdk-vpclattice-alpha.HTTPMethods.DELETE"></a>

Delete Method.

---


### MatchOperator <a name="MatchOperator" id="cdk-vpclattice-alpha.MatchOperator"></a>

Rule Contitions can leverage different operators for Matches.

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


### Protocol <a name="Protocol" id="cdk-vpclattice-alpha.Protocol"></a>

HTTP/HTTPS methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpclattice-alpha.Protocol.HTTP">HTTP</a></code> | HTTP Protocol. |
| <code><a href="#cdk-vpclattice-alpha.Protocol.HTTPS">HTTPS</a></code> | HTTPS Protocol. |

---

##### `HTTP` <a name="HTTP" id="cdk-vpclattice-alpha.Protocol.HTTP"></a>

HTTP Protocol.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/http-listeners.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/http-listeners.html)

---


##### `HTTPS` <a name="HTTPS" id="cdk-vpclattice-alpha.Protocol.HTTPS"></a>

HTTPS Protocol.

> [https://docs.aws.amazon.com/vpc-lattice/latest/ug/https-listeners.html](https://docs.aws.amazon.com/vpc-lattice/latest/ug/https-listeners.html)

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

AccesModes for the Service Network.

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

