const {TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN} = require('../../util/env')


const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = client;