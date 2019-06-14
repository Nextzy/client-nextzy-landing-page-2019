import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { getWidthContext } from '../../utils/getWidthScreen'
import Footer from '../layout/Footer'
import OnWeb from './pageWeb/Web'
import OnTablet from './pageTablet/Tablet'
import OnMobile from './pageMobile/Mobile'
import Config from '../../constants/Constants'
const Container = styled.div`
  padding: 6rem 0 0 0;
  background-color: #102131;
  color: white;
  height: 100%;
  width: 100%;
`
const BoxFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
const PageContact = (props): React.FC => {
  const [useMap, setMap] = useState('BANGKOK')
  const useScreen = useContext(getWidthContext)
  const handleComponents = (): void => {
    if (!useScreen || useScreen === 0) return null
    if (useScreen <= Config.mediaQuery.mobileL) {
      return <OnMobile {...props} useMap={useMap} setMap={setMap} />
    } else if (useScreen <= Config.mediaQuery.laptop) {
      return <OnTablet {...props} useMap={useMap} setMap={setMap} />
    } else {
      return <OnWeb {...props} useMap={useMap} setMap={setMap} />
    }
  }
  return (
    <Container>
      {handleComponents()}
      <BoxFooter>
        <Footer />
      </BoxFooter>
    </Container>
  )
}

export default PageContact
