import React, { useState, useEffect } from 'react'
import '../assets/styles/Clock.css'
import Moment from 'react-moment'

export default function Clock() {
	const [currentTime, setCurrentTime] = useState('')

	useEffect(() => {
		let interval = null
		interval = setInterval(() => {
			fetch('/api/v1/clock')
				.then((res) => res.json())
				.then((data) => setCurrentTime(data))
				.catch((error) => console.log(error))
		}, 1000)

		return () => clearInterval(interval)
	}, [])
	return (
		<div className='clock--container'>
			<Moment className='clock--houres' format='HH'>
				{currentTime.time}
			</Moment>
			<Moment className='clock--minutes' format='mm'>
				{currentTime.time}
			</Moment>
			<div className='clock--uhr'>Uhr</div>
		</div>
	)
}
