const express = require('express')
const app = express()
const clock = require('./routes/clock')

const PORT = 6000

//middleware
app.get(express.json())

//routes
app.use('/api/v1/clock', clock)

// app.use('api/v1/weather', Weather)

// app.get('/weather', (req, res) => {
// 	res.json({ user: ['userOne', 'userTwo', 'userThree'] })
// })

// app.get('/time', (req, res) => {
// 	const currentTime = new Date()
// 	const responseData = {
// 		time: currentTime.toLocaleTimeString(),
// 	}
// 	res.setHeader('Content-Type', 'application/json')
// 	res.send(JSON.stringify(responseData))
// })

// app.get('/date', (req, res) => {
// 	const currentDate = new Date()
// 	const responseData = {
// 		date: currentDate.toLocaleDateString(),
// 	}
// 	res.setHeader('Content-Type', 'application/json')
// 	res.send(JSON.stringify(responseData))
// })

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}..`)
})
