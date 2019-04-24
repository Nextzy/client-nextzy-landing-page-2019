import React from 'react'
import styled from 'styled-components'
import positionAndDelay from './positionAndDelay'
import ItemShootingStar from './itemShootingStar'
const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: rotate(145deg);
`
const CreateShootingStar = (): void => {
  let limit = positionAndDelay.length
  let arrStar = []
  for (let i = 0; i < limit; i++) {
    let positionTop = positionAndDelay[i].positionTop
    let animationDelay = positionAndDelay[i].delay
    arrStar.push(<ItemShootingStar key={`shooting-${i}`} positionTop={positionTop} delay={animationDelay} />)
  }
  return arrStar
}
const ShootingStar = (): React.FC => {
  return <Container>{CreateShootingStar()}</Container>
}

export default ShootingStar
