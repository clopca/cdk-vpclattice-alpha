import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { InstanceTargetGroup, RequestProtocol, ProtocolVersion } from '../../../src/aws-vpclattice-targets';

describe('InstanceTG', () => {
    test('DeniesInvalidProtocolVersionCombo', () => {
        // GIVEN
        const stack = new cdk.Stack();
        const vpc = new Vpc(stack, 'VPC', {});

        // WHEN & THEN
        expect(() => {
            new InstanceTargetGroup(stack, 'InstanceTG', {
                vpc,
                protocol: RequestProtocol.TCP,
                protocolVersion: ProtocolVersion.GRPC,
            });
        }).toThrow();
    });
});
