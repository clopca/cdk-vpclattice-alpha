# aws-vpclattice-prealpha

# vpcLattice L2 Construct

- [Project Information](#project-information)
- [Example Impleentation](#example-implementation)
- [API Design](#proposed-api-design-for-vpclattice)
- [FAQ](#faq)
- [Acceptance](#acceptance)


---
## Project Information

**Status** (DRAFT)

**Original Author(s):** @mrpackethead, , @taylaand,  @nbaillie

**Tracking Issue:** #502

**API Bar Raiser:** @TheRealAmazonKendra

**Public Issues ( aws-cdk)**
* (vpclattice): L2 for Amazon VPC Lattice #25452


**Prototype Code**
- https://github.com/raindancers/aws-cdk/tree/mrpackethead/aws-vpclattice-alpha/packages/%40aws-cdk/aws-vpclattice-alpha

**Example implementation**
- https://github.com/raindancers/vpclattice-prealpha-demo

**Blog**

**VpcLattice**

Amazon VPC Lattice is an application networking service that consistently connects, monitors, and secures communications between your services, helping to improve productivity so that your developers can focus on building features that matter to your business. You can define policies for network traffic management, access, and monitoring to connect compute services in a simplified and consistent way across instances, containers, and serverless applications.

The L2 Construct seeks to assist the consumer to create a lattice service easily by abstracting some of the detail.  The major part of this is in creating the underlying auth policy and listener rules together, as their is significant intersection in the properties require for both.


# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssociateVpc <a name="AssociateVpc" id="aws-vpclattice-prealpha.AssociateVpc"></a>

Associate a VPO with Lattice Service Network.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.AssociateVpc.Initializer"></a>

```typescript
import { AssociateVpc } from 'aws-vpclattice-prealpha'

new AssociateVpc(scope: Construct, id: string, props: AssociateVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.Initializer.parameter.props">props</a></code> | <code><a href="#aws-vpclattice-prealpha.AssociateVpcProps">AssociateVpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.AssociateVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.AssociateVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.AssociateVpc.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AssociateVpcProps">AssociateVpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-vpclattice-prealpha.AssociateVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-vpclattice-prealpha.AssociateVpc.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-vpclattice-prealpha.AssociateVpc.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-vpclattice-prealpha.AssociateVpc.isConstruct"></a>

```typescript
import { AssociateVpc } from 'aws-vpclattice-prealpha'

AssociateVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-vpclattice-prealpha.AssociateVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-vpclattice-prealpha.AssociateVpc.isOwnedResource"></a>

```typescript
import { AssociateVpc } from 'aws-vpclattice-prealpha'

AssociateVpc.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.AssociateVpc.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-vpclattice-prealpha.AssociateVpc.isResource"></a>

```typescript
import { AssociateVpc } from 'aws-vpclattice-prealpha'

AssociateVpc.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.AssociateVpc.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpc.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.AssociateVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.AssociateVpc.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.AssociateVpc.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### Listener <a name="Listener" id="aws-vpclattice-prealpha.Listener"></a>

- *Implements:* <a href="#aws-vpclattice-prealpha.IListener">IListener</a>

This class should not be called directly.

Use the .addListener() Method on an instance of LatticeService
Creates a vpcLattice Listener

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.Listener.Initializer"></a>

```typescript
import { Listener } from 'aws-vpclattice-prealpha'

new Listener(scope: Construct, id: string, props: ListenerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Listener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.Listener.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.Listener.Initializer.parameter.props">props</a></code> | <code><a href="#aws-vpclattice-prealpha.ListenerProps">ListenerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.Listener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.Listener.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.Listener.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ListenerProps">ListenerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Listener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-vpclattice-prealpha.Listener.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-vpclattice-prealpha.Listener.addListenerRule">addListenerRule</a></code> | add a rule to the listener. |

---

##### `toString` <a name="toString" id="aws-vpclattice-prealpha.Listener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-vpclattice-prealpha.Listener.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-vpclattice-prealpha.Listener.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addListenerRule` <a name="addListenerRule" id="aws-vpclattice-prealpha.Listener.addListenerRule"></a>

```typescript
public addListenerRule(props: AddRuleProps): void
```

add a rule to the listener.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.Listener.addListenerRule.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AddRuleProps">AddRuleProps</a>

AddRuleProps.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Listener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-vpclattice-prealpha.Listener.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-vpclattice-prealpha.Listener.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-vpclattice-prealpha.Listener.isConstruct"></a>

```typescript
import { Listener } from 'aws-vpclattice-prealpha'

Listener.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-vpclattice-prealpha.Listener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-vpclattice-prealpha.Listener.isOwnedResource"></a>

```typescript
import { Listener } from 'aws-vpclattice-prealpha'

Listener.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.Listener.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-vpclattice-prealpha.Listener.isResource"></a>

```typescript
import { Listener } from 'aws-vpclattice-prealpha'

Listener.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.Listener.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Listener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.Listener.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.Listener.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.Listener.property.listenerArn">listenerArn</a></code> | <code>string</code> | THe Arn of the Listener. |
| <code><a href="#aws-vpclattice-prealpha.Listener.property.listenerId">listenerId</a></code> | <code>string</code> | The Id of the Listener. |
| <code><a href="#aws-vpclattice-prealpha.Listener.property.listenerPrioritys">listenerPrioritys</a></code> | <code>number[]</code> | A list of prioritys, to check for duplicates. |
| <code><a href="#aws-vpclattice-prealpha.Listener.property.service">service</a></code> | <code><a href="#aws-vpclattice-prealpha.IService">IService</a></code> | The service this listener is attached to. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.Listener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.Listener.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.Listener.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="aws-vpclattice-prealpha.Listener.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

THe Arn of the Listener.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="aws-vpclattice-prealpha.Listener.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The Id of the Listener.

---

##### `listenerPrioritys`<sup>Required</sup> <a name="listenerPrioritys" id="aws-vpclattice-prealpha.Listener.property.listenerPrioritys"></a>

```typescript
public readonly listenerPrioritys: number[];
```

- *Type:* number[]

A list of prioritys, to check for duplicates.

---

##### `service`<sup>Required</sup> <a name="service" id="aws-vpclattice-prealpha.Listener.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* <a href="#aws-vpclattice-prealpha.IService">IService</a>

The service this listener is attached to.

---


### Service <a name="Service" id="aws-vpclattice-prealpha.Service"></a>

- *Implements:* <a href="#aws-vpclattice-prealpha.IService">IService</a>

Create a vpcLattice Service.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.Service.Initializer"></a>

```typescript
import { Service } from 'aws-vpclattice-prealpha'

new Service(scope: Construct, id: string, props: ServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.Service.Initializer.parameter.props">props</a></code> | <code><a href="#aws-vpclattice-prealpha.ServiceProps">ServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.Service.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.Service.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ServiceProps">ServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-vpclattice-prealpha.Service.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-vpclattice-prealpha.Service.addPolicyStatement">addPolicyStatement</a></code> | Add a PolicyStatement. |
| <code><a href="#aws-vpclattice-prealpha.Service.applyAuthPolicy">applyAuthPolicy</a></code> | apply an authpolicy. |
| <code><a href="#aws-vpclattice-prealpha.Service.associateWithServiceNetwork">associateWithServiceNetwork</a></code> | Associate with a Service Network. |
| <code><a href="#aws-vpclattice-prealpha.Service.grantAccess">grantAccess</a></code> | .grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granual permissions at the rule level. |
| <code><a href="#aws-vpclattice-prealpha.Service.shareToAccounts">shareToAccounts</a></code> | Share the service to other accounts via RAM. |

---

##### `toString` <a name="toString" id="aws-vpclattice-prealpha.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-vpclattice-prealpha.Service.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-vpclattice-prealpha.Service.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPolicyStatement` <a name="addPolicyStatement" id="aws-vpclattice-prealpha.Service.addPolicyStatement"></a>

```typescript
public addPolicyStatement(statement: PolicyStatement): void
```

Add a PolicyStatement.

###### `statement`<sup>Required</sup> <a name="statement" id="aws-vpclattice-prealpha.Service.addPolicyStatement.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `applyAuthPolicy` <a name="applyAuthPolicy" id="aws-vpclattice-prealpha.Service.applyAuthPolicy"></a>

```typescript
public applyAuthPolicy(): PolicyDocument
```

apply an authpolicy.

##### `associateWithServiceNetwork` <a name="associateWithServiceNetwork" id="aws-vpclattice-prealpha.Service.associateWithServiceNetwork"></a>

```typescript
public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void
```

Associate with a Service Network.

###### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="aws-vpclattice-prealpha.Service.associateWithServiceNetwork.parameter.serviceNetwork"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a>

---

##### `grantAccess` <a name="grantAccess" id="aws-vpclattice-prealpha.Service.grantAccess"></a>

```typescript
public grantAccess(principals: IPrincipal[]): void
```

.grantAccess on a lattice service, will permit the principals to access all of the service. Consider using more granual permissions at the rule level.

###### `principals`<sup>Required</sup> <a name="principals" id="aws-vpclattice-prealpha.Service.grantAccess.parameter.principals"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]

---

##### `shareToAccounts` <a name="shareToAccounts" id="aws-vpclattice-prealpha.Service.shareToAccounts"></a>

```typescript
public shareToAccounts(props: ShareServiceProps): void
```

Share the service to other accounts via RAM.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.Service.shareToAccounts.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ShareServiceProps">ShareServiceProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-vpclattice-prealpha.Service.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-vpclattice-prealpha.Service.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-vpclattice-prealpha.Service.fromId">fromId</a></code> | import a service from Id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-vpclattice-prealpha.Service.isConstruct"></a>

```typescript
import { Service } from 'aws-vpclattice-prealpha'

Service.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-vpclattice-prealpha.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-vpclattice-prealpha.Service.isOwnedResource"></a>

```typescript
import { Service } from 'aws-vpclattice-prealpha'

Service.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.Service.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-vpclattice-prealpha.Service.isResource"></a>

```typescript
import { Service } from 'aws-vpclattice-prealpha'

Service.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.Service.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromId` <a name="fromId" id="aws-vpclattice-prealpha.Service.fromId"></a>

```typescript
import { Service } from 'aws-vpclattice-prealpha'

Service.fromId(scope: Construct, id: string, serviceId: string)
```

import a service from Id.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.Service.fromId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.Service.fromId.parameter.id"></a>

- *Type:* string

---

###### `serviceId`<sup>Required</sup> <a name="serviceId" id="aws-vpclattice-prealpha.Service.fromId.parameter.serviceId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.imported">imported</a></code> | <code>boolean</code> | Imported. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.serviceArn">serviceArn</a></code> | <code>string</code> | The Arn of the Service. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.serviceId">serviceId</a></code> | <code>string</code> | The Id of the Service. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.orgId">orgId</a></code> | <code>string</code> | the discovered OrgId. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The auth Policy for the service. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.authType">authType</a></code> | <code>string</code> | The authType of the service. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.Certificate</code> | A certificate that may be used by the service. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.customDomain">customDomain</a></code> | <code>string</code> | A custom Domain used by the service. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.dnsEntry">dnsEntry</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty</code> | A DNS Entry for the service. |
| <code><a href="#aws-vpclattice-prealpha.Service.property.name">name</a></code> | <code>string</code> | A name for the service. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.Service.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.Service.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `imported`<sup>Required</sup> <a name="imported" id="aws-vpclattice-prealpha.Service.property.imported"></a>

```typescript
public readonly imported: boolean;
```

- *Type:* boolean

Imported.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="aws-vpclattice-prealpha.Service.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

The Arn of the Service.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="aws-vpclattice-prealpha.Service.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The Id of the Service.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="aws-vpclattice-prealpha.Service.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

the discovered OrgId.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="aws-vpclattice-prealpha.Service.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The auth Policy for the service.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="aws-vpclattice-prealpha.Service.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authType of the service.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="aws-vpclattice-prealpha.Service.property.certificate"></a>

```typescript
public readonly certificate: Certificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.Certificate

A certificate that may be used by the service.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="aws-vpclattice-prealpha.Service.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

A custom Domain used by the service.

---

##### `dnsEntry`<sup>Optional</sup> <a name="dnsEntry" id="aws-vpclattice-prealpha.Service.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DnsEntryProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty

A DNS Entry for the service.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-vpclattice-prealpha.Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the service.

---


### ServiceAssociation <a name="ServiceAssociation" id="aws-vpclattice-prealpha.ServiceAssociation"></a>

Creates an Association Between a Lattice Service and a Service Network.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.ServiceAssociation.Initializer"></a>

```typescript
import { ServiceAssociation } from 'aws-vpclattice-prealpha'

new ServiceAssociation(scope: Construct, id: string, props: ServiceAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#aws-vpclattice-prealpha.ServiceAssociationProps">ServiceAssociationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.ServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.ServiceAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ServiceAssociationProps">ServiceAssociationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-vpclattice-prealpha.ServiceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-vpclattice-prealpha.ServiceAssociation.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-vpclattice-prealpha.ServiceAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-vpclattice-prealpha.ServiceAssociation.isConstruct"></a>

```typescript
import { ServiceAssociation } from 'aws-vpclattice-prealpha'

ServiceAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-vpclattice-prealpha.ServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-vpclattice-prealpha.ServiceAssociation.isOwnedResource"></a>

```typescript
import { ServiceAssociation } from 'aws-vpclattice-prealpha'

ServiceAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.ServiceAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-vpclattice-prealpha.ServiceAssociation.isResource"></a>

```typescript
import { ServiceAssociation } from 'aws-vpclattice-prealpha'

ServiceAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.ServiceAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.ServiceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.ServiceAssociation.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.ServiceAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### ServiceNetwork <a name="ServiceNetwork" id="aws-vpclattice-prealpha.ServiceNetwork"></a>

- *Implements:* <a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a>

Create a vpcLattice Service Network.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.ServiceNetwork.Initializer"></a>

```typescript
import { ServiceNetwork } from 'aws-vpclattice-prealpha'

new ServiceNetwork(scope: Construct, id: string, props: ServiceNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.Initializer.parameter.props">props</a></code> | <code><a href="#aws-vpclattice-prealpha.ServiceNetworkProps">ServiceNetworkProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.ServiceNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.ServiceNetwork.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceNetwork.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ServiceNetworkProps">ServiceNetworkProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.addloggingDestination">addloggingDestination</a></code> | send logs to a destination. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.addService">addService</a></code> | Add A lattice service to a lattice network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.addStatementToAuthPolicy">addStatementToAuthPolicy</a></code> | This will give the principals access to all resources that are on this service network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.applyAuthPolicyToServiceNetwork">applyAuthPolicyToServiceNetwork</a></code> | Apply the AuthPolicy to a Service Network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.associateVPC">associateVPC</a></code> | Associate a VPC with the Service Network This provides an opinionated default of adding a security group to allow inbound 443. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.share">share</a></code> | Share the The Service network using RAM. |

---

##### `toString` <a name="toString" id="aws-vpclattice-prealpha.ServiceNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-vpclattice-prealpha.ServiceNetwork.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-vpclattice-prealpha.ServiceNetwork.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addloggingDestination` <a name="addloggingDestination" id="aws-vpclattice-prealpha.ServiceNetwork.addloggingDestination"></a>

```typescript
public addloggingDestination(props: AddloggingDestinationProps): void
```

send logs to a destination.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceNetwork.addloggingDestination.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AddloggingDestinationProps">AddloggingDestinationProps</a>

---

##### `addService` <a name="addService" id="aws-vpclattice-prealpha.ServiceNetwork.addService"></a>

```typescript
public addService(props: AddServiceProps): void
```

Add A lattice service to a lattice network.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceNetwork.addService.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AddServiceProps">AddServiceProps</a>

---

##### `addStatementToAuthPolicy` <a name="addStatementToAuthPolicy" id="aws-vpclattice-prealpha.ServiceNetwork.addStatementToAuthPolicy"></a>

```typescript
public addStatementToAuthPolicy(statement: PolicyStatement): void
```

This will give the principals access to all resources that are on this service network.

This is a broad permission.
Consider granting Access at the Service
addToResourcePolicy()

###### `statement`<sup>Required</sup> <a name="statement" id="aws-vpclattice-prealpha.ServiceNetwork.addStatementToAuthPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `applyAuthPolicyToServiceNetwork` <a name="applyAuthPolicyToServiceNetwork" id="aws-vpclattice-prealpha.ServiceNetwork.applyAuthPolicyToServiceNetwork"></a>

```typescript
public applyAuthPolicyToServiceNetwork(): void
```

Apply the AuthPolicy to a Service Network.

##### `associateVPC` <a name="associateVPC" id="aws-vpclattice-prealpha.ServiceNetwork.associateVPC"></a>

```typescript
public associateVPC(props: AssociateVPCProps): void
```

Associate a VPC with the Service Network This provides an opinionated default of adding a security group to allow inbound 443.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceNetwork.associateVPC.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AssociateVPCProps">AssociateVPCProps</a>

---

##### `share` <a name="share" id="aws-vpclattice-prealpha.ServiceNetwork.share"></a>

```typescript
public share(props: ShareServiceNetworkProps): void
```

Share the The Service network using RAM.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceNetwork.share.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps">ShareServiceNetworkProps</a>

ShareServiceNetwork.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.fromId">fromId</a></code> | Import a Service Network by Id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-vpclattice-prealpha.ServiceNetwork.isConstruct"></a>

```typescript
import { ServiceNetwork } from 'aws-vpclattice-prealpha'

ServiceNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-vpclattice-prealpha.ServiceNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-vpclattice-prealpha.ServiceNetwork.isOwnedResource"></a>

```typescript
import { ServiceNetwork } from 'aws-vpclattice-prealpha'

ServiceNetwork.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.ServiceNetwork.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-vpclattice-prealpha.ServiceNetwork.isResource"></a>

```typescript
import { ServiceNetwork } from 'aws-vpclattice-prealpha'

ServiceNetwork.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.ServiceNetwork.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromId` <a name="fromId" id="aws-vpclattice-prealpha.ServiceNetwork.fromId"></a>

```typescript
import { ServiceNetwork } from 'aws-vpclattice-prealpha'

ServiceNetwork.fromId(scope: Construct, id: string, props: ImportedServiceNetworkProps)
```

Import a Service Network by Id.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.ServiceNetwork.fromId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.ServiceNetwork.fromId.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceNetwork.fromId.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ImportedServiceNetworkProps">ImportedServiceNetworkProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.imported">imported</a></code> | <code>boolean</code> | imported. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.name">name</a></code> | <code>string</code> | Name of the ServiceNetwork. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Arn of the service network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Id of the Service Network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | A managed Policy that is the auth policy. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetwork.property.authType">authType</a></code> | <code><a href="#aws-vpclattice-prealpha.AuthType">AuthType</a></code> | the authType of the service network. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.ServiceNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.ServiceNetwork.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.ServiceNetwork.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `imported`<sup>Required</sup> <a name="imported" id="aws-vpclattice-prealpha.ServiceNetwork.property.imported"></a>

```typescript
public readonly imported: boolean;
```

- *Type:* boolean

imported.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-vpclattice-prealpha.ServiceNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ServiceNetwork.

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="aws-vpclattice-prealpha.ServiceNetwork.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

The Arn of the service network.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="aws-vpclattice-prealpha.ServiceNetwork.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The Id of the Service Network.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="aws-vpclattice-prealpha.ServiceNetwork.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

A managed Policy that is the auth policy.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="aws-vpclattice-prealpha.ServiceNetwork.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#aws-vpclattice-prealpha.AuthType">AuthType</a>

the authType of the service network.

---


### ServiceNetworkAssociation <a name="ServiceNetworkAssociation" id="aws-vpclattice-prealpha.ServiceNetworkAssociation"></a>

Creates an Association Between a Lattice Service and a Service Network.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.Initializer"></a>

```typescript
import { ServiceNetworkAssociation } from 'aws-vpclattice-prealpha'

new ServiceNetworkAssociation(scope: Construct, id: string, props: ServiceNetworkAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociationProps">ServiceNetworkAssociationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.ServiceNetworkAssociationProps">ServiceNetworkAssociationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.isConstruct"></a>

```typescript
import { ServiceNetworkAssociation } from 'aws-vpclattice-prealpha'

ServiceNetworkAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.isOwnedResource"></a>

```typescript
import { ServiceNetworkAssociation } from 'aws-vpclattice-prealpha'

ServiceNetworkAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.isResource"></a>

```typescript
import { ServiceNetworkAssociation } from 'aws-vpclattice-prealpha'

ServiceNetworkAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.ServiceNetworkAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### TargetGroup <a name="TargetGroup" id="aws-vpclattice-prealpha.TargetGroup"></a>

- *Implements:* <a href="#aws-vpclattice-prealpha.ITargetGroup">ITargetGroup</a>

Create a vpc lattice TargetGroup.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.TargetGroup.Initializer"></a>

```typescript
import { TargetGroup } from 'aws-vpclattice-prealpha'

new TargetGroup(scope: Construct, id: string, props: TargetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.Initializer.parameter.props">props</a></code> | <code><a href="#aws-vpclattice-prealpha.TargetGroupProps">TargetGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-vpclattice-prealpha.TargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-vpclattice-prealpha.TargetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.TargetGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.TargetGroupProps">TargetGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-vpclattice-prealpha.TargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-vpclattice-prealpha.TargetGroup.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-vpclattice-prealpha.TargetGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-vpclattice-prealpha.TargetGroup.isConstruct"></a>

```typescript
import { TargetGroup } from 'aws-vpclattice-prealpha'

TargetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-vpclattice-prealpha.TargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-vpclattice-prealpha.TargetGroup.isOwnedResource"></a>

```typescript
import { TargetGroup } from 'aws-vpclattice-prealpha'

TargetGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.TargetGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-vpclattice-prealpha.TargetGroup.isResource"></a>

```typescript
import { TargetGroup } from 'aws-vpclattice-prealpha'

TargetGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-vpclattice-prealpha.TargetGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the targetGroup. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.TargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.TargetGroup.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.TargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="aws-vpclattice-prealpha.TargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Arn of the targetGroup.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="aws-vpclattice-prealpha.TargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---


## Structs <a name="Structs" id="Structs"></a>

### AddloggingDestinationProps <a name="AddloggingDestinationProps" id="aws-vpclattice-prealpha.AddloggingDestinationProps"></a>

Properties to add a logging Destination.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.AddloggingDestinationProps.Initializer"></a>

```typescript
import { AddloggingDestinationProps } from 'aws-vpclattice-prealpha'

const addloggingDestinationProps: AddloggingDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AddloggingDestinationProps.property.destination">destination</a></code> | <code><a href="#aws-vpclattice-prealpha.LoggingDestination">LoggingDestination</a></code> | The logging destination. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="aws-vpclattice-prealpha.AddloggingDestinationProps.property.destination"></a>

```typescript
public readonly destination: LoggingDestination;
```

- *Type:* <a href="#aws-vpclattice-prealpha.LoggingDestination">LoggingDestination</a>

The logging destination.

---

### AddRuleProps <a name="AddRuleProps" id="aws-vpclattice-prealpha.AddRuleProps"></a>

Properties to add rules to to a listener One of headerMatch, PathMatch, or methodMatch can be supplied, the Rule can not match multiple Types.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.AddRuleProps.Initializer"></a>

```typescript
import { AddRuleProps } from 'aws-vpclattice-prealpha'

const addRuleProps: AddRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AddRuleProps.property.action">action</a></code> | <code><a href="#aws-vpclattice-prealpha.FixedResponse">FixedResponse</a> \| <a href="#aws-vpclattice-prealpha.WeightedTargetGroup">WeightedTargetGroup</a>[]</code> | the action for the rule, is either a fixed Reponse, or a being sent to  Weighted TargetGroup. |
| <code><a href="#aws-vpclattice-prealpha.AddRuleProps.property.httpMatch">httpMatch</a></code> | <code><a href="#aws-vpclattice-prealpha.HTTPMatch">HTTPMatch</a></code> | the Matching criteria for the rule. |
| <code><a href="#aws-vpclattice-prealpha.AddRuleProps.property.name">name</a></code> | <code>string</code> | A name for the the Rule. |
| <code><a href="#aws-vpclattice-prealpha.AddRuleProps.property.accessMode">accessMode</a></code> | <code><a href="#aws-vpclattice-prealpha.RuleAccessMode">RuleAccessMode</a></code> | Set an access mode. |
| <code><a href="#aws-vpclattice-prealpha.AddRuleProps.property.allowedPrincipalArn">allowedPrincipalArn</a></code> | <code>string[]</code> | List of principalArns that are allowed to access the resource. |
| <code><a href="#aws-vpclattice-prealpha.AddRuleProps.property.allowedPrincipals">allowedPrincipals</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal[]</code> | List of principals that are allowed to access the resource. |
| <code><a href="#aws-vpclattice-prealpha.AddRuleProps.property.priority">priority</a></code> | <code>number</code> | the priority of this rule, a lower priority will be processed first. |

---

##### `action`<sup>Required</sup> <a name="action" id="aws-vpclattice-prealpha.AddRuleProps.property.action"></a>

```typescript
public readonly action: FixedResponse | WeightedTargetGroup[];
```

- *Type:* <a href="#aws-vpclattice-prealpha.FixedResponse">FixedResponse</a> | <a href="#aws-vpclattice-prealpha.WeightedTargetGroup">WeightedTargetGroup</a>[]

the action for the rule, is either a fixed Reponse, or a being sent to  Weighted TargetGroup.

---

##### `httpMatch`<sup>Required</sup> <a name="httpMatch" id="aws-vpclattice-prealpha.AddRuleProps.property.httpMatch"></a>

```typescript
public readonly httpMatch: HTTPMatch;
```

- *Type:* <a href="#aws-vpclattice-prealpha.HTTPMatch">HTTPMatch</a>

the Matching criteria for the rule.

This must contain at least one of
header, method or patchMatches

---

##### `name`<sup>Required</sup> <a name="name" id="aws-vpclattice-prealpha.AddRuleProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the the Rule.

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="aws-vpclattice-prealpha.AddRuleProps.property.accessMode"></a>

```typescript
public readonly accessMode: RuleAccessMode;
```

- *Type:* <a href="#aws-vpclattice-prealpha.RuleAccessMode">RuleAccessMode</a>
- *Default:* false

Set an access mode.

---

##### `allowedPrincipalArn`<sup>Optional</sup> <a name="allowedPrincipalArn" id="aws-vpclattice-prealpha.AddRuleProps.property.allowedPrincipalArn"></a>

```typescript
public readonly allowedPrincipalArn: string[];
```

- *Type:* string[]
- *Default:* none

List of principalArns that are allowed to access the resource.

---

##### `allowedPrincipals`<sup>Optional</sup> <a name="allowedPrincipals" id="aws-vpclattice-prealpha.AddRuleProps.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: IPrincipal[];
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal[]
- *Default:* none

List of principals that are allowed to access the resource.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="aws-vpclattice-prealpha.AddRuleProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* 50

the priority of this rule, a lower priority will be processed first.

---

### AddServiceProps <a name="AddServiceProps" id="aws-vpclattice-prealpha.AddServiceProps"></a>

Properties to add a Service to a Service Network.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.AddServiceProps.Initializer"></a>

```typescript
import { AddServiceProps } from 'aws-vpclattice-prealpha'

const addServiceProps: AddServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AddServiceProps.property.service">service</a></code> | <code><a href="#aws-vpclattice-prealpha.IService">IService</a></code> | The Service to add to the Service Network. |
| <code><a href="#aws-vpclattice-prealpha.AddServiceProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Service Network to add the Service to. |

---

##### `service`<sup>Required</sup> <a name="service" id="aws-vpclattice-prealpha.AddServiceProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* <a href="#aws-vpclattice-prealpha.IService">IService</a>

The Service to add to the Service Network.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="aws-vpclattice-prealpha.AddServiceProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The Service Network to add the Service to.

---

### AssociateVpcProps <a name="AssociateVpcProps" id="aws-vpclattice-prealpha.AssociateVpcProps"></a>

Props to Associate a VPC with a Service Network.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.AssociateVpcProps.Initializer"></a>

```typescript
import { AssociateVpcProps } from 'aws-vpclattice-prealpha'

const associateVpcProps: AssociateVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpcProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | Service Network Identifier. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpcProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to associate with. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVpcProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | security groups for the lattice endpoint. |

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="aws-vpclattice-prealpha.AssociateVpcProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

Service Network Identifier.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-vpclattice-prealpha.AssociateVpcProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to associate with.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="aws-vpclattice-prealpha.AssociateVpcProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* a security group that will permit inbound 443

security groups for the lattice endpoint.

---

### AssociateVPCProps <a name="AssociateVPCProps" id="aws-vpclattice-prealpha.AssociateVPCProps"></a>

Properties to associate a VPC with a Service Network.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.AssociateVPCProps.Initializer"></a>

```typescript
import { AssociateVPCProps } from 'aws-vpclattice-prealpha'

const associateVPCProps: AssociateVPCProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AssociateVPCProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to associate with the Service Network. |
| <code><a href="#aws-vpclattice-prealpha.AssociateVPCProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup[]</code> | The security groups to associate with the Service Network. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-vpclattice-prealpha.AssociateVPCProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to associate with the Service Network.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="aws-vpclattice-prealpha.AssociateVPCProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: SecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup[]
- *Default:* a security group that allows inbound 443 will be permitted.

The security groups to associate with the Service Network.

---

### HeaderMatch <a name="HeaderMatch" id="aws-vpclattice-prealpha.HeaderMatch"></a>

Header Matches for creating rules.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.HeaderMatch.Initializer"></a>

```typescript
import { HeaderMatch } from 'aws-vpclattice-prealpha'

const headerMatch: HeaderMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.HeaderMatch.property.headername">headername</a></code> | <code>string</code> | the name of the header to match. |
| <code><a href="#aws-vpclattice-prealpha.HeaderMatch.property.matchOperator">matchOperator</a></code> | <code><a href="#aws-vpclattice-prealpha.MatchOperator">MatchOperator</a></code> | Type of match to make. |
| <code><a href="#aws-vpclattice-prealpha.HeaderMatch.property.matchValue">matchValue</a></code> | <code>string</code> | Value to match against. |
| <code><a href="#aws-vpclattice-prealpha.HeaderMatch.property.caseSensitive">caseSensitive</a></code> | <code>boolean</code> | Should the match be case sensitive? |

---

##### `headername`<sup>Required</sup> <a name="headername" id="aws-vpclattice-prealpha.HeaderMatch.property.headername"></a>

```typescript
public readonly headername: string;
```

- *Type:* string

the name of the header to match.

---

##### `matchOperator`<sup>Required</sup> <a name="matchOperator" id="aws-vpclattice-prealpha.HeaderMatch.property.matchOperator"></a>

```typescript
public readonly matchOperator: MatchOperator;
```

- *Type:* <a href="#aws-vpclattice-prealpha.MatchOperator">MatchOperator</a>

Type of match to make.

---

##### `matchValue`<sup>Required</sup> <a name="matchValue" id="aws-vpclattice-prealpha.HeaderMatch.property.matchValue"></a>

```typescript
public readonly matchValue: string;
```

- *Type:* string

Value to match against.

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="aws-vpclattice-prealpha.HeaderMatch.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean;
```

- *Type:* boolean
- *Default:* true

Should the match be case sensitive?

---

### HTTPMatch <a name="HTTPMatch" id="aws-vpclattice-prealpha.HTTPMatch"></a>

An HTTPMatch for creating rules At least one of headermatch, method or patchmatches must be created.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.HTTPMatch.Initializer"></a>

```typescript
import { HTTPMatch } from 'aws-vpclattice-prealpha'

const hTTPMatch: HTTPMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.HTTPMatch.property.headerMatches">headerMatches</a></code> | <code><a href="#aws-vpclattice-prealpha.HeaderMatch">HeaderMatch</a>[]</code> | Properties to Create A HeaderMatch. |
| <code><a href="#aws-vpclattice-prealpha.HTTPMatch.property.method">method</a></code> | <code><a href="#aws-vpclattice-prealpha.HTTPMethods">HTTPMethods</a></code> | Method to match against. |
| <code><a href="#aws-vpclattice-prealpha.HTTPMatch.property.pathMatches">pathMatches</a></code> | <code><a href="#aws-vpclattice-prealpha.PathMatch">PathMatch</a></code> | Properties to Create A PathMatch. |

---

##### `headerMatches`<sup>Optional</sup> <a name="headerMatches" id="aws-vpclattice-prealpha.HTTPMatch.property.headerMatches"></a>

```typescript
public readonly headerMatches: HeaderMatch[];
```

- *Type:* <a href="#aws-vpclattice-prealpha.HeaderMatch">HeaderMatch</a>[]
- *Default:* no header match

Properties to Create A HeaderMatch.

---

##### `method`<sup>Optional</sup> <a name="method" id="aws-vpclattice-prealpha.HTTPMatch.property.method"></a>

```typescript
public readonly method: HTTPMethods;
```

- *Type:* <a href="#aws-vpclattice-prealpha.HTTPMethods">HTTPMethods</a>
- *Default:* no header match

Method to match against.

---

##### `pathMatches`<sup>Optional</sup> <a name="pathMatches" id="aws-vpclattice-prealpha.HTTPMatch.property.pathMatches"></a>

```typescript
public readonly pathMatches: PathMatch;
```

- *Type:* <a href="#aws-vpclattice-prealpha.PathMatch">PathMatch</a>
- *Default:* no path match

Properties to Create A PathMatch.

---

### ImportedServiceNetworkProps <a name="ImportedServiceNetworkProps" id="aws-vpclattice-prealpha.ImportedServiceNetworkProps"></a>

Props for ImportedSearch.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ImportedServiceNetworkProps.Initializer"></a>

```typescript
import { ImportedServiceNetworkProps } from 'aws-vpclattice-prealpha'

const importedServiceNetworkProps: ImportedServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ImportedServiceNetworkProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | Import by Id. |
| <code><a href="#aws-vpclattice-prealpha.ImportedServiceNetworkProps.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | Import by Name. |

---

##### `serviceNetworkId`<sup>Optional</sup> <a name="serviceNetworkId" id="aws-vpclattice-prealpha.ImportedServiceNetworkProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string
- *Default:* No Search by Id

Import by Id.

---

##### `serviceNetworkName`<sup>Optional</sup> <a name="serviceNetworkName" id="aws-vpclattice-prealpha.ImportedServiceNetworkProps.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string
- *Default:* No search By Name

Import by Name.

---

### ListenerProps <a name="ListenerProps" id="aws-vpclattice-prealpha.ListenerProps"></a>

Propertys to Create a Lattice Listener.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ListenerProps.Initializer"></a>

```typescript
import { ListenerProps } from 'aws-vpclattice-prealpha'

const listenerProps: ListenerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ListenerProps.property.service">service</a></code> | <code><a href="#aws-vpclattice-prealpha.IService">IService</a></code> | The Id of the service that this listener is associated with. |
| <code><a href="#aws-vpclattice-prealpha.ListenerProps.property.defaultAction">defaultAction</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnListener.DefaultActionProperty</code> | * A default action that will be taken if no rules match. |
| <code><a href="#aws-vpclattice-prealpha.ListenerProps.property.name">name</a></code> | <code>string</code> | The Name of the service. |
| <code><a href="#aws-vpclattice-prealpha.ListenerProps.property.port">port</a></code> | <code>number</code> | Optional port number for the listener. |
| <code><a href="#aws-vpclattice-prealpha.ListenerProps.property.protocol">protocol</a></code> | <code><a href="#aws-vpclattice-prealpha.Protocol">Protocol</a></code> | protocol that the listener will listen on. |

---

##### `service`<sup>Required</sup> <a name="service" id="aws-vpclattice-prealpha.ListenerProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* <a href="#aws-vpclattice-prealpha.IService">IService</a>

The Id of the service that this listener is associated with.

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="aws-vpclattice-prealpha.ListenerProps.property.defaultAction"></a>

```typescript
public readonly defaultAction: DefaultActionProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnListener.DefaultActionProperty
- *Default:* 404 NOT Found

* A default action that will be taken if no rules match.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-vpclattice-prealpha.ListenerProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* CloudFormation provided name.

The Name of the service.

---

##### `port`<sup>Optional</sup> <a name="port" id="aws-vpclattice-prealpha.ListenerProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 80 or 443 depending on the Protocol

Optional port number for the listener.

If not supplied, will default to 80 or 443, depending on the Protocol

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="aws-vpclattice-prealpha.ListenerProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#aws-vpclattice-prealpha.Protocol">Protocol</a>
- *Default:* HTTPS

protocol that the listener will listen on.

---

### PathMatch <a name="PathMatch" id="aws-vpclattice-prealpha.PathMatch"></a>

Properties to create a PathMatch.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.PathMatch.Initializer"></a>

```typescript
import { PathMatch } from 'aws-vpclattice-prealpha'

const pathMatch: PathMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.PathMatch.property.path">path</a></code> | <code>string</code> | Value to match against. |
| <code><a href="#aws-vpclattice-prealpha.PathMatch.property.caseSensitive">caseSensitive</a></code> | <code>boolean</code> | Should the match be case sensitive? |
| <code><a href="#aws-vpclattice-prealpha.PathMatch.property.pathMatchType">pathMatchType</a></code> | <code><a href="#aws-vpclattice-prealpha.PathMatchType">PathMatchType</a></code> | Type of match to make. |

---

##### `path`<sup>Required</sup> <a name="path" id="aws-vpclattice-prealpha.PathMatch.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Value to match against.

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="aws-vpclattice-prealpha.PathMatch.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean;
```

- *Type:* boolean
- *Default:* true

Should the match be case sensitive?

---

##### `pathMatchType`<sup>Optional</sup> <a name="pathMatchType" id="aws-vpclattice-prealpha.PathMatch.property.pathMatchType"></a>

```typescript
public readonly pathMatchType: PathMatchType;
```

- *Type:* <a href="#aws-vpclattice-prealpha.PathMatchType">PathMatchType</a>
- *Default:* PathMatchType.EXACT

Type of match to make.

---

### ServiceAssociationProps <a name="ServiceAssociationProps" id="aws-vpclattice-prealpha.ServiceAssociationProps"></a>

Props for Service Assocaition.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ServiceAssociationProps.Initializer"></a>

```typescript
import { ServiceAssociationProps } from 'aws-vpclattice-prealpha'

const serviceAssociationProps: ServiceAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociationProps.property.service">service</a></code> | <code><a href="#aws-vpclattice-prealpha.IService">IService</a></code> | lattice Service. |
| <code><a href="#aws-vpclattice-prealpha.ServiceAssociationProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | Lattice ServiceId. |

---

##### `service`<sup>Required</sup> <a name="service" id="aws-vpclattice-prealpha.ServiceAssociationProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* <a href="#aws-vpclattice-prealpha.IService">IService</a>

lattice Service.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="aws-vpclattice-prealpha.ServiceAssociationProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

Lattice ServiceId.

---

### ServiceNetworkAssociationProps <a name="ServiceNetworkAssociationProps" id="aws-vpclattice-prealpha.ServiceNetworkAssociationProps"></a>

Props for Service Assocaition.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ServiceNetworkAssociationProps.Initializer"></a>

```typescript
import { ServiceNetworkAssociationProps } from 'aws-vpclattice-prealpha'

const serviceNetworkAssociationProps: ServiceNetworkAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociationProps.property.serviceId">serviceId</a></code> | <code>string</code> | Lattice ServiceId. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAssociationProps.property.serviceNetwork">serviceNetwork</a></code> | <code><a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a></code> | lattice Service. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="aws-vpclattice-prealpha.ServiceNetworkAssociationProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Lattice ServiceId.

---

##### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="aws-vpclattice-prealpha.ServiceNetworkAssociationProps.property.serviceNetwork"></a>

```typescript
public readonly serviceNetwork: IServiceNetwork;
```

- *Type:* <a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a>

lattice Service.

---

### ServiceNetworkProps <a name="ServiceNetworkProps" id="aws-vpclattice-prealpha.ServiceNetworkProps"></a>

The properties for the ServiceNetwork.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ServiceNetworkProps.Initializer"></a>

```typescript
import { ServiceNetworkProps } from 'aws-vpclattice-prealpha'

const serviceNetworkProps: ServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkProps.property.accessmode">accessmode</a></code> | <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a></code> | Allow external principals. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkProps.property.authType">authType</a></code> | <code><a href="#aws-vpclattice-prealpha.AuthType">AuthType</a></code> | The type of  authentication to use with the Service Network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkProps.property.loggingDestinations">loggingDestinations</a></code> | <code><a href="#aws-vpclattice-prealpha.LoggingDestination">LoggingDestination</a>[]</code> | Logging destinations. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the Service Network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkProps.property.services">services</a></code> | <code><a href="#aws-vpclattice-prealpha.IService">IService</a>[]</code> | Lattice Services that are assocaited with this Service Network. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkProps.property.vpcs">vpcs</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc[]</code> | Vpcs that are associated with this Service Network. |

---

##### `accessmode`<sup>Optional</sup> <a name="accessmode" id="aws-vpclattice-prealpha.ServiceNetworkProps.property.accessmode"></a>

```typescript
public readonly accessmode: ServiceNetworkAccessMode;
```

- *Type:* <a href="#aws-vpclattice-prealpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a>
- *Default:* false

Allow external principals.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="aws-vpclattice-prealpha.ServiceNetworkProps.property.authType"></a>

```typescript
public readonly authType: AuthType;
```

- *Type:* <a href="#aws-vpclattice-prealpha.AuthType">AuthType</a>
- *Default:* 'AWS_IAM'

The type of  authentication to use with the Service Network.

---

##### `loggingDestinations`<sup>Optional</sup> <a name="loggingDestinations" id="aws-vpclattice-prealpha.ServiceNetworkProps.property.loggingDestinations"></a>

```typescript
public readonly loggingDestinations: LoggingDestination[];
```

- *Type:* <a href="#aws-vpclattice-prealpha.LoggingDestination">LoggingDestination</a>[]
- *Default:* : no logging

Logging destinations.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-vpclattice-prealpha.ServiceNetworkProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* cloudformation generated name

The name of the Service Network.

If not provided Cloudformation will provide
a name

---

##### `services`<sup>Optional</sup> <a name="services" id="aws-vpclattice-prealpha.ServiceNetworkProps.property.services"></a>

```typescript
public readonly services: IService[];
```

- *Type:* <a href="#aws-vpclattice-prealpha.IService">IService</a>[]
- *Default:* no services are associated with the service network

Lattice Services that are assocaited with this Service Network.

---

##### `vpcs`<sup>Optional</sup> <a name="vpcs" id="aws-vpclattice-prealpha.ServiceNetworkProps.property.vpcs"></a>

```typescript
public readonly vpcs: IVpc[];
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc[]
- *Default:* no vpcs are associated

Vpcs that are associated with this Service Network.

---

### ServiceProps <a name="ServiceProps" id="aws-vpclattice-prealpha.ServiceProps"></a>

Properties for a Lattice Service.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from 'aws-vpclattice-prealpha'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.authType">authType</a></code> | <code>string</code> | The authType of the Service. |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.Certificate</code> | A certificate that may be used by the service. |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.customDomain">customDomain</a></code> | <code>string</code> | A customDomain used by the service. |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.dnsEntry">dnsEntry</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty</code> | A custom hosname. |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.listeners">listeners</a></code> | <code><a href="#aws-vpclattice-prealpha.IListener">IListener</a>[]</code> | Listeners that will be attached to the service. |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.name">name</a></code> | <code>string</code> | Name for the service. |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.serviceNetwork">serviceNetwork</a></code> | <code><a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a></code> | ServiceNetwork to associate with. |
| <code><a href="#aws-vpclattice-prealpha.ServiceProps.property.shares">shares</a></code> | <code><a href="#aws-vpclattice-prealpha.ShareServiceProps">ShareServiceProps</a>[]</code> | Share Service. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="aws-vpclattice-prealpha.ServiceProps.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string
- *Default:* 'AWS_IAM'

The authType of the Service.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="aws-vpclattice-prealpha.ServiceProps.property.certificate"></a>

```typescript
public readonly certificate: Certificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.Certificate
- *Default:* no custom certificate is used

A certificate that may be used by the service.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="aws-vpclattice-prealpha.ServiceProps.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string
- *Default:* no customdomain is used

A customDomain used by the service.

---

##### `dnsEntry`<sup>Optional</sup> <a name="dnsEntry" id="aws-vpclattice-prealpha.ServiceProps.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DnsEntryProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty
- *Default:* no hostname is used

A custom hosname.

---

##### `listeners`<sup>Optional</sup> <a name="listeners" id="aws-vpclattice-prealpha.ServiceProps.property.listeners"></a>

```typescript
public readonly listeners: IListener[];
```

- *Type:* <a href="#aws-vpclattice-prealpha.IListener">IListener</a>[]
- *Default:* no listeners

Listeners that will be attached to the service.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-vpclattice-prealpha.ServiceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* cloudformation will provide a name

Name for the service.

---

##### `serviceNetwork`<sup>Optional</sup> <a name="serviceNetwork" id="aws-vpclattice-prealpha.ServiceProps.property.serviceNetwork"></a>

```typescript
public readonly serviceNetwork: IServiceNetwork;
```

- *Type:* <a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a>
- *Default:* will not assocaite with any serviceNetwork.

ServiceNetwork to associate with.

---

##### `shares`<sup>Optional</sup> <a name="shares" id="aws-vpclattice-prealpha.ServiceProps.property.shares"></a>

```typescript
public readonly shares: ShareServiceProps[];
```

- *Type:* <a href="#aws-vpclattice-prealpha.ShareServiceProps">ShareServiceProps</a>[]
- *Default:* no sharing of the service

Share Service.

---

### ShareServiceNetworkProps <a name="ShareServiceNetworkProps" id="aws-vpclattice-prealpha.ShareServiceNetworkProps"></a>

Properties to share a Service Network.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.Initializer"></a>

```typescript
import { ShareServiceNetworkProps } from 'aws-vpclattice-prealpha'

const shareServiceNetworkProps: ShareServiceNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps.property.accounts">accounts</a></code> | <code>string[]</code> | Principals to share the Service Network with. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps.property.name">name</a></code> | <code>string</code> | The name of the share. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps.property.accessMode">accessMode</a></code> | <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a></code> | The access mode for the Service Network. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | Are external Principals allowed. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps.property.description">description</a></code> | <code>string</code> | The description of the Service Network. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps.property.disableDiscovery">disableDiscovery</a></code> | <code>boolean</code> | disable discovery. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceNetworkProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags to apply to the Service Network. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]
- *Default:* none

Principals to share the Service Network with.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the share.

---

##### `accessMode`<sup>Optional</sup> <a name="accessMode" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.property.accessMode"></a>

```typescript
public readonly accessMode: ServiceNetworkAccessMode;
```

- *Type:* <a href="#aws-vpclattice-prealpha.ServiceNetworkAccessMode">ServiceNetworkAccessMode</a>
- *Default:* 'UNAUTHENTICATED'

The access mode for the Service Network.

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean;
```

- *Type:* boolean
- *Default:* false;

Are external Principals allowed.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* none

The description of the Service Network.

---

##### `disableDiscovery`<sup>Optional</sup> <a name="disableDiscovery" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.property.disableDiscovery"></a>

```typescript
public readonly disableDiscovery: boolean;
```

- *Type:* boolean
- *Default:* false

disable discovery.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-vpclattice-prealpha.ShareServiceNetworkProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none

The tags to apply to the Service Network.

---

### ShareServiceProps <a name="ShareServiceProps" id="aws-vpclattice-prealpha.ShareServiceProps"></a>

Properties to Share the Service.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.ShareServiceProps.Initializer"></a>

```typescript
import { ShareServiceProps } from 'aws-vpclattice-prealpha'

const shareServiceProps: ShareServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceProps.property.name">name</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceProps.property.accounts">accounts</a></code> | <code>string[]</code> | Principals to share the service with. |
| <code><a href="#aws-vpclattice-prealpha.ShareServiceProps.property.allowExternalPrincipals">allowExternalPrincipals</a></code> | <code>boolean</code> | Allow External Principals. |

---

##### `name`<sup>Required</sup> <a name="name" id="aws-vpclattice-prealpha.ShareServiceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="aws-vpclattice-prealpha.ShareServiceProps.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]
- *Default:* none

Principals to share the service with.

TO DO, this needs some work

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="allowExternalPrincipals" id="aws-vpclattice-prealpha.ShareServiceProps.property.allowExternalPrincipals"></a>

```typescript
public readonly allowExternalPrincipals: boolean;
```

- *Type:* boolean
- *Default:* false

Allow External Principals.

---

### TargetConfig <a name="TargetConfig" id="aws-vpclattice-prealpha.TargetConfig"></a>

TargetConfiguration.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.TargetConfig.Initializer"></a>

```typescript
import { TargetConfig } from 'aws-vpclattice-prealpha'

const targetConfig: TargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetConfig.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC where the target(s) are located. |
| <code><a href="#aws-vpclattice-prealpha.TargetConfig.property.healthcheck">healthcheck</a></code> | <code><a href="#aws-vpclattice-prealpha.HealthCheck">HealthCheck</a></code> | HealthCheckParameters - Can supply for IpAddress and ALB targets only. |
| <code><a href="#aws-vpclattice-prealpha.TargetConfig.property.ipAddressType">ipAddressType</a></code> | <code><a href="#aws-vpclattice-prealpha.IpAddressType">IpAddressType</a></code> | IpAddressType. |
| <code><a href="#aws-vpclattice-prealpha.TargetConfig.property.port">port</a></code> | <code>number</code> | Port. |
| <code><a href="#aws-vpclattice-prealpha.TargetConfig.property.protocol">protocol</a></code> | <code><a href="#aws-vpclattice-prealpha.Protocol">Protocol</a></code> | Protocol. |
| <code><a href="#aws-vpclattice-prealpha.TargetConfig.property.protocolVersion">protocolVersion</a></code> | <code><a href="#aws-vpclattice-prealpha.ProtocolVersion">ProtocolVersion</a></code> | ProtocolVersion. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-vpclattice-prealpha.TargetConfig.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC where the target(s) are located.

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="aws-vpclattice-prealpha.TargetConfig.property.healthcheck"></a>

```typescript
public readonly healthcheck: HealthCheck;
```

- *Type:* <a href="#aws-vpclattice-prealpha.HealthCheck">HealthCheck</a>
- *Default:* No HealthCheck

HealthCheckParameters - Can supply for IpAddress and ALB targets only.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="aws-vpclattice-prealpha.TargetConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* <a href="#aws-vpclattice-prealpha.IpAddressType">IpAddressType</a>
- *Default:* IPv4

IpAddressType.

---

##### `port`<sup>Optional</sup> <a name="port" id="aws-vpclattice-prealpha.TargetConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* Defaults to port 80 for HTTP, or 443 for HTTPS and GRPC

Port.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="aws-vpclattice-prealpha.TargetConfig.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#aws-vpclattice-prealpha.Protocol">Protocol</a>
- *Default:* HTTPS

Protocol.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="aws-vpclattice-prealpha.TargetConfig.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: ProtocolVersion;
```

- *Type:* <a href="#aws-vpclattice-prealpha.ProtocolVersion">ProtocolVersion</a>
- *Default:* HTTP1

ProtocolVersion.

---

### TargetGroupHealthCheckProps <a name="TargetGroupHealthCheckProps" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps"></a>

A Configuration of the TargetGroup Health Check.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.Initializer"></a>

```typescript
import { TargetGroupHealthCheckProps } from 'aws-vpclattice-prealpha'

const targetGroupHealthCheckProps: TargetGroupHealthCheckProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.enabled">enabled</a></code> | <code>boolean</code> | Enable this Health Check. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.healthCheckInterval">healthCheckInterval</a></code> | <code>aws-cdk-lib.Duration</code> | Health Check Interval. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.healthCheckTimeout">healthCheckTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | TimeOut Period. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | Number of Healthy Responses before Target is considered healthy. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.matcher">matcher</a></code> | <code><a href="#aws-vpclattice-prealpha.FixedResponse">FixedResponse</a></code> | Check based on Response from target. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.path">path</a></code> | <code>string</code> | Path to use for Health Check. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.port">port</a></code> | <code>number</code> | Port to use for Health Check. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.protocol">protocol</a></code> | <code><a href="#aws-vpclattice-prealpha.Protocol">Protocol</a></code> | Protocol to use for Health Check. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.protocolVersion">protocolVersion</a></code> | <code><a href="#aws-vpclattice-prealpha.ProtocolVersion">ProtocolVersion</a></code> | Protocol to use for Health Check. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | Number of unhealty events before Target is considered unhealthy. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable this Health Check.

---

##### `healthCheckInterval`<sup>Optional</sup> <a name="healthCheckInterval" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.healthCheckInterval"></a>

```typescript
public readonly healthCheckInterval: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 30 seconds

Health Check Interval.

---

##### `healthCheckTimeout`<sup>Optional</sup> <a name="healthCheckTimeout" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.healthCheckTimeout"></a>

```typescript
public readonly healthCheckTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 5 seconds

TimeOut Period.

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number
- *Default:* 2

Number of Healthy Responses before Target is considered healthy.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.matcher"></a>

```typescript
public readonly matcher: FixedResponse;
```

- *Type:* <a href="#aws-vpclattice-prealpha.FixedResponse">FixedResponse</a>
- *Default:* 200 OK

Check based on Response from target.

---

##### `path`<sup>Optional</sup> <a name="path" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string
- *Default:* '/'

Path to use for Health Check.

---

##### `port`<sup>Optional</sup> <a name="port" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 443

Port to use for Health Check.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#aws-vpclattice-prealpha.Protocol">Protocol</a>
- *Default:* HTTPS

Protocol to use for Health Check.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: ProtocolVersion;
```

- *Type:* <a href="#aws-vpclattice-prealpha.ProtocolVersion">ProtocolVersion</a>
- *Default:* HTTP2

Protocol to use for Health Check.

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="aws-vpclattice-prealpha.TargetGroupHealthCheckProps.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number
- *Default:* 1

Number of unhealty events before Target is considered unhealthy.

---

### TargetGroupProps <a name="TargetGroupProps" id="aws-vpclattice-prealpha.TargetGroupProps"></a>

Properties for a Target Group, Only supply one of instancetargets, lambdaTargets, albTargets, ipTargets.

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.TargetGroupProps.Initializer"></a>

```typescript
import { TargetGroupProps } from 'aws-vpclattice-prealpha'

const targetGroupProps: TargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#aws-vpclattice-prealpha.TargetGroupProps.property.target">target</a></code> | <code><a href="#aws-vpclattice-prealpha.Target">Target</a></code> | Targets. |

---

##### `name`<sup>Required</sup> <a name="name" id="aws-vpclattice-prealpha.TargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the target group.

---

##### `target`<sup>Required</sup> <a name="target" id="aws-vpclattice-prealpha.TargetGroupProps.property.target"></a>

```typescript
public readonly target: Target;
```

- *Type:* <a href="#aws-vpclattice-prealpha.Target">Target</a>

Targets.

---

### WeightedTargetGroup <a name="WeightedTargetGroup" id="aws-vpclattice-prealpha.WeightedTargetGroup"></a>

A weighted target group adds a weighting to a target group.

when more than one WeightedTargetGroup is provided as the action
for a listener, the weights are used to determine the relative proportion
of traffic that is sent to the target

#### Initializer <a name="Initializer" id="aws-vpclattice-prealpha.WeightedTargetGroup.Initializer"></a>

```typescript
import { WeightedTargetGroup } from 'aws-vpclattice-prealpha'

const weightedTargetGroup: WeightedTargetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.WeightedTargetGroup.property.targetGroup">targetGroup</a></code> | <code><a href="#aws-vpclattice-prealpha.TargetGroup">TargetGroup</a></code> | A target Group. |
| <code><a href="#aws-vpclattice-prealpha.WeightedTargetGroup.property.weight">weight</a></code> | <code>number</code> | A weight for the target group. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="aws-vpclattice-prealpha.WeightedTargetGroup.property.targetGroup"></a>

```typescript
public readonly targetGroup: TargetGroup;
```

- *Type:* <a href="#aws-vpclattice-prealpha.TargetGroup">TargetGroup</a>

A target Group.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="aws-vpclattice-prealpha.WeightedTargetGroup.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number
- *Default:* 100

A weight for the target group.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthCheck <a name="HealthCheck" id="aws-vpclattice-prealpha.HealthCheck"></a>

Create a Health Check for a target.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.HealthCheck.Initializer"></a>

```typescript
import { HealthCheck } from 'aws-vpclattice-prealpha'

new HealthCheck()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.check">check</a></code> | A Health Check configuration object for a target. |

---

##### `check` <a name="check" id="aws-vpclattice-prealpha.HealthCheck.check"></a>

```typescript
import { HealthCheck } from 'aws-vpclattice-prealpha'

HealthCheck.check(props: TargetGroupHealthCheckProps)
```

A Health Check configuration object for a target.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.HealthCheck.check.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.TargetGroupHealthCheckProps">TargetGroupHealthCheckProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.enabled">enabled</a></code> | <code>boolean</code> | health check is enabled. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.healthCheckInterval">healthCheckInterval</a></code> | <code>aws-cdk-lib.Duration</code> | healthCheck Interval. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.healthCheckTimeout">healthCheckTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | HealthCheck Timeout. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | Healthy Threshold Count. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.path">path</a></code> | <code>string</code> | Path to check. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.port">port</a></code> | <code>number</code> | Port to check. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.protocol">protocol</a></code> | <code>string</code> | Protocol. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | HTTP Protocol Version. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | Unhealthy Threshold Count. |
| <code><a href="#aws-vpclattice-prealpha.HealthCheck.property.matcher">matcher</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnTargetGroup.MatcherProperty</code> | Target Match reponse. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="aws-vpclattice-prealpha.HealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

health check is enabled.

---

##### `healthCheckInterval`<sup>Required</sup> <a name="healthCheckInterval" id="aws-vpclattice-prealpha.HealthCheck.property.healthCheckInterval"></a>

```typescript
public readonly healthCheckInterval: Duration;
```

- *Type:* aws-cdk-lib.Duration

healthCheck Interval.

---

##### `healthCheckTimeout`<sup>Required</sup> <a name="healthCheckTimeout" id="aws-vpclattice-prealpha.HealthCheck.property.healthCheckTimeout"></a>

```typescript
public readonly healthCheckTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

HealthCheck Timeout.

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="aws-vpclattice-prealpha.HealthCheck.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number

Healthy Threshold Count.

---

##### `path`<sup>Required</sup> <a name="path" id="aws-vpclattice-prealpha.HealthCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to check.

---

##### `port`<sup>Required</sup> <a name="port" id="aws-vpclattice-prealpha.HealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port to check.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="aws-vpclattice-prealpha.HealthCheck.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Protocol.

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="aws-vpclattice-prealpha.HealthCheck.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

HTTP Protocol Version.

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="aws-vpclattice-prealpha.HealthCheck.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number

Unhealthy Threshold Count.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="aws-vpclattice-prealpha.HealthCheck.property.matcher"></a>

```typescript
public readonly matcher: MatcherProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnTargetGroup.MatcherProperty

Target Match reponse.

---


### LoggingDestination <a name="LoggingDestination" id="aws-vpclattice-prealpha.LoggingDestination"></a>

Logging options.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.LoggingDestination.Initializer"></a>

```typescript
import { LoggingDestination } from 'aws-vpclattice-prealpha'

new LoggingDestination()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.LoggingDestination.cloudwatch">cloudwatch</a></code> | Send to CLoudwatch. |
| <code><a href="#aws-vpclattice-prealpha.LoggingDestination.kinesis">kinesis</a></code> | Stream to Kinesis. |
| <code><a href="#aws-vpclattice-prealpha.LoggingDestination.s3">s3</a></code> | Construct a logging destination for a S3 Bucket. |

---

##### `cloudwatch` <a name="cloudwatch" id="aws-vpclattice-prealpha.LoggingDestination.cloudwatch"></a>

```typescript
import { LoggingDestination } from 'aws-vpclattice-prealpha'

LoggingDestination.cloudwatch(logGroup: ILogGroup)
```

Send to CLoudwatch.

###### `logGroup`<sup>Required</sup> <a name="logGroup" id="aws-vpclattice-prealpha.LoggingDestination.cloudwatch.parameter.logGroup"></a>

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

---

##### `kinesis` <a name="kinesis" id="aws-vpclattice-prealpha.LoggingDestination.kinesis"></a>

```typescript
import { LoggingDestination } from 'aws-vpclattice-prealpha'

LoggingDestination.kinesis(stream: IStream)
```

Stream to Kinesis.

###### `stream`<sup>Required</sup> <a name="stream" id="aws-vpclattice-prealpha.LoggingDestination.kinesis.parameter.stream"></a>

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `s3` <a name="s3" id="aws-vpclattice-prealpha.LoggingDestination.s3"></a>

```typescript
import { LoggingDestination } from 'aws-vpclattice-prealpha'

LoggingDestination.s3(bucket: IBucket)
```

Construct a logging destination for a S3 Bucket.

###### `bucket`<sup>Required</sup> <a name="bucket" id="aws-vpclattice-prealpha.LoggingDestination.s3.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

an s3 bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.LoggingDestination.property.addr">addr</a></code> | <code>string</code> | unique addr of the destination. |
| <code><a href="#aws-vpclattice-prealpha.LoggingDestination.property.arn">arn</a></code> | <code>string</code> | An Arn of the destination. |
| <code><a href="#aws-vpclattice-prealpha.LoggingDestination.property.name">name</a></code> | <code>string</code> | A name of the destination. |

---

##### `addr`<sup>Required</sup> <a name="addr" id="aws-vpclattice-prealpha.LoggingDestination.property.addr"></a>

```typescript
public readonly addr: string;
```

- *Type:* string

unique addr of the destination.

---

##### `arn`<sup>Required</sup> <a name="arn" id="aws-vpclattice-prealpha.LoggingDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

An Arn of the destination.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-vpclattice-prealpha.LoggingDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name of the destination.

---


### Target <a name="Target" id="aws-vpclattice-prealpha.Target"></a>

Targets for target Groups.

#### Initializers <a name="Initializers" id="aws-vpclattice-prealpha.Target.Initializer"></a>

```typescript
import { Target } from 'aws-vpclattice-prealpha'

new Target()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Target.applicationLoadBalancer">applicationLoadBalancer</a></code> | Application Load Balancer as Targets. |
| <code><a href="#aws-vpclattice-prealpha.Target.ec2instance">ec2instance</a></code> | EC2 Instances as Targets. |
| <code><a href="#aws-vpclattice-prealpha.Target.ipAddress">ipAddress</a></code> | IpAddress as Targets. |
| <code><a href="#aws-vpclattice-prealpha.Target.lambda">lambda</a></code> | Lambda Target - Note: Lambda Targets do not have a configuration. |

---

##### `applicationLoadBalancer` <a name="applicationLoadBalancer" id="aws-vpclattice-prealpha.Target.applicationLoadBalancer"></a>

```typescript
import { Target } from 'aws-vpclattice-prealpha'

Target.applicationLoadBalancer(alb: ApplicationLoadBalancer[], targetConfig: TargetConfig)
```

Application Load Balancer as Targets.

###### `alb`<sup>Required</sup> <a name="alb" id="aws-vpclattice-prealpha.Target.applicationLoadBalancer.parameter.alb"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer[]

---

###### `targetConfig`<sup>Required</sup> <a name="targetConfig" id="aws-vpclattice-prealpha.Target.applicationLoadBalancer.parameter.targetConfig"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.TargetConfig">TargetConfig</a>

---

##### `ec2instance` <a name="ec2instance" id="aws-vpclattice-prealpha.Target.ec2instance"></a>

```typescript
import { Target } from 'aws-vpclattice-prealpha'

Target.ec2instance(ec2instance: Instance[], targetConfig: TargetConfig)
```

EC2 Instances as Targets.

###### `ec2instance`<sup>Required</sup> <a name="ec2instance" id="aws-vpclattice-prealpha.Target.ec2instance.parameter.ec2instance"></a>

- *Type:* aws-cdk-lib.aws_ec2.Instance[]

---

###### `targetConfig`<sup>Required</sup> <a name="targetConfig" id="aws-vpclattice-prealpha.Target.ec2instance.parameter.targetConfig"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.TargetConfig">TargetConfig</a>

---

##### `ipAddress` <a name="ipAddress" id="aws-vpclattice-prealpha.Target.ipAddress"></a>

```typescript
import { Target } from 'aws-vpclattice-prealpha'

Target.ipAddress(ipAddress: string[], targetConfig: TargetConfig)
```

IpAddress as Targets.

###### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="aws-vpclattice-prealpha.Target.ipAddress.parameter.ipAddress"></a>

- *Type:* string[]

---

###### `targetConfig`<sup>Required</sup> <a name="targetConfig" id="aws-vpclattice-prealpha.Target.ipAddress.parameter.targetConfig"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.TargetConfig">TargetConfig</a>

---

##### `lambda` <a name="lambda" id="aws-vpclattice-prealpha.Target.lambda"></a>

```typescript
import { Target } from 'aws-vpclattice-prealpha'

Target.lambda(lambda: Function[])
```

Lambda Target - Note: Lambda Targets do not have a configuration.

###### `lambda`<sup>Required</sup> <a name="lambda" id="aws-vpclattice-prealpha.Target.lambda.parameter.lambda"></a>

- *Type:* aws-cdk-lib.aws_lambda.Function[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Target.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetProperty[]</code> | References to the targets, ids or Arns. |
| <code><a href="#aws-vpclattice-prealpha.Target.property.type">type</a></code> | <code><a href="#aws-vpclattice-prealpha.TargetType">TargetType</a></code> | The type of target. |
| <code><a href="#aws-vpclattice-prealpha.Target.property.config">config</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty</code> | Configuration for the TargetGroup, if it is not a lambda. |

---

##### `targets`<sup>Required</sup> <a name="targets" id="aws-vpclattice-prealpha.Target.property.targets"></a>

```typescript
public readonly targets: TargetProperty[];
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetProperty[]

References to the targets, ids or Arns.

---

##### `type`<sup>Required</sup> <a name="type" id="aws-vpclattice-prealpha.Target.property.type"></a>

```typescript
public readonly type: TargetType;
```

- *Type:* <a href="#aws-vpclattice-prealpha.TargetType">TargetType</a>

The type of target.

---

##### `config`<sup>Optional</sup> <a name="config" id="aws-vpclattice-prealpha.Target.property.config"></a>

```typescript
public readonly config: TargetGroupConfigProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty

Configuration for the TargetGroup, if it is not a lambda.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IListener <a name="IListener" id="aws-vpclattice-prealpha.IListener"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-vpclattice-prealpha.Listener">Listener</a>, <a href="#aws-vpclattice-prealpha.IListener">IListener</a>

Create a vpcLattice Listener.

Implemented by `Listener`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.IListener.addListenerRule">addListenerRule</a></code> | Add A Listener Rule to the Listener. |

---

##### `addListenerRule` <a name="addListenerRule" id="aws-vpclattice-prealpha.IListener.addListenerRule"></a>

```typescript
public addListenerRule(props: AddRuleProps): void
```

Add A Listener Rule to the Listener.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.IListener.addListenerRule.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AddRuleProps">AddRuleProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.IListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.IListener.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.IListener.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.IListener.property.listenerArn">listenerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#aws-vpclattice-prealpha.IListener.property.listenerId">listenerId</a></code> | <code>string</code> | The Id of the Service Network. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.IListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.IListener.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.IListener.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="aws-vpclattice-prealpha.IListener.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="aws-vpclattice-prealpha.IListener.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The Id of the Service Network.

---

### IService <a name="IService" id="aws-vpclattice-prealpha.IService"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-vpclattice-prealpha.Service">Service</a>, <a href="#aws-vpclattice-prealpha.IService">IService</a>

Create a vpcLattice service network.

Implemented by `Service`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.IService.associateWithServiceNetwork">associateWithServiceNetwork</a></code> | associate the service with a servicenetwork. |

---

##### `associateWithServiceNetwork` <a name="associateWithServiceNetwork" id="aws-vpclattice-prealpha.IService.associateWithServiceNetwork"></a>

```typescript
public associateWithServiceNetwork(serviceNetwork: IServiceNetwork): void
```

associate the service with a servicenetwork.

###### `serviceNetwork`<sup>Required</sup> <a name="serviceNetwork" id="aws-vpclattice-prealpha.IService.associateWithServiceNetwork.parameter.serviceNetwork"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.IService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.imported">imported</a></code> | <code>boolean</code> | Imported. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.serviceArn">serviceArn</a></code> | <code>string</code> | The Arn of the Service. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.serviceId">serviceId</a></code> | <code>string</code> | The Id of the Service. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.orgId">orgId</a></code> | <code>string</code> | the discovered OrgId. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.authPolicy">authPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The auth Policy for the service. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.authType">authType</a></code> | <code>string</code> | The authType of the service. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.Certificate</code> | A certificate that may be used by the service. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.customDomain">customDomain</a></code> | <code>string</code> | A custom Domain used by the service. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.dnsEntry">dnsEntry</a></code> | <code>aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty</code> | A DNS Entry for the service. |
| <code><a href="#aws-vpclattice-prealpha.IService.property.name">name</a></code> | <code>string</code> | A name for the service. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.IService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.IService.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.IService.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `imported`<sup>Required</sup> <a name="imported" id="aws-vpclattice-prealpha.IService.property.imported"></a>

```typescript
public readonly imported: boolean;
```

- *Type:* boolean

Imported.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="aws-vpclattice-prealpha.IService.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

The Arn of the Service.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="aws-vpclattice-prealpha.IService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The Id of the Service.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="aws-vpclattice-prealpha.IService.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

the discovered OrgId.

---

##### `authPolicy`<sup>Required</sup> <a name="authPolicy" id="aws-vpclattice-prealpha.IService.property.authPolicy"></a>

```typescript
public readonly authPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The auth Policy for the service.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="aws-vpclattice-prealpha.IService.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authType of the service.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="aws-vpclattice-prealpha.IService.property.certificate"></a>

```typescript
public readonly certificate: Certificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.Certificate

A certificate that may be used by the service.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="aws-vpclattice-prealpha.IService.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

A custom Domain used by the service.

---

##### `dnsEntry`<sup>Optional</sup> <a name="dnsEntry" id="aws-vpclattice-prealpha.IService.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DnsEntryProperty;
```

- *Type:* aws-cdk-lib.aws_vpclattice.CfnService.DnsEntryProperty

A DNS Entry for the service.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-vpclattice-prealpha.IService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the service.

---

### IServiceNetwork <a name="IServiceNetwork" id="aws-vpclattice-prealpha.IServiceNetwork"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-vpclattice-prealpha.ServiceNetwork">ServiceNetwork</a>, <a href="#aws-vpclattice-prealpha.IServiceNetwork">IServiceNetwork</a>

Create a vpc lattice service network.

Implemented by `ServiceNetwork`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.addService">addService</a></code> | Add Lattice Service. |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.associateVPC">associateVPC</a></code> | Associate a VPC with the Service Network. |

---

##### `addService` <a name="addService" id="aws-vpclattice-prealpha.IServiceNetwork.addService"></a>

```typescript
public addService(props: AddServiceProps): void
```

Add Lattice Service.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.IServiceNetwork.addService.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AddServiceProps">AddServiceProps</a>

---

##### `associateVPC` <a name="associateVPC" id="aws-vpclattice-prealpha.IServiceNetwork.associateVPC"></a>

```typescript
public associateVPC(props: AssociateVPCProps): void
```

Associate a VPC with the Service Network.

###### `props`<sup>Required</sup> <a name="props" id="aws-vpclattice-prealpha.IServiceNetwork.associateVPC.parameter.props"></a>

- *Type:* <a href="#aws-vpclattice-prealpha.AssociateVPCProps">AssociateVPCProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.property.imported">imported</a></code> | <code>boolean</code> | Is this an imported serviceNetwork. |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#aws-vpclattice-prealpha.IServiceNetwork.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The Id of the Service Network. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.IServiceNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.IServiceNetwork.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.IServiceNetwork.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `imported`<sup>Required</sup> <a name="imported" id="aws-vpclattice-prealpha.IServiceNetwork.property.imported"></a>

```typescript
public readonly imported: boolean;
```

- *Type:* boolean

Is this an imported serviceNetwork.

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="aws-vpclattice-prealpha.IServiceNetwork.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service network.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="aws-vpclattice-prealpha.IServiceNetwork.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The Id of the Service Network.

---

### ITargetGroup <a name="ITargetGroup" id="aws-vpclattice-prealpha.ITargetGroup"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-vpclattice-prealpha.TargetGroup">TargetGroup</a>, <a href="#aws-vpclattice-prealpha.ITargetGroup">ITargetGroup</a>

Create a vpc lattice TargetGroup.

Implemented by `TargetGroup`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ITargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-vpclattice-prealpha.ITargetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-vpclattice-prealpha.ITargetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-vpclattice-prealpha.ITargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Arn of the target group. |
| <code><a href="#aws-vpclattice-prealpha.ITargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The id of the target group. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-vpclattice-prealpha.ITargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-vpclattice-prealpha.ITargetGroup.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-vpclattice-prealpha.ITargetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="aws-vpclattice-prealpha.ITargetGroup.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Arn of the target group.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="aws-vpclattice-prealpha.ITargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The id of the target group.

---

## Enums <a name="Enums" id="Enums"></a>

### AuthType <a name="AuthType" id="aws-vpclattice-prealpha.AuthType"></a>

AuthTypes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.AuthType.NONE">NONE</a></code> | No Authorization. |
| <code><a href="#aws-vpclattice-prealpha.AuthType.AWS_IAM">AWS_IAM</a></code> | Use IAM Policy as. |

---

##### `NONE` <a name="NONE" id="aws-vpclattice-prealpha.AuthType.NONE"></a>

No Authorization.

---


##### `AWS_IAM` <a name="AWS_IAM" id="aws-vpclattice-prealpha.AuthType.AWS_IAM"></a>

Use IAM Policy as.

---


### FixedResponse <a name="FixedResponse" id="aws-vpclattice-prealpha.FixedResponse"></a>

Fixed response codes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.FixedResponse.NOT_FOUND">NOT_FOUND</a></code> | Not Found 404. |
| <code><a href="#aws-vpclattice-prealpha.FixedResponse.OK">OK</a></code> | OK 200. |

---

##### `NOT_FOUND` <a name="NOT_FOUND" id="aws-vpclattice-prealpha.FixedResponse.NOT_FOUND"></a>

Not Found 404.

---


##### `OK` <a name="OK" id="aws-vpclattice-prealpha.FixedResponse.OK"></a>

OK 200.

---


### HTTPMethods <a name="HTTPMethods" id="aws-vpclattice-prealpha.HTTPMethods"></a>

HTTP Methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.HTTPMethods.GET">GET</a></code> | GET Method. |
| <code><a href="#aws-vpclattice-prealpha.HTTPMethods.POST">POST</a></code> | POST Method. |
| <code><a href="#aws-vpclattice-prealpha.HTTPMethods.PUT">PUT</a></code> | PUT Method. |
| <code><a href="#aws-vpclattice-prealpha.HTTPMethods.DELETE">DELETE</a></code> | Delete Method. |

---

##### `GET` <a name="GET" id="aws-vpclattice-prealpha.HTTPMethods.GET"></a>

GET Method.

---


##### `POST` <a name="POST" id="aws-vpclattice-prealpha.HTTPMethods.POST"></a>

POST Method.

---


##### `PUT` <a name="PUT" id="aws-vpclattice-prealpha.HTTPMethods.PUT"></a>

PUT Method.

---


##### `DELETE` <a name="DELETE" id="aws-vpclattice-prealpha.HTTPMethods.DELETE"></a>

Delete Method.

---


### IpAddressType <a name="IpAddressType" id="aws-vpclattice-prealpha.IpAddressType"></a>

IpAddressType.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.IpAddressType.IPV4">IPV4</a></code> | ipv4. |
| <code><a href="#aws-vpclattice-prealpha.IpAddressType.IPV6">IPV6</a></code> | Ipv6. |

---

##### `IPV4` <a name="IPV4" id="aws-vpclattice-prealpha.IpAddressType.IPV4"></a>

ipv4.

---


##### `IPV6` <a name="IPV6" id="aws-vpclattice-prealpha.IpAddressType.IPV6"></a>

Ipv6.

---


### MatchOperator <a name="MatchOperator" id="aws-vpclattice-prealpha.MatchOperator"></a>

Operators for Matches.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.MatchOperator.CONTAINS">CONTAINS</a></code> | Contains Match. |
| <code><a href="#aws-vpclattice-prealpha.MatchOperator.EXACT">EXACT</a></code> | Exact Match. |
| <code><a href="#aws-vpclattice-prealpha.MatchOperator.PREFIX">PREFIX</a></code> | Prefix Match. |

---

##### `CONTAINS` <a name="CONTAINS" id="aws-vpclattice-prealpha.MatchOperator.CONTAINS"></a>

Contains Match.

---


##### `EXACT` <a name="EXACT" id="aws-vpclattice-prealpha.MatchOperator.EXACT"></a>

Exact Match.

---


##### `PREFIX` <a name="PREFIX" id="aws-vpclattice-prealpha.MatchOperator.PREFIX"></a>

Prefix Match.

---


### PathMatchType <a name="PathMatchType" id="aws-vpclattice-prealpha.PathMatchType"></a>

Operators for Path Matches.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.PathMatchType.EXACT">EXACT</a></code> | Exact Match. |
| <code><a href="#aws-vpclattice-prealpha.PathMatchType.PREFIX">PREFIX</a></code> | Prefix Match. |

---

##### `EXACT` <a name="EXACT" id="aws-vpclattice-prealpha.PathMatchType.EXACT"></a>

Exact Match.

---


##### `PREFIX` <a name="PREFIX" id="aws-vpclattice-prealpha.PathMatchType.PREFIX"></a>

Prefix Match.

---


### Protocol <a name="Protocol" id="aws-vpclattice-prealpha.Protocol"></a>

HTTP/HTTPS methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.Protocol.HTTP">HTTP</a></code> | HTTP Protocol. |
| <code><a href="#aws-vpclattice-prealpha.Protocol.HTTPS">HTTPS</a></code> | HTTPS Protocol. |

---

##### `HTTP` <a name="HTTP" id="aws-vpclattice-prealpha.Protocol.HTTP"></a>

HTTP Protocol.

---


##### `HTTPS` <a name="HTTPS" id="aws-vpclattice-prealpha.Protocol.HTTPS"></a>

HTTPS Protocol.

---


### ProtocolVersion <a name="ProtocolVersion" id="aws-vpclattice-prealpha.ProtocolVersion"></a>

ProtocolVersion.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ProtocolVersion.HTTP1">HTTP1</a></code> | Http1. |
| <code><a href="#aws-vpclattice-prealpha.ProtocolVersion.HTTP2">HTTP2</a></code> | Http2. |
| <code><a href="#aws-vpclattice-prealpha.ProtocolVersion.GRPC">GRPC</a></code> | GRPC. |

---

##### `HTTP1` <a name="HTTP1" id="aws-vpclattice-prealpha.ProtocolVersion.HTTP1"></a>

Http1.

---


##### `HTTP2` <a name="HTTP2" id="aws-vpclattice-prealpha.ProtocolVersion.HTTP2"></a>

Http2.

---


##### `GRPC` <a name="GRPC" id="aws-vpclattice-prealpha.ProtocolVersion.GRPC"></a>

GRPC.

---


### RuleAccessMode <a name="RuleAccessMode" id="aws-vpclattice-prealpha.RuleAccessMode"></a>

Access mode for the rule.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.RuleAccessMode.UNAUTHENTICATED">UNAUTHENTICATED</a></code> | Unauthenticated Access. |
| <code><a href="#aws-vpclattice-prealpha.RuleAccessMode.AUTHENTICATED_ONLY">AUTHENTICATED_ONLY</a></code> | Unauthenticated Access. |
| <code><a href="#aws-vpclattice-prealpha.RuleAccessMode.ORG_ONLY">ORG_ONLY</a></code> | THIS Org only. |
| <code><a href="#aws-vpclattice-prealpha.RuleAccessMode.NO_STATEMENT">NO_STATEMENT</a></code> | Do not create a s. |

---

##### `UNAUTHENTICATED` <a name="UNAUTHENTICATED" id="aws-vpclattice-prealpha.RuleAccessMode.UNAUTHENTICATED"></a>

Unauthenticated Access.

---


##### `AUTHENTICATED_ONLY` <a name="AUTHENTICATED_ONLY" id="aws-vpclattice-prealpha.RuleAccessMode.AUTHENTICATED_ONLY"></a>

Unauthenticated Access.

---


##### `ORG_ONLY` <a name="ORG_ONLY" id="aws-vpclattice-prealpha.RuleAccessMode.ORG_ONLY"></a>

THIS Org only.

---


##### `NO_STATEMENT` <a name="NO_STATEMENT" id="aws-vpclattice-prealpha.RuleAccessMode.NO_STATEMENT"></a>

Do not create a s.

---


### ServiceNetworkAccessMode <a name="ServiceNetworkAccessMode" id="aws-vpclattice-prealpha.ServiceNetworkAccessMode"></a>

AccesModes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAccessMode.UNAUTHENTICATED">UNAUTHENTICATED</a></code> | Unauthenticated Access. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAccessMode.AUTHENTICATED_ONLY">AUTHENTICATED_ONLY</a></code> | Unauthenticated Access. |
| <code><a href="#aws-vpclattice-prealpha.ServiceNetworkAccessMode.ORG_ONLY">ORG_ONLY</a></code> | THIS Org only. |

---

##### `UNAUTHENTICATED` <a name="UNAUTHENTICATED" id="aws-vpclattice-prealpha.ServiceNetworkAccessMode.UNAUTHENTICATED"></a>

Unauthenticated Access.

---


##### `AUTHENTICATED_ONLY` <a name="AUTHENTICATED_ONLY" id="aws-vpclattice-prealpha.ServiceNetworkAccessMode.AUTHENTICATED_ONLY"></a>

Unauthenticated Access.

---


##### `ORG_ONLY` <a name="ORG_ONLY" id="aws-vpclattice-prealpha.ServiceNetworkAccessMode.ORG_ONLY"></a>

THIS Org only.

---


### TargetType <a name="TargetType" id="aws-vpclattice-prealpha.TargetType"></a>

Types of Targets that are usable with vpclattice.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-vpclattice-prealpha.TargetType.LAMBDA">LAMBDA</a></code> | Lambda Target. |
| <code><a href="#aws-vpclattice-prealpha.TargetType.IP">IP</a></code> | IP Address Target. |
| <code><a href="#aws-vpclattice-prealpha.TargetType.INSTANCE">INSTANCE</a></code> | EC2 Instance Targets. |
| <code><a href="#aws-vpclattice-prealpha.TargetType.ALB">ALB</a></code> | Application Load Balancer Target. |

---

##### `LAMBDA` <a name="LAMBDA" id="aws-vpclattice-prealpha.TargetType.LAMBDA"></a>

Lambda Target.

---


##### `IP` <a name="IP" id="aws-vpclattice-prealpha.TargetType.IP"></a>

IP Address Target.

---


##### `INSTANCE` <a name="INSTANCE" id="aws-vpclattice-prealpha.TargetType.INSTANCE"></a>

EC2 Instance Targets.

---


##### `ALB` <a name="ALB" id="aws-vpclattice-prealpha.TargetType.ALB"></a>

Application Load Balancer Target.

---

