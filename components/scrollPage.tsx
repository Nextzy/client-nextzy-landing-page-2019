import React, { useEffect } from 'react'
import { Element, Events, scrollSpy, animateScroll as scroll } from 'react-scroll'
import PageStart from './PageStart'
import PageObjective from './PageObjective'
import PageService from './PageService'
import PageClient from './PageClient'
import PageWorkProcess from './PageWorkProcess'
import PageContact from './PageContact'
import styled from 'styled-components'
const scrollToTop = (): void => {
  scroll.scrollToTop()
}
const scrollToBottom = (): void => {
  scroll.scrollToBottom()
}
const scrollTo = (): void => {
  scroll.scrollTo(100)
}
const scrollMore = (): void => {
  scroll.scrollMore(100)
}
const handleSetActive = (to): void => {
  console.log(to)
}
const handleScroll = (e): void => {
  let scrollTop = e
  // let itemTranslate = Math.min(0, scrollTop / 3 - 60)
  console.log('scroll', scrollTop)
}

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 49;
  width: 1000px;
  left: -30%;
  margin-top: 528px;
`

const ScrollPage = (): React.FC => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', to, element)
    })
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments)
    })
    scrollSpy.update()
    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])
  return (
    <>
      <Element name="pagestart" className="element">
        <PageStart />
      </Element>
      <BackgroundImage src="/static/images/Background/background_circle_2.svg" alt="backgroundja" />
      <Element name="pageobject" className="element">
        <PageObjective />
      </Element>
      <Element name="pageservices" className="element">
        <PageService />
      </Element>
      <Element name="pageclient" className="element">
        <PageClient />
      </Element>
      <Element name="pageworkprocess" className="element">
        <PageWorkProcess />
      </Element>
      <Element name="pagecontact" className="element">
        <PageContact />
      </Element>

      {/* <a onClick={scrollToTop}>To the top!</a>
        <br />
        <a onClick={scrollToBottom}>To the bottom!</a>
        <br />
        <a onClick={scrollTo}>Scroll to 100px from the top</a>
        <br />
        <a onClick={scrollMore}>Scroll 100px more from the current position!</a> */}
    </>
  )
}

export default ScrollPage
