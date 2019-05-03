import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
// import GlobalStyle from '../components/common/GlobalStyle'
import ScrollPage from '../components/XcrollPage'
import { getWidthScreen, getWidthContext } from '../utils/getWidthScreen'
const Container = styled.div`
  width: 100%;
  overflow: hidden;
`
const Home = ({ goto }): React.FC => {
  const getWidth = getWidthScreen()
  return (
    <getWidthContext.Provider value={getWidth}>
      <Container>
        {/* <GlobalStyle /> */}
        <Head title="NEXTZY TECHNOLOGIES" />
        <ScrollPage goto={goto} />
      </Container>
    </getWidthContext.Provider>
  )
}

Home.getInitialProps = async ({ query: { goto } }) => {
  return { goto }
}
export default Home
