import React, { useState, useContext, useRef, useEffect } from 'react'
import { getWidthContext } from '../../../../utils/getWidthScreen'
import styled, { keyframes } from 'styled-components'

const Light = keyframes`
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
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% center;
  object-fit: cover;
  .cls-1 {
    fill: none;
  }
  .cls-2 {
    clip-path: url(#clip-path);
  }
  .cls-3 {
    fill: #162332;
  }
  .cls-4 {
    fill: #21274a;
  }
  .cls-5 {
    fill: #2f4968;
  }
  .textSVG {
    position: absolute;
    font-size: 3px;
    fill: #ffffff;
    font-family: Montserrat-Regular, Montserrat Regular;
    letter-spacing: 0em;
  }
  .btn {
    fill-opacity: 0;
    stroke-opacity: 0;
  }
  .flag-1 {
    fill: #bcbec0;
  }
  .flag-2 {
    fill: #fff;
  }
  .flag-3 {
    fill: #f7618b;
  }
  .flag-4 {
    fill: #9face6;
  }
  .light-1 {
    animation: ${Light} 2000ms infinite;
  }
  .light-2 {
    animation: ${Light} 1000ms infinite;
  }
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
  return (
    <>
      <ContainerMap {...props} useMapOut={useMapOut} map={map}>
        <svg viewBox="0 0 84 85.2">
          <defs>
            <clipPath id="clip-path">
              <rect className="cls-1" width="84" height="85.2" />
            </clipPath>
          </defs>
          {map === 'BANGKOK' ? (
            <g id="Layer_2" data-name="Layer 2">
              <g className="cls-2">
                <rect className="cls-3" y="0.05" width="84" height="85.06" />
                <path
                  className="cls-4"
                  d="M14.63,53a5.07,5.07,0,0,1-.69,0,7.74,7.74,0,0,1-3.25-.91A1.13,1.13,0,0,1,12,50.26h0a9.5,9.5,0,0,0,2.23.5,1.88,1.88,0,0,0,2.2-1.81l.15-.89c0-.29.09-.51.4-2.4s-.1-2.5-.74-3.24c-.14-.17-.29-.34-.43-.52a4.33,4.33,0,0,0-3-1.71c-1.73-.3-13.9-2.05-14-2.07a1.13,1.13,0,0,1-1-1.28,1.12,1.12,0,0,1,1.28-1c.5.07,12.32,1.77,14.08,2.08a6.55,6.55,0,0,1,4.37,2.55c.12.15.24.29.36.43,1,1.15,1.73,2.26,1.26,5.09-.31,1.91-.35,2.13-.4,2.42l-.15.88A4.13,4.13,0,0,1,14.63,53Z"
                />
                <path
                  className="cls-4"
                  d="M7.87,88.8H7.76a1.13,1.13,0,0,1-1-1.23l4.58-48.72a1.13,1.13,0,0,1,2.25.21L9,87.78A1.13,1.13,0,0,1,7.87,88.8Z"
                />
                <path
                  className="cls-4"
                  d="M8.32,84H8.15l-19.66-3a1.13,1.13,0,0,1-.94-1.29,1.13,1.13,0,0,1,1.29-.94l19.66,3A1.13,1.13,0,0,1,8.32,84Z"
                />
                <path
                  className="cls-4"
                  d="M26.24,81.72H26.1L8.48,79.58a1.13,1.13,0,1,1,.27-2.24l17.62,2.13a1.13,1.13,0,0,1-.13,2.25Z"
                />
                <path
                  className="cls-4"
                  d="M52.9,94.82l-2.2-.51s6.08-26.37,7-30.25.67-3.81-1.75-4.53c-3.34-1-24.74-7.26-24.74-7.26l.63-2.17s21.4,6.27,24.75,7.27c4.22,1.26,4.25,3.16,3.31,7.21C59,68.45,52.9,94.82,52.9,94.82Z"
                />
                <path
                  className="cls-4"
                  d="M71.84,96.56a1.13,1.13,0,0,1-1.09-1.42L87.29,33a1.13,1.13,0,1,1,2.18.58L72.93,95.72A1.13,1.13,0,0,1,71.84,96.56Z"
                />
                <path
                  className="cls-4"
                  d="M78.45,71.71a1.13,1.13,0,0,1-.29,0L46.39,63.14A1.13,1.13,0,1,1,47,61l31.77,8.54a1.13,1.13,0,0,1-.29,2.22Z"
                />
                <path
                  className="cls-4"
                  d="M43.06,93.25H43A1.13,1.13,0,0,1,41.93,92l1.49-22.51c.33-1.3,8.13-31.91,8.76-34.16.58-2.05,2.13-2.77,4.61-2.12l.24.06c.82.18,20.72,5.62,23,6.24a1.13,1.13,0,0,1-.6,2.18c-8.86-2.42-22.27-6.08-22.88-6.22l-.32-.08c-1.38-.36-1.66-.2-1.87.55-.6,2.16-8.21,32-8.72,34l-1.45,22.2A1.13,1.13,0,0,1,43.06,93.25Z"
                />
                <path
                  className="cls-4"
                  d="M71.56,69.86a1.13,1.13,0,0,1-1.09-1.45l14.92-51a1.13,1.13,0,0,1,2.17.63l-14.92,51A1.13,1.13,0,0,1,71.56,69.86Z"
                />
                <path
                  className="cls-4"
                  d="M76,53.45s-10.62-3.46-12.21-4c-.95-.3-3.46-1.09-2.83-4.15.35-1.69,2-8.89,2.06-9.2a1.13,1.13,0,1,1,2.2.5c0,.07-1.71,7.48-2.05,9.15-.16.79-.15,1.09,1.29,1.54,1.59.5,12.23,4,12.23,4Z"
                />
                <path
                  className="cls-4"
                  d="M9.62,12.47l-.2,0a1.13,1.13,0,0,1-.92-1.31L9.94,2.95a1.13,1.13,0,0,1,2.23.39l-1.43,8.19A1.13,1.13,0,0,1,9.62,12.47Z"
                />
                <path
                  className="cls-4"
                  d="M14.66,10.41h-.15a1.13,1.13,0,0,1-1-1.27l1.68-13a1.13,1.13,0,0,1,1.27-1,1.13,1.13,0,0,1,1,1.27l-1.68,13A1.13,1.13,0,0,1,14.66,10.41Z"
                />
                <path
                  className="cls-4"
                  d="M27.14,72.16H27c-.14,0-3.38-.52-4.67-.78A2.76,2.76,0,0,1,19.81,68c.1-.82.28-2.49.43-4l.23-2.14a2.81,2.81,0,0,1,3.45-2.79c1.45.15,5.37.67,5.37.67L29,62s-3.88-.51-5.31-.66c-.78-.08-.87,0-1,.79l-.23,2.13c-.16,1.47-.34,3.15-.44,4-.08.64-.09.73.69.88,1.24.25,4.54.76,4.57.76a1.13,1.13,0,0,1-.17,2.25Z"
                />
                <path
                  className="cls-4"
                  d="M92,15.44h-.13c-1.17-.08-28.85-1.93-39.3-3.53S-11.12,1.26-11.65,1.17A1.88,1.88,0,0,1-13.19-1,1.89,1.89,0,0,1-11-2.55c.54.09,53.77,9.15,64.13,10.73s38.69,3.47,39,3.49A1.88,1.88,0,0,1,92,15.44Z"
                />
                <path
                  className="cls-5"
                  d="M96.49,36.23,85,33.86c-3.16-.66-6.2-1.4-9.42-2.18-10.51-2.54-21.41-5.15-35.29-5H40l-.26,0A215.37,215.37,0,0,1,14,21.52C7,19.76.84,18.25-4.62,17.85l.54-7.51c6.1.44,12.51,2,19.92,3.87a210.72,210.72,0,0,0,24.55,5c14.73-.18,26.51,2.65,36.91,5.17,3.17.76,6.16,1.49,9.19,2.12L98,28.85Z"
                />
                <path
                  className="cls-4"
                  d="M25.64,88.54h-.2a1.88,1.88,0,0,1-1.67-2.07l1.76-16.55L41.6-5.65A1.88,1.88,0,0,1,43.84-7.1a1.88,1.88,0,0,1,1.45,2.23L29.23,70.6,27.51,86.86A1.88,1.88,0,0,1,25.64,88.54Z"
                />
              </g>
            </g>
          ) : (
            <g id="Layer_2" data-name="Layer 2">
              <g className="cls-2">
                <rect className="cls-3" width="84" height="85.2" />
                <path
                  className="cls-4"
                  d="M11.17,91.1h-.11a1.13,1.13,0,0,1-1-1.23c.19-2-.28-7.77-.78-13.83-.44-5.34-.94-11.38-1.11-16.34-.4-11.42,3.14-47.07,5.47-66.85a1.14,1.14,0,0,1,1.25-1,1.13,1.13,0,0,1,1,1.25C13,17.82,10.06,49.53,10.41,59.61c.17,4.91.67,10.93,1.1,16.24.53,6.44,1,12,.77,14.23A1.13,1.13,0,0,1,11.17,91.1Z"
                />
                <path
                  className="cls-4"
                  d="M51.67,79.61l-.23,0L-3.31,68a1.13,1.13,0,0,1-.87-1.34,1.13,1.13,0,0,1,1.34-.87L51.9,77.38a1.13,1.13,0,0,1-.23,2.24Z"
                />
                <path
                  className="cls-4"
                  d="M69.66,68.49A15.61,15.61,0,0,1,67,68.23C61,67.18,9.58,58.09,9.06,58l-.22,0L-9.84,46.28a1.13,1.13,0,0,1-.36-1.56,1.13,1.13,0,0,1,1.56-.36L9.67,55.81C13.33,56.46,61.55,65,67.39,66c5.25.91,5.8-.85,6.54-4.94.79-4.36,12.54-56.66,13-58.88a1.13,1.13,0,1,1,2.21.5c-.12.54-12.24,54.48-13,58.79C75.43,65.42,74.44,68.49,69.66,68.49Z"
                />
                <path
                  className="cls-4"
                  d="M88.07,12.17a2.25,2.25,0,0,1-1.13-.31L63.16-2A2.26,2.26,0,0,1,62.34-5a2.26,2.26,0,0,1,3.09-.82L89.21,8a2.26,2.26,0,0,1-1.14,4.21Z"
                />
                <path
                  className="cls-4"
                  d="M63.32,92h0a1.13,1.13,0,0,1-1.12-1.14l.15-14.37a1.13,1.13,0,0,1,1.13-1.12h0a1.13,1.13,0,0,1,1.12,1.14l-.15,14.37A1.13,1.13,0,0,1,63.32,92Z"
                />
                <path
                  className="cls-4"
                  d="M41.33,88.28a1.14,1.14,0,0,1-.33,0L10.23,79-4.44,75.76a1.13,1.13,0,0,1-.86-1.35,1.13,1.13,0,0,1,1.35-.86L10.8,76.81l30.86,9.26a1.13,1.13,0,0,1-.33,2.21Z"
                />
                <path
                  className="cls-4"
                  d="M50.77,88.93h-.15a1.13,1.13,0,0,1-1-1.27c0-.31,4.2-30.84,4.9-36.25.63-4.94,0-6.43-5.84-7.49-6.33-1.15-38.13-6.52-38.45-6.57L-3.23,36a1.13,1.13,0,0,1-1-1.23,1.13,1.13,0,0,1,1.23-1L10.55,35.1c.4.06,32.21,5.43,38.55,6.59,6.71,1.22,8.5,3.56,7.68,10-.69,5.42-4.86,36-4.9,36.27A1.13,1.13,0,0,1,50.77,88.93Z"
                />
                <path
                  className="cls-4"
                  d="M40.42,33.17c-.52,0-1.08,0-1.67-.09-1.82-.18-15.93-1.65-42-4.39a1.13,1.13,0,0,1-1-1.24,1.13,1.13,0,0,1,1.24-1C23,29.18,37.16,30.66,39,30.83c4.54.44,5.93-.87,7.77-5.06,2-4.52,13.95-30.93,14.07-31.2A1.13,1.13,0,0,1,62.3-6a1.13,1.13,0,0,1,.56,1.5c-.12.27-12.08,26.67-14.06,31.18C47,30.9,45,33.17,40.42,33.17Z"
                />
              </g>
            </g>
          )}
          <g transform={'translate(23,40) scale(0.3 0.3)'} className="flag">
            <ellipse className="cls-1" cx="20" cy="35.51" rx="14.18" ry="2.2" />
            <image
              width="392"
              height="358"
              transform="translate(0.61 2.29) scale(0.1)"
              onClick={() => setModal({ visible: true, map: map, isShowMap: true })}
              href="data:image/png;base64,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"
            />
            <path
              className="flag-2"
              d="M27.3,24.51A1.52,1.52,0,0,1,25.78,26a1.52,1.52,0,0,1,1.52,1.52A1.52,1.52,0,0,1,28.82,26,1.52,1.52,0,0,1,27.3,24.51Z"
            />
            <path
              className="flag-2"
              d="M24.22,24.51A1.52,1.52,0,0,1,22.7,26a1.52,1.52,0,0,1,1.52,1.52A1.52,1.52,0,0,1,25.74,26,1.52,1.52,0,0,1,24.22,24.51Z"
            />
            <path
              className="flag-2"
              d="M24.89,27.91a1.2,1.2,0,0,1-1.2,1.2,1.2,1.2,0,0,1,1.2,1.2,1.2,1.2,0,0,1,1.2-1.2A1.2,1.2,0,0,1,24.89,27.91Z"
            />
            <path
              className="flag-2"
              d="M21.79,27.91a1.2,1.2,0,0,1-1.2,1.2,1.2,1.2,0,0,1,1.2,1.2,1.2,1.2,0,0,1,1.2-1.2A1.2,1.2,0,0,1,21.79,27.91Z"
            />
            <path
              className="flag-2"
              d="M5.44,15.51A1.69,1.69,0,0,1,3.75,17.2a1.69,1.69,0,0,1,1.69,1.69A1.69,1.69,0,0,1,7.13,17.2,1.69,1.69,0,0,1,5.44,15.51Z"
            />
            <path
              className="flag-2"
              d="M2.33,15.51A1.69,1.69,0,0,1,.64,17.2a1.69,1.69,0,0,1,1.69,1.69A1.69,1.69,0,0,1,4,17.2,1.69,1.69,0,0,1,2.33,15.51Z"
            />
            <path
              className="flag-4"
              d="M11.44,34.85V3.73c.52-.12.88-.38.88-.68s-.69-.76-1.54-.76S9.24,2.63,9.24,3s.36.56.88.68V34.85c-1.53.08-2.69.41-2.69.81s1.5.82,3.34.82,3.34-.37,3.34-.82S13,34.93,11.44,34.85Z"
            />
          </g>
          <defs>
            <linearGradient id="prefix__asset_planent_halo_1-a" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#9FACE6" />
              <stop offset="100%" stopColor="#F0C9F4" />
            </linearGradient>
          </defs>
          <g fill="url(#prefix__asset_planent_halo_1-a)" fillOpacity=".1" fillRule="evenodd">
            <circle cx="29" cy="46" r="12" className="light-2" />
            <circle cx="29" cy="46" r="10" className="light-1" />
            <circle cx="29" cy="46" r="8" className="light-2" />
          </g>
          <g>
            <rect x="15" y="30" className="btn" width="30" height="30" onClick={onFlag} />
            <text>
              <tspan className="textSVG" x="15" y="60">
                Nextzy Technologies
              </tspan>
            </text>
          </g>
        </svg>
      </ContainerMap>
    </>
  )
}

export default Map
