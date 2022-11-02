const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config()

/*  // Enter copied or downloaded access ID and secret key here
const ID = 'AKIAZJJ7H4UFQYJG4TGP';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'test-bucket-anita';  */

const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET
});

 const params = {
    Bucket: process.env.BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "ap-south-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
}); 