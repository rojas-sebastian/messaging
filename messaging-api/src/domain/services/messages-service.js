const ormPostgres = require("../orm/orm-messages");
const twilioClient = require("../repositories/repository-twilio");
const Message = require("../entities/messages");

const Logger = require("../../config/logger/logger");

const getAll = async (req, res) => {
  try {
    let respOrm = await ormPostgres.getAll();
    res.send(respOrm);
  } catch (error) {
    Logger.debug(
      `se presento el siguiente error al conectar con la base de datos: ${error}`
    );
    res.status(500).send(`error al obtener los mensaje`);
  }
};

const create = async (req, res) => {
  const { receiver, body } = req.body;

  try {
    const twilioResponse = await twilioClient.sendSMS(receiver, body);
    const message = new Message(
      body,
      twilioResponse.dateCreated.toISOString(),
      receiver
    );

    Logger.debug(`Persisting into DB ${JSON.stringify(message)}`);
    let saved = await ormPostgres.createOne(message);

    Logger.info(`SMS successfully Processed ${JSON.stringify(message)}`);
    res.status(200);
    res.send({ messageStatus: "SENT" });
  } catch (err) {
    res.status(500);
    res.send({
      message: err.message,
    });
  }
};

module.exports = {
  getAll,
  create,
};