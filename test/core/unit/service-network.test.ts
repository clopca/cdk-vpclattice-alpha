import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import { ServiceNetwork } from '../../../src';

describe('Service', () => {
  test('DeniesInvalidName', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN & THEN
    expect(() => {
      new ServiceNetwork(stack, 'Params', {
        name: 'servicenetwork-adgfwg2', // Invalid service name
      });
    }).toThrow();

    expect(() => {
      new ServiceNetwork(stack, 'Params2', {
        name: 'SvcNtwe1', // Invalid service name
      });
    }).toThrow();
  });

  test('BasicCreation', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new ServiceNetwork(stack, 'Params', {
      name: 'mycustomlatticeservicenetworkname',
    });

    //THEN
    Template.fromStack(stack).hasResourceProperties('AWS::VpcLattice::ServiceNetwork', {
      AuthType: 'NONE',
      Name: 'mycustomlatticeservicenetworkname',
    });
  });
});
