Doubts to Service Team of VPC Lattice.

1.  Is it better in ServiceNetwork for example to have methods in the IServiceNetwork interface and allow them if the serviceNetwork is created and throwing an error if it is imported?
    Or is it beeter to only have the methods in the ServiceNetwork class and not in the interface?

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
- interfaces de auth (si permitir que se añadan políticas o no si se selecciona el accessmode)
- 