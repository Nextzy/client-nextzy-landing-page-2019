import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Zoom from 'react-reveal/Zoom'
const ContainerMap = styled.div`
  position: absolute;
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
    visibility: ${({ map }) => (map === 'CHAINGMAI' ? 'visible' : 'hidden')};
  }
`

const Map = (props): React.FC => {
  const { map } = props
  return (
    <ContainerMap {...props}>
      <Zoom left when={map === 'BANGKOK'}>
        <img src="/static/images/Map/map-bkk.png" alt="map" />
      </Zoom>
      <Zoom left when={map === 'CHAINGMAI'}>
        <img src="/static/images/Map/map-cnx.png" alt="map" />
      </Zoom>
    </ContainerMap>
  )
}

export default Map
