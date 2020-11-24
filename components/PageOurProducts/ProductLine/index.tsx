import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'

const Line = styled.div`
  svg {
    position: absolute;
    left: 0;
    top: 10rem;
    z-index: 100;
    height: 80vh;
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
  .node {
    fill: #7a6666;
  }
  .node.active {
    fill: #f7618b;
  }
  .text {
    position: absolute;
    font-size: 18px;
    fill: #d8d8d8;
    font-family: Montserrat-Regular, Montserrat Regular;
    letter-spacing: 0em;
    transition: all 0.2s ease-in-out;
  }
  .text.active {
    font-size: 24px;
    fill: #f7618b;
    font-family: Montserrat-Regular, Montserrat Regular;
    transition: all 0.2s ease-in;
  }
  .btn {
    fill-opacity: 0;
    stroke-opacity: 0;
  }
  text {
    transition: 500ms all;
  }
`

export const LineSpinner = (props): React.FC => {
  const { data, activeProduct, setActive } = props


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
        {data.map((item, index) => {
          const { fixselected, transformTextMobile, transformRotate, indicatorPosition } = item
          return (
            <Fragment key={item.id}>
              <circle
                className={`node ${index === activeProduct && 'active'}`}
                cx="8"
                cy={60 + (index * 60)}
                r={activeProduct === index ? 8 : 5}
              />
              <g className="f">
                <text
                  className={`text ${index === activeProduct && 'active'}`}
                  x="16"
                  y={70 + (index * 60)}
                >
                  0{index + 1}
                </text>
                <rect
                  className="btn"
                  width={80}
                  height={200}
                  x={-4}
                  y={30 + (index * 60)}
                  onClick={() => setActive(index)}
                />
              </g>
            </Fragment>
          )
        })}
      </svg>
    </Line>
  )
}
