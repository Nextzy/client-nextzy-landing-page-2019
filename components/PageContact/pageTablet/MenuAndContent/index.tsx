import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Menu from './Menu'
import Title from './Title'

const MenuSelectMap = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  flex-direction: row;
  z-index:100;
`
const BoxContent = styled.div`
  margin-top: 2rem;
  height: 100%;
  flex-direction: row;
  z-index:20;
`
const BoxContentInSide = styled.div`
  position:absolute;
  margin-top: 5rem;
`

const Description = styled.div`
  /* margin: 2rem 1rem 1rem 1rem; */
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
`
const ChangeContentDescription = (menu): void => {
  switch (menu) {
    case 'BANGKOK':
      return (
        <Fade right cascade>
          <Title name="BANGKOK BRANCH ADDRESS" />
          <Description>
            <p>219 / 23 Asoke Towers 7th, Soi Sukhumvit 21 Rd.</p>
            <p>Klongtoey Nua, Wattana, Bangkok 10110, Thailand.</p>
          </Description>
        </Fade>
      )

    case 'CHIANGMAI':
      return (
        <Fade right cascade>
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
  const { setMap } = props
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
          <Title name="PHONES" />
          <Description>
            <p>02-664-3364</p>
            <p>FAX: 02-664-0886</p>
          </Description>
        </BoxContentInSide>
      </BoxContent>
    </>
  )
}

export default MenuAndContent
