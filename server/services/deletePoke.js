const mongoose = require('mongoose')
const Poke = require('../models/Poke')

const deletePoke = async () => {
	try {
		await Poke.deleteMany({})
	} catch (error) {
		console.log('Error deleting pokemon collection', error)
	}
}

module.exports = deletePoke
