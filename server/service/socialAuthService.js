const TwitterStrategy = require("passport-twitter").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const session = require('express-session');
const authConfig = require('../config/auth');
var profileObj;

console.log("Social Auth Service Starting...");

module.exports = function(app, passport){
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(session({
            secret: 'keyboard cat', 
            resave: false, 
            saveUninitialized: true, 
            cookie: { secure: false }}));

        passport.serializeUser((user, cb) => cb(null, user));
        
        passport.deserializeUser((obj, cb) => cb(null, obj));

        //Twitter Auth
        passport.use(new TwitterStrategy({
            consumerKey: authConfig._TWITTER_CONSUMER_KEY,
            consumerSecret: authConfig._TWITTER_CONSUMER_SECRET,
            callbackURL: authConfig._TWITTER_CALLBACK_URL,
            userProfileURL: authConfig._TWITTER_USER_PROFILE_URL
        }, (accessToken, refreshToken, profile, done) => {
            profileObj = profile;
            done(null, profile)
        }));

        //Google Plus
        passport.use(new GoogleStrategy({
            clientID: authConfig._GOOGLE_CLIENT_ID,
            clientSecret: authConfig._GOOGLE_CLIENT_SECRET,
            callbackURL: authConfig._GOOGLE_CALLBACK_URL
        }, (accessToken, refreshToken, profile, done) => {
            profileObj = profile;
            done(null, profile)
        }));

        //Facebook Strategy
        passport.use(new FacebookStrategy({
            clientID: authConfig._FACEBOOK_CLIENT_ID,
            clientSecret: authConfig._FACEBOOK_CLIENT_SECRET,
            callbackURL: authConfig._FACEBOOK_CALLBACK_URL,
            profileFields: ['id', 'displayName', 'email', 'picture']
        }, (accessToken, refreshToken, profile, done) => {
            profileObj = profile;
            done(null, profile)
        }));

        app.get(authConfig._FACEBOOK_CALLBACK_URL, passport.authenticate('facebook', {failureRedirect: '/'}), (req, res) => {
            //Custom Function
            //Create User Object using profileObj
        });
    
        app.get(authConfig._TWITTER_CALLBACK_URL, passport.authenticate('twitter', {failureRedirect: '/'}), (req, res) => {
            //Custom Function
            //Create User Object using profileObj
        });
    
        app.get(authConfig._GOOGLE_CALLBACK_URL, passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
            //Custom Function
            //Create User Object using profileObj
        });
      
        app.get(authConfig._FACEBOOK_URL, passport.authenticate('facebook',{ scope: 'email' }));
      
        app.get(authConfig._TWITTER_URL, passport.authenticate('twitter'));
    
        app.get(authConfig._GOOGLE_URL, passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'profile', 'email'] }));
        
        return passport;
}
