const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /healthcheck/:
 *      get:
 *          summary: Retrive status of the server
 *          description: Retrieve OK if the server is running
 *      responses:
 *          200:
 *              description: Status UP
 */
router.get("/", (req, res) => {
  res.send({
    status: "UP",
  });
});

module.exports = router;
