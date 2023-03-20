const axios = require('axios')
const mongoose = require('mongoose')
const Pokemon = require('../models/PokemonSchema')

//fetch seven weekly pokemon
async function fetchPokemonData() {
	let weeklyPokemon = []

	let randomId = []
	//seven random pokemon id`s
	for (let i = 0; i < 7; i++) {
		randomId.push(Math.floor(Math.random() * 250) + 1)
	}

	try {
		// fetching seven random pokemon
		await Promise.all(
			randomId.map(async (poke) => {
				const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)

				const pokemonName = pokemonData.data.name
				const imgURL = pokemonData.data.sprites.other['official-artwork'].front_default

				let randomPokemon = {
					name: pokemonName,
					imgURL: imgURL,
				}

				weeklyPokemon.push(randomPokemon)
			})
		)
		console.log('Fetching weekly pokemon succesfull')
		return weeklyPokemon

		//error handling
	} catch (error) {
		console.log(error)
		console.log('unable to fetch from pokeAPI')
	}
}

//store seven weekly pokemon
async function storePokemonData(pokemonData) {
	await Promise.all(
		pokemonData.map(async (poke, index) => {
			try {
				const newPokemon = new Pokemon({
					customId: index,
					name: poke.name,
					imgURL: poke.imgURL,
				})
				await newPokemon.save()
			} catch (error) {
				console.log('Error saving pokemon data to db', error)
			}
		})
	)
}

//update the stored pokemon array
async function updatePokemonData() {
	try {
		await Pokemon.deleteMany({})
		console.log('Collection updated succesfully')
	} catch (error) {
		console.log('Error updating collection', error)
	}
}

module.exports = {
	fetchPokemonData,
	storePokemonData,
	updatePokemonData,
}
