import React from 'react'
import {
  Title,
  Links,
  Row,
  Column,
  Wrapper,
  Container,
  SubTitle,
  Img,
} from './FooterStyle.js'
import pika from '../../img/logo.png'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Img src={pika} alt="pikachu" />
          POKEDEX
        </Title>
      </Wrapper>
      <Row>
        <Column>
          <SubTitle>ABOUT US</SubTitle>
          <Links>Story</Links>
          <Links>Clients</Links>
          <Links>Testimonials</Links>
        </Column>
        <Column>
          <SubTitle>CONTACT US</SubTitle>
          <Links>Argentina</Links>
          <Links>Colombia</Links>
          <Links>Venezuela</Links>
        </Column>
        <Column>
          <SubTitle>SOCIAL</SubTitle>
          <Links>Facebook</Links>
          <Links>GitHub</Links>
          <Links>Instagram</Links>
        </Column>
        <Column>
          <SubTitle>HELP</SubTitle>
          <Links>Terms</Links>
          <Links>Privacy</Links>
          <Links>Segurity</Links>
        </Column>
        <Column>
          <SubTitle>SERVICES</SubTitle>
          <Links>Filter</Links>
          <Links>Sort</Links>
          <Links>Create</Links>
        </Column>
      </Row>
      <Wrapper>
        <SubTitle>Made with ❤️ Carlos Medina.</SubTitle>
      </Wrapper>
    </Container>
  )
}

export default Footer
