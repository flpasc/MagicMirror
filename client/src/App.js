import './assets/styles/App.css'
import React, { useState, useEffect } from 'react'
import Clock from './components/Clock'
import Date from './components/DatePicker'
import Poke from './components/Poke'
import Weather from './components/Weather'
import OpenAi from './components/OpenAi'

function App() {
	return (
		<div className='app--container'>
			<div className='corner--top-left'>
				<Weather />
			</div>
			<div className='corner--top-right'>
				<Clock />
				<Date />
				<Poke />
			</div>
			<OpenAi />
		</div>
	)
}

export default App
