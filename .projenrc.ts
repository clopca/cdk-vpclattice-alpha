import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'clopca',
  authorAddress: 'clopca@amazon.es',
  cdkVersion: '2.145.0',
  keywords: ['aws-cdk', 'cdk', 'vpclattice'],
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'cdk-vpclattice-alpha',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:clopca/cdk-vpclattice-alpha.git',
  stability: 'experimental',
  license: 'Apache-2.0',
  docgen: true,
  devDeps: ['aws-cdk', 'aws-cdk-lib', 'constructs', 'ts-node', 'aws-vpclattice-prealpha'],
  peerDeps: ['aws-cdk', 'aws-cdk-lib', 'constructs'],
  description: 'A CDK L2 Construct Library for VPCLattice',
});
project.synth();