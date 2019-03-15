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
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 2px;
    background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
    filter: drop-shadow(0 0 6px #699bff);
    animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
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
