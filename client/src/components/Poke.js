import '../assets/styles/Poke.css'
import React, { useEffect, useState } from 'react'
import capitalize from 'capitalize-first-letter'

export default function Poke() {
	const [pokemonOfDay, setPokemonOfDay] = useState()
	const [fetchCompleted, setFetchcompleted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			const init = async () => {
				const fetchURL = `${process.env.LOCALHOST}/api/v1/poke`
				await fetch(fetchURL)
					.then((res) => res.json())
					.then((data) => {
						setPokemonOfDay(data)
						setFetchcompleted(true)
						console.log(data)
					})
					.catch((error) => console.log('Error fetching daily pokemon', error))
			}
			init()
		}, 1000 * 10)
		return () => clearTimeout(timer)
	}, [])

	const dailyPokemonElement = (
		<>
			{fetchCompleted && (
				<img className='pokemon--image' src={pokemonOfDay.imgURL} alt='Pokemon of the Day' />
			)}
			{fetchCompleted && <div className='pokemon--name'>{capitalize(pokemonOfDay.name)}</div>}
		</>
	)

	return <div className='poke--container'>{dailyPokemonElement}</div>
}
