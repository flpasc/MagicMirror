const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.MONGO_URI

const connectDB = () => {
	return mongoose.connect(
		url,
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		},
		function (err) {
			if (err) console.log('Error connecting to database', err)
			else console.log('Connection to db succesfully')
		}
	)
}

module.exports = connectDB
