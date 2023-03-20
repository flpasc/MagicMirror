import React, { useEffect, useState } from 'react'
import '../assets/styles/Openai.css'

export default function OpenAi() {
	const [aiText, setAiText] = useState('')

	useEffect(() => {
		fetch('/api/v1/openai')
			.then((res) => res.json())
			.then((data) => setAiText(data.text))
			.catch((error) => console.log('Error fetching aitext from server', error))
	}, [])

	return (
		<div className='openai--container'>
			<div className='openai--response'>{aiText}</div>
		</div>
	)
}
