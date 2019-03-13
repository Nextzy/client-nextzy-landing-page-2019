import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import PlanetBig from './PlanetImg'
const MainPlanetBig = styled.div`
  position: absolute;
  transition: 5000ms;
  left: ${(props) => props.setPosition.x}px;
  top: ${(props) => props.setPosition.y}px;
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
  const { positionFade, imgIn, imgOut } = props
  return (
    <MainPlanetBig setPosition={usePosition} onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
      <Fade
        left={positionFade === 'left' ? true : false}
        right={positionFade === 'right' ? true : false}
        bottom={positionFade === 'bottom' ? true : false}
        top={positionFade === 'top' ? true : false}
      >
        <PlanetBig imgIn={imgIn} imgOut={imgOut} />
      </Fade>
    </MainPlanetBig>
  )
}

export default PlanetBigFunction
