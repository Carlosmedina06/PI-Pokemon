import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Button,
  Title,
  Description,
  TextContainer,
  Img,
  ImgContainer,
} from './LandingPageStyle.js'
import pikachu from '../../img/pikachu.png'
import charmander from '../../img/charmander.jpg'
import squirtle from '../../img/squirtle.jpg'

const LandingPage = () => {
  return (
    <Grid>
      <TextContainer>
        <Title>WELCOME TO MY POKEDEX</Title>
        <Description>PROYECTO INDIVIDUAL</Description>
        <Link to="/home">
          <Button>VIEW MORE</Button>
        </Link>
      </TextContainer>
      <ImgContainer>
        <Img src={pikachu} alt="pikachu" width="305px" height="621px" />
        <Img src={charmander} alt="charmander" width="210px" height="621px" />
        <Img src={squirtle} alt="squirtle" width="210px" height="621px" />
      </ImgContainer>
    </Grid>
  )
}

export default LandingPage
