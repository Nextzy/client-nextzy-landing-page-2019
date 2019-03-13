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
  text-align: center;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`
const Nav = () => (
  <NavBar>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>NEXTZY</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    {/* <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style> */}
  </NavBar>
)

export default Nav
