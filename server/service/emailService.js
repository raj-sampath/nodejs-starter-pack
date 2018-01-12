const nodemailer = require('nodemailer');
const applicationConfig = require("../config/application");
const messages = require("../generic/messages");

const emailClient = nodemailer.createTransport({
    host: applicationConfig._SMTP_HOSTNAME,
    port: applicationConfig._SMTP_PORT,
    secure: true, 
    auth: { user: applicationConfig._SMTP_USERNAME, pass: applicationConfig._SMTP_PASSWORD }
});

console.log('Email Service Starting...');

module.exports = {
    sendMail: (from, to, subject, text, html, res) => {
        emailClient.sendMail({from, to, subject, text, html})
        .then((info) => {
            if(res == undefined)
                console.log("Mail Sent Successfully : ", info)
            else
                res.status(200).send(messages.__GENERIC_MESSAGE_OBJ(messages._GENERIC_SUCCESS, messages._PASSWORD_RESET_MSG));
        }).catch((error) => {
            if(res == undefined)
                console.log("Mail Sent Successfully : ", error)
            else
                res.status(500).send(messages.__GENERIC_MESSAGE_OBJ(messages._GENERIC_FAILURE, messages._GENERIC_SERVER_ERROR_MSG));
        });
    }
}