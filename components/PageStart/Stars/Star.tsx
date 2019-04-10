import React from 'react'
import styled from 'styled-components'

const BoxStar = styled.div`
  display: block;
  position: absolute;
  top: ${({ top }) => top || '25'}%;
  left: ${({ left }) => left || '25'}%;
  width: ${({ size }) => size || '50'}px;
  height: ${({ size }) => size || '50'}px;

  ${({ animationDelay }) =>
    animationDelay === 0 ? '' : `animation: glitter ${animationDelay}s linear 0s infinite normal;`}
  img {
    width: 100%;
    height: 100%;
  }

  @keyframes glitter {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    25% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    75% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`
const Star = (props): React.FC => {
  return (
    <BoxStar {...props}>
      <img src="/static/images/Star/asset_star.png" alt="star" />
    </BoxStar>
  )
}

export default Star
