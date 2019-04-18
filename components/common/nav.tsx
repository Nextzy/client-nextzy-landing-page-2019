import React, { useContext } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import ContainerAll from '../layout/ContainerAll'
import Hamburger from './Hamburger'
import { addPath } from '../../utils/decorate-url'
import Router from 'next/router'
import { getWidthContext } from '../../utils/getWidthScreen'

export const links = [
  { href: 'pageobject', label: 'OBJECTIVE', key: 1, show: true },
  { href: 'pageservices', label: 'SERVICES', key: 2, show: true },
  { href: 'pageourproducts', label: 'OUR PRODUCTS', key: 3, show: false },
  { href: 'pageclient', label: 'CLIENTS', key: 4, show: true },
  { href: 'pageworkprocess', label: 'WORK PROCESS', key: 5, show: true },
  { href: 'pagecontact', label: 'CONTACT', key: 6, show: true }
]
const Container = styled.div`
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
    ${media.lessThan('medium')`
    padding: 0;
  `}
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
  transition: 200ms;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: #f7618b;
    transform: scale(1.1);
  }
  ${({ indexActive }) =>
    indexActive
      ? `transition: 500ms;
    color: #F7618B;
    transform: scale(1.1);    
    `
      : ''}
`
const UlRight = styled.ul`
  text-align: right;
`
const ImgLogo = styled.img`
  cursor: pointer;
`
const Nav = (props): React.FC => {
  const { fullpageApi, indexActive } = props
  const getScreenContext = useContext(getWidthContext)
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
              <ImgLogo src="/static/images/logo/logo_nextzy_white.svg" />
            </li>
            <UlRight>
              {getScreenContext && getScreenContext <= 980 ? null : (
                <>
                  {links.map(({ key, label, show }) =>
                    show ? (
                      <li
                        key={key}
                        onClick={() => {
                          addPath(key)
                          fullpageApi.moveTo(key + 1)
                        }}
                      >
                        <HoverLink indexActive={indexActive === key}>{label}</HoverLink>
                      </li>
                    ) : null
                  )}
                </>
              )}
              <Hamburger {...props} />
            </UlRight>
          </ul>
        </ContainerAll>
      </NavBar>
    </Container>
  )
}

export default Nav
