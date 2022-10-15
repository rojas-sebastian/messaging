const express = require('express')

const server = express()

require('../routes/routes.js')(server);

module.exports = server;