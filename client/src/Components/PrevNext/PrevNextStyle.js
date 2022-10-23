import styled from 'styled-components'

const Name = styled.h2`
  text-align: center;
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
const Types = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`
const Type = styled.div`
  width: 5rem;
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

const PrevNext = styled.div`
  width: 190px;
  background: rgb(255, 255, 255);
  box-shadow: 0.1em 0.1em 0.5em rgb(255 255 255);
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
  &:hover {
    box-shadow: 0.3em 0.3em 0.7em rgb(255 255 255);
  }
`
const LinkBox = styled.div`
  letter-spacing: 1.5px;
  text-transform: capitalize;
  color: black;
  padding: 10px;
`

export { PrevNext, LinkBox, Name, ImgError, Types, Type }
