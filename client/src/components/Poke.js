import '../assets/styles/Poke.css'
import React, { useEffect, useState } from 'react'
import capitalize from 'capitalize-first-letter'

export default function Poke() {
	const [pokemonOfDay, setPokemonOfDay] = useState()
	const [fetchCompleted, setFetchcompleted] = useState(false)

	useEffect(() => {
		fetch('/api/v1/poke')
			.then((res) => res.json())
			.then((data) => {
				setPokemonOfDay(data)
				setFetchcompleted(true)
			})
			.catch((error) => console.log('Error fetching daily pokemon', error))
	}, [])

	if (!fetchCompleted) {
		return <div>Loading..</div>
	}

	const dailyPokemonElement = (
		<>
			<img className='pokemon--image' src={pokemonOfDay.imgURL} alt='Pokemon of the Day' />
			<div className='pokemon--name'>{capitalize(pokemonOfDay.name)}</div>
		</>
	)

	return <div className='poke--container'>{dailyPokemonElement}</div>
}
