import React from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import { SectionHeader } from '../common/Text'
import { Pair } from './Menu'
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
const ContainerPageObjective = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  margin-top: 10rem;
  z-index: 50;
  flex-direction: column;
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
