import React from 'react'
import styled from 'styled-components'
import ContainerAll from './ContainerAll'
import Hamburger from '../common/Hamburger'
import { addPath } from '../decorate-url'
import Router from 'next/router'
export const links = [
  { href: 'pageobject', label: 'OBJECTIVE', key: 1 },
  { href: 'pageservices', label: 'SERVICES', key: 2 },
  // { href: 'pageourproducts', label: 'OUR PRODUCTS', key: 3 },
  { href: 'pageclient', label: 'CLIENTS', key: 4 },
  { href: 'pageworkprocess', label: 'WORK PROCESS', key: 5 },
  { href: 'pagecontact', label: 'CONTACT', key: 6 }
]
const Container = styled.div`
  /* position: relative; */
  z-index: 1000;
  position: fixed;
  color: white;
  width: 100%;
`
const NavBar = styled.nav`
  width: 100%;
  z-index: 1000;
  position: fixed;
  text-align: left;
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.25px;
  line-height: 16px;
  left: 0;
  top: 0;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
  }
`
const BackgroundNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 500ms linear;
  ${({ active }) =>
    active
      ? `
  opacity: 0.8;
  background-color: #1F2B44;`
      : `opacity: 1;`}
`
const HoverLink = styled.div`
  color: white;
  text-decoration: none;
  font-size: 13px;
  transition: 500ms;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: pink;
    font-size: 0.85rem;
  }
  ${({ indexActive }) =>
    indexActive
      ? `transition: 500ms;
    color: pink;
    font-size: 0.85rem;`
      : ''}
`
const UlRight = styled.ul`
  text-align: right;
`
const Nav = (props): React.FC => {
  const { fullpageApi, indexActive } = props
  return (
    <Container>
      <NavBar>
        <BackgroundNav active={indexActive !== 0} />
        <ContainerAll>
          <ul>
            <li
              onClick={() => {
                Router.replace('/', '/')
                fullpageApi.moveTo(1)
              }}
            >
              <img src="/static/images/logo/logo_nextzy_white.svg" />
            </li>
            <UlRight>
              {links.map(({ key, href, label }) => (
                <li
                  key={key}
                  onClick={() => {
                    addPath(key)
                    fullpageApi.moveTo(key + 1)
                  }}
                >
                  <HoverLink indexActive={indexActive === key}>{label}</HoverLink>
                </li>
              ))}
              <Hamburger />
            </UlRight>
          </ul>
        </ContainerAll>
      </NavBar>
    </Container>
  )
}

export default Nav
