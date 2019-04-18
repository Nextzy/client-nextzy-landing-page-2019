import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
const Container = styled.div`
  /* position: relative; */
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 100%;
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
  width: 980px;
  /* width: 70%; */
  height: 100%;
  z-index: 50;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    /* width: 100vw; */
  `}
`
const ContainerAll = (props): React.FC => {
  const { children } = props
  return (
    <Container>
      {/* <BoxLeft />
      <BoxCenter>{children}</BoxCenter>
      <BoxRight /> */}
      <BoxCenter>{children}</BoxCenter>
    </Container>
  )
}

export default ContainerAll
