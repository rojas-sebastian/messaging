const { Pool } = require("pg");
const env = require("../../config/env");

const config = {
  user: env.POSTGRES_USER,
  host: env.POSTGRES_HOST,
  database: env.POSTGRES_DATABASE,
  password: env.POSTGRES_PASSWORD,
  port: env.POSTGRES_PORT,
  statement_timeout: 500,
};

const pool = new Pool(config);

module.exports = pool;
