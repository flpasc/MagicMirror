const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'must provide a name'],
		trim: true,
	},
	generation: {
		type: String,
		required: [true, 'must provide a generation'],
		trim: true,
	},
	img: {
		type: String,
		required: [true, 'must provide a url'],
		trim: true,
	},
})
