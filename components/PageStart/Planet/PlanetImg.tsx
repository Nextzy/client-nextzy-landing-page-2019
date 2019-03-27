import React from 'react'
import styled, { keyframes } from 'styled-components'
const Planet = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const EarthFade = keyframes`
  from {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
`
const ImgPlanetBlinkOut = styled.img`
  width: 100%;
  animation: ${EarthFade} 3000ms infinite;
`
const ImgPlanetNotBG = styled.img`
  width: 60%;
`
const PlanetImgShadow = styled.div`
  position: absolute;
  z-index: 11;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImgPlanetShadow = styled.img`
  width: 70%;
  z-index: 11;
`
const PlanetImgHole = styled.div`
  position: absolute;
  z-index: 12;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes EarthSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ${({ effectSpin }) => (effectSpin === 'spinout' ? 'animation: EarthSpin 100s infinite linear' : '')};
`

const ImgPlanetHole = styled.img`
  width: 70%;
  z-index: 12;
`
const PlanetImgCore = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes EarthSpinIn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ${({ effectSpin }) => (effectSpin === 'spinin' ? 'animation: EarthSpinIn 10s infinite linear' : '')};
`
const ImgPlanetCore = styled.img`
  width: 70%;
  z-index: 10;
`
const PlanetBig = (props): React.FC => {
  const { imgCore, imgShadow, imgHole, background, effectSpin } = props
  const PlanetBackground = background
  const PlanetCore = imgCore || '/static/images/Planet/asset_planet_3.png'
  if (imgShadow) {
    return (
      <Planet>
        <ImgPlanetBlinkOut src={PlanetBackground} />
        <PlanetImgCore effectSpin={effectSpin}>
          <ImgPlanetCore src={imgCore} alt="bg" />
        </PlanetImgCore>
        <PlanetImgShadow>
          <ImgPlanetShadow src={imgShadow} alt="bg" />
        </PlanetImgShadow>
        <PlanetImgHole effectSpin={effectSpin}>
          <ImgPlanetHole src={imgHole} alt="bg" />
        </PlanetImgHole>
      </Planet>
    )
  } else {
    return (
      <Planet>
        <ImgPlanetNotBG src={PlanetCore} />
      </Planet>
    )
  }
}

export default PlanetBig
