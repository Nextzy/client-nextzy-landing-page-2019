import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import { getWidthScreen, getWidthContext } from '../utils/getWidthScreen'
import ScrollPageMedium from '../components/ScrollPageMedium'
const Container = styled.div`
  width: 100%;
  overflow: hidden;
`
const Medium = (): React.FC => {
  const getWidth = getWidthScreen()
  return (
    <getWidthContext.Provider value={getWidth}>
      <Container>
        <Head title="NEXTZY TECHNOLOGIES" />
        <ScrollPageMedium />
      </Container>
    </getWidthContext.Provider>
  )
}

export default Medium
