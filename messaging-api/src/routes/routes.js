const healthCheckController = require("../controller/healthcheck.js");
const messagesController = require("../controller/messages.js");

const router = (app) => {
  app.use("/messaging/api/v1/healthcheck", healthCheckController);
  // TODO - Add swagger
  // app.use("/messaging/api/v1/api-docs", openApiController);
  app.use("/messaging/api/v1/messages", messagesController);
};

module.exports = router;
