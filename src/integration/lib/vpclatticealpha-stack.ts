import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SupportResources } from './support';
import * as vpclattice from '../..';
// import * as targets from '../../aws-vpclattice-targets';
// import { aws_iam as iam } from 'aws-cdk-lib';

export class VpcLatticeAlphaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const support = new SupportResources(this, 'SupportResources');

    // create a vpc lattice service, and associate it with the service network
    // the listener use defaults of HTTPS, on port 443, and have a default action of 404 NOT FOUND
    const myLatticeService = new vpclattice.Service(this, 'LatticeService', {
      authType: vpclattice.AuthType.AWS_IAM,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      // allowedPrincipals: [new iam.ArnPrincipal('arn:aws:iam::123456789012:role/helloRole')],
      //allowedPrincipals: [support.helloRole],
    });

    // // add a listener to the service
    // const listener = new vpclattice.Listener(this, 'Listener', {
    //   service: myLatticeService,
    // });

    // const lambdatb = new targets.LambdaTargetGroup(this, 'lambdatargetgroup', {
    //   name: 'helloworld',
    //   targets: [support.helloWorld],
    // });

    // // add a listenerRule that will use the helloworld lambda as a Target
    // listener.addListenerRule({
    //   name: 'helloworld',
    //   priority: 10,
    //   accessMode: vpclattice.RuleAccessMode.NO_STATEMENT,
    //   action: [
    //     {
    //       targetGroup: lambdatb,
    //       weight: 100,
    //     },
    //   ],
    //   httpMatch: {
    //     pathMatches: { path: '/hello' },
    //   },
    //   // we will only allow access to this service from the ec2 instance
    //   // accessMode: vpclattice.RuleAccessMode.UNAUTHENTICATED,
    // });

    // //add a listenerRule that will use the goodbyeworld lambda as a Target
    // listener.addListenerRule({
    //   name: 'goodbyeworld',
    //   priority: 20,
    //   action: [
    //     {
    //       targetGroup: new vpclattice.TargetGroup(this, 'goodbyelambdatargets', {
    //         name: 'goodbyeworld',
    //         target: new targets.LambdaTarget(this, 'goodbyeworld', { lambda: [support.goodbyeWorld] }),
    //       }),
    //     },
    //   ],

    //   httpMatch: {
    //     pathMatches: { path: '/goodbye' },
    //   },
    //   // we will only allow access to this service from the ec2 instance
    //   allowedPrincipals: [support.ec2instance.role],
    //   accessMode: vpclattice.RuleAccessMode.AUTHENTICATED_ONLY,
    // });

    // create a latticeServiceNetwork using the default settings for a Service network;
    // - Requires an IAM policy, do not allow access outside this org,
    // Override the default option to allow unauthenticated/signed requests
    // associate the vpcs
    // associate the services with the servicenetwork
    new vpclattice.ServiceNetwork(this, 'ServiceNetwork', {
      //accessMode: vpclattice.AuthPolicyAccessMode.UNAUTHENTICATED,
      // authType: vpclattice.AuthType.NONE,
      vpcAssociations: [{ vpc: support.vpc1 }],
      services: [myLatticeService],
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // myLatticeService.associateWithServiceNetwork(serviceNetwork);
  }
}
