import React, { useContext } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import ContainerAll from '../layout/ContainerAll'
import Hamburger from './Hamburger'
import { addPath } from '../../utils/decorate-url'
import Router from 'next/router'
import { getWidthContext } from '../../utils/getWidthScreen'
import Config from '../../constants/Constants'

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
    padding: 4px 0;
    ${media.greaterThan(`${Config.mediaQuery.laptop}px`)`
    padding: 4px 2px;
  `}
  }
  li {
    display: flex;
    padding: 0.5rem 0.4rem;
    ${media.greaterThan(`${Config.mediaQuery.laptop}px`)`
    padding: 0.5rem 0.5rem;
  `}
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
  transition: 200ms;
  font-size: 0.7rem;
  ${media.greaterThan(`${Config.mediaQuery.laptop}px`)`
  font-size: 0.8rem;
  `}
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
  const { goToPage, indexActive } = props
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
                goToPage(0)
              }}
            >
              {/* <ImgLogo src="/static/images/logo/logo_nextzy_white.svg" /> */}
              <svg width="114" height="24">
                <defs>
                  <path id="prefix__logo_nextzy_white-a" d="M0 0h114v24H0z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="prefix__logo_nextzy_white-b" fill="#fff">
                    <use href="#prefix__logo_nextzy_white-a" />
                  </mask>
                  <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M106.236 1c-1.891 2.34-3.84 4.567-5.731 6.906L94.83 1H49.377c-1.95 2.34-3.955 4.567-5.904 6.906L37.683 1H17.566v14.37c-1.146-2.117-2.407-4.345-3.783-6.294L8.165 1H1v22h5.617v-6.628c0-3.564-.057-6.683-.286-9.635h.172c1.26 2.562 3.095 5.402 4.7 7.741L16.992 23h20.692l5.846-6.906L49.377 23h6.935L46.97 12.028l5.79-6.85h6.878V23h6.133V5.177h17.367L70.241 20.271V23h23.672v-4.122H78.437v-.11L90.76 4.285l6.65 8.02V23h6.247V12.306L113 1h-6.764zM34.187 18.934H23.641V14.09h8.597v3.62l4.815-5.681-4.815-5.681v3.62h-8.597V5.066h10.546l5.847 6.906-5.847 6.962z"
                    mask="url(#prefix__logo_nextzy_white-b)"
                  />
                </g>
              </svg>
            </li>
            <UlRight>
              {getScreenContext && getScreenContext <= Config.sizeMobile ? null : (
                <>
                  {links.map(({ key, label, show }) =>
                    show ? (
                      <li
                        key={key}
                        onClick={() => {
                          addPath(key)
                          goToPage(key)
                        }}
                      >
                        <HoverLink indexActive={indexActive-1 === key}>{label}</HoverLink>
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
