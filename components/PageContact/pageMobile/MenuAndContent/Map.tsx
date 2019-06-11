import React, { useState, useContext, useRef, useEffect } from 'react'
import { getWidthContext } from '../../../../utils/getWidthScreen'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Flag from './Flag'
const ContainerMap = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% center;
  object-fit: cover;
  background-image: url(${(props) => props.map === 'BANGKOK' ? '/static/images/Map/map-bkk.png' : '/static/images/Map/map-cnx.png'});
`

const Map = (props): React.FC => {
  const ref = useRef(null)
  const useScreen = useContext(getWidthContext)
  const [usePosition, setPosition] = useState({ x: 0, y: 0 })
  const [useMapOut, setMapOut] = useState('')
  const { map, onFlag } = props
  if (useMapOut !== map) {
    setTimeout(() => {
      setMapOut(map)
    }, 800)
  }
  useEffect(() => {
    return () => {
      // cal position of flag
      var x = ref.current.getBoundingClientRect().width
      var y = ref.current.getBoundingClientRect().height
      setPosition({ x: x * (1 / 10), y: y * (1 / 5) })
    }
  }, [useScreen, ref.current])
  return (
    <>
      <ContainerMap {...props} useMapOut={useMapOut} map={map} ref={ref} />
      <Flag name="Nextzy Technologies" onClick={() => onFlag()} usePosition={usePosition} />
    </>
  )
}

export default Map
