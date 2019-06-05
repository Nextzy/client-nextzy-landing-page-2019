import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Menu from './Menu'
import Title from './Title'
import Flag from './Flag'
import { IconContactPageContact } from '../../../IconContact'
const MenuSelectMap = styled.div`
  position: relative;
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const BoxContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BoxContentInSide = styled.div`
  margin-top: 64px;
  flex: 1;
`

const Description = styled.div`
  font-family: 'Montserrat-Regular';
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 20px;
  p {
    margin: 0;
    padding: 0;
  }
  margin-bottom: 64px;
`
const BoxMap = styled.div`
  width: 100%;
  height: 420px;
  background-color: blue;
`
const ChangeContentDescription = (menu): void => {
  switch (menu) {
    case 'BANGKOK':
      return (
        <Fade right>
          <Title name="BANGKOK BRANCH ADDRESS" />
          <Description>
            <p>219 / 23 Asoke Towers 7th, Soi Sukhumvit 21 Rd.</p>
            <p>Klongtoey Nua, Wattana, Bangkok 10110, </p>
            <p>Thailand.</p>
          </Description>
        </Fade>
      )
    case 'CHIANGMAI':
      return (
        <Fade right>
          <Title name="CHIANGMAI BRANCH ADDRESS" />
          <Description>
            <p>17 / 1 Cube No.7 Sirimangkalajarn Lane 7</p>
            <p>Suthep, Muang, Chiang Mai 50200, Thailand.</p>
          </Description>
        </Fade>
      )
    default:
      return null
  }
}
const MenuAndContent = (props): React.FC => {
  const [useActiveMenu, setActiveMenu] = useState('BANGKOK')
  const { useMap, setMap } = props
  return (
    <>
      <MenuSelectMap>
        <Menu name="BANGKOK" menu={useActiveMenu} setMenu={setActiveMenu} setMap={setMap} />
        <Menu name="CHIANGMAI" menu={useActiveMenu} setMenu={setActiveMenu} setMap={setMap} />
      </MenuSelectMap>
      <BoxContent>
        <BoxContentInSide>
          {ChangeContentDescription(useActiveMenu)}
          <br />
          <Title name="CONTACT" />
          <Description>
            <p>02-664-3364</p>
            <p>FAX: 02-664-0886</p>
          </Description>
          <IconContactPageContact />
        </BoxContentInSide>
      </BoxContent>
    </>
  )
}

export default MenuAndContent
