const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const clock = require('./routes/clock')
const date = require('./routes/date')
const poke = require('./routes/poke')

//middleware
app.get(express.json())

//routes
app.use('/api/v1/clock', clock)
app.use('/api/v1/date', date)
app.use('/api/v1/poke', poke)

const PORT = 6000

const start = async () => {
	try {
		await connectDB()
		app.listen(PORT, () => console.log(`Server started on port ${PORT}..`))
	} catch (error) {
		console.log(error)
	}
}

start()
