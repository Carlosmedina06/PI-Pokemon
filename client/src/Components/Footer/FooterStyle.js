import styled from 'styled-components'

const Container = styled.div`
  padding: 30px 60px 10px 60px;
  background: #ffd280;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

const Links = styled.a`
  color: #1c1c1c;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: 200ms ease-in;
  }
`

const Title = styled.p`
  font-size: 30px;
  color: #1c1c1c;
  margin-bottom: 40px;
  font-weight: bold;
`

const SubTitle = styled.p`
  font-size: 20px;
  color: #1c1c1c;
  margin-bottom: 40px;
  font-weight: bold;
`

export { Title, Links, Row, Column, Wrapper, Container, SubTitle, Img }
