import json
print('Loading function')

def lambda_handler(event, context):
    response = {
    "statusCode": 200,
    "statusDescription": "200 OK",
    "isBase64Encoded": False,
    "headers": {
    	"Content-Type": "application/json; charset=utf-8"
    	}
    }

    response['body'] = json.dumps({"message": "Hello World"})

    return response
