import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
const BoxSlideActive = styled.div`
  /* ${media.lessThan('768px')`background: green;`} */
  z-index: 1000;
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
  div:nth-child(${({ indexActive }) => (indexActive === 0 ? '' : indexActive)}) {
    background-image: linear-gradient(-136deg, #f7618b 0%, #2a7aff 100%);
    box-shadow: inset 0 0 0 1px transparent;
  }
`
const ScrollActive = (props): React.FC => {
  const { indexActive } = props
  return (
    <BoxSlideActive indexActive={indexActive}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </BoxSlideActive>
  )
}

export default ScrollActive
