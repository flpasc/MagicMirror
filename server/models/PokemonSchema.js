const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema(
	{
		customId: {
			type: Number,
			required: true,
			trim: true,
		},
		name: {
			type: String,
			required: [true, 'must provide a name'],
			trim: true,
		},
		imgURL: {
			type: String,
			required: [true, 'must provide a url'],
			trim: true,
		},
	},
	{ collection: 'weeklyPoke' }
)

module.exports = mongoose.model('PokemonData', PokemonSchema)
