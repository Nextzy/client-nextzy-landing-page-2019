import React, { useEffect } from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import GlobalStyle from '../components/common/GlobalStyle'
import ScrollPage from '../components/ScrollPage'

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`
const Home = (): React.FC => {
  return (
    <Container>
      <GlobalStyle />
      <Head title="NEXTZY TECHNOLOGIES" />
      <ScrollPage />
    </Container>
  )
}

export default Home
