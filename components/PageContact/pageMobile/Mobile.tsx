import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../../common/Text'
import MenuAndContent from '../pageMobile/MenuAndContent/index'
import Map from '../pageMobile/MenuAndContent/Map'
import ContainerAll from '../../layout/ContainerAll'
import Flag from './MenuAndContent/Flag'
const TextNEXTZY = styled.div`
  position: relative;
  /* width: 100%; */
  text-align: left;
  font-family: Montserrat-Medium;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  float: left;
`
const ContainerPageStart = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: top;
  z-index: 50;
  flex-direction: column;
  padding-top: 2rem;
`
const BoxShowMap = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
`
const BoxFlag = styled.div`
  position: absolute;
  left: 0;
  bottom: 111px;
  width: 70%;
`
const OnMobile = (props): React.FC => {
  const { useMap, setModal, setMap } = props
  const [useActiveMenu, setActiveMenu] = useState('BANGKOK')
  if (useMap !== useActiveMenu) {
    setMap(useActiveMenu)
  }

  const FunctionShowModal = () => {
    setTimeout(() => {
      setModal({ visible: true, map: useActiveMenu, isShowMap: true })
    }, 200)
  }
  return (
    <>
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="CONTACT" />
            </Fade>
          </TextNEXTZY>
          <MenuAndContent {...props} useActiveMenu={useActiveMenu} setActiveMenu={setActiveMenu} />
        </ContainerPageStart>
      </ContainerAll>
      <BoxShowMap>
        <Map map={useMap} />
        <BoxFlag>
          <Flag name="Nextzy Technologies" onClick={() => FunctionShowModal()} />
        </BoxFlag>
      </BoxShowMap>
    </>
  )
}

export default OnMobile
