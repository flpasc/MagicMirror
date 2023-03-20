const mongoose = require('mongoose')
const weatherData = require('../models/WeatherSchema')
const { fetchCurrentWeather, fetchWeatherForecast } = require('../services/weather')

const getCurrentWeather = async (req, res) => {
	try {
		const currentWeather = await fetchCurrentWeather()
		res.send(currentWeather.data)
	} catch (error) {
		console.log('Error fetching daily Pokemon', error)
	}
}

const getCurrentForecast = async (req, res) => {
	try {
		const currentForecast = await fetchWeatherForecast()
		res.send(currentForecast.data)
	} catch (error) {
		console.log('Error fetching forecast data', error)
	}
}

module.exports = {
	getCurrentWeather,
	getCurrentForecast,
}
