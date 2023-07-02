import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Andrew Frazer',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'aws-vpclattice-prealpha',
  projenrcTs: true,
  repositoryUrl: 'https://mrpackethead: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@github.com/raindancers/aws-vpclattice-prealpha.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();