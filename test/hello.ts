#!/usr/bin/env node
//import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Service } from '../src';


export class SampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new Service(this, 'test1', {
      serviceName: 'ytest',
    });
  }
}

const app = new cdk.App();
new SampleStack(app, 'AwsBackupS3Stack', {

});
