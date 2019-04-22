import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { getWidthContext } from '../../utils/getWidthScreen'
import Footer from '../layout/Footer'
import OnWeb from './pageWeb/Web'
import OnMobile from './pageMobile/Mobile'
const Container = styled.div`
  padding: 5rem 0 0 0;
  background-color: #102131;
  color: white;
  height: 100vh;
  width: 100%;
`
const BoxFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
const PageContact = (props): React.FC => {
  const { setModal } = props
  const [useMap, setMap] = useState('BANGKOK')
  const useScreen = useContext(getWidthContext)
  return (
    <Container>
      {useScreen && useScreen <= 980 ? (
        <OnMobile {...props} useMap={useMap} setMap={setMap} />
      ) : (
        <OnWeb {...props} useMap={useMap} setMap={setMap} />
      )}
      <BoxFooter>
        <Footer />
      </BoxFooter>
    </Container>
  )
}

export default PageContact
