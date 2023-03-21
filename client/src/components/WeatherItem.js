import React from 'react'
import('../assets/styles/Weather.css')
import('../assets/images/weather-icons/01d.png')

export default function WeatherItem(props) {
	const { name } = props.currentWeather
	const { pressure, temp, feels_like, humidity } = props.currentWeather.main
	const { speed, deg } = props.currentWeather.wind
	const { description, icon } = props.currentWeather.weather[0]

	return (
		<>
			<img
				className='weather--icon'
				src={`../../public/assets/images/weather-icons/${icon}.png`}
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
}
