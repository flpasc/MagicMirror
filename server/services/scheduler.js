const cron = require('node-cron')
const { fetchPokemonData, storePokemonData, updatePokemonData } = require('../services/pokemon')
let init = false

const pokeSchedule = async () => {
	if (!init) {
		let weeklyPokemon = await fetchPokemonData()
		await updatePokemonData()
		await storePokemonData(weeklyPokemon)
		init = true
	}
	cron.schedule('* * * * * 1', async () => {
		let weeklyPokemon = await fetchPokemonData()
		await updatePokemonData()
		await storePokemonData(weeklyPokemon)
	})
}
module.exports = { pokeSchedule }
