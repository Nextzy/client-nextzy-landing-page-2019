import React, { useState } from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import Map from './MenuAndContent/Map'
import { SectionHeader } from '../common/Text'
import MenuAndContent from './MenuAndContent/index'
import Footer from '../layout/Footer'
const Container = styled.div`
  padding: 5rem 0 5rem 0;
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
  img {
    width: 100%;
    height: 100%;
  }
`
const BoxFooter = styled.div`
  width: 100%;
  text-align: center;
  background: #1f2b44;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  line-height: 28px;
  padding: 1rem;
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
const FlexMap = styled.div`
  flex: 0.95;
`
const FlexFooter = styled.div`
  flex: 0.05;
`
const PageContact = (props): React.FC => {
  const { setModal } = props
  const [useMap, setMap] = useState('')
  return (
    <Container>
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
        <FlexMap>
          <Map map={useMap} />
        </FlexMap>
        <FlexFooter>
          <Footer />
        </FlexFooter>
      </BoxShowMapAndFooter>
    </Container>
  )
}

export default PageContact
