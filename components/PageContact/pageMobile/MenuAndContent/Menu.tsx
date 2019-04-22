import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
const ButtonMenu = styled.div`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.15px;
  line-height: 24px;
  margin: 1rem;
  transition: 500ms;
  cursor: pointer;
  ${({ active }) => (active ? 'opacity: 1;' : 'opacity: 0.5;')}
  &:hover {
    opacity: 1;
  }
`
const MenuSelectMapHr = styled.hr`
  transition: width 0.5s ease, margin-left 0.5s ease;
  border: 0;
  height: 2px;
  ${({ active }) => (active ? 'width: 80%;' : 'width: 0%;')}
  background-image: linear-gradient(-90deg, #2a7aff, #f7618b);
`
const Menu = (props): React.FC => {
  const { name, menu, setMenu } = props
  return (
    <Fade right cascade>
      <ButtonMenu active={menu === name} onClick={() => setMenu(name)}>
        {name}
        <MenuSelectMapHr active={menu === name} />
      </ButtonMenu>
    </Fade>
  )
}

export default Menu
