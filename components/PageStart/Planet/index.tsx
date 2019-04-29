import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'
import PlanetImg from './PlanetImg'
const MainPlanet = styled.div`
  position: relative;
  transition: 5000ms;
  left: ${(props) => props.setPosition.x}px;
  top: ${(props) => props.setPosition.y}px;
  z-index: 50;
`

const PlanetBigFunction = (props): React.FC => {
  const refPlanet = useRef()
  const [usePosition, setPosition] = useState({ x: 0, y: 0 })
  const mouseOver = (): void => {
    setPosition({ x: Math.random() * 300, y: Math.random() * 300 })
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
