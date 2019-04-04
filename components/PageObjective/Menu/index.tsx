import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Swing from 'react-reveal/Swing'
import { Header, Body, Highlight } from '../../common/Text'
const menuArray = [
  {
    key: 'objective-develop',
    name: 'Develop quality software'
  },
  {
    key: 'objective-empowering',
    name: 'Empowering everyone in the team'
  },
  {
    key: 'objective-share',
    name: 'Share the expertise'
  }
]

const Row = styled.div`
  display: flex;
  font-size: 20px;
  letter-spacing: 0.25px;
  justify-content: space-between;
  width: 385px;
  user-select: none;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#FFFFFF' : '#ABABAB')};
  :hover {
    color: white;
  }
`

const RightAlignIcon = styled.img``

const RowWrapper = styled.div`
  margin-bottom: 30px;
`

const BottomLiner = styled.img`
  opacity: ${(props) => (props.selected ? 1 : 0.3)};
`
interface MenuProps {
  name: string
  callback: object
}

const Menu = (props): React.FC<MenuProps> => {
  const src = props.selected
    ? '/static/images/Icon/collapse/ic_collapse_right_white.svg'
    : '/static/images/Icon/collapse/ic_collapse_right_gray.svg'
  return (
    <>
      <RowWrapper>
        <Row {...props}>
          {props.name}
          <Swing when={props.selected}>
            <RightAlignIcon src={src} />
          </Swing>
        </Row>
        <BottomLiner {...props} src="/static/images/Divider/Color.svg" />
      </RowWrapper>
    </>
  )
}

const MenuListWrapper = styled.div`
  margin-right: 4rem;
`

const MenuList = (props): React.FC => {
  const [selectedKey, setSelected] = useState('objective-develop')
  const onClick = (key): void => {
    setSelected(key)
    props.onMenuClick(key)
  }

  return (
    <MenuListWrapper>
      {menuArray.map(({ key, name }) => (
        <Menu
          id={key}
          key={key}
          onClick={() => onClick(key)}
          onMouseEnter={() => onClick(key)}
          selected={selectedKey === key}
          name={name}
        />
      ))}
    </MenuListWrapper>
  )
}

const DescriptionHolder = styled.div``

const OrderedList = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const OrderedItemContainer = styled.div`
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 28px;
  width: 250px;
  margin-bottom: 2.5rem;
`

const OrderedItemDivider = styled.img`
  width: 50px;
  height: 2px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

interface OrderedItemProps {
  number: string
  name: string
}
const OrderedItem = (props): React.FC<OrderedItemProps> => {
  return (
    <OrderedItemContainer>
      <div>{props.number}</div>
      <OrderedItemDivider src="/static/images/Divider/Color.svg" />
      <div>{props.name}</div>
    </OrderedItemContainer>
  )
}

const DescriptionPane = ({ activeMenu }): React.FC => {
  if (activeMenu === 'objective-develop') {
    return (
      <DescriptionHolder>
        <Header>
          Develop <Highlight>quality software</Highlight> for customers
        </Header>
        <Body>
          Technology is a key to improve businesses. It accelerates their growth by leaps and bounds. We always choose
          the best technologies and deliver the best software to our customers.
        </Body>
        <OrderedList>
          <OrderedItem number="01" name="Cutting-Edge Technologies" />
          <OrderedItem number="02" name="Pixel Perfect Design" />
          <OrderedItem number="03" name="Lightning Speed Development" />
        </OrderedList>
      </DescriptionHolder>
    )
  } else if (activeMenu === 'objective-empowering') {
    return (
      <DescriptionHolder>
        <Header>
          <Highlight>Empowering</Highlight> everyone in the team
        </Header>
        <Body>
          Quality software needs talented people. We, therefore, open our team members to the opportunities to develop
          themselves on top of software development skills.
        </Body>
      </DescriptionHolder>
    )
  } else if (activeMenu === 'objective-share') {
    return (
      <DescriptionHolder>
        <Header>
          <Highlight>Share the expertise</Highlight> to create a community
        </Header>
        <Body>Better developer communities will positively affect our team members, both directly and indirectly.</Body>
      </DescriptionHolder>
    )
  } else {
    return 'No such menu'
  }
}

const PairWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
`
export const Pair = (props): React.FC => {
  const [activeMenu, setActive] = useState('objective-develop')
  return (
    <PairWrapper>
      <MenuList onMenuClick={setActive} />
      <Fade duration={500} spy={activeMenu}>
        <DescriptionPane activeMenu={activeMenu} />
      </Fade>
    </PairWrapper>
  )
}
