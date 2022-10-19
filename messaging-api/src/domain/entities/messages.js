/**
 * @openapi
 * components:
 *  schemas:
 *    Message:
 *      type: object
 *      required:
 *      - body
 *      - receiver
 *      properties:
 *        id:
 *          type: integer
 *          description: Id of the message
 *        body:
 *          type: string
 *          description: The content of your message.
 *        receiver:
 *          type: string
 *          description: The international phone number who will receive the message
 *        datesent:
 *          type: string
 *          description: The date when the message was sent; the date has the ISO8601 format
 */
class message {
  constructor(body, dateSent, receiver) {
    this.body = body;
    this.dateSent = dateSent;
    this.receiver = receiver;
  }
}

module.exports = message;
