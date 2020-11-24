import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Entry = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 13px 0px 13px 0px;
  text-align: center;
  position: relative;
  /* width: 80px; */
  width: 9%;
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.13px;
  line-height: 20.73px;
`
const AnimationNodeEntry = styled.div`
  background-color: blue;
  position: relative;
`
const NodeEntry = styled.div`
  ::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background: ${({ color }) => color};
    position: absolute;
    left: 50%;
    top: -28px;
    margin-left: -6px;
  }
  ${({ position, color, show }) =>
    position
      ? `::before {
    content: '';
    display: block;
    background: ${color};
    width: 1px;
    transition: height 2s;
    // should slide up
    height: ${show ? '35px;' : '0px;'}
    position: absolute;
    left: 50%;
    top: -13px;
    margin-left: -2px;
  }`
      : `::before {
    content: '';
    display: block;
    background: ${color};
    width: 1px;
    transition: height 2s;
    height: ${show ? '35px;' : '0px;'}
    position: absolute;
    left: 50%;
    bottom: 24px;
    margin-left: -2px;
  }`}
`
const BoxText = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  left: 0;
  text-align: center;
  top: 1.5rem;
  transition: width 2s;
  ${({ position, show }) =>
    position
      ? ` 
  transition: top 2s;
  top: ${show ? '30px' : '-32px'}
  margin-left:-1px;`
      : ` 
      transition: top 2s;
      top: ${show ? '-105px' : '-52px'}
      margin-left:-1px;`}
`
const CircleNumber = styled.div`
  background: ${({ color }) => color};
  width: 20px;
  height: 20px;
  border-radius: 15px;
  display: inline-block;
`
const TextDescription = styled.div`
  position: relative;
  margin-left: -10px;
  ${({ position }) => (position ? ` top:1rem;` : ` top:-1rem;`)}
`
const CheckReturnText = (id, name, color, userShow): void => {
  if (id % 2 === 0) {
    return (
      <BoxText position={id % 2 === 0} show={userShow}>
        <CircleNumber color={color}>{id}</CircleNumber>
        <TextDescription position={id % 2 === 0}>{name}</TextDescription>
      </BoxText>
    )
  } else {
    return (
      <BoxText position={id % 2 === 0} show={userShow}>
        <TextDescription position={id % 2 === 0}>{name}</TextDescription>
        <CircleNumber color={color}>{id}</CircleNumber>
      </BoxText>
    )
  }
}
const ItemTimeline = (props): React.FC => {
  const [userShow, setShow] = useState(false)
  const { id } = props
  const { name, color } = props.data

  useEffect(() => {
    const showDot = setTimeout(() => {
      setShow(true)
    }, 250 * id)
    return () => {
      clearTimeout(showDot)
    }
  }, [])

  return (
    <Entry position={id % 2 === 0}>
      <AnimationNodeEntry>
        <NodeEntry color={color} position={id % 2 === 0} show={userShow} />
        {CheckReturnText(id, name, color, userShow)}
      </AnimationNodeEntry>
    </Entry>
  )
}

export default ItemTimeline
