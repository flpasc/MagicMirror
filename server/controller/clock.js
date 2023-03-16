const getCurrentTime = (req, res) => {
	const currentTime = new Date()
	const responseData = {
		time: currentTime.toLocaleTimeString(),
	}
	res.setHeader('Content-Type', 'application/json')
	res.send(JSON.stringify(responseData))
}

module.exports = {
	getCurrentTime,
}
