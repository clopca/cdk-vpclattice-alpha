import * as core from 'aws-cdk-lib';

import {
  aws_vpclattice,
  aws_lambda,
}
  from 'aws-cdk-lib';

import { Construct } from 'constructs';


import {
  TargetType,
} from './index';

import {
  ITarget,
} from '../index';


export interface LambdaTargetProps {
  lambda: aws_lambda.Function[];
}

export class LambdaTarget extends core.Resource implements ITarget {
  /**
   * The TargetType
   */
  type: TargetType;
  /**
   * Targets
   */
  targets: core.aws_vpclattice.CfnTargetGroup.TargetProperty[];

  constructor(scope: Construct, id: string, props: LambdaTargetProps) {
    super(scope, id);

    let targets: aws_vpclattice.CfnTargetGroup.TargetProperty[] = [];
    props.lambda.forEach((target) => {
      targets.push({ id: target.functionArn });
    });

    this.type = TargetType.LAMBDA;
    this.targets = targets;

  };
}
