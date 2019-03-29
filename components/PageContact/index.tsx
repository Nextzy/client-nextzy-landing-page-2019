import React from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import Swing from 'react-reveal/Swing'
import { SectionHeader } from '../common/Text'
import MenuAndContent from './MenuAndContent/index'
const Container = styled.div`
  background-color: #102131;
  color: white;
  height: 100vh;
  width: 100%;
`
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
  justify-content: start;
  z-index: 50;
  flex-direction: column;
  border: 1px solid green;
  padding-top: 8rem;
`
const BackGroundMap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('/static/images/Map/map.png');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
const PageContact = (): React.FC => {
  return (
    <Container>
      <ContainerAll>
        <ContainerPageSart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="CONTACT" />
            </Fade>
          </TextNEXTZY>
          <MenuAndContent />
        </ContainerPageSart>
      </ContainerAll>
      <BackGroundMap />
    </Container>
  )
}

export default PageContact
