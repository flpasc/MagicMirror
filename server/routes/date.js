const express = require('express')
const router = express.Router()
const { getCurrentDate } = require('../controller/date')

router.route('/').get(getCurrentDate)

module.exports = router
