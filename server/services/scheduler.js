const cron = require('node-cron')
const { fetchPokemonData, storePokemonData, updatePokemonData } = require('../services/pokemon')
let init = false

const pokeSchedule = cron.schedule('*/10 * * * * *', async () => {
	let weeklyPokemon = await fetchPokemonData()
	await updatePokemonData()
	await storePokemonData(weeklyPokemon)
})

module.exports = { pokeSchedule }
