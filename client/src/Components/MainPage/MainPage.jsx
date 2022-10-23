import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PokedexEntrance from '../PokedexEntrance/PokedexEntrance'
import Pagination from '../Pagination/Pagination'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import {
  Container,
  Grid,
  Button,
  Select,
  Loader,
  Error,
  Position,
  BContainer,
} from './MainPageStyle.js'

import {
  getPokedex,
  getTypes,
  getSorted,
  getFiltered,
  loadingTrue,
  emptyPokemon,
  emptyCard,
  lesserErrorHandler,
} from '../../Redux/actions'

import { sortManager, filterManager } from './filterAndSort.js'

const MainRoute = () => {
  const dispatch = useDispatch()

  const pokedex = useSelector((state) => state.pokedex)
  const backupdex = useSelector((state) => state.backupdex)
  const types = useSelector((state) => state.types)
  const pokemon = useSelector((state) => state.pokemon)
  const pages = useSelector((state) => state.page)
  const loading = useSelector((state) => state.loading)
  const lesserError = useSelector((state) => state.lesserError)
  const error = useSelector((state) => state.error)

  const [sorter, setSorter] = useState()
  const [filters, setFilters] = useState()
  const [changer, setChanger] = useState(backupdex)

  const [pok, setPok] = useState(true)
  const [fak, setFak] = useState(true)
  const [tod, setTod] = useState(true)
  const [fil, setFil] = useState(false)
  const [sor, setSor] = useState(false)

  useEffect(() => {
    dispatch(getPokedex())
    dispatch(getTypes())
    dispatch(emptyCard)
    return () => dispatch(loadingTrue())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(getSorted(changer))
    // eslint-disable-next-line
  }, [sorter])

  useEffect(() => {
    dispatch(getFiltered(changer))
    // eslint-disable-next-line
  }, [filters])

  const eventManager = (event, type) => {
    event.preventDefault()
    dispatch(emptyPokemon())
    event = event.target.value
    if (type === 'filter') {
      filtering(event.toLowerCase())
    } else {
      sorting(event)
    }
  }

  const sorting = (type) => {
    dispatch(emptyPokemon())
    if (type === 'default') {
      setFil(false)
      setSor(false)
      setChanger(sortManager(type, backupdex))
      sorter ? setSorter(false) : setSorter(true)
      setPok(true)
      setFak(true)
      return setTod(true)
    }
    try {
      sorter ? setSorter(false) : setSorter(true)
      setChanger(sortManager(type, pokedex))
      setSor(type)
    } catch (err) {
      dispatch(lesserErrorHandler(err.message))
    }
  }

  const filtering = (type) => {
    dispatch(emptyPokemon())
    if (type === 'pokemon') {
      setPok(true)
      setFak(false)
      setTod(false)
    } else if (type === 'pokeUser') {
      setPok(false)
      setFak(true)
      setTod(false)
    } else {
      setTod(false)
      setFil(type)
    }
    try {
      filters ? setFilters(false) : setFilters(true)
      setChanger(filterManager(type, [pok, fak, fil], backupdex, sor))
    } catch (err) {
      dispatch(lesserErrorHandler(err.message))
    }
  }

  if (error) {
    return (
      <Container>
        <Error>{error}</Error>
      </Container>
    )
  }

  return (
    <Container>
      {loading ? (
        <Position>
          <Loader />
        </Position>
      ) : (
        <>
          <NavBar />
          <BContainer>
            <Select
              name="typeFilter"
              isOn={fil}
              value=""
              onChange={(value) => eventManager(value, 'filter')}
            >
              <option value="0" hidden>
                Filter by type
              </option>
              {types &&
                types.map((type) => {
                  type = type.name[0].toUpperCase() + type.name.slice(1)
                  return (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  )
                })}
            </Select>
            <Button onClick={() => filtering('pokemon')}>Pokémon</Button>
            <Button
              isSpecial={true}
              onClick={() => sorting('default')}
              isOn={tod}
            >
              Reset list
            </Button>
            <Button onClick={() => filtering('pokeUser')}>PokeUser</Button>
            <Select
              name="sort"
              value=""
              isOn={sor}
              onChange={(value) => eventManager(value, 'sort')}
            >
              <option key={0} value="0" hidden>
                Sort
              </option>
              <option key={1} value="aToZ">
                Alphabetically
              </option>
              <option key={2} value="zToA">
                From Z to A
              </option>
              <option key={3} value="maxToMin">
                From strongest to weakest
              </option>
              <option key={4} value="minToMax">
                From weakest to strongest
              </option>
            </Select>
          </BContainer>
          <Grid>
            {pokemon.name ? (
              <PokedexEntrance
                key={pokemon.id}
                sprite={pokemon.sprite}
                name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                types={
                  pokemon.types
                    ? pokemon.types
                    : ['¡Este pokeUser no tiene tipos!']
                }
                id={pokemon.id}
              />
            ) : lesserError.length ? (
              <PokedexEntrance />
            ) : pokedex.length ? (
              pokedex.slice(pages[1] - 1, pages[2]).map((pokemon) => {
                pokemon.name =
                  pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
                return (
                  <PokedexEntrance
                    key={pokemon.id}
                    sprite={pokemon.sprite}
                    name={pokemon.name}
                    types={
                      pokemon.types
                        ? pokemon.types
                        : ['¡Este pokeUser no tiene tipos!']
                    }
                    id={pokemon.id}
                  />
                )
              })
            ) : (
              <PokedexEntrance />
            )}
          </Grid>
          <Pagination />
        </>
      )}
      <Footer />
    </Container>
  )
}

export default MainRoute
