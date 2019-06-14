import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../../common/Text'
import MenuAndContent from './MenuAndContent/index'
import Map from './MenuAndContent/Map'
import Flag from './MenuAndContent/Flag'
import ContainerAll from '../../layout/ContainerAll'

const TextNEXTZY = styled.div`
  position: relative;
  /* width: 100%; */
  text-align: left;
  font-family: 'Montserrat-Medium';
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  float: left;
`
const ContainerPageStart = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: top;
  z-index: 1;
  flex-direction: column;
`
const BoxShowMapAndFooter = styled.div`
  position: absolute;
  left:0;
  bottom:0;
  width: 100%;
  height: 100%;
`

const OnWeb = (props): React.FC => {
  const { setModal, useMap, setMap, visibleMap } = props
  return (
    <>
      <BoxShowMapAndFooter>
        <Flag map={useMap} setModal={setModal} />
      </BoxShowMapAndFooter>
      <ContainerAll>
        <TextNEXTZY>
          <Fade right cascade>
            <SectionHeader title="CONTACT" onVisibleMap={visibleMap} />
          </Fade>
        </TextNEXTZY>
        <MenuAndContent setMap={setMap} />
      </ContainerAll>
      <BoxShowMapAndFooter>
        <Map map={useMap} setModal={setModal} />
      </BoxShowMapAndFooter>
    </>
  )
}

export default OnWeb
