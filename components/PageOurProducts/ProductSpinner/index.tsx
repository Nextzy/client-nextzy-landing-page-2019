import React, { useState, Component, Fragment } from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  svg {
    position: absolute;
    right: 80%;
    top: 28%;
    height: 80%;
    z-index: 1;
    user-select: none;
    transition: 500ms all;
    transform: rotate(${({ setRotate }) => setRotate || 0}deg);
  }

  .cls-1 {
    fill: #fff;
  }

  .cls-2 {
    fill: #d8d9d8;
  }

  .cls-3 {
    mask: url(#mask);
  }

  .cls-4 {
    fill: url(#linear-gradient);
  }

  .cls-5 {
    fill: #7c6867;
  }

  .cls-6 {
    opacity: 0.2;
    isolation: isolate;
  }

  .cls-7 {
    font-size: 48px;
    fill: #d8d8d8;
    font-family: Montserrat-Regular, Montserrat Regular;
    letter-spacing: 0em;
    transition: all 0.2s ease-in-out;
  }

  .cls-8 {
    letter-spacing: 0em;
  }

  .cls-active {
    fill: #f7618b;
  }

  .text-active {
    font-size: 60px;
    fill: #f7618b;
    font-family: Montserrat-Regular, Montserrat Regular;
    transition: all 0.2s ease-in;
  }
`

export const Spinner = (props): React.FC => {
  const { createSelect } = props
  const [useSelected, setSelected] = useState('first')
  const setSelect = (key): void => {
    setSelected(key)
    props.onSelectProduct(key)
  }
  const setPositionCircle = (useSelected): void => {
    const getRotate = createSelect.find((f) => f.fixselected === useSelected)
    return getRotate.rotate
  }
  return (
    <Circle setRotate={setPositionCircle(useSelected)}>
      <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 835 814">
        <defs>
          <mask id="mask" x="0" y="0" width="748" height="814" maskUnits="userSpaceOnUse">
            <g transform="translate(-162.36 -193)">
              <g id="prefix_spinner_circle-c" data-name="prefix  spinner circle-c">
                <path
                  id="prefix_spinner_circle-a"
                  data-name="prefix  spinner circle-a"
                  className="cls-1"
                  d="M589.59,910.55c177.16,0,320.78-143.62,320.78-320.78S766.75,269,589.59,269,268.81,412.62,268.81,589.78,412.43,910.56,589.59,910.56Zm.28-1.55c-176.45,0-319.5-143-319.5-319.5S413.41,270,589.86,270s319.5,143,319.5,319.5S766.32,909,589.86,909Z"
                />
              </g>
            </g>
          </mask>
          <linearGradient
            id="linear-gradient"
            x1="100.87"
            y1="1200.68"
            x2="101.71"
            y2="1199.63"
            gradientTransform="translate(76291 977539) rotate(180) scale(748 814)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f0618b" />
            <stop offset="1" stopColor="#4a73b9" />
          </linearGradient>
        </defs>
        <path
          id="prefix_spinner_circle-a-2"
          data-name="prefix  spinner circle-a"
          className="cls-2"
          d="M589.59,910.55c177.16,0,320.78-143.62,320.78-320.78S766.75,269,589.59,269,268.81,412.62,268.81,589.78,412.43,910.56,589.59,910.56Zm.28-1.55c-176.45,0-319.5-143-319.5-319.5S413.41,270,589.86,270s319.5,143,319.5,319.5S766.32,909,589.86,909Z"
          transform="translate(-162.36 -193)"
        />
        <g className="cls-3">
          <path className="cls-4" d="M910.36,193h-748v814h748Z" transform="translate(-162.36 -193)" />
        </g>
        {createSelect.map((item) => {
          const { positionSVG, fixselected, transformText } = item
          return (
            <Fragment key={item.id}>
              <circle
                className={useSelected === fixselected ? 'cls-active' : 'cls-5'}
                cx={positionSVG.cx}
                cy={positionSVG.cy}
                r="8.16"
                onClick={() => setSelect(fixselected)}
                id={fixselected}
              />
              <g className={useSelected === fixselected ? '' : 'cls-6'} onClick={() => setSelect(fixselected)}>
                <text className={useSelected === fixselected ? 'text-active' : 'cls-7'} transform={transformText}>
                  0
                  <tspan className="cls-8" x="35" y="0">
                    {item.id}
                  </tspan>
                </text>
              </g>
            </Fragment>
          )
        })}
      </svg>
    </Circle>
  )
}
