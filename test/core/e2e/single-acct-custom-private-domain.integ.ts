import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as acmpca from 'aws-cdk-lib/aws-acmpca';
import { HTTPFixedResponse, LambdaTargetGroup, ListenerProtocol, PathMatchType, Service, ServiceNetwork } from '../../../src';
import { AmazonLinuxGeneration, Instance, Peer, Port, SecurityGroup, UserData, Vpc } from 'aws-cdk-lib/aws-ec2';
import { AuthType } from '../../../src/auth';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-custom-domain');

// ------------------------------------------------------
// VPCs
// ------------------------------------------------------
const svcVpc = new Vpc(stack, 'SvcVpc', {
  natGateways: 1,
  maxAzs: 2,
  // Private Hosted Zone Params
  enableDnsHostnames: true,
  enableDnsSupport: true,
});
const clientsVpc = new Vpc(stack, 'ClientsVPC', { natGateways: 1 });

// ------------------------------------------------------
// Security Groups
// ------------------------------------------------------
const clientsSg = new SecurityGroup(stack, 'ResSG', {
  securityGroupName: 'reservation-sg',
  vpc: clientsVpc,
});
// const lambdaSg = new SecurityGroup(stack, 'LambdaSg', {
//   securityGroupName: 'lambda-sg',
//   vpc: svcVpc,
// });

for (const sg of [clientsSg]) {
  sg.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.allTraffic());
  sg.addIngressRule(Peer.ipv4('169.254.0.0/16'), Port.allTraffic());
}
// ------------------------------------------------------
// Private CA for domain
// ------------------------------------------------------
const cfnCertificateAuthority = new acmpca.CfnCertificateAuthority(stack, 'PrivateCA', {
  type: 'ROOT',
  keyAlgorithm: 'RSA_2048',
  signingAlgorithm: 'SHA256WITHRSA',
  subject: {
    country: 'ES',
    organization: 'CDK Tests',
    organizationalUnit: 'Engineering',
    state: 'Madrid',
    locality: 'Madrid',
    commonName: 'cdktests.com',
  },
});

// L2 construct
const certificateAuthority = acmpca.CertificateAuthority.fromCertificateAuthorityArn(
  stack, 'PrivateCA-L2', cfnCertificateAuthority.attrArn
)

// ACM Authorization to Manage Certificates
new acmpca.CfnPermission(stack, 'CAPermission', {
  actions: ['IssueCertificate', 'GetCertificate', "ListPermissions"],
  principal: 'acm.amazonaws.com',
  certificateAuthorityArn: cfnCertificateAuthority.attrArn,
})

// Root CA certificate
const cfnCertificate = new acmpca.CfnCertificate(stack, 'Certificate', {
  certificateAuthorityArn: cfnCertificateAuthority.attrArn,
  certificateSigningRequest: cfnCertificateAuthority.attrCertificateSigningRequest,
  signingAlgorithm: 'SHA256WITHRSA',
  templateArn: "arn:aws:acm-pca:::template/RootCACertificate/V1",
  validity: {
    type: 'YEARS',
    value: 10,
  },
});

// Enable CA
new acmpca.CfnCertificateAuthorityActivation(stack, 'CertActivation-PAA', {
  certificateAuthorityArn: cfnCertificateAuthority.attrArn,
  certificate: cfnCertificate.attrCertificate,
  status: "ACTIVE"
});


// ------------------------------------------------------
// Private Certificate
// ------------------------------------------------------
const privateCertificate = new acm.PrivateCertificate(stack, 'PrivateCertificate', {
  domainName: '*.cdktests.com',
  certificateAuthority: certificateAuthority,
  keyAlgorithm: acm.KeyAlgorithm.RSA_2048,
});

// ------------------------------------------------------
// Private Hosted Zone
// ------------------------------------------------------
const privateHostedZone = new route53.PrivateHostedZone(stack, 'PrivateHostedZone', {
  zoneName: 'cdktests.com',
  vpc: svcVpc,
  comment: 'Private hosted zone for CDK tests',
});
privateHostedZone.addVpc(clientsVpc)

// ------------------------------------------------------
// Service
// ------------------------------------------------------
const parkingSvc = new Service(stack, 'Parking', {
  name: 'parking',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  customDomainName: 'parking.cdktests.com',
  certificate: privateCertificate,
  dnsEntry: {
    domainName: 'parking.cdktests.com',
    hostedZone: privateHostedZone,
  },
});

new route53.CnameRecord(stack, 'cname', {
  recordName: 'parking',
  zone: privateHostedZone,
  domainName: parkingSvc.domainName,
})

// ------------------------------------------------------
// Lambda TG
// ------------------------------------------------------
const lambdaFunction = new Function(stack, 'LatticeLambdaReservation', {
  runtime: Runtime.PYTHON_3_12,
  code: Code.fromAsset(path.join(__dirname, 'lambda')),
  handler: 'index.lambda_handler',
  timeout: cdk.Duration.minutes(4),
  vpc: svcVpc,
  // securityGroups: [lambdaSg]
});

const reservationTg = new LambdaTargetGroup(stack, 'LambdaTG', {
  name: 'reservation-tg',
  target: lambdaFunction,
});

// ------------------------------------------------------
// Listener & Rules
// ------------------------------------------------------
const parkingListener = parkingSvc.addListener({
  name: 'listener1',
  protocol: ListenerProtocol.HTTP,
  port: 80,
  defaultAction: {
    httpFixedResponse: HTTPFixedResponse.NOT_FOUND,
  },
});


parkingListener.addListenerRule({
  name: 'reservation',
  priority: 10,
  conditions: {
    pathMatch: {
      pathMatchType: PathMatchType.EXACT,
      path: '/reservation',
    },
  },
  action: {
    targetGroup: reservationTg,
  },
});

// ------------------------------------------------------
// Service Network
// ------------------------------------------------------
new ServiceNetwork(stack, 'ServiceNetwork', {
  name: 'superapps-vcnetwork',
  services: [parkingSvc],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: svcVpc }, { vpc: clientsVpc }],
});

// ------------------------------------------------------
// Testing Instance
// ------------------------------------------------------
const clientEc2 = new Instance(stack, 'Ec2Instance', {
  instanceName: 'client-instance',
  vpc: clientsVpc,
  securityGroup: clientsSg,
  instanceType: new cdk.aws_ec2.InstanceType('t3.micro'),
  machineImage: new cdk.aws_ec2.AmazonLinuxImage({ generation: AmazonLinuxGeneration.AMAZON_LINUX_2 }),
  ssmSessionPermissions: true,
  userData: UserData.custom(`
    #!/bin/bash
    sudo yum install -y jq
  `),
});

// ------------------------------------------------------
// Outputs
// ------------------------------------------------------
new cdk.CfnOutput(stack, 'DnsName', {
  value: `http://${parkingSvc.domainName}`,
});

new cdk.CfnOutput(stack, 'ClientSsmUrl', {
  value: `https://${stack.region}.console.aws.amazon.com/systems-manager/session-manager/${clientEc2.instanceId}?region=${stack.region}`,
});

// ------------------------------------------------------
// Integ Test Runner
// ------------------------------------------------------
new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});
app.synth();