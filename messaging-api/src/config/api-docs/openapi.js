// https://blog.logrocket.com/documenting-your-express-api-with-swagger/
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Messaging API",
      version: "0.1.0",
      description:
        "This is a messaging API rest api to send SMS and list messages sent",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Sebastian Felipe Rojas",
        url: "https://rojasfsebastianf.com",
        email: "rojasfsebastianf@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001/messaging/api/v1",
      },
    ],
  },
  apis: [
    `${__dirname}/../../controller/*.js`,
    `${__dirname}/../../domain/entities/*.js`,
  ],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
