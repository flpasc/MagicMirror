const axios = require('axios')
const { Configuration, OpenAIApi } = require('openai')

//Enter openai question here
const openaiPrompt = 'give me a short random fact about a animal that is totaly not true'

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

async function fetchAiText() {
	try {
		const newText = await openai.createCompletion({
			model: 'text-davinci-003',
			temperature: 1.2,
			prompt: openaiPrompt,
			max_tokens: 1000,
		})
		return newText
	} catch (error) {
		console.log('Error fetching ai text', error)
	}
}

module.exports = { fetchAiText }
