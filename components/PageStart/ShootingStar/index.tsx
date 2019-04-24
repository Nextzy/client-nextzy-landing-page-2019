import React from 'react'
import styled from 'styled-components'

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
  @keyframes particleAnimation {
    from {
      left: -100px;
    }
    to {
      left: calc(100% + 100px);
    }
  }

  .p {
    position: absolute;
    left: 0px;
    top: 50px;
    width: 1px;
    height: 1px;
    background-color: white;
    animation-name: particleAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .p::before {
    position: absolute;
    display: block;
    content: '';
    width: 100px;
    right: 1px;
    top: 0px;
    height: 1px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.4) 100%);
  }
  .p-1 {
    animation-duration: 3s;
  }
  .p-2 {
    animation-duration: 5s;
    top: 60%;
  }
  .p-3 {
    animation-duration: 8s;
    top: 90%;
  }
`
const ShootingStar = (): React.FC => {
  return (
    <Container>
      <div className="p p-1" />
      <div className="p p-2" />
      <div className="p p-3" />
    </Container>
  )
}

export default ShootingStar
