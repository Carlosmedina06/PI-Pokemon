import axios from 'axios'
export const GET_POKEDEX = 'GET_POKEDEX'
export const GET_TYPES = 'GET_TYPES'
export const POST_POKEUSER = 'POST_POKEUSER'
export const SORT = 'SORT'
export const FILTER = 'FILTER'
export const PAGE_SETTER = 'PAGE_SETTER'
export const GET_POKEMON = 'GET_POKEMON'
export const DELETE_POKEMON = 'DELETE_POKEMON'
export const GET_PREV = 'GET_PREV'
export const GET_NEXT = 'GET_NEXT'
export const LOADING = 'LOADING'
export const EMPTY_POKEMON = 'EMPTY_POKEMON'
export const EMPTY_CARD = 'EMPTY_CARD'
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES'
export const LESSER_ERROR = 'LESSER_ERROR'
export const ERROR_HANDLER = 'ERROR_HANDLER'

export function getPokedex() {
  return async (dispatch) => {
    return await axios(
      'https://pi-pokemon-production-7c86.up.railway.app/pokemons'
    )
      .then((response) =>
        dispatch({
          type: GET_POKEDEX,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: ERROR_HANDLER,
          payload: error.response.data,
        })
      )
  }
}
export function getTypes() {
  return async (dispatch) => {
    return await axios(
      'https://pi-pokemon-production-7c86.up.railway.app/types'
    )
      .then((response) =>
        dispatch({
          type: GET_TYPES,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: ERROR_HANDLER,
          payload: error.response.data,
        })
      )
  }
}
export function searchByName(name) {
  return async (dispatch) => {
    try {
      const pokemonName = await axios(
        `https://pi-pokemon-production-7c86.up.railway.app/pokemons?name=${name}`
      )
      return dispatch({
        type: 'GET_POKEMON',
        payload: pokemonName.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export function postPokeUser(payload) {
  return async (dispatch) => {
    return await axios
      .post(
        'https://pi-pokemon-production-7c86.up.railway.app/pokemons/',
        payload
      )
      .then((response) =>
        dispatch({
          type: POST_POKEUSER,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: ERROR_HANDLER,
          payload: error.response.data,
        })
      )
  }
}
export function deletePokeUser(id) {
  JSON.stringify(id)
  return async (dispatch) => {
    return await axios
      .delete(
        `https://pi-pokemon-production-7c86.up.railway.app/pokemons/${id}`
      )
      .then((response) =>
        dispatch({
          type: DELETE_POKEMON,
          payload: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: DELETE_POKEMON,
          payload: error.response.data,
        })
      )
  }
}

export function getSorted(payload) {
  return {
    type: SORT,
    payload,
  }
}
export function getFiltered(payload) {
  return {
    type: FILTER,
    payload,
  }
}
export function pageSetter(payload) {
  return {
    type: PAGE_SETTER,
    payload,
  }
}
export function getPokeData(id) {
  return async (dispatch) => {
    return await axios(
      `https://pi-pokemon-production-7c86.up.railway.app/pokemons/${id}`
    ).then((response) =>
      dispatch({
        type: GET_POKEMON,
        payload: response.data,
      })
    )
  }
}
export function getPrev(id) {
  return async (dispatch) => {
    return await axios(
      `https://pi-pokemon-production-7c86.up.railway.app/pokemons/${id}`
    ).then((response) =>
      dispatch({
        type: GET_PREV,
        payload: response.data,
      })
    )
  }
}
export function getNext(id) {
  return async (dispatch) => {
    return await axios(
      `https://pi-pokemon-production-7c86.up.railway.app/pokemons/${id}`
    ).then((response) =>
      dispatch({
        type: GET_NEXT,
        payload: response.data,
      })
    )
  }
}
export function loadingTrue() {
  return {
    type: LOADING,
  }
}
export function emptyPokemon() {
  return {
    type: EMPTY_POKEMON,
  }
}
export function emptyCard(payload) {
  return {
    type: EMPTY_CARD,
    payload,
  }
}
export function lesserErrorHandler(payload) {
  return {
    type: LESSER_ERROR,
    payload,
  }
}
export function clearMessages() {
  return {
    type: CLEAR_MESSAGES,
  }
}
