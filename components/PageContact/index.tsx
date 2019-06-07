import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { getWidthContext } from '../../utils/getWidthScreen'
import Footer from '../layout/Footer'
import OnWeb from './pageWeb/Web'
import OnMobile from './pageMobile/Mobile'
import Config from '../../constants/Constants'
const Container = styled.div`
 padding: 0 0 6rem 0;
  background-color: #102131;
  color: white;
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
    if (useScreen <= Config.sizeMobile) {
      return <OnMobile {...props} useMap={useMap} setMap={setMap} />
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
