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
  `}
`
const BoxIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 60px;
  cursor: pointer;
`
const BoxArrow = styled.div`
  position: absolute;
  top: 28px;
  width: 42%;
  height: 3px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  animation: arrow 700ms linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 3px;
    top: -6px;
    right: 20px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  &:before {
    content: '';
    position: absolute;
    width: 60%;
    height: 3px;
    top: 6px;
    right: 20px;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: rotate(45deg);
  }
`
const BoxText = styled.div`
  position: relative;
  left: 6rem;
`
const SlideDown = (props): React.FC => {
  const { indexActive } = props
  return (
    <BoxSlideActive indexActive={indexActive}>
      <BoxIcon>
        <BoxArrow />
      </BoxIcon>
      <BoxText>SCROLL DOWN</BoxText>
    </BoxSlideActive>
  )
}

export default SlideDown
