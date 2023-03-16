const express = require('express')
const app = express()
const clock = require('./routes/clock')
const date = require('./routes/date')

const PORT = 6000

//middleware
app.get(express.json())

//routes
app.use('/api/v1/clock', clock)
app.use('/api/v1/date', date)

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}..`)
})
