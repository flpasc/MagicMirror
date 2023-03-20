const axios = require('axios')
const mongoose = require('mongoose')
const WeatherData = require('../models/WeatherSchema')
const lat = 50.92696
const lon = 11.58696
const API_KEY = process.env.WEATHER_API_KEY

//fetch weather data
async function fetchCurrentWeather() {
	try {
		const currentWeater = await axios.get(
			'https://api.openweathermap.org/data/2.5/weather?lat=' +
				lat +
				'&lon=' +
				lon +
				'&units=metric&appid=' +
				API_KEY
		)
		return currentWeater
	} catch (error) {
		console.log('Error fetching weather data', error)
	}
}

async function fetchWeatherForecast() {
	try {
		const forecast = await axios.get(
			'http://api.openweathermap.org/data/2.5/forecast?lat=' +
				lat +
				'&lon=' +
				lon +
				'&units=metric&appid=' +
				API_KEY
		)
		return forecast
	} catch (error) {
		console.log('Error fetchinf forecast', error)
	}
}

async function storeWeatherData(weatherData) {
	try {
	} catch (error) {}
}

module.exports = {
	fetchCurrentWeather,
	fetchWeatherForecast,
}
