import React from 'react'
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
  div {
    margin: 0 0 1rem 0;
    border-radius: 50%;
    padding: 0.4rem;
    /* border: 1px solid #fff; */
    box-shadow: inset 0 0 0 1px #fff;
  }
  div:nth-child(${({ indexActive }) => indexActive + 1}) {
    background-image: linear-gradient(-136deg, #f7618b 0%, #2a7aff 100%);
    box-shadow: inset 0 0 0 1px transparent;
  }
  `}
`
const SlideDown = styled.div``
const createItemActive = (countPage, fullpageApi): void => {
  let dataActive = []
  for (let i = 0; i < countPage; i++) {
    dataActive.push(<div key={i + 1} onClick={() => fullpageApi.moveTo(i + 1)} />)
  }
  return dataActive
}
const ScrollActive = (props): React.FC => {
  const { indexActive, fullpageApi, countPage } = props
  if (countPage) {
    return <BoxSlideActive indexActive={indexActive}>{createItemActive(countPage, fullpageApi)}</BoxSlideActive>
  }
  return null
}

export default ScrollActive
