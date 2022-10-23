const { Pokemon } = require('../db.js')
const { checkPokemon } = require('./apiCalls.js')
const { getFakeTypes, typeManager } = require('./typeCalls.js')

async function getDbPokemon(value, request) {
  if (request === 'id') {
    value = idFixer(value)
    var data = await Pokemon.findByPk(value)
    if (!data)
      throw new Error(
        `¡No tenemos esa entrada en nuesta PokeDex! Podés crear pokeUser aquí`
      )
  } else if (request === 'name') {
    var data = await Pokemon.findOne({ where: { name: value } })
    if (!data) return null
  }

  let pokeUser = getFakeTypes(data)

  return pokeUser
}

async function getDbDex() {
  let falsos = await Pokemon.count()
  if (!falsos) return [null, 0]
  falsos = Math.ceil(Math.random() * falsos)
  falsos === 0 ? (falsos = 1) : falsos

  let data = []
  let limit = falsos + 1
  for (let i = 1; i < limit; i++) {
    pokeUser = await Pokemon.findByPk(`pokeUser ${i}`)
    if (!pokeUser) {
      limit++
    } else {
      pokeUser = await getFakeTypes(pokeUser)
      pokeUser = {
        sprite: pokeUser.sprite,
        name: pokeUser.name,
        types: pokeUser.dataValues.types,
        id: pokeUser.id,
      }
      data.push(pokeUser)
    }
  }

  data.length > 20 ? (data.length = 20) : data.length
  return [data, falsos]
}

async function postPokemon(
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
  sprite
) {
  if (!name)
    throw new Error('¡Si descubriste un pokeUser, deberías ponerle un nombre!')
  name = name.toLowerCase().trim()
  let pokemon = await checkPokemon(name)
  if (pokemon) throw new Error('¡Ese es un Pokémon!')

  let id = await idChecker()

  let [pokeUser, created] = await Pokemon.findOrCreate({
    where: { name },
    defaults: {
      id,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      sprite,
    },
  })
  if (!created)
    throw new Error('¡Ese pokeUser ya está registrado en nuestra Pokedex!')

  if (types) pokeUser = await typeManager(pokeUser, types)
  return '¡¡¡Felicitaciones!!! Tu Pokémon fue creado con éxito.'
}

async function idChecker(id) {
  if (!id) {
    var id = await Pokemon.count()
    id++
  } else {
    id++
  }
  let checker = await Pokemon.findByPk(`pokeUser ${id}`)
  if (checker) return idChecker(id)
  else return id
}

function idFixer(id) {
  if (id.includes('%20')) return id.replace('%20', ' ')
  else if (id.includes('+')) return id.replace('+', ' ')
  return id
}

async function deleteFunction(id) {
  if (id) {
    idFixer(id)
    var deleted = await Pokemon.destroy({ where: { id } })
  }
  if (deleted) return 'Este PokeUser fue borrado exitosamente.'
  else throw new Error('¡Ese es un Pokémon Real y no se puede borrar')
}

module.exports = { getDbPokemon, postPokemon, getDbDex, deleteFunction }
