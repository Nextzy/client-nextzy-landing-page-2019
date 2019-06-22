import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import Head from '../components/head'
// import GlobalStyle from '../components/common/GlobalStyle'
import ScrollPage from '../components/XcrollPage' 
import { getWidthScreen, getWidthContext } from '../utils/getWidthScreen'
/* import PreLoadingPage from '../components/common/PreLoadingPage' */
/* const Head = dynamic(() => import('../components/head')) */
/* const ScrollPage = dynamic(() => import('../components/XcrollPage'), {
  loading: () => (<PreLoadingPage />)
})*/
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
