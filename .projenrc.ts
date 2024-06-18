import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'clopca',
  authorAddress: 'clopca@amazon.es',
  cdkVersion: '2.146.0',
  keywords: ['aws-cdk', 'cdk', 'vpclattice'],
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'cdk-vpclattice-alpha',
  projenrcTs: true,
  integrationTestAutoDiscover: true,
  repositoryUrl: 'git@github.com:clopca/cdk-vpclattice-alpha.git',
  stability: 'experimental',
  license: 'Apache-2.0',
  docgen: true,
  devDeps: [
    'ts-node',
    'aws-cdk-lib@2.146.0', // Exact version as dev dependency
    'constructs@10.0.5', // Exact version as dev dependency
    '@aws-cdk/integ-tests-alpha@2.146.0-alpha.0',
  ],
  peerDeps: ['aws-cdk-lib@^2.146.0', 'constructs@^10.0.5'],
  // deps: ['aws-cdk-lib@^2.146.0', 'constructs@^10.0.5'],
  description: 'A CDK L2 Construct Library for VPCLattice',
  npmProvenance: false,
});

const common_exclude = ['cdk.out', 'cdk.context.json'];

project.npmignore!.exclude(...common_exclude);
project.gitignore!.exclude(...common_exclude);

project.synth();
