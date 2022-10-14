const express = require('express')
const app = express()
const env = require('./env')

app.get('/', function (req, res) {
  res.send(`variable ${env.SENDER_PHONE_NUMBER}`)
})

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`)
})

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