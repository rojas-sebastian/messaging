require('dotenv').config()
const env = process.env;

const environmentVariables = {
    SENDER_PHONE_NUMBER: env.SENDER_PHONE_NUMBER,
    TWILIO_ACCOUNT_SID: env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: env.TWILIO_AUTH_TOKEN
}

module.exports = environmentVariables;