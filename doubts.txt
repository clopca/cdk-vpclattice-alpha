Doubts to Service Team of VPC Lattice.

1. 
Is it better in ServiceNetwork for example to have methods in the IServiceNetwork interface and allow them if the serviceNetwork is created and throwing an error if it is imported?
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


2. Is it better to define the class Import in each method of import (by arn, by id) like in ecr module of cdk, or to have an ImportedService class with its constructor and have it instanciated in the import methods?
 public static fromServiceArn(scope: Construct, id: string, arn: string): IService {
    class Import extends ServiceBase {
      public readonly serviceArn = arn;
      public readonly serviceId = core.Arn.extractResourceName(arn, 'service');
    }
    return new Import(scope, id);
  }

  vs

  public static fromServiceArn(scope: Construct, id: string, arn: string): IService {
    return new ImportedService(scope, id, { serviceArn: arn });
  }

3. Do we prefer default AuthType in Service and ServiceNetwork to be AWS_IAM or NONE?



