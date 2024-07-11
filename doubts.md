# VPC Lattice Service Team Doubts

**Doubts to Service Team of VPC Lattice.**

1. Is it better in ServiceNetwork for example to have methods in the IServiceNetwork interface and allow them if the serviceNetwork is created and throwing an error if it is imported?
   Or is it better to only have the methods in the ServiceNetwork class and not in the interface?

public share(props: ShareServiceNetworkProps): void {
if (this.imported) {
throw new Error('It is not possible to share an imported Service Network');
}

    new ram.CfnResourceShare(this, 'ServiceNetworkShare', {
      name: props.name,
      resourceArns: [this.serviceNetworkArn],
      allowExternalPrincipals: props.allowExternalPrincipals,
      principals: props.accounts,
    });

}

1. Do we prefer default AuthType in Service and ServiceNetwork to be AWS_IAM or NONE?

- Retain vs destroy default
- Auth interfaces (Do we want to allow to add policies or not in case AccessMode is selected)

1. What is the effect of DNS_entry in the CFN Resource for Service? https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html#cfn-vpclattice-service-dnsentry
