import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
const BoxSlideActive = styled.div`
  ${media.greaterThan('1024px')`
  z-index: 500;
  position: fixed;
  color: white;
  left: -1rem;
  bottom:5rem;
  transform: rotate(-90deg);
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 1.25px;
  line-height: 16px;
  display:block;
  cursor: pointer;
  
  @keyframes AnimationArrow {
    50% {
      animation-timing-function: ease-in;
      bottom:5rem;

    }
  }
  @keyframes AnimationArrow {
    50% {
      animation-timing-function: ease-out;
      bottom:4rem;
    }
  }
  ${({ indexActive }) =>
    indexActive === 0
      ? `
  bottom: 5rem;
  animation: AnimationArrow 1s infinite ease-in;
  animation: AnimationArrow 1s infinite ease-out;
  `
      : `
      
      bottom: 150%;

  `}
  `}
  display:none;
`
const BoxIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 60px;
`
const BoxArrow = styled.div`
  position: absolute;
  top: 28px;
  width: 25%;
  height: 3px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  animation: arrow 700ms linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 3px;
    top: -3px;
    right: 10px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  &:before {
    content: '';
    position: absolute;
    width: 60%;
    height: 3px;
    top: 3px;
    right: 10px;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: rotate(45deg);
  }
`
const BoxText = styled.div`
  position: relative;
  left: 3.5rem;
`
const SlideDown = (props): React.FC => {
  const { indexActive, fullpageApi } = props
  // console.log('indexActive', indexActive, fullpageApi)
  return (
    <BoxSlideActive indexActive={indexActive} onClick={() => fullpageApi.moveTo(2)}>
      <BoxIcon>
        <BoxArrow />
      </BoxIcon>
      <BoxText>SCROLL DOWN</BoxText>
    </BoxSlideActive>
  )
}

export default SlideDown
