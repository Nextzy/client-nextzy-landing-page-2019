import React from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../common/Text'
import LegoBlocks from './Block'
const Container = styled.div`
  padding: 6rem 0 0 0;
  background-color: #102131;
  color: white;
  width: 100%;
  height: 100%;
`
const TextNEXTZY = styled.div`
  position: relative;
  /* width: 100%; */
  text-align: left;
  font-family: 'Montserrat-Regular';
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
  justify-content: center;
  z-index: 50;
`
const PageClient = (): React.FC => {
  return (
    <Container>
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="OUR HAPPY CLIENT" />
            </Fade>
            <LegoBlocks />
          </TextNEXTZY>
        </ContainerPageStart>
      </ContainerAll>
    </Container>
  )
}

export default PageClient
