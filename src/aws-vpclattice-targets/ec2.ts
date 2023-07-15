import * as core from 'aws-cdk-lib';

import {
  aws_vpclattice,
  aws_ec2 as ec2,
}
  from 'aws-cdk-lib';

import { Construct } from 'constructs';


import {
  Protocol,
  IpAddressType,
  TargetConfig,
  TargetType,
} from './index';

import {
  ITarget,
} from '../index';


export interface EC2InstanceTargetProps {
  ec2instance: ec2.Instance[];
  targetConfig: TargetConfig;
}

export class EC2InstanceTarget extends core.Resource implements ITarget {
  /**
   * The TargetType
   */
  type: TargetType;
  /**
   * Targets
   */
  targets: core.aws_vpclattice.CfnTargetGroup.TargetProperty[];
  /**
   * Config
   */
  config?: core.aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty | undefined;

  constructor(scope: Construct, id: string, props: EC2InstanceTargetProps) {
    super(scope, id);

    let targets: aws_vpclattice.CfnTargetGroup.TargetProperty[] = [];

    props.ec2instance.forEach((target) => {
      targets.push({ id: target.instanceId });
    });

    var port: number;
    if (props.targetConfig.port) {
      port = props.targetConfig.port;
    } else if ( props.targetConfig.protocol === Protocol.HTTP ) {
      port = 80;
    } else {
      port = 443;
    };

    var config: aws_vpclattice.CfnTargetGroup.TargetGroupConfigProperty = {
      vpcIdentifier: props.targetConfig.vpc.vpcId,
      protocol: props.targetConfig.protocol ?? Protocol.HTTPS,
      port: port,
      ipAddressType: props.targetConfig.ipAddressType ?? IpAddressType.IPV4,
      healthCheck: props.targetConfig.healthcheck,
    };

    this.type = TargetType.INSTANCE;
    this.targets = targets;
    this.config = config;
  };
}