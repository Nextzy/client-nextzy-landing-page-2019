import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  svg {
    position: absolute;
    left: -500px;
    top: 0%;
    z-index: 100;
    user-select: none;
    transition: 500ms all;
    transform: rotate(${({ setRotate }) => (setRotate ? -setRotate.distance : 0)}deg);
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

  .node {
    padding-top: 10px;
    fill: #7c6867;
  }

  .cls-6 {
    opacity: 0.2;
    isolation: isolate;
  }

  .text {
    position: absolute;
    font-size: 48px;
    fill: #d8d8d8;
    font-family: Montserrat-Regular, Montserrat Regular;
    letter-spacing: 0em;
    transition: all 0.2s ease-in-out;
  }

  .cls-8 {
    letter-spacing: 0em;
  }

  .node.active {
    fill: #f7618b;
  }

  .text.active {
    font-size: 60px;
    fill: #f7618b;
    font-family: Montserrat-Regular, Montserrat Regular;
    transition: all 0.2s ease-in;
  }
  .btn {
    fill-opacity: 0;
    stroke-opacity: 0;
  }
`
const toRad = (deg) => deg * (Math.PI / 180)

export const Spinner = (props): React.FC => {
  const { setActive, activeProduct, data } = props
  const range = 180
  const radius = 320
  const number = data.length
  const middle = { x: 500, y: 500 }
  const angle = range / number
  let position = data.map((_, index) => {
    const distance = angle * index
    const addX = middle.x + Math.cos(toRad(distance)) * radius
    const addY = middle.y + Math.sin(toRad(distance)) * radius
    return { x: addX, y: addY, distance: distance }
  })

  return (
    <Circle setRotate={position[activeProduct]}>
      <svg width="1000" height="1000">
        <defs>
          <path id="prefix__spinner_circle-a" d="M499.777 820.555C322.617 820.555 179 676.938 179 499.777 179 322.617 322.617 179 499.777 179s320.778 143.617 320.778 320.777-143.617 320.778-320.778 320.778zM499.5 819C675.955 819 819 675.955 819 499.5S675.955 180 499.5 180 180 323.045 180 499.5 323.045 819 499.5 819z" />
          <linearGradient id="prefix__spinner_circle-b" x1="7.779%" x2="92.221%" y1="0%" y2="105.478%">
            <stop offset="0%" stopColor="#F7618B" />
            <stop offset="100%" stopColor="#2A7AFF" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="prefix__spinner_circle-c" fill="#fff">
            <use href="#prefix__spinner_circle-a" />
          </mask>
          <use fill="#D8D8D8" opacity=".5" transform="matrix(-1 0 0 1 999.555 0)" href="#prefix__spinner_circle-a" />
          <g fill="url(#prefix__spinner_circle-b)" mask="url(#prefix__spinner_circle-c)">
            <path d="M874 93H126v814h748z" />
          </g>
        </g>
        {data.map((item, index) => {
          const { x, y, distance } = position[index]
          const transform = 'translate(' + x + ' ' + y + ' ) rotate(' + distance + ')'
          return (
            <React.Fragment key={index}>
              <circle transform={transform} r="10" className={activeProduct === index ? 'node active' : 'node'} />
              <text className={activeProduct === index ? 'text active' : 'text'} transform={transform}>
                <tspan x="35" y="12" className="cls-8">
                  {'0' + item.id}
                </tspan>
              </text>
              <rect
                className="btn"
                transform={transform}
                width={200}
                height={200}
                x="-20"
                y="-100"
                onClick={() => setActive(index)}
              />
            </React.Fragment>
          )
        })}
      </svg>
    </Circle>
  )
}