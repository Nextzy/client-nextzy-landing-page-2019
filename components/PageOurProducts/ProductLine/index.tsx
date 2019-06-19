import React, { useState, Component, Fragment } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'

const Line = styled.div`
  svg {
    position: absolute;
    left: 0;
    top: 10rem;
    z-index: 100;
    height: 40rem;
    user-select: none;
    ${media.lessThan(`${Config.mediaQuery.tablet}px`)`
      left: 5%;
    `}

    ${media.lessThan(`${Config.mediaQuery.mobileM}px`)`
      left: 0;
    `}
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
  .indicator-active,
  .text-active {
    fill: #f7618b;
  }
  .indicator-unactive {
    fill: #7a6666;
  }

  .indicator-active,
  .indicator-unactive {
    transition: 500ms all;
  }
  .f,
  .text-active {
    isolation: isolate;
  }
  .text-active {
    font-size: 25px;
    letter-spacing: 0.01em;
  }
  .text-active,
  .text-unactive {
    font-family: Montserrat-Regular, Montserrat Regular;
  }
  .text-unactive {
    font-size: 18px;
    letter-spacing: 0.01em;
  }

  text {
    transition: 500ms all;
  }
`

export const LineSpinner = (props): React.FC => {
  const { createSelect, activeProduct } = props
  const [useSelected, setSelected] = useState(activeProduct)
  const setSelect = (key): void => {
    setSelected(key)
    props.onSelectProduct(key)
  }
  const setPositionText = (useSelected): void => {
    const getRotate = createSelect.find((f) => f.fixselected === useSelected)
    const transformRotate = 205.5 - getRotate.transformTextMobile
    return transformRotate
  }

  const setPositionIndicator = (useSelected): void => {
    const getRotate = createSelect.find((f) => f.fixselected === useSelected)
    const transformIndicator = 197 - getRotate.indicatorPosition
    return transformIndicator
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
        {createSelect.map((item) => {
          const { fixselected, transformTextMobile, transformRotate, indicatorPosition } = item
          const textTransform = `translate(32 ${transformTextMobile + setPositionText(useSelected)})`
          const indicatorTransform = indicatorPosition + setPositionIndicator(useSelected)
          return (
            <Fragment key={item.id}>
              <circle
                className={fixselected === 'fourth' ? 'indicator-active' : 'indicator-unactive'}
                cx="8"
                cy={indicatorPosition}
                r={fixselected === 'fourth' ? 8 : 5}
              />
              <g className="f">
                <text
                  className={useSelected === fixselected ? 'text-active' : 'text-unactive'}
                  transform={textTransform}
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
