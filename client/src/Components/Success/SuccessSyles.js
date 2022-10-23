import styled from 'styled-components'

const Background = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Div = styled.div`
  user-select: none;
  width: 40rem;
  height: 16rem;
  padding-top: 7.5rem;
  text-align: center;
  background: rgb(255, 255, 255);
  box-shadow: 0.1em 0.1em 0.5em rgb(255 255 255);
  color: black;
`

export { Background, Div }
