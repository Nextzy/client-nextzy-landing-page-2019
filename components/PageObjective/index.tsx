import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import ContainerAll from '../layout/ContainerAll'
import { SectionHeader } from '../common/Text'
import { Pair } from './Menu'
import loadable from 'react-loadable'
import Config from '../../constants/Constants'
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
  font-family: Montserrat-Regular;
  font-size: 2rem;
  color: #ffffff; 
  letter-spacing: -0.5px;
  display: inline-block;
  float: left;
`
const ContainerPageObjective = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  text-align: left;
  z-index: 50;
  ${media.greaterThan(`${Config.sizeMobile}px`)`
    flex-direction: column;
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
        <BackgroundImage data-src={`/${process.env.PATH_IMG}static/images/Background/background_circle_1.svg`} alt="backgroundja" />
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
