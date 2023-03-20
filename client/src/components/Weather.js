import React, { useState, useEffect } from 'react'
import '../assets/styles/Weather.css'
import generateWeatherIconUrl from '../utils/generateWeatherIconUrl'

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

	const { name } = currentWeather
	const { pressure, temp, feels_like, humidity } = currentWeather.main
	const { speed, deg } = currentWeather.wind
	const { description, icon } = currentWeather.weather[0]

	const weatherNowElement = (
		<>
			<img className='weather--icon' src={generateWeatherIconUrl(icon)} alt=''></img>
			<div className='weather--city'>{name}</div>
			<div className='weather--temperature'>{Math.round(temp)}°</div>
			<div className='weather--feelslike'>{Math.round(feels_like)}°</div>
			<div className='weather--info'>{description}</div>
			<div className='weather--humidity'>{humidity}%</div>
			<div className='weather--wind'>{speed} km/h</div>
			<div className='weather--degree'>{deg}°</div>
		</>
	)

	return <div className='weather--container'>{weatherNowElement}</div>
}
