import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(153, 153, 153);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  z-index: 10000;
  transition: 500ms;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`
const PreLoadingPage = (): void => {
  const [useLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Container visible={useLoading}>
      <img src="https://loading.io/spinners/earth/lg.earth-globe-map-spinner.gif" alt="logo_load" />
    </Container>
  )
}
export default PreLoadingPage
