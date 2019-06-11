import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Flag from './Flag'
import { getWidthContext } from '../../../../utils/getWidthScreen'
const ContainerMap = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 100% 0%;
  object-fit: cover;
  background-image: url(${(props) => props.map === 'BANGKOK' ? '/static/images/Map/map-bkk.png' : '/static/images/Map/map-cnx.png'});
`

const Map = (props): React.FC => {
  const ref = useRef(null)
  const useScreen = useContext(getWidthContext)
  const [usePosition, setPosition] = useState({ x: 0, y: 0 })
  const [useMapOut, setMapOut] = useState('')
  const { useMap, setModal } = props
  useEffect(() => {
    return () => {
      // cal position of flag
      var x = ref.current.getBoundingClientRect().width
      var y = ref.current.getBoundingClientRect().height
      setPosition({ x: x * (5 / 10), y: y * (1 / 4) })
    }
  }, [useScreen, ref.current])
  const { map } = props
  return (
    <>
      <ContainerMap {...props} map={map} ref={ref}>
      </ContainerMap>
      <Flag
        name="Nextzy Technologies"
        usePosition={usePosition}
        onClick={() => setModal({ visible: true, map: map, isShowMap: true })}
      />
    </>
  )
}

export default Map
