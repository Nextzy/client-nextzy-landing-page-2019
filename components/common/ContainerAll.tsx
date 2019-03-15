import React from 'react'
import styled from 'styled-components'
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
  width: 768px;
  height: 100%;
  z-index: 50;
`
const ContainerAll = (props) => {
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
