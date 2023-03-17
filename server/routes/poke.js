const express = require('express')
const router = express.Router()
const { getDailyPokemon } = require('../controller/poke')

router.router('/').get(getDailyPokemon)

module.exports = router
