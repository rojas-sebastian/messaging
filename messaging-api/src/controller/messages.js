const express = require("express");
const router = express.Router();
const messagesService = require("../domain/services/messages-service.js");

/**
 * @openapi
 * /messages:
 *      get:
 *          summary: Retrieve a list of messages sent from the application
 *          description: Retrieve an array of Messages
 *      responses:
 *          200:
 *              description: A list of messages.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Message'
 */
router.get("/", messagesService.getAll);

/**
 * @openapi
 * /messaging/api/v1/messages:
 *      post:
 *          summary: Add message to be sent into the application
 *          description: Retrieve OK if the message was successfully sent
 *      requestBody:
 *          application/json:
 *              content:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          receiver:
 *                              type: string
 *                          body:
 *                              type: string
 *                      required:
 *                          - receiver
 *                          - body
 *              examples:
 *                  msg:
 *                      summary: An example of message to be sent
 *                  value:
 *                      receiver: +533103214567
 *                      body: Ejemplo de mensaje a ser enviado
 *      responses:
 *          '200':
 *              description: Send a message
 *              content:
 *                  application/json:
 *          '400':
 *              description: Error on message
 */
router.post("/", messagesService.create);

module.exports = router;
