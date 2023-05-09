import React, { useEffect, useState } from 'react'
import '../assets/styles/Openai.css'

export default function OpenAi() {
	const [aiText, setAiText] = useState('')
	const [initialze, setInitialize] = useState(false)

	// useEffect(() => {
	// 	if (!initialze) {
	// 		const fetchURL = `http://localhost:6600/api/v1/openai`
	// 		fetch(fetchURL)
	// 			.then((res) => res.json())
	// 			.then((data) => setAiText(data.text))
	// 			.catch((error) => console.log('Error fetching aitext from server', error))
	// 		setInitialize(true)
	// 	}

	// 	const interval = setInterval(() => {
	// 		fetch('http://localhost:6600/api/v1/openai')
	// 			.then((res) => res.json())
	// 			.then((data) => setAiText(data.text))
	// 			.catch((error) => console.log('Error fetching aitext from server', error))
	// 	}, 1000 * 60 * 60 * 3)
	// 	return () => clearInterval(interval)
	// }, [])

	return (
		<div className='openai--container'>
			<div className='openai--response'>{aiText}</div>
		</div>
	)
}
