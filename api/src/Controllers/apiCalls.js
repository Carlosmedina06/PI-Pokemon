const axios = require('axios')

async function getApiPokemon(value, cb) {
  var pokeData = []
  await axios(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then((apiPokemon) => {
      if (!cb) {
        pokeData = {
          sprite:
            apiPokemon.data.sprites.other['official-artwork'].front_default,
          name: apiPokemon.data.name,
          types: apiPokemon.data.types.map((i) => i.type.name),
          id: apiPokemon.data.id,
          hp: apiPokemon.data.stats[0].base_stat,
          attack: apiPokemon.data.stats[1].base_stat,
          defense: apiPokemon.data.stats[2].base_stat,
          speed: apiPokemon.data.stats[5].base_stat,
          height: apiPokemon.data.height,
          weight: apiPokemon.data.weight,
        }
      } else {
        pokeData = {
          sprite:
            apiPokemon.data.sprites.other['official-artwork'].front_default,
          name: apiPokemon.data.name,
          types: apiPokemon.data.types.map((i) => i.type.name),
          id: apiPokemon.data.id,
          attack: apiPokemon.data.stats[1].base_stat,
        }
      }
    })
    .catch((err) => {
      console.log(err.message)
      if (cb) throw new Error(`Parece que esta dañada tu PokeDex`)
      throw new Error(
        `¡Ese Pokémon no existe! Pero podés crearlo como pokeUser aquí.`
      )
    })

  return pokeData
}

async function fullPokedex(splus) {
  let apiPokemon = await axios('https://pokeapi.co/api/v2/pokemon')
  let secondApiPokemon = apiPokemon.data.next
  secondApiPokemon = await axios.get(secondApiPokemon)

  let apiDex = []

  const first = await Promise.all(
    apiPokemon.data.results.map(async (pokemon) => {
      let firstDexHalf = await getApiPokemon(pokemon.name, true)
      return firstDexHalf
    })
  )

  if (splus === 20) {
    apiDex = [...first]
  } else {
    const second = await Promise.all(
      secondApiPokemon.data.results.map(async (pokemon) => {
        let secondHalfDex = await getApiPokemon(pokemon.name, true)
        return secondHalfDex
      })
    )

    apiDex = [...first, ...second]
    apiDex.length + splus > 40
      ? (apiDex.length = apiDex.length - splus)
      : apiDex.length
  }
  return apiDex
}

async function checkPokemon(name) {
  let pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`).catch(
    () => {
      return
    }
  )
  if (pokemon) return true
}

module.exports = { getApiPokemon, fullPokedex, checkPokemon }
