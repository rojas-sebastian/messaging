const healthCheckController = require("../controller/healthcheck.js");
const messagesController = require("../controller/messages.js");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("../config/api-docs/openapi");

const router = (app) => {
  app.use(
    "/messaging/api/v1/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsdoc, { explorer: true })
  );
  app.use("/messaging/api/v1/healthcheck", healthCheckController);

  app.use("/messaging/api/v1/messages", messagesController);
};

module.exports = router;
