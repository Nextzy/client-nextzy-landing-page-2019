import React, { useEffect } from 'react'
import styled from 'styled-components'
import Head from '../components/head'
// import GlobalStyle from '../components/common/GlobalStyle'
import ScrollPage from '../components/XcrollPage'
import { getWidthScreen, getWidthContext } from '../utils/getWidthScreen'
import { getHeightContext, getHeightScreen } from '../utils/getHeightScreen';
const Container = styled.div`
  width: 100%;
  overflow: hidden;
`
const Home = ({ goto }): React.FC => {
  const getWidth = getWidthScreen()
  const getHeight = getHeightScreen()
  return (
    <getWidthContext.Provider value={getWidth}>
      <getHeightContext.Provider value={getHeight}>
        <Container>
          {/* <GlobalStyle /> */}
          <Head title="NEXTZY TECHNOLOGIES" />
          <ScrollPage goto={goto} />
        </Container>
      </getHeightContext.Provider>
    </getWidthContext.Provider>
  )
}

Home.getInitialProps = async ({ query: { goto } }) => {
  return { goto }
}
export default Home
