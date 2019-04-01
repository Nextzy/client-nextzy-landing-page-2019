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
const SlideDown = (props): React.FC => {
  const { indexActive } = props
  return <BoxSlideActive indexActive={indexActive}>SCROLL DOWN</BoxSlideActive>
}

export default SlideDown
