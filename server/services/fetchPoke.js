const axios = require('axios')
let weeklyPokemon = []

async function fetchPoke() {
	try {
		// seven random id to fetch from the pokeapi
		let sevenRandomPokeId = []

		//populate random pokemon id array
		for (let i = 0; i < 7; i++) {
			sevenRandomPokeId.push(Math.floor(Math.random() * 250) + 1)
		}

		// api request for each random poke ID
		await Promise.all(
			sevenRandomPokeId.map(async (poke) => {
				const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)

				const pokename = response.data.name
				const pokeImgURL = response.data.sprites.other['official-artwork'].front_default

				let rndPoke = {
					name: pokename,
					imgURL: pokeImgURL,
				}
				weeklyPokemon.push(rndPoke)
			})
		)
		// returning the pokemon array
		return weeklyPokemon

		//handling errors
	} catch (error) {
		console.log(error)
		throw new Error('unable to fetch from PokeAPI')
	}
}

module.exports = fetchPoke
