import React, { useState } from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.img`
  position: absolute;
  right: 90%;
  top: 30%;
  height: 65%;
  z-index: -4;
  user-select: none;
`

const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  right: 90%;
  top: 30%;
  height: 65%;
  // left: calc(0% - 2em);
  // background: red;
  &::after {
    content: '';
    // background: black;
    border-radius: 50%;
    width: 60%;
    height: 100%;
    right: 90%;
    position: absolute;
    left: 40%;
  }
  @keyframes rotate-bg-1 {
    50%,
    100% {
      transform: rotateZ(180deg);
    }
  }
  @keyframes rotate-bg-2 {
    0%,
    50% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(180deg);
    }
  }
`

const FirstDialContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  // width: 80%;
  // left: 80%;
  height: 65%;
  right: 90%;
  top: 30%;
`

const SecondDialContainer = styled.div`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  // width: 80%;
  height: 65%;
  right: 90%;
  top: 30%;
`
const FirstWedge = styled.div`
  //   background: red;
  // height: 4em;
  // width: 80%;
  height: 65%;
  right: 90%;
  top: 30%;
  animation: rotate-bg-1 4s infinite linear;
  border-radius: 0 4em 4em 0;
  left: 0;
  transform-origin: 0 50%;
`

const SecondWedge = styled.div`
  //   background: red;
  // height: 80%;
  // width: 80%;
  height: 65%;
  right: 90%;
  top: 30%;
  animation: rotate-bg-2 4s infinite linear;
  border-radius: 4em 0 0 4em;
  transform-origin: 80% 80%;
`
const MarkerStart = styled.div`
  background: pink;
  border-radius: 50%;
  height: 0.5em;
  width: 0.5em;
  position: absolute;
  top: 0;
  left: calc(50% - 0em);
`

const MarkerEnd = styled.div`
  background: pink;
  border-radius: 50%;
  height: 0.5em;
  width: 0.5em;
  position: absolute;
  top: 0;
  left: calc(50% - 0.25em);
  animation: rotate-marker 4s infinite linear;
  transform-origin: 50% 10rem;
  // @keyframes rotate-marker {
  //   100% {
  //     transform: rotateZ(360deg);
  //   }
  // }
`

const Demo = styled.div`
  svg {
    height: 300px;
    transform: rotate(-90deg);
    width: 300px;
  }

  .progress-bar__background {
    fill: none;
    stroke: #e2eff0;
    stroke-width: 1.8;
  }

  .progress-bar__progress {
    fill: none;
    stroke: #e2eff0;
    stroke: #78bec7;
    stroke-dasharray: 100 100;
    stroke-dashoffset: 100;
    stroke-linecap: round;
    stroke-width: 1.8;
    transition: stroke-dashoffset 1s ease-in-out;
  }
`

export const Spinner = (props): React.FC => {
  return (
    <div>
      <BackgroundImage src="/static/images/Background/background_spinner_circle.svg" alt="backgroundja" />
      {/* <Wrapper>
        <FirstDialContainer>
          <FirstWedge />
        </FirstDialContainer>
        <SecondDialContainer>
          <SecondWedge />
        </SecondDialContainer>
        <MarkerStart />
        <MarkerEnd />
      </Wrapper> */}
    </div>
  )
}
