import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
const ContainerMap = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  img:nth-child(1) {
    visibility: ${({ map }) => (map === 'BANGKOK' ? 'visible' : 'hidden')};
  }
  img:nth-child(2) {
    visibility: ${({ map }) => (map === 'CHIANGMAI' ? 'visible' : 'hidden')};
  }
`

const Map = (props): React.FC => {
  const [useMapOut, setMapOut] = useState('')
  const { map } = props
  if (useMapOut !== map) {
    setTimeout(() => {
      setMapOut(map)
    }, 800)
  }
  return (
    <>
      <ContainerMap {...props} useMapOut={useMapOut}>
        <Fade when={map === 'BANGKOK'}>
          <img src="/static/images/Map/map-bkk.png" alt="map" />
        </Fade>
        <Fade when={map === 'CHIANGMAI'}>
          <img src="/static/images/Map/map-cnx.png" alt="map" />
        </Fade>
      </ContainerMap>
    </>
  )
}

export default Map
