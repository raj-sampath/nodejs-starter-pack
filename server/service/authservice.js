const hashers = require("node-django-hashers");
const authconfig = require("../config/auth");
const jwt = require("jsonwebtoken");
const utils = require("./utils");
const accessToken = "agilizAuth";
const _ = require("lodash");

module.exports = {
    checkPassword: (password, hashedPassword) => {
        var hashName = hashers.identifyHasher(hashedPassword);
        var hashAlgorithm = hashers.getHasher(hashName);
        return hashAlgorithm.verify(password, hashedPassword);
    },
    makePassword: (password) => {
        var hashAlgorithm = hashers.getHasher("pbkdf2_sha256");
        return hashAlgorithm.encode(password, utils.getRandomString(authconfig._SALT_LENGTH));
    },
    validatePassword: (password) => {
        if(password && password.length >= 8)
            return true;
        else
            return false;
    },
    createAuthToken: (data) => {
        return jwt.sign({_id: data.id}, accessToken)
    },
    validateAuthToken: (req, id) => {
        if(_.isString(req.header("auth")) && req.header("auth").length > 0)
        {
            if(req.header("auth") == authconfig._GLOBAL_TOKEN_FOR_TESTING)
                return true;

            var decodedToken = jwt.decode(req.header("auth"), accessToken);
            if(_.has(decodedToken, "_id") && decodedToken._id == id)
                return true;
            else
                return false;
        }
        else    
            return false;
    }
}