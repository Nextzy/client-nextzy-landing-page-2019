import React from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import { SectionHeader } from '../common/Text'

const Container = styled.div`
  background-color: #1a2740;
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
  justify-content: center;
  z-index: 50;
  flex-direction: column;
  background-color: #1a2740;
  border: 1px solid green;
`
const PageObjective = (): React.FunctionComponent<{}> => {
  return (
    <Container>
      <ContainerAll>
        <ContainerPageObjective>
          <TextNEXTZY>
            <SectionHeader title="OUR OBJECTIVE" />
          </TextNEXTZY>
        </ContainerPageObjective>
      </ContainerAll>
    </Container>
  )
}

export default PageObjective
