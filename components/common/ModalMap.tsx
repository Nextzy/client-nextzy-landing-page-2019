import React, { useState } from 'react'
import styled from 'styled-components'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
const ContainerModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: block;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`
const VisibleBackground = styled.div`
  transition: 500ms;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  ${({ useModalOut }) => (useModalOut ? `animation: fadeOut 0.8s;` : `animation: fadein 0.8s;`)}
`
const BoxModal = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 75%;
  width: 100%;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  @keyframes bottom {
    from {
      bottom: -150%;
    }
    to {
      bottom: 0;
    }
  }
  @keyframes bottomOut {
      from {
        bottom: 0;
      }
      to {
        bottom: -150%;
      }
    }
  ${({ useModalOut }) => (useModalOut ? `animation: bottomOut 1s;` : `animation: bottom 0.8s;`)}
   
    
  }
`
const office = {
  bangkok: {
    lat: 13.7456,
    lng: 100.5623,
    key: 'Asoke Tower',
    address: '219 / 23 Asoke Towers 7th, Soi Sukhumvit 21 Rd.\nKlongtoey Nua, Wattana, Bangkok 10110, Thailand.'
  },
  chiangmai: {
    lat: 18.795211,
    lng: 98.9724383,
    key: 'Cube No.7',
    address: '17 / 1 Cube No.7 Sirimangkalajarn Lane 7\nSuthep, Muang, Chiang Mai 50200, Thailand.'
  }
}

const ModalMap = (props): React.FC => {
  const { useModal, setModal } = props
  const { visible, map, isShowMap } = useModal
  const [useModalOut, setModalOut] = useState(false)

  const mapLat = map === 'BANGKOK' ? office.bangkok.lat : office.chiangmai.lat
  const mapLng = map === 'BANGKOK' ? office.bangkok.lng : office.chiangmai.lng
  const mapKey = map === 'BANGKOK' ? office.bangkok.key : office.chiangmai.key
  const FunctionSetModalOut = (useModalOut, setModalOut, setModal, map): void => {
    if (!useModalOut) {
      setModal({ isShowMap: false, visible: true, map })

      setModalOut(true)
      setTimeout(() => {
        setModal({ isShowMap: false, visible: false, map })
      }, 800)
    }
  }
  const GoogleMapContainer = withGoogleMap((props) => (
    <GoogleMap defaultZoom={17} defaultCenter={{ lat: mapLat, lng: mapLng }}>
      <Marker position={{ lat: mapLat, lng: mapLng }} defaultAnimation={2} />
    </GoogleMap>
  ))
  return (
    <ContainerModal visible={visible}>
      <VisibleBackground
        useModalOut={useModalOut}
        onClick={() => FunctionSetModalOut(useModalOut, setModalOut, setModal, map)}
      />
      <BoxModal useModalOut={useModalOut}>
        <GoogleMapContainer
          containerElement={<div style={{ width: '100%', height: `100%` }} />}
          mapElement={<div style={{ width: '100%', height: `100%` }} />}
          key={mapKey}
        />
      </BoxModal>
    </ContainerModal>
  )
}

export default ModalMap
