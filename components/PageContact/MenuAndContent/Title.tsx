import React from 'react'
import styled from 'styled-components'
const ButtonMenu = styled.div`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.15px;
  line-height: 24px;
  /* margin: 1rem; */
  transition: 500ms;
  opacity: 1;
  display: inline-block;
`
const MenuSelectMapHr = styled.hr`
  transition: width 0.5s ease, margin-left 0.5s ease;
  border: 0;
  height: 2px;
  width: 105%;
  background-image: linear-gradient(-90deg, #2a7aff, #f7618b);
`
const Menu = (props): React.FC => {
  const { name, menu, setMenu } = props
  return (
    <ButtonMenu>
      {name}
      <MenuSelectMapHr />
    </ButtonMenu>
  )
}

export default Menu
