const mongoose = require('mongoose')
const Pokemon = require('../models/PokemonSchema')

const getDailyPokemon = async (req, res) => {
	const today = new Date().getDay()

	try {
		const dailyPokemon = await Pokemon.find({ customId: 1 })
		res.send(dailyPokemon[0])
	} catch (error) {
		console.log('Error fetching daily Pokemon', error)
	}
}

// write code to get the pokemon depending on id (1= monday 2= tuesday..)
// make a call from the client

module.exports = {
	getDailyPokemon,
}
