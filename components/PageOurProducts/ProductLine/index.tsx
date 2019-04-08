import React, { useState, Component, Fragment } from 'react'
import styled from 'styled-components'

const Line = styled.div`
  svg {
    position: absolute;
    right: 70%;
    top: 28%;
    height: 80%;
    z-index: 1;
    user-select: none;
  }
  .a,
  .b,
  .text-unactive {
    fill: #fff;
  }
  .b {
    fill-opacity: 0.2;
  }
  .c {
    mask: url(#a);
  }
  .d {
    fill: url(#b);
  }
  .e,
  .text-active {
    fill: #f7618b;
  }
  .f,
  .text-active {
    isolation: isolate;
  }
  .text-active {
    font-size: 30px;
    letter-spacing: 0.01em;
  }
  .text-active,
  .text-unactive {
    font-family: Montserrat-Regular, Montserrat Regular;
  }
  .text-unactive {
    font-size: 20px;
    letter-spacing: 0.01em;
  }

  text {
    transition: 500ms all;
  }

  @media (min-width: 719px) {
    display: none;
  }
`

export const LineSpinner = (props): React.FC => {
  const { createSelect } = props
  const [useSelected, setSelected] = useState('first')
  const setSelect = (key): void => {
    setSelected(key)
    props.onSelectProduct(key)
  }
  const setPositionText = (useSelected): void => {
    const getRotate = createSelect.find((f) => f.fixselected === useSelected)
    return getRotate.transformRotate
  }
  return (
    <Line>
      <svg viewBox="0 0 78.29 396">
        <defs>
          <mask id="a" x="7.5" y="0" width="1" height="396" maskUnits="userSpaceOnUse">
            <rect className="a" x="7.5" width="1" height="396" />
          </mask>
          <linearGradient
            id="b"
            x1="-557.98"
            y1="1356.95"
            x2="-556.98"
            y2="1356.95"
            gradientTransform="matrix(0, 396, 1, 0, -1349, 220963)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f7618b" />
            <stop offset="1" stopColor="#2a7aff" />
          </linearGradient>
        </defs>
        <rect className="b" x="7.5" width="1" height="396" />
        <g className="c">
          <rect className="d" x="7.5" width="1" height="396" />
        </g>
        <circle className="e" cx="8" cy="197.5" r="8" />

        {createSelect.map((item) => {
          const { fixselected, transformTextMobile, transformRotate } = item
          const transform = `translate(36 ${transformTextMobile + setPositionText(useSelected)})`
          return (
            <Fragment key={item.id}>
              <g className="f">
                <text
                  className={useSelected === fixselected ? 'text-active' : 'text-unactive'}
                  transform={transform}
                  onClick={() => setSelect(fixselected)}
                >
                  0{item.id}
                </text>
              </g>
            </Fragment>
          )
        })}
      </svg>
    </Line>
  )
}
