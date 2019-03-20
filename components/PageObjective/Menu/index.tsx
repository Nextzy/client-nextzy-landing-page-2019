import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 385px;
`

const RightAlignIcon = styled.img``

const RowWrapper = styled.div`
  margin-bottom: 0.5rem;
`
interface MenuProps {
  name: string
  callback: object
}

const Menu = (props): React.FC<MenuProps> => {
  return (
    <>
      <RowWrapper>
        <Row>
          {props.name} <RightAlignIcon src="/static/images/icon/collapse/ic_collapse_right_white.svg" />
        </Row>
        <img src="/static/images/divider/Color.svg" />
      </RowWrapper>
    </>
  )
}

const MenuListWrapper = styled.div`
  margin-right: 4rem;
`

const MenuList = (props): React.FC => {
  return (
    <MenuListWrapper>
      <Menu name="Develop quality software" />
      <Menu name="Empowering everyone in the team" />
      <Menu name="Share the expertise" />
    </MenuListWrapper>
  )
}

const DescriptionHolder = styled.div`
  font-size: 24px;
`

const Description = (props): React.FC => {
  return (
    <DescriptionHolder>
      <div>Develop quality software for customers</div>
      <p>
        Technology is the key to improving businesses grow with leaps and bounds. We choose to use the best technology
        to deliver the best software to our customers.
      </p>
      <ul>
        <ol>Cutting-Edge Technologies</ol>
        <ol>Pixel Perfect Design</ol>
        <ol>Lightning Speed Development</ol>
      </ul>
    </DescriptionHolder>
  )
}

const PairWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
`
export const Pair = (props): React.FC => {
  return (
    <PairWrapper>
      <MenuList />
      <Description />
    </PairWrapper>
  )
}
