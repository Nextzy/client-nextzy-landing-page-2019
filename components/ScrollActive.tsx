import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
const BoxSlideActive = styled.div`
  z-index: 1000;
  position: fixed;
  height: 100vh;
  color: white;
  left: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin: 0 0 1rem 0;
    border-radius: 50%;
    padding: 0.4rem;
    /* border: 1px solid #fff; */
    box-shadow: inset 0 0 0 1px #fff;
  }
  a.active > div {
    background-image: linear-gradient(-136deg, #f7618b 0%, #2a7aff 100%);
    box-shadow: inset 0 0 0 1px transparent;
  }
  img {
    color: white;
    filter: brightness(0) invert(1);
  }
`
const ScrollActive = () => (
  <BoxSlideActive>
    <Link to="pageobject" activeClass="active" className="pageobject" spy={true} smooth={true} duration={500}>
      <div />
    </Link>
    <Link to="pageservices" activeClass="active" className="pageservices" spy={true} smooth={true} duration={500}>
      <div />
    </Link>
    <Link to="pageclient" activeClass="active" className="pageclient" spy={true} smooth={true} duration={500}>
      <div />
    </Link>
    <Link to="pageworkprocess" activeClass="active" className="pageworkprocess" spy={true} smooth={true} duration={500}>
      <div />
    </Link>
    <Link to="pagecontact" activeClass="active" className="pagecontact" spy={true} smooth={true} duration={500}>
      <div />
    </Link>
  </BoxSlideActive>
)

export default ScrollActive
