const cron = require('node-cron')
const { fetchPokemonData, storePokemonData, updatePokemonData } = require('../services/pokemon')

const pokeSchedule = cron.schedule('* * * * 0', async () => {
	let weeklyPokemon = await fetchPokemonData()
	await updatePokemonData()
	await storePokemonData(weeklyPokemon)
})
module.exports = pokeSchedule
