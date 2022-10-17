const Logger = require("../../config/logger/logger");
const twilio = require("twilio");
const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  SENDER_PHONE_NUMBER,
} = require("../../config/env");

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

twilioClient.sendSMS = async (to, body) => {
  try {
    Logger.debug(`Sending sms message to ${to}, ${body}`);
    return await twilioClient.messages.create({
      from: SENDER_PHONE_NUMBER,
      to,
      body,
    });
  } catch (err) {
    Logger.error(`Cannot send SMS from Twilio; err: ${err}`);
    throw new Error(`Problemas internos al enviar el SMS`);
  }
};

module.exports = twilioClient;
