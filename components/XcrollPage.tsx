import React, { useState, useContext } from 'react'
import PageStart from './PageStart'
import PageObjective from './PageObjective'
import PageService from './PageService'
import PageClient from './PageClient'
import PageOurProduct from './PageOurProducts'
import PageWorkProcess from './PageWorkProcess'
import PageContact from './PageContact'
import styled from 'styled-components'
import ReactPageScroller from "react-page-scroller";
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
  let reactPage = null
  const [useActive, setActive] = useState(0)
  const [useModal, setModal] = useState({ visible: false, map: '', isShowMap: false })
  const [useMenu, setMenu] = useState(false)
  const { visible, isShowMap } = useModal
  const getScreenContext = useContext(getWidthContext)
  const goToPage = (pageNumber) => {
    reactPage.goToPage(pageNumber)
  }
  const pageOnChange = (number): void => {
    setActive(number)
  }
  return (
    <ContainerBackground>
      <ScrollActive indexActive={useActive} goToPage={goToPage} countPage={7} />
      <SlideDown indexActive={useActive} goToPage={goToPage} />
      <Nav indexActive={useActive} goToPage={goToPage} useMenu={useMenu} setMenu={setMenu} />
      {getScreenContext && getScreenContext <= Config.sizeMobile ? (
        <MenuScreenMobile indexActive={useActive} goToPage={goToPage} useMenu={useMenu} setMenu={setMenu} />
      ) : null}
      <IconContact indexActive={useActive} />
      {visible ? (
        <ModalMap indexActive={useActive} goToPage={goToPage} useModal={useModal} setModal={setModal} />
      ) : null}
      <ReactPageScroller ref={(c) => (reactPage = c)} pageOnChange={pageOnChange} animationTimer={300}>
        <div className="section">
          <PageStart goToPage={goToPage} />
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
          <PageContact setModal={setModal} visibleMap={isShowMap} />
        </div>
      </ReactPageScroller>
    </ContainerBackground>
  )
}

export default ScrollPage
