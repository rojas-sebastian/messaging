const express = require('express')

const server = express()

require('../routes/routes.js')(server);

module.exports = server;

/* const accountSid = env.TWILIO_ACCOUNT_SID;
const authToken = env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'HAga la berraca prueba',
     from: env.SENDER_PHONE_NUMBER,
     to: ''
   })
  .then(message => console.log(message.sid)); */