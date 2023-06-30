import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import ModalMap from '../common/ModalMap'
import { getWidthContext } from '../../utils/getWidthScreen'
import Footer from '../layout/Footer'
import OnWeb from './pageWeb/Web'
import OnTablet from './pageTablet/Tablet'
import OnMobile from './pageMobile/Mobile'
import Config from '../../constants/Constants'
const Container = styled.div`
  position: relative;
  background-color: #102131;
  color: white;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`
const BoxFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
const Content = styled.div`
  padding: 6rem 0 0 0;
`
const PageContact = (props): React.FC => {
  const [useMap, setMap] = useState('BANGKOK')
  const [useModal, setModal] = useState({ visible: false, map: '', isShowMap: false })
  const { visible, isShowMap } = useModal
  const useScreen = useContext(getWidthContext)
  const handleComponents = (): void => {
    if (!useScreen || useScreen === 0) return null
    if (useScreen <= Config.mediaQuery.mobileL) {
      return <OnMobile setModal={setModal} useMap={useMap} setMap={setMap} visibleMap={visible} />
    } else if (useScreen <= Config.mediaQuery.laptop) {
      return <OnTablet setModal={setModal} useMap={useMap} setMap={setMap} visibleMap={visible} />
    } else {
      return <OnWeb setModal={setModal} useMap={useMap} setMap={setMap} visibleMap={visible} />
    }
  }
  return (
    <Container>
      {visible ? <ModalMap useModal={useModal} setModal={setModal} /> : null}
      <Content>{handleComponents()}</Content>
      <BoxFooter>
        <Footer />
      </BoxFooter>
    </Container>
  )
}

export default PageContact
