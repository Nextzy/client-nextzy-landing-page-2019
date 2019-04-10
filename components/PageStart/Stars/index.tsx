import React from 'react'
import styled from 'styled-components'
import Star from './Star'
import positionAndSizeStar from './PositionAndSizeStar'
const ContainerStar = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const rand = (): void => {
  return Math.random()
}
const CreateStar = (): void => {
  let limit = positionAndSizeStar.length
  let arrStar = []
  for (let i = 0; i < limit; i++) {
    let top = positionAndSizeStar[i].top
    let left = positionAndSizeStar[i].left
    let animationDelay = positionAndSizeStar[i].animationDelay
    let size = positionAndSizeStar[i].size
    arrStar.push(<Star key={'star' + i} top={top} left={left} size={size} animationDelay={animationDelay} />)
  }
  return <>{arrStar}</>
}
const StarFix = (): React.FC => {
  return <ContainerStar>{CreateStar()}</ContainerStar>
}

export default StarFix
