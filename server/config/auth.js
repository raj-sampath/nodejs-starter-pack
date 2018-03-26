const authCallbackURLHost= "http://localhost:3000/auth";

module.exports = {
    _ITERATIONS: 10000,
    _HASH_FUNCTION: "pbkdf2_sha256",
    _SALT_LENGTH: 12,
    _GLOBAL_TOKEN_FOR_TESTING: "",
    _FACEBOOK_CLIENT_ID: "",
    _FACEBOOK_CLIENT_SECRET: "",
    _FACEBOOK_CALLBACK_URL: "/auth/facebook/callback",
    _FACEBOOK_URL: "/auth/facebook",
    _TWITTER_CONSUMER_KEY: "",
    _TWITTER_CONSUMER_SECRET: "",
    _TWITTER_CALLBACK_URL: "/auth/twitter/callback",
    _TWITTER_URL: "/auth/twitter",
    _TWITTER_USER_PROFILE_URL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
    _GOOGLE_CLIENT_ID: "",
    _GOOGLE_CLIENT_SECRET: "",
    _GOOGLE_CALLBACK_URL:  "/auth/google/callback",
    _GOOGLE_URL:  "/auth/google"

}