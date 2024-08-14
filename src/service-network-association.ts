import * as core from 'aws-cdk-lib';
import { aws_vpclattice } from 'aws-cdk-lib';
import type { Construct } from 'constructs';
import type { IService } from './service';
import type { IServiceNetwork } from './service-network';

/**
 * Properties for associating a VPC with a Service Network
 */
export interface ServiceNetworkAssociationProps {
  /**
   * lattice Service
   */
  readonly serviceNetwork: IServiceNetwork;

  /**
   * Lattice ServiceId
   */
  readonly service: IService;
}

/**
 * Creates an Association Between a Lattice Service and a Service Network.
 * Consider using `.associateService` of the ServiceNetwork construct
 * or `.associateWithServiceNetwork` of the Service construct
 *
 * @resource AWS::VpcLattice::ServiceNetworkServiceAssociation
 */
export class ServiceNetworkServiceAssociation extends core.Resource {
  constructor(scope: Construct, id: string, props: ServiceNetworkAssociationProps) {
    super(scope, id);
    new aws_vpclattice.CfnServiceNetworkServiceAssociation(this, `LatticeAssociation${this.node.addr}`, {
      serviceIdentifier: props.service.serviceId,
      serviceNetworkIdentifier: props.serviceNetwork.serviceNetworkId,
    });
  }
}
