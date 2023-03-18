const mongoose = require('mongoose')
const Poke = require('../models/Poke')

const storePoke = async (pokeArray) => {
	await Promise.all(
		pokeArray.map(async (poke) => {
			try {
				const newPoke = new Poke({
					name: poke.name,
					imgURL: poke.imgURL,
				})
				await newPoke.save()
			} catch (error) {
				console.log('Error saving pokemon', error)
			}
		})
	)
}

module.exports = storePoke
