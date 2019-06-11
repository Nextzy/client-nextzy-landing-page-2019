import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'
const ContainerBoxLeft = styled.div`
  position: relative;
  background-color: inherit;
  width: 50%;
  text-align: right;
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  ${media.between(`${Config.sizeMobile}px`, `${Config.sizeTablet}px`)`
    font-size:18px;
  `};
  color: #ffffff;
  padding: 60px 0 60px 0;
  &:before {
    content: '';
    display: block;
    background: ${({ color }) => color};
    transition: width 2s;
    ${({ show }) => `
    width:${show ? '1px;' : '0px;'};
    `}
    top: 0;
    height: 20px;
    right: 20px;
    position: absolute;
    transform: rotate(90deg);
  }
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 5px;
    right: -3px;
    z-index: 1;
    background: ${({ color }) => color};
  }
  div {
    position: absolute;
    transition: right 2s;
    color: white;
    ${({ show }) => `
    right:${show ? '20px;' : '-4px;'};
    `}
    top: 0;
  }
`
const ContainerBoxRight = styled.div`
  position: relative;
  background-color: inherit;
  width: 50%;
  text-align: right;
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  ${media.between(`${Config.sizeMobile}px`, `${Config.sizeTablet}px`)`
    font-size:18px;
  `};
  color: #ffffff;
  padding: 60px 0 60px 0;
  &:before {
    content: '';
    display: block;
    background: ${({ color }) => color};
    transition: width 2s;
    ${({ show }) => `
    width:${show ? '1px;' : '0px;'};
    `}
    top: 0;
    height: 20px;
    right: -20px;
    position: absolute;
    transform: rotate(90deg);
  }
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 5px;
    right: -3px;
    z-index: 1;
    background: ${({ color }) => color};
  }
  div {
    position: absolute;
    color: white;
    transition: right 2s;
    ${({ show }) => `
    right:${show ? '-30px;' : '-4px;'};
    `}
    top: 0;
  }
`
const CircleNumber = styled.div`
  z-index: 2;
  background: ${({ color }) => color};
  padding: 5px 9px 5px 1px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  display: inline-block;
`
const TextDescriptionLeft = styled.div`
  margin-right: 1rem;
  margin-top: 0.3rem;
  width: 100px;
  ${media.between(`${Config.sizeMobile}px`, `${Config.sizeTablet}px`)`
  margin-right: 2rem;
  width:200px;
  `};
`
const TextDescriptionRight = styled.div`
  text-align: left;
  margin-right: -6rem;
  margin-top: 0.3rem;
  width: 100px;
  ${media.between(`${Config.sizeMobile}px`, `${Config.sizeTablet}px`)`
  margin-right: -12rem;
  width:200px;
  `};
`
const CheckReturnText = (id, name, color, userShow): void => {
  if (id % 2 === 0) {
    return (
      <ContainerBoxLeft color={color} show={userShow}>
        <div>
          <CircleNumber color={color}>{id}</CircleNumber>
          <Fade right cascade>
            <TextDescriptionLeft>{name}</TextDescriptionLeft>
          </Fade>
        </div>
      </ContainerBoxLeft>
    )
  } else {
    return (
      <ContainerBoxRight color={color} show={userShow}>
        <div>
          <CircleNumber color={color}>{id}</CircleNumber>
          <Fade left cascade>
            <TextDescriptionRight>{name}</TextDescriptionRight>
          </Fade>
        </div>
      </ContainerBoxRight>
    )
  }
}
const ItemTimeline = (props): React.FC => {
  const [userShow, setShow] = useState(false)
  const { id } = props
  const { name, color } = props.data
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 250 * id)
  }, [])
  return CheckReturnText(id, name, color, userShow)
}

export default ItemTimeline
