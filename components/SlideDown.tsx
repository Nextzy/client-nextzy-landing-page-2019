import React, { useContext } from 'react'
import styled from 'styled-components'
import { getWidthContext } from '../utils/getWidthScreen'
import Config from '../constants/Constants'
const BoxSlideActive = styled.div`
  z-index: 500;
  position: fixed;
  color: white;
  left: -1rem;
  bottom: 5rem;
  transform: rotate(-90deg);
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.25px;
  line-height: 16px;
  cursor: pointer;
  display: block;
  @keyframes AnimationArrow {
    50% {
      animation-timing-function: ease-in;
      bottom: 5rem;
    }
  }
  @keyframes AnimationArrow {
    50% {
      animation-timing-function: ease-out;
      bottom: 4rem;
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
const SlideDownWeb = (props): React.FC => {
  const { indexActive, goToPage } = props
  return (
    <BoxSlideActive indexActive={indexActive} onClick={() => goToPage(2)}>
      <BoxIcon>
        <BoxArrow />
      </BoxIcon>
      <BoxText>SCROLL DOWN</BoxText>
    </BoxSlideActive>
  )
}
const BoxSlideActiveMobile = styled.div`
  position: absolute;
  color: white;
  transform: rotate(-90deg);
  display: block;
  cursor: pointer;
  width: 100%;
  bottom: 3rem;
  z-index: 500;
  @keyframes AnimationArrowMobile {
    50% {
      animation-timing-function: ease-in;
      bottom: 5rem;
    }
  }
  @keyframes AnimationArrowMobile {
    50% {
      animation-timing-function: ease-out;
      bottom: 4rem;
    }
  }
  ${({ indexActive }) =>
    indexActive === 0
      ? `
  bottom: 5rem;
  animation: AnimationArrowMobile 1s infinite ease-in;
  animation: AnimationArrowMobile 1s infinite ease-out;
  `
      : `
      
      bottom: 150%;

  `}
`
const BoxIconMobile = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
`
const BoxArrowMobile = styled.div`
  position: absolute;
  top: 18px;
  width: 40%;
  height: 3px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  right: 10px;
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
const SlideDownMobile = (props): React.FC => {
  const { indexActive, goToPage } = props
  return (
    <BoxSlideActiveMobile indexActive={indexActive} onClick={() => goToPage(2)}>
      <BoxIconMobile indexActive={indexActive}>
        <BoxArrowMobile />
      </BoxIconMobile>
    </BoxSlideActiveMobile>
  )
}
const SlideDown = (props): void => {
  const { indexActive, goToPage } = props
  const useScreen = useContext(getWidthContext)
  if (useScreen && useScreen <= Config.sizeMobile) {
    return <SlideDownMobile {...props} />
  } else {
    return <SlideDownWeb {...props} />
  }
}
export default SlideDown
