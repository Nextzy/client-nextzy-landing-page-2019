import React from 'react'
import styled from 'styled-components'
const PlanetBackground = '/static/images/Planet/asset_planent_halo_1.svg'
const PlanetIn = '/static/images/Planet/asset_planet_2.png'
const PlanetIn3 = '/static/images/Planet/asset_planet_3.png'

const Planet = styled.div`
  /* position: relative;
  margin: 2rem;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center; */
`
const ImgPlanetBlinkOut = styled.img`
  width: 60%;
  @keyframes fade {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
  animation: fade 3000ms infinite;
  -webkit-animation: fade 3000ms infinite;
  -moz-animation: fade 3000ms infinite;
  -ms-animation: fade 3000ms infinite;
`
const PlanetImgIn = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 100s infinite linear;
  -webkit-animation: spin 100s infinite linear;
  -moz-animation: spin 100s infinite linear;
  -ms-animation: spin 100s infinite linear;
`
const ImgPlanetIn = styled.img`
  width: 38%;
  @keyframes heartbeat {
    0% {
      transform: scale(0.95);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.95);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
  &:hover {
    animation: heartbeat 5s infinite;
    -webkit-animation: heartbeat 5s infinite;
    -moz-animation: heartbeat 5s infinite;
    -ms-animation: heartbeat 5s infinite;
  }
  z-index: 10;
`
const PlanetBig = () => {
  return (
    <Planet>
      <ImgPlanetBlinkOut src={PlanetBackground} />
      <PlanetImgIn>
        <ImgPlanetIn src={PlanetIn} alt="bg" />
      </PlanetImgIn>
    </Planet>
  )
}

export default PlanetBig
