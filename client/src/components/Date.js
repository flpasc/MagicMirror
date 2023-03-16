import React, { useState, useEffect } from 'react'

export default function Date() {
	const [currentDate, setcurrentDate] = useState('')

	useEffect(() => {
		let interval = null
		interval = setInterval(() => {
			fetch('/date')
				.then((res) => res.json())
				.then((data) => setcurrentDate(data))
				.catch((error) => console.log(error))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return <div>{currentDate.date}</div>
}
