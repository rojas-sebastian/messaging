require("dotenv").config({ path: `${__dirname}/.env` });
const env = process.env;

const environmentVariables = {
  SENDER_PHONE_NUMBER: env.SENDER_PHONE_NUMBER,
  TWILIO_ACCOUNT_SID: env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: env.TWILIO_AUTH_TOKEN,
  POSTGRES_HOST: env.POSTGRES_HOST,
  POSTGRES_USER: env.POSTGRES_USER,
  POSTGRES_PASSWORD: env.POSTGRES_PASSWORD,
  POSTGRES_DATABASE: env.POSTGRES_DATABASE,
  POSTGRES_PORT: env.POSTGRES_PORT,
};

module.exports = environmentVariables;
