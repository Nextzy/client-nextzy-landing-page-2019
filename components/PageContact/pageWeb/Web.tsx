import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../../common/Text'
import MenuAndContent from './MenuAndContent/index'
import Map from './MenuAndContent/Map'
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
  z-index: 50;
  flex-direction: column;
`
const BoxShowMapAndFooter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const OnWeb = (props): React.FC => {
  const { setModal, useMap, setMap, visibleMap } = props
  return (
    <>
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="CONTACT" onVisibleMap={visibleMap} />
            </Fade>
          </TextNEXTZY>
          <MenuAndContent setMap={setMap} />
        </ContainerPageStart>
      </ContainerAll>
      <BoxShowMapAndFooter>
        <Map map={useMap} setModal={setModal} />
      </BoxShowMapAndFooter>
    </>
  )
}

export default OnWeb
