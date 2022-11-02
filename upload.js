const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config()

/* const ID = 'AKIAZJJ7H4UFQYJG4TGP';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'test-bucket-anita'; */

const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET
});

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: "test-bucket-anita",
        Key: 'dummy-file.txt', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('dummy-file.txt')