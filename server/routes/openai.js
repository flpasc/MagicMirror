const express = require('express')
const router = express.Router()
const { getAiText } = require('../controller/openai')

router.route('/').get(getAiText)

module.exports = router
