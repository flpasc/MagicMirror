const mongoose = require('mongoose')
const Pokemon = require('../models/PokemonSchema')

const getDailyPokemon = async (req, res) => {
	const today = new Date().getDay()

	try {
		const dailyPokemon = await Pokemon.find({ customId: today })
		res.send(dailyPokemon[0])
	} catch (error) {
		console.log('Error fetching daily Pokemon', error)
	}
}

module.exports = {
	getDailyPokemon,
}
