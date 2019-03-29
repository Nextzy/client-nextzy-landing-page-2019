import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Menu from './Menu'
import Title from './Title'
import Flag from './Flag'
const MenuSelectMap = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  flex-direction: row;
`
const BoxContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`
const BoxContentInSide = styled.div`
  margin-top: 5rem;
  flex: 0.5;
`
const BoxContentMap = styled.div`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

const Description = styled.div`
  margin: 2rem 1rem 1rem 1rem;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
`
const ChangeContentDescription = (menu) => {
  switch (menu) {
    case 'BANGKOK':
      return (
        <Description>
          <Fade right cascade>
            <p>219 / 23 Asoke Towers 7th, Soi Sukhumvit 21 Rd.</p>
            <p>Klongtoey Nua, Wattana, Bangkok 10110, Thailand.</p>
          </Fade>
        </Description>
      )
    case 'CHAINGMAI':
      return (
        <Description>
          <Fade right cascade>
            <p>เลขที่ 17/1 ซอยศิริมังคลาจารย์ 7 </p>
            <p>ตำบลสุเทพ อำเภอเมือง เชียงใหม่ 50200</p>
          </Fade>
        </Description>
      )
    default:
      return null
  }
}
const MenuAndContent = (props): React.FC => {
  const [useActiveMenu, setActiveMenu] = useState('BANGKOK')
  return (
    <>
      <MenuSelectMap>
        <Menu name="BANGKOK" menu={useActiveMenu} setMenu={setActiveMenu} />
        <Menu name="CHAINGMAI" menu={useActiveMenu} setMenu={setActiveMenu} />
      </MenuSelectMap>
      <BoxContent>
        <BoxContentInSide>
          <Title name="BANGKOK BRANCH ADDRESS" />
          {ChangeContentDescription(useActiveMenu)}
          <br />
          <Title name="PHONES" />
          <Description>
            <p>02-664-3364</p>
            <p>FAX: 02-664-0886</p>
          </Description>
        </BoxContentInSide>
        <BoxContentMap>
          <Flag />
          Nextzy Technologies
        </BoxContentMap>
      </BoxContent>
    </>
  )
}

export default MenuAndContent
