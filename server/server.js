const express = require('express')
const connectPokeDB = require('./db/connect')
const app = express()
const clock = require('./routes/clock')
const date = require('./routes/date')
const pokemon = require('./routes/pokemon')
const scheduler = require('./services/scheduler')

//middleware
app.get(express.json())

//routes
app.use('/api/v1/clock', clock)
app.use('/api/v1/date', date)
app.use('/api/v1/poke', pokemon)

const PORT = 6000

const start = async () => {
	try {
		await connectPokeDB()
		app.listen(PORT, () => console.log(`Server started on port ${PORT}..`))
	} catch (error) {
		console.log(error)
	}
}

start()
