import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Head from '../components/head'
import Nav from '../components/nav'
import PageStart from '../components/PageStart/index'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
const Home = () => (
  <div>
    <GlobalStyle />
    <Head title="NEXTZY TECHNOLOGIES" />
    <Nav />
    <PageStart />
    <PageStart />
  </div>
)

export default Home
