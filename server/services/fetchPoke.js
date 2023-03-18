const axios = require('axios')
let weeklyPokemon = []

async function fetchPoke() {
	console.log(weeklyPokemon)

	try {
		// seven random id to fetch from the pokeapi
		let sevenRandomPokeId = []
		// empty array for the pokemon

		//populate random pokemon id array
		for (let i = 0; i < 7; i++) {
			sevenRandomPokeId.push(Math.floor(Math.random() * 250) + 1)
		}

		// seven api requests and store pokemon into mongodb
		sevenRandomPokeId.forEach(async (poke) => {
			const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)

			const pokename = response.data.name
			const pokeImgURL = response.data.sprites.other['official-artwork'].front_default

			let rndPoke = {
				name: pokename,
				imgURL: pokeImgURL,
			}
			weeklyPokemon.push(rndPoke)
		})
	} catch (error) {
		console.log(error)
		throw new Error('unable to fetch from PokeAPI')
	}
}

module.exports = fetchPoke
