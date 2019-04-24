import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import ContainerAll from '../layout/ContainerAll'
import { SectionHeader } from '../common/Text'
import { Pair } from './Menu'
import Config from '../../constants/Constants'
const Container = styled.div`
  padding: 5rem 0 5rem 0;
  background-color: #102131;
  color: white;
  height: 100vh;
  width: 100%;
  height: 200%;
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
const ContainerPageObjective = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  text-align: left;
  margin-top: 10rem;
  z-index: 50;
  flex-direction: column;
  ${media.lessThan(`${Config.sizeMobile}px`)`
      margin-top: 3rem;
  `}
`

const BackgroundImage = styled.img`
  position: absolute;
  left: 80%;
  z-index: -4;
  user-select: none;
`

const PageObjective = (): React.FunctionComponent<{}> => {
  return (
    <Container>
      <ContainerAll>
        <BackgroundImage src="/static/images/Background/background_circle_1.svg" alt="backgroundja" />
        <ContainerPageObjective>
          <TextNEXTZY>
            <SectionHeader title="OUR OBJECTIVE" />
            <Pair />
          </TextNEXTZY>
        </ContainerPageObjective>
      </ContainerAll>
    </Container>
  )
}

export default PageObjective
