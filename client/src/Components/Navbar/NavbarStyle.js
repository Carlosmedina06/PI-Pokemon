import styled from 'styled-components'

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #ffd280;
  box-shadow: 0em 0em 0.3em #ffd280;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 25px;
  color: #1e1e1e;
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Item = styled.li``

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #1c1c1c;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? '40%' : '70%')};
  }
`

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? '91vh' : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`

const Searchbar = styled.input`
  max-width: 190px;
  height: 30px;
  border: 1px solid #1c1c1c;
  outline: none;
  caret-color: black;
  background-color: #ffff;
  padding: 10px;
  transition: all 0.2s ease-in-out 0ms;
  margin-right: 10px;
  margin-bottom: 10px;
  &::placeholder {
    color: #4f4f4f;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    border: 1px solid #ffd280;
  }
`

const PokeButton = styled.button`
  min-width: 100px;
  padding: 8px;
  border: 1px solid #1e1e1e;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
  background-color: #ffd280;
  color: #1e1e1e;
  &:hover {
    background-color: #1e1e1e;
    color: #fff;
  }
  @media (max-width: 768px) {
    background-color: #1e1e1e;
    border: 1px solid #ffd280;
    color: #fff;
    &:hover {
      background-color: #ffd280;
      color: #1c1c1c;
    }
  }
`

const CreateButton = styled.button`
  min-width: 100px;
  padding: 8px;
  border: 1px solid #1e1e1e;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
  background-color: #ffd280;
  color: #1e1e1e;
  &:hover {
    background-color: #1e1e1e;
    color: #fff;
  }
  ${(props) => (props.isSpecial ? 'width: 16rem; height: 3rem;' : null)};
  @media (max-width: 768px) {
    background-color: #1e1e1e;
    border: 1px solid #ffd280;
    color: #fff;
    &:hover {
      background-color: #ffd280;
      color: #1c1c1c;
    }
  }
`

export {
  OverlayMenu,
  Overlay,
  Line,
  NavIcon,
  Item,
  Menu,
  Logo,
  Nav,
  PokeButton,
  Searchbar,
  CreateButton,
  Img,
}
