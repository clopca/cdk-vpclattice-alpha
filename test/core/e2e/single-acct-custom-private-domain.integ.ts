import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as acmpca from 'aws-cdk-lib/aws-acmpca';
import { Service, ServiceNetwork } from '../../../src';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { AuthType } from '../../../src/auth';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-custom-domain-2');

const svcVpc = new Vpc(stack, 'SvcVpc', {
  natGateways: 1,
  maxAzs: 2,
  // Private Hosted Zone Params
  enableDnsHostnames: true,
  enableDnsSupport: true,
});

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
  },
});
const certificateAuthority = acmpca.CertificateAuthority.fromCertificateAuthorityArn(stack, 'CA', cfnCertificateAuthority.attrArn);

// ------------------------------------------------------
// Private Certificate
// ------------------------------------------------------
const certificate = new acm.PrivateCertificate(stack, 'PrivateCertificate', {
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
});

// ------------------------------------------------------
// Service
// ------------------------------------------------------
const parkingSvc = new Service(stack, 'Parking', {
  name: 'parking',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  customDomainName: 'parking.cdktests.com',
  certificate: certificate
});

new route53.CnameRecord(stack, 'cname', {
  recordName: 'parking',
  zone: privateHostedZone,
  domainName: parkingSvc.domainName,
})

new ServiceNetwork(stack, 'ServiceNetwork', {
  name: 'superapps-vcnetwork',
  services: [parkingSvc],
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  vpcAssociations: [{ vpc: svcVpc, }],
});


new cdk.CfnOutput(stack, 'DnsName', {
  value: parkingSvc.domainName,
});

new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});

app.synth();