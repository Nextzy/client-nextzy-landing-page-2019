import React, { useContext } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import media from 'styled-media-query'
import { getWidthContext } from '../../utils/getWidthScreen'
import Config from '../../constants/Constants'
const Container = styled.div`
  position: relative;
  padding: 7px 0 7px 30px;
  ${media.greaterThan(`${Config.sizeMobile}px`)`
  padding: 7px 0 7px 80px;
  `};
  transform: scaleX(-1);
`
const IconHamburger = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  cursor: pointer;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 30px;
    background: white;
    position: absolute;
    display: block;
    content: '';
  }
  span:before {
    top: -7px;
    width: 25px;
  }
  span:after {
    bottom: -7px;
    width: 20px;
  }
  span,
  span:before,
  span:after {
    transition: all 500ms ease-in-out;
  }
  ${({ setActive }) =>
    setActive
      ? `
  span {
    background-color: transparent;
  }
  span:before,
  span:after {
    top: 0;
  }
  span:before {
    transform: rotate(40deg);
    width:30px;
  }
  span:after {
    transform: rotate(-40deg);
    width:30px;
  }
  `
      : ''}
`
const BoxRotate = styled.div`
  transform: scaleX(-1);
  width: 200%;
  position: absolute;
  top: 55px;
  right: -20px;
`
const BoxSelectMenu = styled.div`
  padding: 5px;
  background: white;
  color: gray;
  text-align: left;
  border-radius: 5px;
  &:before {
    content: ' ';
    position: absolute;
    top: -10px;
    z-index: 1;
    left: 55px;
    width: 0;
    height: 0;
    border-left: solid transparent;
    border-right: solid transparent;
    border-bottom: solid white;
    border-width: 10px;
  }
`
const DivMenu = styled.div`
  opacity: 0.87;
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  color: #323c5a;
  letter-spacing: 1.25px;
  line-height: 16px;
  cursor: pointer;
  margin: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 0.7rem;
  a {
    text-decoration: none;
    color: #323c5a;
  }
`
const DivBottom = styled.div`
  opacity: 0.87;
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  color: #323c5a;
  letter-spacing: 1.25px;
  line-height: 16px;
  cursor: pointer;
  margin: 1rem;
  a {
    text-decoration: none;
    color: #323c5a;
  }
`
const BoxHandleClick = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
const Menu = (props): void => {
  const { useMenu } = props
  return (
    <BoxSelectMenu open={useMenu}>
      <DivMenu>
        <Link href="/medium">
          <a>BLOGS</a>
        </Link>
      </DivMenu>
      <DivBottom>
        <a href="https://www.blognone.com/node/64996">CAREER</a>
      </DivBottom>
    </BoxSelectMenu>
  )
}

const Hamburger = (props): void => {
  const { useMenu, setMenu } = props
  const getScreenContext = useContext(getWidthContext)
  const setVisibleMenu = (): void => {
    setMenu(!useMenu)
  }
  return (
    <Container>
      <BoxHandleClick onClick={setVisibleMenu} />
      <IconHamburger setActive={useMenu} onClick={setVisibleMenu}>
        <span />
      </IconHamburger>
      <BoxRotate>
        <Fade when={useMenu}>
          <Menu useMenu={useMenu} />
        </Fade>
      </BoxRotate>
    </Container>
  )
}
export default Hamburger
