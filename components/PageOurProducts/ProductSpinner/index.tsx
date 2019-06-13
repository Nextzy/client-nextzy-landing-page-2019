import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  svg {
    margin: 6rem 5rem 0 0;
    position: absolute;
    left:-340px;
    top: 0%;
    z-index: 100;
    user-select: none;
    transition: 500ms all;
    transform:rotate(${({ setRotate }) => setRotate || 0}deg);

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
  const [useRotate, setRotated] = useState([])
  const [useSelected, setSelected] = useState('third')
  const setSelect = (key): void => {
    setSelected(key)
    props.onSelectProduct(key)
  }
  useEffect(() => {
    createSelect.map((data, index) => {
      const range = 180
      const angle = (range / createSelect.length) * index
      // cal x , y (0,0)===(331,331)
      const angleRadian = angle * (Math.PI / 180)
      const addX = 340 + (Math.cos(angleRadian) * 320)
      const addY = 340 + (Math.sin(angleRadian) * 320)
      let addedRotate = useRotate
      addedRotate[index] = { name: data.fixselected, addX: addX, addY: addY, rotate: -angle }
      setRotated(addedRotate)
    })
  }, [createSelect])

  const setPositionCircle = (useSelected) => {
    if (useRotate.length > 0) {
      const getRotate = useRotate.find((f) => f.name === useSelected)
      return getRotate.rotate
    }
  }

  return (
    <Circle setRotate={() => setPositionCircle(useSelected)}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="680" height="680">
        <defs>
          <path id="prefix__spinner_circle-a" d="M320.777 641.555C143.617 641.555 0 497.938 0 320.777 0 143.617 143.617 0 320.777 0s320.778 143.617 320.778 320.777-143.617 320.778-320.778 320.778zM320.5 640C496.955 640 640 496.955 640 320.5S496.955 1 320.5 1 1 144.045 1 320.5 144.045 640 320.5 640z" />
          <linearGradient id="prefix__spinner_circle-b" x1="7.779%" x2="92.221%" y1="0%" y2="105.478%">
            <stop offset="0%" stopColor="#F7618B" />
            <stop offset="100%" stopColor="#2A7AFF" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 661 19)">
          <mask id="prefix__spinner_circle-c" fill="#fff">
            <use xlinkHref="#prefix__spinner_circle-a" />
          </mask>
          <use fill="#D8D8D8" opacity=".5" xlinkHref="#prefix__spinner_circle-a" />
          <g fill="url(#prefix__spinner_circle-b)" mask="url(#prefix__spinner_circle-c)">
            <path d="M0-76h748v814H0z" />
          </g>
        </g>
        {createSelect.map((item, index) => {
          let addX = 0
          let addY = 0
          let angle = 0
          if (useRotate[index] !== undefined) {
            angle = useRotate[index].rotate * -1
            addX = useRotate[index].addX
            addY = useRotate[index].addY
          }
          const { fixselected } = item
          const tranfromText = 'translate(' + addX + ' ' + addY + ' ) rotate(' + angle + ')'
          return (
            <Fragment key={item.id}>
              <circle
                className={useSelected === fixselected ? 'cls-active' : 'cls-5'}
                cx={addX}
                cy={addY}
                r="8.16"
                onClick={() => setSelect(fixselected)}
                id={fixselected}
              />
              <g className={useSelected === fixselected ? '' : 'cls-6'} onClick={() => setSelect(fixselected)}>
                <text className={useSelected === fixselected ? 'text-active' : 'cls-7'} transform={tranfromText}>
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