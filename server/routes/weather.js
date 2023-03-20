const express = require('express')
const router = express.Router()
const { getCurrentWeather, getCurrentForecast } = require('../controller/weather')

router.route('/now').get(getCurrentWeather)
router.route('/forecast').get(getCurrentForecast)

module.exports = router
