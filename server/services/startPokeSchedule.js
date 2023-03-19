const cron = require('node-cron')
const updatePoke = require('./updatePoke')
const fetchPoke = require('./fetchPoke')
const storePoke = require('./storePoke')

const getNewPokeArray = async () => {
	await updatePoke()

	let weeklyPoke = []

	weeklyPoke = await fetchPoke()
	storePoke(weeklyPoke)
}

const startPokeSchedule = cron.schedule('*/10 * * * * *', async () => {
	getNewPokeArray()
})
module.exports = startPokeSchedule
