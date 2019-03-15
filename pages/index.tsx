import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Head from '../components/head'
import Nav from '../components/nav'
import ScrollPage from '../components/scrollPage'
import IconContact from '../components/IconContact'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
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
