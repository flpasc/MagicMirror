const express = require('express')
const connectPokeDB = require('./db/connect')
const app = express()
const clock = require('./routes/clock')
const date = require('./routes/date')
const pokemon = require('./routes/pokemon')
const weather = require('./routes/weather')
const openai = require('./routes/openai')
const scheduler = require('./services/scheduler')
const cors = require('cors')

//middleware
app.get(express.json())
app.use(cors())

//routes
app.use('/api/v1/clock', clock)
app.use('/api/v1/date', date)
app.use('/api/v1/poke', pokemon)
app.use('/api/v1/weather', weather)
app.use('/api/v1/openai', openai)

const PORT = 6600

const start = async () => {
	try {
		await connectPokeDB()
		app.listen(PORT, () => console.log(`Server started on port ${PORT}..`))
	} catch (error) {
		console.log(error)
	}
}

start()
