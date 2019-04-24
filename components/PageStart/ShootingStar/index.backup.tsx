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
  width: 100%;
  height: 100%;
  transform: rotateZ(145deg);
  top: -9rem;
  @keyframes tail {
    0% {
      width: 0;
    }
    30% {
      width: 200px;
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
      width: 100px;
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
    height: 4px;
    opacity: 0.3;
    background: linear-gradient(-45deg, #fff, rgba(0, 0, 555, 0));
    filter: drop-shadow(0 0 6px #699bff);
    /* animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite; */
    animation: tail 3000ms, shooting 3000ms;
  }
  div::before,
  div::after {
    position: absolute;
    content: '';
    top: calc(50%-1px);
    right: 0;
    height: 2px;
    opacity: 0.3;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #fff, rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    animation: shining 3000ms ease-in-out infinite;
  }
  div::after {
    transform: translateX(50%) rotateZ(-45deg);
  }
  /* star 1 */
  div:nth-child(1) {
    top: 99%;
    left: 30%;
    animation-delay: 1000ms;
  }
  div:nth-child(1)::before,
  div:nth-child(1)::after {
    animation-delay: 1000ms;
  }
  /* star 2 */
  div:nth-child(2) {
    top: 80%;
    left: 50%;
    animation-delay: 1500ms;
  }
  div:nth-child(2)::before,
  div:nth-child(2)::after {
    animation-delay: 1500ms;
  }
  /* star 3  */
  div:nth-child(3) {
    top: 30%;
    left: 20%;
    animation-delay: 2000ms;
  }
  div:nth-child(3)::before,
  div:nth-child(3)::after {
    animation-delay: 2000ms;
  }
  /* star 4 */
  div:nth-child(4) {
    top: 45%;
    left: 60%;
    animation-delay: 3000ms;
  }
  div:nth-child(4)::before,
  div:nth-child(4)::after {
    animation-delay: 3000ms;
  }
`
const ShootingStar = (): React.FC => {
  return (
    <ContainerShootingStar>
      <BodyShootingStar>
        <div />
        <div />
        <div />
        <div />
      </BodyShootingStar>
    </ContainerShootingStar>
  )
}

export default ShootingStar
