const axios = require('axios')
const mongoose = require('mongoose')
const WeatherData = require('../models/WeatherSchema')
const fetchCurrentWeather = require('../services/weather')

const lat = 50.92696
const lon = 11.58696

const getCurrentWeather = async (req, res) => {
	try {
		const weather = fetchCurrentWeather()
		res.send({ name: 'huhu' })
	} catch (error) {
		console.log('Error fetching current weather', error)
	}
}

module.exports = getCurrentWeather
