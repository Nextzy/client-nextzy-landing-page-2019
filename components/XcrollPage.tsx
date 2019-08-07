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
  const [useMenu, setMenu] = useState(false)
  const getScreenContext = useContext(getWidthContext)
  useEffect(() => {
    const onTouchStart = async () => {
      const current = await parseInt(scroller.getActiveLink())
      console.log(useActive, current)
      if (useActive !== current) {
        setActive(current)
      }
    }
    document.addEventListener('scroll', onTouchStart)
    return () => {
      document.removeEventListener('scroll', onTouchStart)
    }
  }, [useActive])
  return (
    <ContainerBackground>
      <ScrollActive indexActive={useActive} />
      <SlideDown indexActive={useActive} />
      <Nav indexActive={useActive} useMenu={useMenu} setMenu={setMenu} />
      {getScreenContext && getScreenContext <= Config.sizeMobile ? (
        <MenuScreenMobile indexActive={useActive} fullpageApi={useFullPageApi} useMenu={useMenu} setMenu={setMenu} />
      ) : null}
      <IconContact indexActive={useActive} />

      <Element name="0">
        <PageStart />
      </Element>
      <Element name="1">
        <PageObjective />
      </Element>
      <Element name="2">
        <PageService />
      </Element>
      <Element name="3">
        <PageOurProduct indexActive={useActive} fullpageApi={useFullPageApi} />
      </Element>
      <Element name="4">
        <PageClient indexActive={useActive} />
      </Element>
      <Element name="5">
        <PageWorkProcess />
      </Element>
      <Element name="6">
        <PageContact />
      </Element>
    </ContainerBackground>
  )
}

export default ScrollPage
