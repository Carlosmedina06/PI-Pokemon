const { getApiPokemon, fullPokedex } = require('../Controllers/apiCalls')
const {
  getDbPokemon,
  getDbDex,
  postPokemon,
  deleteFunction,
} = require('../Controllers/dbCalls')
const { json, Router } = require('express')

const router = Router()
router.use(json())

router.get('/', async (req, res) => {
  try {
    let { name } = req.query
    if (name) {
      name = name.toLowerCase().trim()
      let data = await getDbPokemon(name, 'name')
      data ? data : (data = await getApiPokemon(name))
      res.json(data)
    } else {
      const [dbDex, splus] = await getDbDex()
      const apiDex = await fullPokedex(splus)

      var userDex = []
      dbDex ? (userDex = [...dbDex, ...apiDex]) : (userDex = apiDex)
      res.json(userDex)
    }
  } catch (err) {
    res.status(404).json(err.message)
  }
})

router.get('/:idPokemon', async (req, res) => {
  try {
    let { idPokemon } = req.params
    let pokeData
    idPokemon.includes('pokeUser')
      ? (pokeData = await getDbPokemon(idPokemon, 'id'))
      : (pokeData = await getApiPokemon(idPokemon))

    res.json(pokeData)
  } catch (err) {
    res.status(404).json(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    let { name, hp, attack, defense, speed, height, weight, types, sprite } =
      req.body
    let message = await postPokemon(
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
      sprite
    )
    res.status(201).json(message)
  } catch (err) {
    res.status(409).json(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    var { id } = req.params
    let deletionMessage = await deleteFunction(id)
    res.status(201).json(deletionMessage)
  } catch (err) {
    res.status(418).json(err.message)
  }
})

module.exports = router
