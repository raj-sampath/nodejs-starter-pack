const AWS = require('aws-sdk');
const applicationConfig = require("../config/application");

var awsS3ConfigPath = __dirname.replace("service", "config/aws-s3.json")
AWS.config.loadFromPath(awsS3ConfigPath);

//Intialize S3
const s3 = new AWS.S3({
    apiVersion: applicationConfig._AWS_S3_API_VERSION,
    params: {Bucket: applicationConfig._AWS_S3_BUCKET_NAME}
  });

console.log("Amazon S3 Service Starting...");

module.exports = {
    uploadImage: (base64String, imageName) => {
        if(base64String.length > 1){
            s3.putObject({
                Body: new Buffer(base64String, "base64"), 
                Key: imageName, ContentEncoding: 'base64', 
                ContentType: 'image/jpeg', ACL: 'public-read'
                }, (err, data) => {
                if(err){
                    console.log("An Error Occured While Image Upload: " + err.stack);
                    return false;
                }
                else{
                    return true;
                }
            });
        }
    },
    deleteImage: (imageName) => {
        if(imageName.indexOf("https") > 0){
            s3.deleteObject({Key: imageName}, (err, data) => {
                if(err){
                    console.log("An Error Occured While Image Delete : " + err.stack);
                    return false;
                }
                else{
                    return true;
                }
            })
        }
    }
}