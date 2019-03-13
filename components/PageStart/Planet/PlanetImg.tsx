import React from 'react'
import styled from 'styled-components'
const Planet = styled.div`
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImgPlanetBlinkOut = styled.img`
  width: 100%;
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
const ImgPlanetNotBG = styled.img`
  width: 60%;
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
  width: 60%;
  z-index: 10;
`
const PlanetBig = (props) => {
  const { imgIn, imgOut } = props
  const PlanetBackground = imgOut
  const PlanetIn = imgIn || '/static/images/Planet/asset_planet_2.png'
  if (imgOut) {
    return (
      <Planet>
        <ImgPlanetBlinkOut src={PlanetBackground} />
        <PlanetImgIn>
          <ImgPlanetIn src={PlanetIn} alt="bg" />
        </PlanetImgIn>
      </Planet>
    )
  } else {
    return (
      <Planet>
        <ImgPlanetNotBG src={PlanetIn} />
      </Planet>
    )
  }
}

export default PlanetBig
