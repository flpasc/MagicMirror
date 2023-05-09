const express = require('express')
const connectPokeDB = require('./db/connect')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()
const clock = require('./routes/clock')
const date = require('./routes/date')
const pokemon = require('./routes/pokemon')
const weather = require('./routes/weather')
const openai = require('./routes/openai')
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

// Logging
app.use(morgan('combined'))

// Routes
app.use('/api/v1/clock', clock)
app.use('/api/v1/date', date)
app.use('/api/v1/poke', pokemon)
app.use('/api/v1/weather', weather)
app.use('/api/v1/openai', openai)

// Error handling middleware
app.use((req, res, next) => {
	const error = new Error('Not Found')
	error.status = 404
	next(error)
})

app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		error: {
			message: err.message,
		},
	})
	console.error(err.stack)
})

const PORT = process.env.PORT || 6600

const start = async () => {
	try {
		await connectPokeDB()
		console.log('Connected to the database.')
		app.listen(PORT, () => console.log(`Server started on port ${PORT}..`))
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

start()
