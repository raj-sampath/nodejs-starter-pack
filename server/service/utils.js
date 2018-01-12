const randomstring = require("randomstring");

module.exports = {
    getRandomString: (len) => randomstring.generate(len),
    createWhereClause: (where, attributes, order, group) => {
        return {where, attributes, order, group}
    },
    createUserObjectFromFbProfile: (profile) => {
        var nameArray = profile.displayName.split(" ");
        var firstName;
        var lastName;
        if(nameArray.lenght > 0){
            firstName = nameArray[0];
            lastName = nameArray[2];
        }
        else{
            firstName = nameArray[0];
            lastName = nameArray[0];
        }

        return {
            body: {
            firstName,
            lastName,
            type: 1,
            email: profile.emails[0].value,
            password: "agilizTech123"
        }}
    },
    getRequestBodyObject: (body) => {
        return {
            body
        }
    }
}