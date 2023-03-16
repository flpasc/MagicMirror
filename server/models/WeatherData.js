const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
	location: {
		type: String,
		required: [true, 'must provide a location'],
		trim: true,
	},
	temperature: {
		type: Number,
		required: [true, 'must provide a temperature'],
		trim: true,
	},
	hasRained: {
		type: Boolean,
		default: false,
		required: true,
	},
})

module.exports = mongoose.model('WeatherData', WeatherSchema)
