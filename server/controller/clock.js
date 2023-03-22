const getCurrentTime = (req, res) => {
	const currentTime = new Date()

	res.setHeader('Content-Type', 'application/json')
	res.send(JSON.stringify(currentTime))
}

module.exports = {
	getCurrentTime,
}
