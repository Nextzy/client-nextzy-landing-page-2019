import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Fade from 'react-reveal/Fade'
import Swing from 'react-reveal/Swing'
import { Header, Body, Highlight } from '../../common/Text'
import { getWidthContext } from '../../../utils/getWidthScreen'
import Config from '../../../constants/Constants'
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
  ${media.lessThan(`${Config.sizeMobile}px`)`
    color: white;
    width: 400px;
  `}
`

const SuffixIcon = styled.img``

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

const getArrow = ({ props, useScreen }): string => {
  if (useScreen <= Config.sizeMobile) {
    return props.selected
      ? '/static/images/Icon/collapse/ic_collapse_down_white.svg'
      : '/static/images/Icon/collapse/ic_collapse_up_white.svg'
  }
  return props.selected
    ? '/static/images/Icon/collapse/ic_collapse_right_white.svg'
    : '/static/images/Icon/collapse/ic_collapse_right_gray.svg'
}

const MenuWeb = (props): React.FC<MenuProps> => {
  const useScreen = useContext(getWidthContext)
  const src = getArrow({ props, useScreen })
  return (
    <>
      <RowWrapper>
        <Row {...props}>
          {props.name}
          <Swing when={props.selected}>
            <SuffixIcon src={src} />
          </Swing>
        </Row>
        <BottomLiner {...props} src="/static/images/Divider/Color.svg" />
      </RowWrapper>
    </>
  )
}

const MenuMobile = (props): React.FC<MenuProps> => {
  const useScreen = useContext(getWidthContext)
  const src = getArrow({ props, useScreen })
  const { activeMenu, selected, name } = props
  return (
    <>
      <RowWrapper>
        <Row {...props}>
          {name}
          <Swing when={selected}>
            <SuffixIcon src={src} />
          </Swing>
        </Row>
        <BottomLiner {...props} src="/static/images/Divider/Color.svg" />
        {selected ? (
          <Fade duration={500} when={selected}>
            <DescriptionPane activeMenu={activeMenu} />
          </Fade>
        ) : null}
      </RowWrapper>
    </>
  )
}

const MenuListWebWrapper = styled.div`
  margin-right: 4rem;
`
const MenuListMobileWrapper = styled.div`
  margin-right: 0;
  /* margin: 0 auto; */
`

const MenuListWeb = (props): React.FC => {
  const [selectedKey, setSelected] = useState('objective-develop')
  const onClick = (key): void => {
    setSelected(key)
    props.onMenuClick(key)
  }

  return (
    <MenuListWebWrapper>
      {menuArray.map(({ key, name }) => (
        <MenuWeb
          id={key}
          key={key}
          onClick={() => onClick(key)}
          onMouseEnter={() => onClick(key)}
          selected={selectedKey === key}
          name={name}
        />
      ))}
    </MenuListWebWrapper>
  )
}

const MenuListMobile = (props): React.FC => {
  const [selectedKey, setSelected] = useState('objective-develop')
  const onClick = (key): void => {
    const theKey = selectedKey === key ? '' : key
    setSelected(theKey)
  }

  return (
    <MenuListMobileWrapper>
      {menuArray.map(({ key, name }) => (
        <MenuMobile
          id={key}
          key={key}
          onClick={() => onClick(key)}
          activeMenu={selectedKey}
          selected={selectedKey === key}
          name={name}
        />
      ))}
    </MenuListMobileWrapper>
  )
}

const DescriptionHolder = styled.div`
  max-width: 40vw;
  ${media.lessThan(`${Config.sizeMobile}px`)`
      width: 400px;
  `}
`

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
    return null
  }
}

const PairWrapper = styled.div`
  display: flex;
  margin-top: 3rem;

  ${media.lessThan(`${Config.sizeMobile}px`)`
    justify-content: center;
  `}
`

export const Pair = (props): React.FC => {
  const [activeMenu, setActive] = useState('objective-develop')
  const useScreen = useContext(getWidthContext)

  if (!useScreen || useScreen === 0) return null

  if (useScreen <= Config.sizeMobile) {
    return (
      <PairWrapper>
        <MenuListMobile />
      </PairWrapper>
    )
  } else {
    return (
      <PairWrapper>
        <MenuListWeb onMenuClick={setActive} />
        <Fade duration={500} spy={activeMenu}>
          <DescriptionPane activeMenu={activeMenu} />
        </Fade>
      </PairWrapper>
    )
  }
}
