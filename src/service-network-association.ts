import * as core from 'aws-cdk-lib';
import { aws_vpclattice } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IService } from './service';
import { IServiceNetwork } from './service-network';

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
 * Consider using `.addService` of the ServiceNetwork construct
 *
 * @resource AWS::VpcLattice::ServiceNetworkServiceAssociation
 */
export class ServiceNetworkAssociation extends core.Resource {
  constructor(scope: Construct, id: string, props: ServiceNetworkAssociationProps) {
    super(scope, id);

    new aws_vpclattice.CfnServiceNetworkServiceAssociation(this, `LatticeAssociation${this.node.addr}`, {
      serviceIdentifier: props.service.serviceId,
      serviceNetworkIdentifier: props.serviceNetwork.serviceNetworkId,
    });
  }
}
