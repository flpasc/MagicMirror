const cron = require('node-cron')
const deletePoke = require('./deletePoke')
const fetchPoke = require('./fetchPoke')
const storePoke = require('./storePoke')

const getNewPokeArray = async () => {
	let weeklyPoke = []

	weeklyPoke = await fetchPoke()
	await deletePoke()
	await storePoke(weeklyPoke)
}

const startPokeSchedule = cron.schedule('*/10 * * * * *', () => {
	getNewPokeArray()
})
module.exports = startPokeSchedule
