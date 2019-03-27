import React from 'react'
import styled from 'styled-components'
import ContainerAll from './layout/ContainerAll'
const links = [
  { href: 'pageobject', label: 'OBJECTIVE', key: 1 },
  { href: 'pageservices', label: 'SERVICES', key: 2 },
  { href: 'pageclient', label: 'CLIENTS', key: 3 },
  { href: 'pageworkprocess', label: 'WORK PROCESS', key: 4 },
  { href: 'pagecontact', label: 'CONTACT', key: 5 }
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
        <ContainerAll>
          <ul>
            <li onClick={() => fullpageApi.moveTo(1)}>
              <img src="/static/images/logo/logo_nextzy_white.svg" />
            </li>
            <UlRight>
              {links.map(({ key, href, label }) => (
                <li key={key} onClick={() => fullpageApi.moveTo(key + 1)}>
                  <HoverLink indexActive={indexActive === key}>{label}</HoverLink>
                </li>
              ))}
            </UlRight>
          </ul>
        </ContainerAll>
      </NavBar>
    </Container>
  )
}

export default Nav
