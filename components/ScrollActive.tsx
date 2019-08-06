import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../constants/Constants'
const BoxSlideActive = styled.div`
  ${media.greaterThan(`${Config.sizeTablet}px`)`
  z-index: 500;
  position: fixed;
  height: 100vh;
  color: white;
  left: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `}
`
const DotSlide = styled.div`
  ${media.greaterThan(`${Config.sizeTablet}px`)`
    margin: 0 0 1rem 0;
    border-radius: 50%;
    padding: 0.4rem;
    box-shadow: inset 0 0 0 1px #fff;
    ${({ selected }) =>
      selected &&
      `
    background-image: linear-gradient(-136deg, #f7618b 0%, #2a7aff 100%);
    box-shadow: inset 0 0 0 1px transparent;    
    `}
  `}
`

const createItemActive = (indexActive): void => {
  let dataActive = [1, 2, 4, 5, 6].map((i) => (
    <Link key={i} to={`section${i}`} smooth={true} duration={500}>
      <DotSlide selected={indexActive === i} />
    </Link>
  ))
  return dataActive
}
const ScrollActive = (props): React.FC => {
  const { indexActive } = props
  if (indexActive !== 0) {
    return <BoxSlideActive indexActive={indexActive}>{createItemActive(indexActive)}</BoxSlideActive>
  }
  return null
}

export default ScrollActive
