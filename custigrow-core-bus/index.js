const AWS = require("aws-sdk");
const https = require("https");
const { Consumer } = require("sqs-consumer");
const logger = require("../custigrow-core-utility/logger/logEngine");

require("dotenv").config();

const { AWS_REGION, AWS_ACCESS_ID, AWS_SECRET_KEY } = process.env;

AWS.config.update({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_ID,
  secretAccessKey: AWS_SECRET_KEY,
});

const sqs = new AWS.SQS({
  httpOptions: {
    agent: new https.Agent({
      keepAlive: true,
    }),
  },
});

exports.sendSqsMessage = async (messageData) => {
  const newMessage = sqs.sendMessage(messageData).promise();
  const data = newMessage
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });

  return await data;
};

exports.receiveMessage = async (url) => {
  const params = {
    QueueUrl: url,
    AttributeNames: ["All"],
    VisibilityTimeout: 10,
    MaxNumberOfMessages: 10,
    WaitTimeSeconds: 0,
  };

  const receivedMessage = sqs.receiveMessage(params).promise();
  const data = receivedMessage
    .then((data) => {
      if (data.Messages) {
        deleteMessage(url, data.Messages[0].ReceiptHandle);
        return data;
      }
    })
    .catch((err) => {
      throw err;
    });

  return await data;
};

const deleteMessage = (url, receiptHandle) => {
  const params = {
    QueueUrl: url,
    ReceiptHandle: receiptHandle,
  };

  sqs.deleteMessage(params, (err, data) => {
    logger.info(JSON.stringify(data));
    if (err) {
      logger.info(JSON.stringify(err));
    }
  });
};
