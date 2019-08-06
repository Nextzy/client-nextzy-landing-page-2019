import React, { useState, useContext, useEffect } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
  const [useMenu, setMenu] = useState(false)
  const getScreenContext = useContext(getWidthContext)

  return (
    <ContainerBackground>
      <ScrollActive indexActive={useActive} countPage={useCountPage} />
      <SlideDown indexActive={useActive} />
      <Nav indexActive={useActive} useMenu={useMenu} setMenu={setMenu} />
      {getScreenContext && getScreenContext <= Config.sizeMobile ? (
        <MenuScreenMobile indexActive={useActive} fullpageApi={useFullPageApi} useMenu={useMenu} setMenu={setMenu} />
      ) : null}
      <IconContact indexActive={useActive} />

      <Element name="section1">
        <PageStart />
      </Element>
      <Element name="section2">
        <PageService />
      </Element>
      <Element name="section3">
        <PageOurProduct indexActive={useActive} fullpageApi={useFullPageApi} />
      </Element>
      <Element name="section4">
        <PageClient indexActive={useActive} />
      </Element>
      <Element name="section5">
        <PageWorkProcess />
      </Element>
     {/*  {visible ? <ModalMap indexActive={useActive} useModal={useModal} setModal={setModal} /> : null} */}
      <Element name="section6">
        <PageContact />
      </Element>
    </ContainerBackground>
  )
}

export default ScrollPage
