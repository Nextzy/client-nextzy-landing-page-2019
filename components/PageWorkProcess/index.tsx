import React from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
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
const ContainerPageSart = styled.div`
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
  background-color: green;
`
const PageWorkProcess = () => {
  return (
    <Container>
      <ContainerAll>
        <ContainerPageSart>
          <TextNEXTZY>
            <Fade right cascade>
              <p>Page Work Process</p>
            </Fade>
          </TextNEXTZY>
        </ContainerPageSart>
      </ContainerAll>
    </Container>
  )
}

export default PageWorkProcess
