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
    padding-top:10px;
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
    padding-top:10px;
    fill: #f7618b;
  }

  .text-active {
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

export const Spinner = (props): React.FC => {
  const { createSelect, activeProduct } = props
  const [useRotate, setRotated] = useState([])
  const [useSelected, setSelected] = useState(activeProduct)
  const setSelect = (key): void => {
    setSelected(key)
    props.onSelectProduct(key)
  }
  useEffect(() => {
    createSelect.map((data, index) => {
      const range = 180
      const anglePerItem = (range / createSelect.length)
      const angle = anglePerItem * index
      // cal x , y (0,0)===(491,491)
      const angleRadian = angle * (Math.PI / 180)
      const textRadian = (angle + 2) * (Math.PI / 180)
      const btnRadian = (angle - (anglePerItem / 2)) * (Math.PI / 180)
      const addX = 500 + (Math.cos(angleRadian) * 320)
      const addY = 500 + (Math.sin(angleRadian) * 320)
      const textX = 500 + (Math.cos(textRadian) * 335)
      const textY = 500 + (Math.sin(textRadian) * 335)
      const btnX = 500 + (Math.cos(btnRadian) * 300)
      const btnY = 500 + (Math.sin(btnRadian) * 300)
      let addedRotate = useRotate
      addedRotate[index] = { name: data.fixselected, addX: addX, addY: addY, textX: textX, textY: textY, btnX: btnX, btnY: btnY, rotate: -angle }
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
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1000" height="1000">
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
        {createSelect.map((item, index) => {
          let addX = 0
          let addY = 0
          let angle = 0
          let textX = 0
          let textY = 0
          let btnX = 0
          let btnY = 0
          if (useRotate[index] !== undefined) {
            angle = useRotate[index].rotate * -1
            addX = useRotate[index].addX
            addY = useRotate[index].addY
            textX = useRotate[index].textX
            textY = useRotate[index].textY
            btnX = useRotate[index].btnX
            btnY = useRotate[index].btnY
          }
          const { fixselected } = item
          const tranfromBtn = 'translate(' + btnX + ' ' + btnY + ' ) rotate(' + angle + ')'
          const tranfromText = 'translate(' + textX + ' ' + textY + ' ) rotate(' + angle + ')'
          return (
            <Fragment key={item.id}>
              <g>
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
                <rect className="btn" width="150" height="120" onClick={() => setSelect(fixselected)} transform={tranfromBtn} />
              </g>
            </Fragment>
          )
        })}
      </svg>
    </Circle>
  )

}