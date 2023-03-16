import './App.css'
import React, { useState, useEffect } from 'react'
import Clock from './components/Clock'
import Date from './components/Date'
import Poke from './components/Poke'
import Weather from './components/Weather'

function App() {
	const [backendData, setBackendData] = useState([{}])

	useEffect(() => {
		fetch('/weather')
			.then((res) => res.json())
			.then((data) => setBackendData(data))
	}, [])

	return (
		<div className='app--container'>
			<Clock />
			<Date />
			<Poke />
			<Weather />
		</div>
	)
}

export default App
