import React, { useState, useContext } from 'react'
import PageStart from './PageStart'
import PageObjective from './PageObjective'
import PageService from './PageService'
import PageClient from './PageClient'
import PageOurProduct from './PageOurProducts'
import PageWorkProcess from './PageWorkProcess'
import PageContact from './PageContact'
import styled from 'styled-components'
import Nav, { links } from './common/nav'
import ScrollActive from './ScrollActive'
import SlideDown from './SlideDown'
import IconContact from './IconContact'
import ModalMap from './common/ModalMap'
import MenuScreenMobile from './common/MenuScreenMobile'
import { getWidthContext } from '../utils/getWidthScreen'
import Config from '../constants/Constants'
const ContainerBackground = styled.div`
  background-color: #102131;
`

const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow')
}

const ScrollPage = ({ goto }): React.FC => {
  const [useActive, setActive] = useState(0)
  const [useFullPageApi, setFullPageApi] = useState({})
  const [useCountPage, setCountPage] = useState(0)
  const [useModal, setModal] = useState({ visible: false, map: '', isShowMap: false })
  const [useMenu, setMenu] = useState(false)
  const { visible, isShowMap } = useModal
  const getScreenContext = useContext(getWidthContext)
  const onLeave = (origin, destination, direction): void => {
    const { index } = destination
    setActive(index || 0)
  }
  return (
    <ContainerBackground>
      <ScrollActive indexActive={useActive} fullpageApi={useFullPageApi} countPage={useCountPage} />
      <SlideDown indexActive={useActive} fullpageApi={useFullPageApi} />
      <Nav indexActive={useActive} fullpageApi={useFullPageApi} useMenu={useMenu} setMenu={setMenu} />
      {getScreenContext && getScreenContext <= Config.sizeMobile ? (
        <MenuScreenMobile indexActive={useActive} fullpageApi={useFullPageApi} useMenu={useMenu} setMenu={setMenu} />
      ) : null}
      <IconContact indexActive={useActive} />
      {visible ? (
        <ModalMap indexActive={useActive} fullpageApi={useFullPageApi} useModal={useModal} setModal={setModal} />
      ) : null}
      <PageStart fullpageApi={useFullPageApi} />
      <PageObjective />
      <PageService />
      <PageOurProduct indexActive={useActive} fullpageApi={useFullPageApi} />
      <PageClient indexActive={useActive} />
      <PageWorkProcess />
      <PageContact setModal={setModal} visibleMap={isShowMap} />
    </ContainerBackground>
  )
}

export default ScrollPage
