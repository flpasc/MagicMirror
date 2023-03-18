const cron = require('node-cron')
const fetchPoke = require('./fetchPoke')

const scheduleFetchPokemon = cron.schedule('*/10 * * * * *', () => {
	fetchPoke()
})

module.exports = scheduleFetchPokemon
