const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.MONGO_URI_POKE

const connectPokeDB = () => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}

module.exports = connectPokeDB
