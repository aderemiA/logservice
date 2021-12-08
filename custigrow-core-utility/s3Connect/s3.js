const AWS = require("aws-sdk");
const fs = require("fs");
const { AWS_ACCESS_ID, AWS_SECRET_KEY, AWS_BUCKET_NAME } = process.env;
const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_ID,
  secretAccessKey: AWS_SECRET_KEY,
});

module.exports = s3;
