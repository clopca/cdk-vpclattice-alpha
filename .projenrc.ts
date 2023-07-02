import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Andrew Frazer',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  cdkVersion: '2.80.0',
  keywords: ['aws-cdk', 'cdk', 'vpclattice'],
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'aws-vpclattice-prealpha',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/raindancers/aws-vpclattice-prealpha.git',
  publishToPypi: {
    distName: 'aws-vpclattice-prealpha',
    module: 'vpc_lattice',
  },
  stability: 'experimental',
  docgen: true,
});
project.synth();