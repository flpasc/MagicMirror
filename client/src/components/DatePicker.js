import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import '../assets/styles/Date.css'

export default function DatePicker() {
	const [currentDate, setCurrentDate] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDate(new Date())
		}, 1000 * 60)
		return () => clearInterval(interval)
	}, [])

	return (
		<Moment className='date--container' format='dddd Do MMMM'>
			{currentDate}
		</Moment>
	)
}
