import React, { useState, useEffect } from 'react'

export default function Clock() {
	const [currentTime, setCurrentTime] = useState()

	useEffect(() => {
		let interval = null
		interval = setInterval(() => {
			fetch('/time')
				.then((res) => res.json())
				.then((data) => setCurrentTime(data))
				.catch((error) => console.log(error))
		}, 1000)

		return () => clearInterval(interval)
	}, [currentTime])

	return (
		<div className='clock--container'>
			<div>{currentTime.time}</div>
		</div>
	)
}
