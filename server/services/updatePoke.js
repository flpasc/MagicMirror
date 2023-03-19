const mongoose = require('mongoose')
const Poke = require('../models/Poke')

const updatePoke = async () => {
	try {
		await Poke.deleteMany({})
		console.log('Collection reset done')
	} catch (error) {
		console.log('Error deleting pokemon collection', error)
	}
}

module.exports = updatePoke
