import React from 'react'
// import Link from 'next/link'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import ContainerAll from '../components/common/ContainerAll'
const links = [
  // { href: 'https://github.com/segmentio/create-next-app', label: 'Github', key: '' }
  { href: 'pageobject', label: 'OBJECT', key: '' },
  { href: 'pageservices', label: 'SERVICES', key: '' },
  { href: 'pageclient', label: 'CLIENTS', key: '' },
  { href: 'pageworkprocess', label: 'WORK PROCESS', key: '' },
  { href: 'pagecontact', label: 'CONTACT', key: '' }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})
const Container = styled.div`
  position: relative;
  color: white;
  width: 100%;
`
const NavBar = styled.nav`
  width: 100%;
  z-index: 1000;
  position: fixed;
  text-align: left;
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
  }
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
  a.active {
    transition: 500ms;
    color: pink;
    font-size: 0.85rem;
  }
`
const UlRight = styled.ul`
  text-align: right;
`
const Nav = () => (
  <Container>
    <NavBar>
      <ContainerAll>
        <ul>
          <li>
            <Link to="pagestart" spy={true} smooth={true} offset={50} duration={500}>
              NEXTZY
            </Link>
          </li>
          <UlRight>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <HoverLink>
                  <Link to={href} activeClass="active" className={href} spy={true} smooth={true} duration={500}>
                    {label}
                  </Link>
                </HoverLink>
              </li>
            ))}
          </UlRight>
        </ul>
      </ContainerAll>
    </NavBar>
  </Container>
)

export default Nav
