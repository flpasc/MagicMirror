const express = require('express')
const app = express()

const PORT = 6000
const TIME = new Date()

//middleware
app.get(express.json())

app.get('/weather', (req, res) => {
	res.json({ user: ['userOne', 'userTwo', 'userThree'] })
})

app.get('/time', (req, res) => {
	const currentTime = new Date()
	const responseData = {
		time: currentTime.toLocaleTimeString(),
	}
	res.setHeader('Content-Type', 'application/json')
	res.send(JSON.stringify(responseData))
})

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}...`)
})
