const conn = require("../repositories/repository-postgres.js");

const getAll = async () => {
  const res = await conn.query("SELECT * from messages");
  return res.rows;
};

const createOne = async (message) => {
  try {
    const { body, dateSent, to } = message;
    const statement = `INSERT INTO messages (body, datesent, reciver) VALUES ($1,$2,$3)`;
    const values = [body, dateSent, to];
    //console.debug(statement);

    console.log("Antes");
    // const responsePostgres = await conn.query(statement, values);
    console.log("DEspues");
    // console.log(responsePostgres);
  } catch (err) {
    console.error(`Cannot save record into the database, error: ${err}`);
    throw new Error(`No pudimos almacenar el registro del SMS`);
  }
};

module.exports = {
  getAll,
  createOne,
};
