import React from 'react'
import '../assets/styles/ForecastItem.css'
import generateWeatherIconUrl from '../utils/generateWeatherIconUrl'

export default function ForecastItem(props) {
	const { icon, temp, feelslike } = props

	return (
		<div className='forecast--item'>
			<img className='forecast--icon' src={generateWeatherIconUrl(icon)} alt='' />
			<div className='forecast--temp'>{Math.round(temp)}</div>
		</div>
	)
}
