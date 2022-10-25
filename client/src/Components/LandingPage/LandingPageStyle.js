import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr;
  margin: 10rem 10rem;
  min-height: 25rem;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
  }
`
const TextContainer = styled.div`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  color: #ffd280;
  text-align: center;
`
const Description = styled.p`
  color: #fff;
  letter-spacing: 1.5px;
  @media (max-width: 767px) {
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
  }
`
const ImgContainer = styled.div`
  grid-column: 2 / 3;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
  }
`
const Img = styled.img`
  margin: 0px 10px;
`
const Button = styled.button`
  margin-top: 2rem;
  margin-bottom: 5rem;
  padding: 0.8em 1.8em;
  border: 2px solid #ffd280;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: 0.3s;
  cursor: pointer;
  color: #ffd280;
  &::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: #ffd280;
 transition: .5s ease;
 display: block;
 z-index: -1;
}
  &:hover::before {
    width: 105%;
  }
  &:hover {
 color: #111;
`

export { Grid, Button, Title, Description, TextContainer, Img, ImgContainer }
