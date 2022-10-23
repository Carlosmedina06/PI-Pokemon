import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import pika from '../../img/logo.png'
import {
  OverlayMenu,
  Overlay,
  Line,
  NavIcon,
  Item,
  Menu,
  Logo,
  Nav,
  Searchbar,
  PokeButton,
  CreateButton,
  Img,
} from './NavbarStyle.js'

import { searchByName, loadingTrue } from '../../Redux/actions'

const Navbar = () => {
  const [toggle, toggleNav] = useState(false)
  const dispatch = useDispatch()

  const [searcher, setSearcher] = useState('')

  const handleInput = (e) => {
    e.preventDefault()
    setSearcher(e.target.value)
  }

  const searchManager = (e) => {
    e.preventDefault()
    if (searcher.length) {
      dispatch(loadingTrue())
      dispatch(searchByName(searcher))
    }
  }

  return (
    <>
      <Nav>
        <Link to={'/home'}>
          <Logo>
            <Img src={pika} alt="pikachu" />
            POKEDEX
          </Logo>
        </Link>
        <Menu>
          <Item>
            <Link to={'/creation'}>
              <CreateButton isSpecial={true}>Create pokemon</CreateButton>
            </Link>
          </Item>
          <Item>
            <form onSubmit={(e) => searchManager(e)}>
              <Searchbar
                placeholder="Search for Pokémon or pokeUser"
                onChange={(e) => handleInput(e)}
              ></Searchbar>
              <PokeButton type="submit">Search</PokeButton>
            </form>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link to={'/creation'}>
              <CreateButton isSpecial={true}>Create pokemon</CreateButton>
            </Link>
          </Item>
          <Item>
            <form onSubmit={(e) => searchManager(e)}>
              <Searchbar
                placeholder="Search for Pokémon or pokeUser"
                onChange={(e) => handleInput(e)}
              ></Searchbar>
              <PokeButton type="submit">Search</PokeButton>
            </form>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  )
}

export default Navbar
