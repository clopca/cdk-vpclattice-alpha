import { aws_s3 as s3, aws_logs as logs, aws_kinesis as kinesis } from 'aws-cdk-lib';

/**
 * Logging options
 */
export abstract class LoggingDestination {
  // ------------------------------------------------------
  // Static constructor
  // ------------------------------------------------------
  /**
   * Send logs to Amazon S3
   * @param bucket the S3 bucket where to send logs
   */
  public static s3(bucket: s3.IBucket): LoggingDestination {
    return {
      name: bucket.bucketName,
      arn: bucket.bucketArn,
      addr: bucket.node.addr,
    };
  }
  /**
   * Send logs to Amazon CloudWatch
   * @param logGroup the log group in CloudWatch Logs to use
   */
  public static cloudwatch(logGroup: logs.ILogGroup): LoggingDestination {
    return {
      name: logGroup.logGroupName,
      arn: logGroup.logGroupArn,
      addr: logGroup.node.addr,
    };
  }

  /**
   * Stream logs to Kinesis
   * @param stream
   */
  public static kinesis(stream: kinesis.IStream): LoggingDestination {
    return {
      name: stream.streamName,
      arn: stream.streamArn,
      addr: stream.node.addr,
    };
  }

  // ------------------------------------------------------
  // Properties
  // ------------------------------------------------------
  /**
   * A name of the destination
   */
  public abstract readonly name: string;

  /**
   * An Arn of the destination
   */
  public abstract readonly arn: string;

  /**
   * unique addr of the destination
   */
  public abstract readonly addr: string;

  protected constructor() { }
}
