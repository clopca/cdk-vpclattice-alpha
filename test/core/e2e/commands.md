# Test commands for testing authenticated client

```bash
role_name=$(echo $(aws sts get-caller-identity | jq .Arn) | awk -F/ '{print $2}')
AWS_SESSION_TOKEN=$(curl -s http://169.254.169.254/latest/meta-data/iam/security-credentials/$role_name | jq -r '.Token')
AWS_ACCESS_KEY_ID=$(curl -s http://169.254.169.254/latest/meta-data/iam/security-credentials/$role_name | jq -r '.AccessKeyId')
AWS_SECRET_ACCESS_KEY=$(curl -s http://169.254.169.254/latest/meta-data/iam/security-credentials/$role_name | jq -r '.SecretAccessKey')
REGION=$(curl -s http://169.254.169.254/latest/meta-data/placement/region)

# Unauthenticated - Should not work (User: anonymous is not authorized to perform: vpc-lattice-svcs:Invoke...)
SVC_ENDPOINT=https://test-svc-06d50c46bc6202e30.7d67968.vpc-lattice-svcs.eu-central-1.on.aws # Udpate me!!!
curl $SVC_ENDPOINT

# Sigv4 Authenticated - Should work
curl $SVC_ENDPOINT --aws-sigv4 "aws:amz:$REGION:vpc-lattice-svcs" --user "$AWS_ACCESS_KEY_ID:$AWS_SECRET_ACCESS_KEY" --header "x-amz-security-token:$AWS_SESSION_TOKEN" --header "x-amz-content-sha256:UNSIGNED-PAYLOAD"
```
