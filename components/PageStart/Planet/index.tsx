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
  will-change:transition;
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
  /* const distMetric = (x, y, x2, y2): void => {
    var xDiff = x - x2
    var yDiff = y - y2
    return xDiff * xDiff + yDiff * yDiff
  } */
  /*   const closestEdge = (x, y, w, h): void => {
      var topEdgeDist = distMetric(x, y, w / 2, 0)
      var bottomEdgeDist = distMetric(x, y, w / 2, h)
      var leftEdgeDist = distMetric(x, y, 0, h / 2)
      var rightEdgeDist = distMetric(x, y, w, h / 2)
      var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist)
      switch (min) {
        case leftEdgeDist:
          return 'left'
        case rightEdgeDist:
          return 'right'
        case topEdgeDist:
          return 'top'
        case bottomEdgeDist:
          return 'bottom'
      }
    } */
  /* const randomPosition = (position): void => {
    console.log('position', position)
    let getX = 0
    let getY = 0
    let randomShort = Math.floor(Math.random() * 100)
    let randomLong = Math.floor(Math.random() * 50)
    switch (position) {
      case 'left':
        getX = randomShort
        getY = randomLong
        break
      case 'right':
        getX = -randomShort
        getY = -randomLong
        break
      case 'top':
        getX = randomLong
        getY = randomShort
        break
      case 'bottom':
        getX = -randomLong
        getY = -randomShort
        break
    }
    return { x: getX, y: getY }
  } */
  const movePlanet = function (): void {
    var x = -props.direction.x
    var y = props.direction.y
      setPosition({
        x: (useCount%2===0?x:-x),
        y: (useCount%2===0?y:-y)
      })
  }

  const mouseOver = function (e): void {
    movePlanet()
    /* if(useCount<0){
      clearInterval(movePlanet)
    } */
  }

  const mouseOut = (): void => {
    setCount(useCount+1)
    setPosition({
      x: 0,
      y: 0
    })
  }
  return (<
    MainPlanet ref={
      refPlanet
    }
    setPosition={
      usePosition
    }
    onMouseEnter={
      mouseOver
    }
    onMouseLeave={
      mouseOut
    } >
    <
      Bounce right >
      <
        PlanetImg {
        ...props
        }
      /> </Bounce> <
    /MainPlanet>
  )
}

export default PlanetBigFunction