const authCallbackURLHost= "http://localhost:3000/auth";

module.exports = {
    _ITERATIONS: 10000,
    _HASH_FUNCTION: "pbkdf2_sha256",
    _SALT_LENGTH: 12,
    _GLOBAL_TOKEN_FOR_TESTING: "shyamisaverygoodboy",
    _FACEBOOK_CLIENT_ID: "872735699569821",
    _FACEBOOK_CLIENT_SECRET: "9599051f69083df515d98ac6828f9807",
    _FACEBOOK_CALLBACK_URL: "/auth/facebook/callback",
    _FACEBOOK_URL: "/auth/facebook",
    _TWITTER_CONSUMER_KEY: "2xVzO8NvXqEoBeyNoCV6mH0Gx",
    _TWITTER_CONSUMER_SECRET: "eDxDQ2irvx4A1piok8jxIT1CpSy0o2jc0rXWt3DH1jYxUmDeb5",
    _TWITTER_CALLBACK_URL: "/auth/twitter/callback",
    _TWITTER_URL: "/auth/twitter",
    _TWITTER_USER_PROFILE_URL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
    _GOOGLE_CLIENT_ID: "148750530598-hsh38jpd7k19nrlqqe7pggalldl77ma3.apps.googleusercontent.com",
    _GOOGLE_CLIENT_SECRET: "2nBX80QbOWzt-fUKH_rf5vZO",
    _GOOGLE_CALLBACK_URL:  "/auth/google/callback",
    _GOOGLE_URL:  "/auth/google"

}