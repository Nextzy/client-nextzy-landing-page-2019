import React, { useState } from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  svg {
    position: absolute;
    right: 90%;
    top: 30%;
    height: 65%;
    z-index: 1;
    user-select: none;
    transition: 5000ms;
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

    &:hover {
      font-size: 60px;
      fill: #f7618b;
      transform: scale(1.1);
    }
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
  const [selected, setSelect] = useState('second')
  return (
    <Circle>
      <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 840 840">
        <defs>
          <mask id="mask" x="0" y="0" width="748" height="814" maskUnits="userSpaceOnUse">
            <g transform="translate(-124 -193)">
              <g id="prefix_spinner_circle-c" data-name="prefix  spinner circle-c">
                <path
                  id="prefix_spinner_circle-a"
                  data-name="prefix  spinner circle-a"
                  className="cls-1"
                  d="M551.22,910.55C728.35,910.55,872,766.94,872,589.78S728.35,269,551.22,269,230.44,412.62,230.44,589.78,374.06,910.56,551.22,910.56Zm.28-1.55C375,909,232,766,232,589.5S375,270,551.5,270,871,413,871,589.5,728,909,551.5,909Z"
                />
              </g>
            </g>
          </mask>
          <linearGradient
            id="linear-gradient"
            x1="0.79"
            y1="1200.68"
            x2="1.63"
            y2="1199.63"
            gradientTransform="translate(1391 977539) rotate(180) scale(748 814)"
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
          d="M551.22,910.55C728.35,910.55,872,766.94,872,589.78S728.35,269,551.22,269,230.44,412.62,230.44,589.78,374.06,910.56,551.22,910.56Zm.28-1.55C375,909,232,766,232,589.5S375,270,551.5,270,871,413,871,589.5,728,909,551.5,909Z"
          transform="translate(-124 -193)"
        />
        <g className="cls-3">
          <path className="cls-4" d="M872,193H124v814H872Z" transform="translate(-124 -193)" />
        </g>
        <circle
          className={selected === 'first' ? 'cls-active' : 'cls-5'}
          cx="559.11"
          cy="104.13"
          r="8.16"
          onClick={() => setSelect('first')}
          onMouseEnter={() => setSelect('first')}
        />
        <circle
          className={selected === 'second' ? 'cls-active' : 'cls-5'}
          cx="650.89"
          cy="166.91"
          r="8.16"
          onClick={() => setSelect('second')}
          onMouseEnter={() => setSelect('second')}
        />
        <circle
          className={selected === 'third' ? 'cls-active' : 'cls-5'}
          cx="715.08"
          cy="258.12"
          r="8.16"
          onClick={() => setSelect('third')}
          onMouseEnter={() => setSelect('third')}
        />
        <circle
          className={selected === 'fourth' ? 'cls-active' : 'cls-5'}
          cx="748"
          cy="390"
          r="8.16"
          onClick={() => setSelect('fourth')}
          onMouseEnter={() => setSelect('fourth')}
        />
        <circle
          className={selected === 'fifth' ? 'cls-active' : 'cls-5'}
          cx="715.08"
          cy="532.9"
          r="8.16"
          onClick={() => setSelect('fifth')}
          onMouseEnter={() => setSelect('fifth')}
        />
        <circle
          className={selected === 'sixth' ? 'cls-active' : 'cls-5'}
          cx="650.89"
          cy="627.49"
          r="8.16"
          onClick={() => setSelect('sixth')}
          onMouseEnter={() => setSelect('sixth')}
        />
        <circle
          className={selected === 'seventh' ? 'cls-active' : 'cls-5'}
          cx="550.94"
          cy="692.81"
          r="8.16"
          onClick={() => {
            props.onSelectProduct(selected)
            setSelect('seventh')
          }}
          onMouseEnter={() => setSelect('seventh')}
        />
        <g
          className={selected === 'first' ? '' : 'cls-6'}
          onClick={() => setSelect('first')}
          onMouseEnter={() => setSelect('first')}
        >
          <text className={selected === 'first' ? 'text-active' : 'cls-7'} transform="translate(590.63 92) rotate(-61)">
            0
            <tspan className="cls-8" x="35" y="0">
              1
            </tspan>
          </text>
        </g>
        <g
          className={selected === 'second' ? '' : 'cls-6'}
          onClick={() => setSelect('second')}
          onMouseEnter={() => setSelect('second')}
        >
          <text
            className={selected === 'second' ? 'text-active' : 'cls-7'}
            transform="translate(684.55 160.29) rotate(-50)"
          >
            0
            <tspan className="cls-8" x="35" y="0">
              2
            </tspan>
          </text>
        </g>
        <g
          className={selected === 'third' ? '' : 'cls-6'}
          onClick={() => setSelect('third')}
          onMouseEnter={() => setSelect('third')}
        >
          <text
            className={selected === 'third' ? 'text-active' : 'cls-7'}
            transform="translate(750 267.82) rotate(-30)"
          >
            0
            <tspan className="cls-8" x="35" y="0">
              3
            </tspan>
          </text>
        </g>
        <g
          className={selected === 'fourth' ? '' : 'cls-6'}
          onClick={() => setSelect('fourth')}
          onMouseEnter={() => setSelect('fourth')}
        >
          <text className={selected === 'fourth' ? 'text-active' : 'cls-7'} transform="translate(768 409) rotate(0)">
            0
            <tspan className="cls-8" x="35" y="0">
              4
            </tspan>
          </text>
        </g>
        <g
          className={selected === 'fifth' ? '' : 'cls-6'}
          onClick={() => setSelect('fifth')}
          onMouseEnter={() => setSelect('fifth')}
        >
          <text className={selected === 'fifth' ? 'text-active' : 'cls-7'} transform="translate(735 560) rotate(10)">
            0
            <tspan className="cls-8" x="35" y="0">
              5
            </tspan>
          </text>
        </g>
        <g
          className={selected === 'sixth' ? '' : 'cls-6'}
          onClick={() => setSelect('sixth')}
          onMouseEnter={() => setSelect('sixth')}
        >
          <text className={selected === 'sixth' ? 'text-active' : 'cls-7'} transform="translate(657 660) rotate(40)">
            0
            <tspan className="cls-8" x="35" y="0">
              6
            </tspan>
          </text>
        </g>
        <g
          className={selected === 'seventh' ? '' : 'cls-6'}
          onClick={() => setSelect('seventh')}
          onMouseEnter={() => setSelect('seventh')}
        >
          <text className={selected === 'seventh' ? 'text-active' : 'cls-7'} transform="translate(555 720) rotate(50)">
            0
            <tspan className="cls-8" x="35" y="0">
              7
            </tspan>
          </text>
        </g>
      </svg>
    </Circle>
  )
}
