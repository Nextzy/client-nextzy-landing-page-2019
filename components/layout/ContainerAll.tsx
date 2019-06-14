import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../constants/Constants'
const Container = styled.div`
  /* position: relative; */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 50;
`
// const BoxLeft = styled.div`
//   flex-grow: 1;
// `
// const BoxCenter = styled.div`
//   flex-grow: 2;
// `
// const BoxRight = styled.div`
//   flex-grow: 1;
// `
const BoxCenter = styled.div`
  position: relative;
  /* width: 980px; */
  width: 80%;
  /* height: 100%; */
  z-index: 50;
  ${media.lessThan(`${Config.sizeMobile}px`)`
    /* screen width is less than 768px (medium) */
    /* width: 100vw; */
  width: 90vw;

  `}
  ${media.between(`${Config.mediaQuery.laptop + 100}px`, `${Config.mediaQuery.fourK}px`)`
  width: 980px;
  `}
`
const ContainerAll = (props): React.FC => {
  const { children, bg } = props
  return (
    <Container>
      {/* <BoxLeft />
      <BoxCenter>{children}</BoxCenter>
      <BoxRight /> */}
      <BoxCenter>{children}</BoxCenter>
      {bg}
    </Container>
  )
}

export default ContainerAll
