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
  justify-content: center;
  z-index: 50;
  flex-direction: column;
  border: 1px solid green;
`
const MenuSelectMap = styled.div`
  position: absolute;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.15px;
  line-height: 24px;
  right: 3rem;
  display: flex;
  flex-direction: row;
  div {
    margin: 1rem;
    transition: 500ms;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`
const MenuSelectMapHr = styled.hr`
  transition: width 0.5s ease, margin-left 0.5s ease;
  border: 0;
  height: 2px;
  width: 80%;
  background-image: linear-gradient(-90deg, #2a7aff, #f7618b);
`
const BackGroundMap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('/static/images/Map/map.png');
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
        <BackGroundMap />
      </ContainerAll>
    </Container>
  )
}

export default PageContact
