import styled from 'styled-components'

const Background = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1.5rem;
  justify-content: space-around;
  width: 100%;
`

const Entrance = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0.1em 0.1em 0.5em rgb(255 255 255);
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
  margin-top: 3rem;
  &:hover {
    box-shadow: 0.3em 0.3em 0.7em rgb(255 255 255);
  }
`

const Name = styled.h1`
  text-align: center;
`
const Img = styled.div`
  margin-right: 1.4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 10px;
  margin-left: 1.5rem;
`
const ImgError = styled.div`
  display: flex;
  padding: 1rem;
  height: 6.5rem;
  border: 1px solid black;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: lighter;
  background-color: rgb(198, 102, 102, 0.7);
  text-transform: uppercase;
`
const Text = styled.p`
  letter-spacing: 1.5px;
  padding: 10px;
`
const Types = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`
const Type = styled.div`
  width: 8rem;
  color: white;
  text-align: center;
  margin: 5px;
  ${(props) =>
    props.name === 'Grass'
      ? 'background-color: rgb(10, 77, 10)'
      : props.name === 'Fire'
      ? 'background-color: rgb(221, 92, 12)'
      : props.name === 'Water'
      ? 'background-color: rgb(64, 135, 194)'
      : props.name === 'Flying'
      ? 'background-color: rgb(49, 78, 131)'
      : props.name === 'Bug'
      ? 'background-color: rgb(82, 138, 35)'
      : props.name === 'Poison'
      ? 'background-color: rgb(174, 78, 174)'
      : props.name === 'Normal'
      ? 'background-color: #bcbcbc'
      : props.name === 'Electric'
      ? 'background-color: #ffcc00'
      : props.name === 'Ground'
      ? 'background-color: #ceb659'
      : props.name === 'Fairy'
      ? 'background-color: #fd9afd'
      : props.name === 'Dragon'
      ? 'background-color: rgb(35, 35, 169)'
      : props.name === 'Psychic'
      ? 'background-color: #ff33ff;'
      : 'background-color: #0336ff;'};
`

export { Background, Div, Entrance, Name, Img, ImgError, Text, Types, Type }
