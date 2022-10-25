import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
  display: flex;
  margin-top: 2rem;
  padding: 2rem;
  width: 50rem;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: 0.1em 0.1em 0.5em rgb(255 255 255);
  ${(props) =>
    props.isLoading
      ? 'align-items: center; justify-content: center; font-size: large; font-weight: bold'
      : null}
  @media (max-width: 767px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 80%;
  }
`
const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 5px;
  letter-spacing: 1.5px;
`
const Input = styled.input`
  margin-bottom: 0.3rem;
  text-align: start;
  border: none;
  border-bottom: 1px solid black;
  overflow-wrap &:focus {
    border: px solid black;
    outline: none;
    background-color: #d2ffff;
    color: black;
  }
  &[type]:focus {
    border-color: #ffd280;
    outline: 1px solid #ffd280;
  }
  transition: 0.3s;
`
const Div = styled.div`
  display: flex;
  justify-content: flex-start;

  max-width: 50rem;
  flex-wrap: auto;
`
const Span = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 5px;
  letter-spacing: 1.5px;
`
const TypeContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 0.5rem 0;
`
const MiniButton = styled.button`
  padding: 0px 10px;
  background-color: transparent;
  border: 1px solid #ffd280;
  width: 8rem;
  height: 3rem;
  margin-top: 2rem;
  transition: all 0.2s ease-in-out 0ms;
  cursor: pointer;
  &:hover {
    background-color: #ffd280;
    color: black;
  }
`

export { Grid, Form, Label, Input, Div, Span, TypeContainer, MiniButton }
