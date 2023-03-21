import React, { useState, useEffect } from 'react'
import '../assets/styles/Date.css'
import Moment from 'react-moment'

export default function Date() {
	const [currentDate, setCurrentDate] = useState({})

	useEffect(() => {
		let interval = null
		interval = setInterval(() => {
			fetch('/api/v1/date')
				.then((res) => res.json())
				.then((data) => setCurrentDate(data))
				.catch((error) => console.log(error))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return <Moment format='LL'>{currentDate}</Moment>
}
