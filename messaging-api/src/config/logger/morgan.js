const morgan = require("morgan");
const Logger = require("./logger");

// https://lioncoding.com/logging-in-express-js-using-winston-and-morgan/
const stream = {
  write: (message) => Logger.http(message),
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    stream,
    skip: () => false,
  }
);

module.exports = morganMiddleware;
