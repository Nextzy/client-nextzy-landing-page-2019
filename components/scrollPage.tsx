import React, { useEffect } from 'react'
import { Element, Events, scrollSpy, animateScroll as scroll } from 'react-scroll'
import PageStart from './PageStart/index'
import PageObjective from './PageObjective/index'
import PageService from './PageService/index'
import PageClient from './PageClient/index'
import PageWorkProcess from './PageWorkProcess/index'
import PageContact from './PageContact/index'
const scrollToTop = () => {
  scroll.scrollToTop()
}
const scrollToBottom = () => {
  scroll.scrollToBottom()
}
const scrollTo = () => {
  scroll.scrollTo(100)
}
const scrollMore = () => {
  scroll.scrollMore(100)
}
const handleSetActive = (to) => {
  console.log(to)
}
const handleScroll = (e) => {
  let scrollTop = e
  // let itemTranslate = Math.min(0, scrollTop / 3 - 60)
  console.log('scroll', scrollTop)
}
const ScrollPage = () => {
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
      {/* <Link
        activeClass="active"
        to="pageclient"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      > */}
      <Element name="pagestart" className="element">
        <PageStart />
      </Element>
      {/* </Link> */}
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
