import React from 'react'
import styled from 'styled-components'
const ButtonMenu = styled.div`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.15px;
  line-height: 24px;
  /* margin: 1rem; */
  width: 100%;
  text-align: center;
  transition: 500ms;
  opacity: 1;
`
const MenuSelectMapHr = styled.hr`
  transition: width 0.5s ease, margin-left 0.5s ease;
  border: 0;
  margin-top: 24px;
  margin-bottom: 25px;
  height: 1px;
  width: 50%;
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
