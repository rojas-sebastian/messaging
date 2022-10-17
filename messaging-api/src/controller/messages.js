const express = require("express");
const router = express.Router();
const messagesService = require("../domain/services/messages-service.js");

router.get("/", messagesService.getAll);
router.post("/", messagesService.create);

module.exports = router;
