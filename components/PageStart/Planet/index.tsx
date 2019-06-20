import React, {
  useState,
  useRef
} from 'react'
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
  const [useCount, setCount] = useState(0)
  const [usePosition, setPosition] = useState({
    x: 0,
    y: 0
  })
  const movePlanet = function (): void {
    var x = -props.direction.x
    var y = props.direction.y
    setPosition({
      x: (useCount % 2 === 0 ? x : -x),
      y: (useCount % 2 === 0 ? y : -y)
    })
  }

  const mouseOver = function(e): void {
    movePlanet()
  }

  const mouseOut = (): void => {
    setCount(useCount + 1)
    setPosition({
      x: 0,
      y: 0
    })
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