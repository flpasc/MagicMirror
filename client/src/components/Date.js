import React, { useState, useEffect } from 'react'
import '../assets/styles/Date.css'

export default function Date() {
	const [currentTime, setCurrentTime] = useState()

	useEffect(() => {}, [])

	return <>{currentTime}</>
}
