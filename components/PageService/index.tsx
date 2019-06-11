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
`
const TextNEXTZY = styled.div`
  position: relative;
  /* width: 100%; */
  text-align: left;
  font-family: Montserrat-Regular;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  float: left;
`
const ContainerPageStart = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: center;
  z-index: 50;
  flex-direction: column;
`
const BackgroundImage = styled.img`
  position: absolute;
  right: 90%;
  z-index: -4;
  user-select: none;
`

const PageService = (): React.FC => {
  return (
    <Container>
      <ContainerAll>
        <BackgroundImage src="/static/images/Background/background_circle_2.svg" alt="backgroundja" />
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="PAGE OWN SERVICE" />
            </Fade>
            <LegoBlocks />
          </TextNEXTZY>
        </ContainerPageStart>
      </ContainerAll>
    </Container>
  )
}

export default PageService
