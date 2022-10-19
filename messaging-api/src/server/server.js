const express = require("express");
const compression = require("compression");
const cors = require("cors");
const router = require("../routes/routes");
const morganMiddleware = require("../config/logger/morgan");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(compression());
server.use(cors());
server.use(morganMiddleware);

server.disable("x-powered-by");
server.disable("etag");

router(server);

module.exports = server;
