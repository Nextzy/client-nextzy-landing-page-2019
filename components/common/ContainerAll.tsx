import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  width: 768px;
  margin: 2rem;
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
