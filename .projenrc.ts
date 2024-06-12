import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Cristobal Lopez",
  authorAddress: "clopca@amazon.es",
  cdkVersion: "2.80.0",
  keywords: ["aws-cdk", "cdk", "vpclattice"],
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "cdk-vpclattice-alpha",
  projenrcTs: true,
  repositoryUrl: "https://github.com/clopca/cdk-vpclattice-alpha.git",
  publishToPypi: {
    distName: "cdk-vpclattice-alpha",
    module: "vpc_lattice",
  },
  stability: "experimental",
  docgen: true,
});
project.synth();
