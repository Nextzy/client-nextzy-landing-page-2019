import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const links = [
  // { href: 'https://github.com/segmentio/create-next-app', label: 'Github', key: '' }
  { href: '#', label: 'OBJECT', key: '' },
  { href: '#', label: 'SERVICES', key: '' },
  { href: '#', label: 'CLIENTS', key: '' },
  { href: '#', label: 'WORK PROCESS', key: '' },
  { href: '#', label: 'CONTACT', key: '' }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})
const NavBar = styled.nav`
  width: 100%;
  z-index: 99;
  text-align: center;
  position: fixed;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 0.5rem 0.8rem;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 13px;
    transition: 500ms;
    &:hover {
      color: pink;
      transform: scale(1.2);
    }
  }
`
const UlRight = styled.ul`
  text-align: right;
`
const Nav = () => (
  <NavBar>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>NEXTZY</a>
        </Link>
      </li>
      <UlRight>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </UlRight>
    </ul>
  </NavBar>
)

export default Nav
