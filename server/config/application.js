var bucketName = "roonga-roonga-roonga";

module.exports = {
    _SMTP_HOSTNAME: "email-smtp.us-west-2.amazonaws.com",
    _SMTP_PORT: 465,
    _SMTP_USERNAME: "AKIAJ2BLJ6OJQA2XWI4Q",
    _SMTP_PASSWORD: "Am9lLeORG7zp74ePSgnWGgbOWiYOmwxboqS2vnOK5xuM",
    _FROM_ADDRESS: "shyamraj.sampath@agilizTech.com",
    _AWS_S3_BUCKET_NAME: bucketName,
    _AWS_S3_API_VERSION: "2006-03-01",
    __AWS_S3_IMAGE_URL: () => {
        return "https://s3-us-west-2.amazonaws.com/" + bucketName + "/";
    },
    _STRIPE_PUBLISHING_KEY: "pk_test_CvqigMWVYEVSgfSc7q0DVDrC",
    _STRIPE_SECRET_KEY: "sk_test_GxzH7IK52Zio59tT5R248AWP",
    _PERCENTAGE_ROUND_PRECISION: 2
}