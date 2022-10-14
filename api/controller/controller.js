const express = require('express')
const router = express.Router()
const messages = require('../domain/services/service-messages.js')

router.get('/messages', messages.getAll)
router.post('/messages', messages.create)

module.exports = router