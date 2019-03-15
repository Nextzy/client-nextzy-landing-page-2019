import React from 'react'
import styled from 'styled-components'
const ContainerShootingStar = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
const BodyShootingStar = styled.div`
  z-index: 10;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background-color: blue; */
  width: 100%;
  height: 100%;
  transform: rotateZ(125deg);
  @keyframes tail {
    0% {
      width: 0;
    }
    30% {
      width: 100px;
    }
    100% {
      width: 0;
    }
  }
  @keyframes shining {
    0% {
      width: 0;
    }
    30% {
      width: 30px;
    }
    100% {
      width: 0;
    }
  }
  @keyframes shooting {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(70vh);
    }
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #fff, rgba(0, 0, 255, 0));
    filter: drop-shadow(0 0 6px #699bff);
    animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
  }
  div::before,
  div::after {
    position: absolute;
    content: '';
    top: calc(50%-1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #fff, rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    animation: shining 3000ms ease-in-out infinite;
  }
  div::after {
    transform: translateX(50%) rotateZ(-45deg);
  }
  /* star 1 */
  div:nth-child(1) {
    top: calc(50% - 200px);
    left: calc(50% - 300px);
    animation-delay: 650ms;
  }
  div:nth-child(1)::before,
  div:nth-child(1)::after {
    animation-delay: 650ms;
  }
  /* star 2 */
  div:nth-child(2) {
    top: calc(50% - 50px);
    left: calc(50% - 190px);
    animation-delay: 150ms;
  }
  div:nth-child(2)::before,
  div:nth-child(2)::after {
    animation-delay: 150ms;
  }
  /* star 3  */
  div:nth-child(3) {
    top: calc(50% - -90px);
    left: calc(50% - 200px);
    animation-delay: 1600ms;
  }
  div:nth-child(3)::before,
  div:nth-child(3)::after {
    animation-delay: 1600ms;
  }
  /* star 4 */
  div:nth-child(4) {
    top: calc(50% - 50px);
    left: calc(50% - 250px);
    animation-delay: 4700ms;
  }
  div:nth-child(4)::before,
  div:nth-child(4)::after {
    animation-delay: 4700ms;
  }
  /* star 5 */

  div:nth-child(5) {
    top: calc(50% - -190px);
    left: calc(50% - 200px);
    animation-delay: 2100ms;
  }
  div:nth-child(5)::before,
  div:nth-child(5)::after {
    animation-delay: 2100ms;
  }
`

const ShootingStar = () => {
  return (
    <ContainerShootingStar>
      <BodyShootingStar>
        <div />
        <div />
        <div />
        <div />
        <div />
      </BodyShootingStar>
    </ContainerShootingStar>
  )
}

export default ShootingStar
