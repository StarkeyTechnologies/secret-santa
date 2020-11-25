var aws = require("aws-sdk");

class SMS {
    static send(senderID, phoneNumber, message) {
        // generate via aws portal
        var accessKeyID = "<<replace this>>"; 
        var secretAccessKey = "<<replace this>>";

        // don't this needs updating as it'll be updated further on
        aws.config.region = "us-east-2"; 

        aws.config.update({
            accessKeyId: accessKeyID,
            secretAccessKey: secretAccessKey,
            region: "eu-west-1", // need to update this
        });

        var sns = new aws.SNS();
        var params = {
            Message: message,
            MessageStructure: "string",
            PhoneNumber: phoneNumber,
            Subject: senderID,
            MessageAttributes: {
                "AWS.SNS.SMS.SenderID": {
                    "DataType": "String",
                    "StringValue": senderID
                }
            }
        };

        return new Promise((resolve, reject) => {
            sns.publish(params, (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = SMS;