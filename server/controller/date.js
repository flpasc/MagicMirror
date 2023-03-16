const getCurrentDate = (req, res) => {
	const currentDate = new Date()
	const responseData = {
		date: currentDate.toLocaleDateString(),
	}
	res.setHeader('Content-Type', 'application/json')
	res.send(JSON.stringify(responseData))
}

module.exports = {
	getCurrentDate,
}
