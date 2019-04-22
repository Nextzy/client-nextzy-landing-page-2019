import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../../common/Text'
import MenuAndContent from '../pageMobile/MenuAndContent/index'
import Map from '../pageMobile/MenuAndContent/Map'
import ContainerAll from '../../layout/ContainerAll'

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
const ContainerPageSart = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: top;
  z-index: 50;
  flex-direction: column;
  padding-top: 5rem;
`
const BoxShowMapAndFooter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const OnMobile = (props): React.FC => {
  const { setModal, useMap, setMap } = props
  return (
    <>
      <ContainerAll>
        <ContainerPageSart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="CONTACT" />
            </Fade>
          </TextNEXTZY>
          <MenuAndContent setMap={setMap} setModal={setModal} />
        </ContainerPageSart>
      </ContainerAll>
      <BoxShowMapAndFooter>
        <Map map={useMap} />
      </BoxShowMapAndFooter>
    </>
  )
}

export default OnMobile
