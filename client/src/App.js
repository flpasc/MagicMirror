import './assets/styles/App.css'
import React, { useState, useEffect } from 'react'
import Clock from './components/Clock'
import Date from './components/Date'
import Poke from './components/Poke'
import Weather from './components/Weather'

function App() {
	return (
		<div className='app--container'>
			<div className='date-time'>
				<Clock />
				<Date />
			</div>
		</div>
	)
}

export default App
