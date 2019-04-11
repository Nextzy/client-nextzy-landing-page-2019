import React from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../common/Text'
import LegoBlocks from './Block'
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
const ContainerPageStart = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  justify-content: center;
  z-index: 50;
  /* flex-direction: column; */
`
const PageClient = (): React.FC => {
  return (
    <Container>
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="Page Client" />
            </Fade>
            <LegoBlocks />
          </TextNEXTZY>
        </ContainerPageStart>
      </ContainerAll>
    </Container>
  )
}

export default PageClient
