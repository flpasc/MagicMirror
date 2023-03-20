import './assets/styles/App.css'
import React, { useState, useEffect } from 'react'
import Clock from './components/Clock'
import Date from './components/Date'
import Poke from './components/Poke'
import Weather from './components/Weather'

function App() {
	return (
		<div className='app--container'>
			<div className='corner--top-left'>
				<Clock />
				<Weather />
			</div>
			<div className='corner--top-right'>
				<Date />
				<Poke />
			</div>
		</div>
	)
}

export default App
