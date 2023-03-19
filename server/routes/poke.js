const express = require('express')
const router = express.Router()
const { getDailyPokemon } = require('../controller/poke')

router.route('/').get(getDailyPokemon)

module.exports = router