import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'
import PlanetImg from './PlanetImg'
const MainPlanet = styled.div`
  position: relative;
  transition: 5000ms;
  left: ${(props) => props.setPosition.y}px;
  top: ${(props) => props.setPosition.x}px;
  z-index: 50;
`

const PlanetBigFunction = (props): React.FC => {
  const refPlanet = useRef()
  const [usePosition, setPosition] = useState({ x: 0, y: 0 })
  const mouseOver = (e): void => {
    const mouseX = e.pageX
    const mouseY = e.pageY
    setPosition({ x: mouseX, y: mouseY })
  }
  const mouseOut = (): void => {
    setPosition({ x: 0, y: 0 })
  }
  return (
    <MainPlanet ref={refPlanet} setPosition={usePosition} onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
      <Bounce right>
        <PlanetImg {...props} />
      </Bounce>
    </MainPlanet>
  )
}

export default PlanetBigFunction
