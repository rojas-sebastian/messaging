const { Pool } = require('pg')

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'messaging',
  password: 'mysecretpassword',
  port: 5432,
}

const pool = new Pool(config)

module.exports = pool