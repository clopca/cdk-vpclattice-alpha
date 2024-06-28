#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { VpcLatticeAlphaStack } from '../lib/vpclatticealpha-stack';

const app = new cdk.App();
new VpcLatticeAlphaStack(app, 'VpclatticealphaStack', {});
