const { Pool } = require("pg");
const env = require("../../config/environment/env");
const Logger = require("../../config/logger/logger");

// https://node-postgres.com/api/client
const config = {
  user: env.POSTGRES_USER,
  host: env.POSTGRES_HOST,
  database: env.POSTGRES_DATABASE,
  password: env.POSTGRES_PASSWORD,
  port: env.POSTGRES_PORT,
  statement_timeout: 1000,
  query_timeout: 1000,
  connectionTimeoutMillis: 1000,
};
const pool = new Pool(config);

module.exports = pool;
