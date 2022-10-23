const { Type } = require('../db')
const axios = require('axios')

async function getTypes() {
  const apiTypes = await axios('https://pokeapi.co/api/v2/type')
  var loadedTypes = []

  for (let pokeType of apiTypes.data.results) {
    const [type] = await Type.findOrCreate({ where: { name: pokeType.name } })
    loadedTypes.push(type)
  }
  return loadedTypes
}
async function typeManager(pokeUser, types) {
  await getTypes()

  for (let type of types) {
    type = await Type.findOne({ where: { name: type } })
    await pokeUser.addType(type)
  }
  pokeUser = getFakeTypes(pokeUser)
  return pokeUser
}
async function getFakeTypes(data) {
  let pokeUser = []
  pokeUser.push(data)
  data = await data.getTypes()
  if (data.length) {
    pokeUser[0].dataValues.types = data.map(
      (fakeType) => fakeType.dataValues.name
    )
  }
  return pokeUser[0]
}

module.exports = { getTypes, typeManager, getFakeTypes }
