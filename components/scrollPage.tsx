import React, { useEffect } from 'react'
// import styled from 'styled-components'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import PageStart from './PageStart/index'
import PageService from './PageService/index'
import PageClient from './PageClient/index'

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
const ScrollPage = () => {
  useEffect(() => {
    // Events.scrollEvent.register('begin', function(to, element) {
    //   console.log('begin', arguments)
    // })
    // Events.scrollEvent.register('end', function(to, element) {
    //   console.log('end', arguments)
    // })
    // scrollSpy.update()
    // return () => {
    //   Events.scrollEvent.remove('begin')
    //   Events.scrollEvent.remove('end')
    // }
  }, [])
  return (
    <div>
      {/* <PageStart />
      <PageStart /> */}
      <div>
        {/* <Link
          activeClass="active"
          to="test2"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
        > */}
        <PageStart />
        {/* </Link> */}
        {/* <Link
          activeClass="active"
          to="test3"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={500}
          onSetActive={handleSetActive}
        >
          <Element name="test2" className="element">
            <PageService />
          </Element>
        </Link>
        <Element name="test3" className="element"> */}
        <PageClient />
        {/* </Element> */}
        {/* <Button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </Button> */}

        {/* <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>

        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>
        <div className="element" id="containerElement">
          <Element name="firstInsideContainer">first element inside container</Element>

          <Element name="secondInsideContainer">second element inside container</Element>
        </div> */}

        {/* <a onClick={scrollToTop}>To the top!</a>
        <br />
        <a onClick={scrollToBottom}>To the bottom!</a>
        <br />
        <a onClick={scrollTo}>Scroll to 100px from the top</a>
        <br />
        <a onClick={scrollMore}>Scroll 100px more from the current position!</a> */}
      </div>
    </div>
  )
}

export default ScrollPage
