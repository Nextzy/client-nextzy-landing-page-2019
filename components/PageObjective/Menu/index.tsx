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
// ```DEVELOP QUALITY SOFTWARE FOR CUSTOMERS
//  Technology is a key to improve everyone businesses. It accelerates their growth by leaps and bounds. We always choose the best technologies and deliver the best software to our customers.
// - Pixel Perfect Design
// - Cutting-edge Technologies
// - Lightning Speed Development
// EMPOWERING EVERYONE IN THE TEAM
// Quality software needs talented people. We, therefore, open our team members to the opportunities to develop themselves on top of software development skills.
// SHARE THE EXPERTISE TO CREATE A COMMUNITY.
// Better developer communities will positively affect our team members, both directly and indirectly.
// ```
const Description = (props): React.FC => {
  return (
    <DescriptionHolder>
      <div>Develop quality software for customers</div>
      <p>
        Technology is a key to improve businesses. It accelerates their growth by leaps and bounds. We always choose the
        best technologies and deliver the best software to our customers.
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
