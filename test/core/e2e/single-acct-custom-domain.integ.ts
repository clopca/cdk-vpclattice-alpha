import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Service, ServiceNetwork } from '../../../src';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { AuthType } from '../../../src/auth';

// import * as acm from 'aws-cdk-lib/aws-certificatemanager';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-custom-domain-2');

const svcVpc = new Vpc(stack, 'SvcVpc', {
  natGateways: 1,
  maxAzs: 2,
  // Private Hosted Zone Params
  enableDnsHostnames: true,
  enableDnsSupport: true,
});

const myHostedZone = new route53.HostedZone(stack, 'HostedZone', {
  zoneName: 'cdktests.com',
  vpcs: [svcVpc]
});


const parkingSvc = new Service(stack, 'Parking', {
  name: 'parking',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  customDomainName: 'parking.cdktests.com',
  dnsEntry: {
    domainName: 'parking.cdktests.com',
    hostedZone: myHostedZone,
  },
});

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