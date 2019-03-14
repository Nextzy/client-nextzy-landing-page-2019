import React, { useState } from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'
import PlanetBig from './PlanetImg'
const MainPlanetBig = styled.div`
  position: relative;
  transition: 5000ms;
  left: ${(props) => props.setPosition.x}px;
  top: ${(props) => props.setPosition.y}px;
  z-index: 99;
`

const PlanetBigFunction = (props) => {
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
  const { imgIn, imgOut } = props
  return (
    <MainPlanetBig setPosition={usePosition} onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
      <Bounce left>
        <PlanetBig imgIn={imgIn} imgOut={imgOut} />
      </Bounce>
    </MainPlanetBig>
  )
}

export default PlanetBigFunction
