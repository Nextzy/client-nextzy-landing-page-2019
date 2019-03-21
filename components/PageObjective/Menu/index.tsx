import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Swing from 'react-reveal/Swing'
const menuArray = [
  {
    key: 'develop',
    name: 'Develop quality software'
  },
  {
    key: 'empowering',
    name: 'Empowering everyone in the team'
  },
  {
    key: 'share',
    name: 'Share the expertise'
  }
]

const Row = styled.div`
  display: flex;
  font-size: 20px;
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
  margin-bottom: 0.5rem;
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
    ? '/static/images/icon/collapse/ic_collapse_right_white.svg'
    : '/static/images/icon/collapse/ic_collapse_right_gray.svg'
  return (
    <>
      <RowWrapper>
        <Row {...props}>
          {props.name}{' '}
          <Swing when={props.selected}>
            <RightAlignIcon src={src} />
          </Swing>
        </Row>
        <BottomLiner {...props} src="/static/images/divider/Color.svg" />
      </RowWrapper>
    </>
  )
}

const MenuListWrapper = styled.div`
  margin-right: 4rem;
`

const MenuList = (props): React.FC => {
  const [selectedKey, setSelected] = useState('develop')
  const onClick = (key): void => {
    setSelected(key)
    props.onMenuClick(key)
  }

  return (
    <MenuListWrapper>
      {menuArray.map(({ key, name }) => (
        <Menu
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

const DescriptionHolder = styled.div`
  font-size: 24px;
`

const DescriptionPane = ({ activeMenu }): React.FC => {
  if (activeMenu === 'develop') {
    return (
      <DescriptionHolder>
        <div>Develop quality software for customers</div>
        <p>
          Technology is a key to improve businesses. It accelerates their growth by leaps and bounds. We always choose
          the best technologies and deliver the best software to our customers.
        </p>
        <ul>
          <ol>Cutting-Edge Technologies</ol>
          <ol>Pixel Perfect Design</ol>
          <ol>Lightning Speed Development</ol>
        </ul>
      </DescriptionHolder>
    )
  } else if (activeMenu === 'empowering') {
    return (
      <DescriptionHolder>
        <div>Empowering everyone in the team</div>
        <p>
          Quality software needs talented people. We, therefore, open our team members to the opportunities to develop
          themselves on top of software development skills.
        </p>
      </DescriptionHolder>
    )
  } else if (activeMenu === 'share') {
    return (
      <DescriptionHolder>
        <div>Share the expertise to create a community</div>
        <p>Better developer communities will positively affect our team members, both directly and indirectly.</p>
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
  const [activeMenu, setActive] = useState('develop')
  return (
    <PairWrapper>
      <MenuList onMenuClick={setActive} />
      <Fade duration={500} spy={activeMenu}>
        <DescriptionPane activeMenu={activeMenu} />
      </Fade>
    </PairWrapper>
  )
}
