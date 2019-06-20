import React, { useState, useRef, useEffect, useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import Fade from 'react-reveal/Fade'
import { getWidthContext } from '../../../../utils/getWidthScreen'

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

const ContainerMap = styled.div`
  z-index:25;
  svg {
    user-select: none;
    transition: 500ms all;
  }
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 100% 0%;
  object-fit: cover;
  transition: background-image 1s ease-in-out;
  .cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#162332;}.cls-4{fill:#21274a;}.cls-5{fill:#2f4968;}
  .cls-active {
    fill: #f7618b;
  }
  .cls-9 {
    animation: ${EarthFade} 2000ms infinite;
  }
  .cls-10 {
    animation: ${EarthFade} 1000ms infinite;
  }
  .textSVG {
    position: absolute;
    font-size: 3px;
    fill:#ffffff;
    font-family: Montserrat-Regular, Montserrat Regular;
    letter-spacing: 0em;
  }
  .btn {
    fill-opacity: 0;
    stroke-opacity: 0;
  }
  .flag-1{fill:#bcbec0;}
  .flag-2{fill:#fff;}
  .flag-3{fill:#f7618b;}
  .flag-4{fill:#9face6;}
`

const Flag = (props): React.FC => {
  const { useMap, setModal } = props
  const { map } = props
  return (
    <ContainerMap>
      <svg viewBox="0 0 84 85.2">
        <defs>
          <style></style>
          <clipPath id="clip-path">
            <rect className="cls-1" width="84" height="85.2" />
          </clipPath>
        </defs>
        <g>
          <text>
            <tspan className="textSVG" x="173" y="105" onClick={() => setModal({ visible: true, map: map, isShowMap: true })}>
              Nextzy Technologies
              </tspan>
          </text>
        </g>
      </svg>
    </ContainerMap>
  )
}

export default Flag
