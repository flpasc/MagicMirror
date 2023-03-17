const express = require('express')
const app = express()
const clock = require('./routes/clock')
const date = require('./routes/date')
const poke = require('./routes/poke')

const PORT = 6000

//middleware
app.get(express.json())

//routes
app.use('/api/v1/clock', clock)
app.use('/api/v1/date', date)
app.use('/api/v1/poke', poke)

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}..`)
})
