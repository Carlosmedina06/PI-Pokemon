import styled from 'styled-components'

const Pag = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Numbers = styled.button`
  height: 3rem;
  width: 3rem;
  border: solid 1px #ffd280;
  background: none;
  color: white;
  margin: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;
  &:hover {
    background-color: #ffd280;
    color: black;
  }
`

export { Numbers, Pag }
