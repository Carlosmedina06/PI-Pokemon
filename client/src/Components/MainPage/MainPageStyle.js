import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
`

const Grid = styled.div`
  margin: 5rem 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  gap: 15px;
`
const BContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1.5rem;
`
const Button = styled.button`
  min-width: 100px;
  padding: 8px;
  border: 1px solid #ffd280;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
  background-color: #1e1e1e;
  color: #fff;
  &:hover {
    background-color: #ffd280;
    color: black;
  }
  ${(props) => (props.isSpecial ? 'width: 16rem; height: 3rem;' : null)};
`
const Select = styled.select`
  cursor: pointer;
  width: 10rem;
  height: 2.3rem;
  outline: 2px solid #1e1e1e;
  border: 1px solid #ffd280;
  color: white;
  background-color: #1e1e1e;
  &:hover {
    outline: 2px solid #ffd280;
    color: black;
    background-color: #ffd280;
  }
`

const PokeButton = styled.button`
  min-width: 100px;
  padding: 8px;
  border: 1px solid #ffd280;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
  background-color: #1e1e1e;
  color: #fff;
  &:hover {
    background-color: #ffd280;
    color: black;
  }
`

const Position = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 50rem;
`

const Loader = styled.div`
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  background-color: currentColor;
  margin: 200px auto;
  position: relative;
  color: #f2f2f2;
  animation: animloader 0.3s 0.3s linear infinite alternate;
  &::after,
  &::before {
    content: '';
    width: 8px;
    height: 40px;
    border-radius: 4px;
    background: currentColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    animation: animloader 0.3s 0.45s linear infinite alternate;
  }
  &::before {
    left: -20px;
    animation-delay: 0s;
  }

  @keyframes animloader {
    0% {
      height: 48px;
    }

    100% {
      height: 4px;
    }
  }
`
const Error = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
`

export {
  Container,
  Grid,
  BContainer,
  Button,
  Select,
  PokeButton,
  Loader,
  Error,
  Position,
}
