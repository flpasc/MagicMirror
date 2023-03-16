import React, { useState, useEffect } from 'react'

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
			<div>{currentTime.time}</div>
		</div>
	)
}
