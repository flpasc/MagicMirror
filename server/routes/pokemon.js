const express = require('express')
const router = express.Router()
const { getDailyPokemon } = require('../controller/pokemon')

router.route('/').get(getDailyPokemon)

module.exports = router
