import React, { useState } from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'
import PlanetBig from './PlanetImg'
const MainPlanetBig = styled.div`
  position: relative;
  transition: 5000ms;
  left: ${(props) => props.setPosition.x}px;
  top: ${(props) => props.setPosition.y}px;
  z-index: 50;
`

const PlanetBigFunction = (props): React.FC => {
  const [usePosition, setPosition] = useState({ x: 0, y: 0 })
  const mouseOver = () => {
    // let goX = Math.random() < 0.5 ? -1 : 1
    // let goY = Math.random() < 0.5 ? -1 : 1
    // setPosition({ x: e.movementX + 50 * goX, y: e.movementY + 50 * goY })
    setPosition({ x: Math.random() * 300, y: Math.random() * 300 })
  }
  const mouseOut = () => {
    setPosition({ x: 0, y: 0 })
  }
  return (
    <MainPlanetBig setPosition={usePosition} onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
      <Bounce right>
        <PlanetBig {...props} />
      </Bounce>
    </MainPlanetBig>
  )
}

export default PlanetBigFunction
