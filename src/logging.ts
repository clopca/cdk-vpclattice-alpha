import type { aws_s3 as s3, aws_logs as logs, aws_kinesis as kinesis } from 'aws-cdk-lib';

export enum LoggingDestinationType {
  S3 = 'S3',
  CLOUDWATCH_LOGS = 'CLOUDWATCH_LOGS',
  KINESIS_DATA_STREAM = 'KINESIS_DATA_STREAM',
}

/**
 * Enables access logs to be sent to Amazon CloudWatch, Amazon S3,
 * and/or Amazon Kinesis Data Firehose. The service network owner can
 * use the access logs to audit the services in the network.
 * At most one destination per destination type.
 * @see https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html
 *
 */
export abstract class LoggingDestination {
  // ------------------------------------------------------
  // Static constructor
  // ------------------------------------------------------
  /**
   * Send logs to Amazon S3
   * @param bucket the S3 bucket to send logs to
   */
  public static s3(bucket: s3.IBucket): LoggingDestination {
    return {
      name: bucket.bucketName,
      arn: bucket.bucketArn,
      addr: bucket.node.addr,
      destinationType: LoggingDestinationType.S3,
    };
  }
  /**
   * Send logs to Amazon CloudWatch.
   * @param logGroup the log group in CloudWatch Logs to use
   */
  public static cloudwatch(logGroup: logs.ILogGroup): LoggingDestination {
    return {
      name: logGroup.logGroupName,
      arn: logGroup.logGroupArn,
      addr: logGroup.node.addr,
      destinationType: LoggingDestinationType.CLOUDWATCH_LOGS,
    };
  }

  /**
   * Use Amazon Kinesis Data Firehose for delivering real-time streaming data
   * to destinations such as Amazon S3, Amazon Redshift, Amazon OpenSearch,
   * or any custom HTTP endpoint.
   * @param stream the delivery stream to send logs to
   */
  public static kinesis(stream: kinesis.IStream): LoggingDestination {
    return {
      name: stream.streamName,
      arn: stream.streamArn,
      addr: stream.node.addr,
      destinationType: LoggingDestinationType.KINESIS_DATA_STREAM,
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

  /**
   * Type of the destination
   */
  public abstract readonly destinationType: LoggingDestinationType;

  protected constructor() {}
}
