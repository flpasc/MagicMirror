const express = require('express')
const router = express.Router()
const { getCurrentWeather } = require('../controller/weather')

router.route('/').get(getCurrentWeather)

module.exports = router
