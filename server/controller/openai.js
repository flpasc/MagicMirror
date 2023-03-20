const { fetchAiText } = require('../services/openai')

const getAiText = async (req, res) => {
	try {
		const newText = await fetchAiText()
		res.send(newText.data.choices[0])
	} catch (error) {
		console.log('Error getting ai text from service', error)
	}
}

module.exports = { getAiText }
