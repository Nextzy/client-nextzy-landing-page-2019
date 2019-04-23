import React from 'react'
import styled from 'styled-components'
import { links } from './nav'
import { addPath } from '../../utils/decorate-url'
const ContainerMenuMobile = styled.div`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  height: 100%;
  width: ${({ visible }) => (visible ? '100%' : '0')};
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #192b39;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  color: white;
`
const BoxMenu = styled.div`
  padding: 0 4rem 0 4rem;
`
const SelectMenu = styled.div`
  cursor: pointer;
  padding: 20px 30px 20px 0;
  text-decoration: none;
  color: white;
  display: block;
  border-bottom: 2px solid rgba(51, 69, 83, 0.8);
  transition: 0.3s;
  ${({ indexActive }) =>
    indexActive
      ? `color: #f7618b;
    font-size: 18px;`
      : ''}
  &:hover {
    color: #f7618b;
    font-size: 18px;
  }
`
const SelectMenuBottom = styled.div`
  cursor: pointer;
  padding: 20px 30px 20px 0;
  text-decoration: none;
  color: white;
  display: block;
  transition: 0.3s;
  &:hover {
    color: #f7618b;
    font-size: 18px;
  }
`
const CloseButton = styled.a`
  transition: 0.3s;
  position: absolute;
  top: 10px;
  right: 40px;
  font-size: 36px;
  font-weight: normal;
  color: white;
  &:hover {
    color: #f7618b;
    font-size: 40px;
  }
`
const MenuScreenMobile = (props): void => {
  const { useMenu, setMenu, fullpageApi, indexActive } = props
  const funcLinkMenu = (key = 1): void => {
    addPath(key)
    fullpageApi.moveTo(key + 1)
    setMenu(!useMenu)
  }
  return (
    <ContainerMenuMobile visible={useMenu}>
      <CloseButton onClick={() => setMenu(!useMenu)}>&times;</CloseButton>
      <BoxMenu>
        {links.map(({ key, label }) => {
          return (
            <SelectMenu key={key} indexActive={indexActive === key} onClick={() => funcLinkMenu(key)}>
              {label}
            </SelectMenu>
          )
        })}
        <SelectMenu>BLOGS</SelectMenu>
        <SelectMenuBottom>CAREER</SelectMenuBottom>
      </BoxMenu>
    </ContainerMenuMobile>
  )
}

export default MenuScreenMobile
