import * as integ from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { AuthType, Service } from '../../../src';

// ------------------------------------------------------
// Create Resource Stack
// ------------------------------------------------------
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-vpclattice-e2e-test1');

// ------------------------------------------------------
// Service
// ------------------------------------------------------
new Service(stack, 'Wowza', {
  name: 'wowza',
  authType: AuthType.NONE,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  customDomain: {
    domainName: 'wowza.cdktests.com',
    certificate: acm.Certificate.fromCertificateArn(
      stack,
      'Cert',
      'arn:aws:acm:eu-central-1:249522321342:certificate/6a8b25b4-0e16-4eeb-8bf3-8e674c2eb529',
    ),
    hostedZone: route53.HostedZone.fromHostedZoneId(stack, 'phz', 'Z09645912NXYR4SWWM1J7'),
  },
});

// ------------------------------------------------------
// Integ Test Runner
// ------------------------------------------------------
new integ.IntegTest(app, 'ServiceNetworkTest', {
  testCases: [stack],
});
app.synth();
