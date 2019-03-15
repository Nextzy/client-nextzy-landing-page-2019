import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Nav from '../components/nav'
import GlobalStyle from '../components/common/GlobalStyle'
import ScrollPage from '../components/scrollPage'
import IconContact from '../components/IconContact'

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`
const Home = () => (
  <Container>
    <GlobalStyle />

    <Head title="NEXTZY TECHNOLOGIES" />
    <Nav />
    {/* <IconContact /> */}
    <ScrollPage />
  </Container>
)

export default Home
