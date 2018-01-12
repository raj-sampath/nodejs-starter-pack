var bucketName = "";

module.exports = {
    _SMTP_HOSTNAME: "",
    _SMTP_PORT: 465,
    _SMTP_USERNAME: "",
    _SMTP_PASSWORD: "",
    _FROM_ADDRESS: "s",
    _AWS_S3_BUCKET_NAME: bucketName,
    _AWS_S3_API_VERSION: "2006-03-01",
    __AWS_S3_IMAGE_URL: () => {
        return "https://s3-us-west-2.amazonaws.com/" + bucketName + "/";
    },
    _STRIPE_PUBLISHING_KEY: "",
    _STRIPE_SECRET_KEY: ""
}