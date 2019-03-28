import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
const MenuSelectMap = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  flex-direction: row;
`
const MenuSelectMapHr = styled.hr`
  transition: width 0.5s ease, margin-left 0.5s ease;
  border: 0;
  height: 2px;
  width: 80%;
  background-image: linear-gradient(-90deg, #2a7aff, #f7618b);
`
const BoxContent = styled.div`
  background-color: slategray;
`

const MenuAndContent = (props): React.FC => {
  const [useActiveMenu, setActiveMenu] = useState('BANGKOK')
  return (
    <>
      <MenuSelectMap>
        <Menu name="BANGKOK" menu={useActiveMenu} setMenu={setActiveMenu} />
        <Menu name="CHAINGMAI" menu={useActiveMenu} setMenu={setActiveMenu} />
      </MenuSelectMap>
      <BoxContent>boat</BoxContent>
    </>
  )
}

export default MenuAndContent
