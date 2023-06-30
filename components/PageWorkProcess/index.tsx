import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import media from 'styled-media-query'
import { SectionHeader } from '../common/Text'
import Timeline from './Timeline/index'
import TimelineVertical from './TimelineVertical/index'
import { getWidthContext } from '../../utils/getWidthScreen'
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
const TextDescription = styled.div`
  padding-top: 5rem;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 28px;
`
const ContainerPageStart = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: top;
  z-index: 50;
  flex-direction: column;
  /* border: green solid 1px; */
`
const DataProcess = [
  { name: 'Analysis', color: '#f36392' },
  { name: 'Createing the production', color: '#f36392' },
  { name: 'Estimation and proposal', color: '#d666a1' },
  { name: 'Project preparation', color: '#c667a8' },
  { name: 'Design System', color: '#a56bb8' },
  { name: 'Development', color: '#7a70cd' },
  { name: 'Test release', color: '#6672d7' },
  { name: 'Production Release', color: '#4775e5' },
  { name: 'Maintenance', color: '#2c77ee' }
]
const PageWorkProcess = (): React.FC => {
  const useScreen = useContext(getWidthContext)
  const handleComponents = (): void => {
    if (!useScreen || useScreen === 0) return null
    if (useScreen <= Config.sizeTablet) {
      return <TimelineVertical DataProcess={DataProcess} />
    } else {
      return <Timeline DataProcess={DataProcess} />
    }
  }
  return (
    <Container>
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="HOW WE WORK (WORKING PROCESS)" />
            </Fade>
          </TextNEXTZY>
          <TextDescription data-lax-preset="eager">
            To deliver the best software our customers. We, therefore, pay attention to the process of software
            development to meet the requirement of customers rapidly. You could see the sequence of operations and
            progresses during development continuously.
          </TextDescription>
          {handleComponents()}
        </ContainerPageStart>
      </ContainerAll>
    </Container>
  )
}

export default PageWorkProcess
