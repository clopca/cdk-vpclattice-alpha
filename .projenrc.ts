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
  devDeps: [
    'ts-node',
    '@aws-cdk/assertions@^2.145.0', // Adding @aws-cdk/assertions for testing
  ],
  peerDeps: ['aws-cdk-lib@^2.145.0', 'constructs@^10.0.0'],
  deps: ['aws-cdk-lib@^2.145.0', 'constructs@^10.0.0'],
  description: 'A CDK L2 Construct Library for VPCLattice',
});

const common_exclude = ['cdk.out', 'cdk.context.json'];

project.npmignore!.exclude(...common_exclude);
project.gitignore!.exclude(...common_exclude);

project.synth();
