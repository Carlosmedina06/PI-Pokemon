import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import PrevEntrance from '../PrevNext/PrevEntrance.jsx'
import NextEntrance from '../PrevNext/NextEntrance.jsx'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import {
  Background,
  Div,
  Entrance,
  Name,
  Img,
  ImgError,
  Text,
  Types,
  Type,
} from './DetailsStyles.js'
import { Button } from '../LandingPage/LandingPageStyle.js'

import { getPokeData, emptyCard } from '../../Redux/actions'

const Details = (props) => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.pokemon)
  const [loading, setLoading] = useState(true)
  const page = useSelector((state) => state.page)

  useEffect(() => {
    if (!Number.isNaN(props.pokemon.match.params.pokemonId)) {
      dispatch(getPokeData(props.pokemon.match.params.pokemonId))
    }
    return () => {
      dispatch(emptyCard(page))
      setLoading(true)
    }
    // eslint-disable-next-line
  }, [props.pokemon.match.params.pokemonId])

  let { name, sprite, types, id, hp, attack, defense, speed, height, weight } =
    selector

  useEffect(() => {
    loadManager()
    // eslint-disable-next-line
  }, [name])

  const loadManager = () => {
    setTimeout(() => {
      if (name) setLoading(false)
      else loadManager()
    }, '500')
  }

  let prev = id - 1
  let next = id + 1

  return (
    <>
      <NavBar />
      <Background>
        <Div>
          <PrevEntrance id={prev}></PrevEntrance>
          <Entrance>
            {loading ? (
              <Name>Identificando Pokémon</Name>
            ) : (
              <>
                <Text isId={true}>{id}</Text>
                <Name>{name && name[0].toUpperCase() + name.slice(1)}</Name>
                {sprite ? (
                  <Img>
                    <img src={sprite} alt="" width="250" height="250" />
                  </Img>
                ) : (
                  <ImgError>Este pokeUser no tiene imagen</ImgError>
                )}
                <Text>Health Points: {hp}</Text>
                <Text>Attack: {attack}</Text>
                <Text>Defense: {defense}</Text>
                <Text>Speed: {speed}</Text>
                <Text>Height: {height}</Text>
                <Text>Weight: {weight}</Text>
                <Types>
                  {types
                    ? types.map((type) => {
                        type = type[0].toUpperCase() + type.slice(1)
                        return (
                          <Type key={type} name={type}>
                            {type}
                          </Type>
                        )
                      })
                    : (types = (
                        <Type key={0} name={0}>
                          {'¡Este pokeUser no tiene tipos!'}
                        </Type>
                      ))}
                </Types>
              </>
            )}
          </Entrance>
          <NextEntrance id={next}></NextEntrance>
        </Div>
        <Link to="/home">
          <Button>Home</Button>
        </Link>
      </Background>
      <Footer />
    </>
  )
}

export default Details
