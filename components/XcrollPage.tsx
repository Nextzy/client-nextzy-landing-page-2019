import React, { useState, useContext } from 'react'
import PageStart from './PageStart'
import PageObjective from './PageObjective'
import PageService from './PageService'
import PageClient from './PageClient'
import PageOurProduct from './PageOurProducts'
import PageWorkProcess from './PageWorkProcess'
import PageContact from './PageContact'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
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
const ScrollPage = ({ goto }): React.FC => {
  const [useActive, setActive] = useState(0)
  const [useFullPageApi, setFullPageApi] = useState({})
  const [useCountPage, setCountPage] = useState(0)
  const [useModal, setModal] = useState({ visible: false, map: '' })
  const [useMenu, setMenu] = useState(false)
  const { visible } = useModal
  const getScreenContext = useContext(getWidthContext)
  const onLeave = (origin, destination, direction): void => {
    const { index } = destination
    setActive(index || 0)
  }
  // const visibleMenu = (): void => {
  //   setMenu(!useMenu)
  // }
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
      <ReactFullpage
        onLeave={onLeave}
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          const { sectionCount } = state
          setFullPageApi(fullpageApi)
          setCountPage(sectionCount || 0)

          if (goto && fullpageApi && state.initialized && !state.destination) {
            //first load in query
            const currentLink = links.filter((link) => link.href === goto)[0]
            fullpageApi.moveTo(currentLink.key + 1)
          }
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <PageStart fullpageApi={useFullPageApi} />
                </div>
                <div className="section">
                  <PageObjective />
                </div>
                <div className="section">
                  <PageService />
                </div>
                <div className="section">
                  <PageOurProduct indexActive={useActive} />
                </div>
                <div className="section">
                  <PageClient />
                </div>
                <div className="section">
                  <PageWorkProcess />
                </div>
                <div className="section">
                  <PageContact setModal={setModal} />
                </div>
              </ReactFullpage.Wrapper>
            </>
          )
        }}
      />
    </ContainerBackground>
  )
}

export default ScrollPage
