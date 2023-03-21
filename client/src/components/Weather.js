import React, { useState, useEffect } from 'react'
import '../assets/styles/Weather.css'
import generateWeatherIconUrl from '../utils/generateWeatherIconUrl'
import ForecastItem from './ForecastItem'
import { v4 as uuidv4 } from 'uuid'
import getDayString from '../utils/getDayAsString'

export default function Weather() {
	const [currentWeather, setCurrentWeather] = useState({})
	const [currentForecast, setCurrentForecast] = useState({})
	const [fetchNowCompleted, setFetchNowcompleted] = useState(false)
	const [fetchForecastCompleted, setFetchForecastcompleted] = useState(false)

	useEffect(() => {
		fetch('/api/v1/weather/now')
			.then((res) => res.json())
			.then((data) => {
				setCurrentWeather(data)
				setFetchNowcompleted(true)
			})
			.catch((error) => console.log('Error fetching weather from server', error))
	}, [])

	useEffect(() => {
		fetch('/api/v1/weather/forecast')
			.then((res) => res.json())
			.then((data) => {
				setCurrentForecast(data)
				setFetchForecastcompleted(true)
			})
			.catch((error) => console.log('Error fetching forecast from server', error))
	}, [])

	if (!fetchForecastCompleted || !fetchNowCompleted) return <div>Guessing weather..</div>

	//collecting the current weather data
	const { name } = currentWeather
	const { pressure, temp, feels_like, humidity } = currentWeather.main
	const { speed, deg } = currentWeather.wind
	const { description, icon } = currentWeather.weather[0]

	const weatherNowElement = (
		<>
			<img
				className='weather--icon'
				src={`../../assets/images/weather-icons/${icon}.png`}
				alt=''></img>
			<div className='weather--city'>{name}</div>
			<div className='weather--temperature'>{Math.round(temp)}°</div>
			<div className='weather--feelslike'>{Math.round(feels_like)}°</div>
			<div className='weather--info'>{description}</div>
			<div className='weather--humidity'>{humidity}%</div>
			<div className='weather--wind'>{speed} km/h</div>
			<div className='weather--degree'>{deg}°</div>
		</>
	)

	function weatherForecastElements() {
		let forecastData = []
		for (let i = 0; i < 5; i++) {
			const { icon } = currentForecast.list[i + i * 8].weather[0]
			const { temp, feels_like } = currentForecast.list[i + i * 8].main
			const dayString = getDayString(i)
			forecastData.push(
				<ForecastItem
					key={uuidv4()}
					icon={icon}
					temp={temp}
					feelslike={feels_like}
					day={dayString}
				/>
			)
		}
		return forecastData
	}

	return (
		<div className='weather--container'>
			<div className='weather--now'>{weatherNowElement}</div>
			<div className='weather--forecast'>{weatherForecastElements()}</div>
		</div>
	)
}
