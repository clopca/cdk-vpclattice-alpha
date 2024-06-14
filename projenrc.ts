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
  repositoryUrl: 'https://github.com/clopca/cdk-vpclattice-alpha.git',
  publishToPypi: {
    distName: 'cdk-vpclattice-alpha',
    module: 'vpc_lattice',
  },
  stability: 'experimental',
  docgen: true,
});
project.synth();
