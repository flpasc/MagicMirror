const express = require('express')
const router = express.Router()
const { getCurrentTime } = require('../controller/clock')

router.route('/').get(getCurrentTime)

module.exports = router
