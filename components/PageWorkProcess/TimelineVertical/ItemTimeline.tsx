import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'

const ContainerNull = styled.div`
  position: relative;
  background-color: inherit;
  width: 50%;
  padding: 60px 0 60px 0;
`
const ContainerBoxLeft = styled.div`
  position: relative;
  background-color: inherit;
  width: 50%;
  text-align: right;
  font-family: 'Montserrat-Regular';
  font-size: 10px;
  color: #ffffff;
  padding: 60px 0 60px 0;
  &:before {
    content: '';
    display: block;
    background: ${({ color }) => color};
    width: 1px;
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
    color: white;
    right: 20px;
    top: 0;
  }
`
const ContainerBoxRight = styled.div`
  position: relative;
  background-color: inherit;
  width: 50%;
  text-align: right;
  font-family: 'Montserrat-Regular';
  font-size: 10px;
  color: #ffffff;
  padding: 60px 0 60px 0;
  &:before {
    content: '';
    display: block;
    background: ${({ color }) => color};
    width: 1px;
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
    right: -30px;
    top: 0;
  }
`
const CircleNumber = styled.div`
  background: ${({ color }) => color};
  padding: 5px 8px 5px 8px;
  border-radius: 15px;
  display: inline-block;
`
const TextDescriptionLeft = styled.div`
  margin-right: 2rem;
  margin-top: 0.3rem;
  width: 100px;
`
const TextDescriptionRight = styled.div`
  text-align: left;
  margin-right: -7rem;
  margin-top: 0.3rem;
  width: 100px;
`
const CheckReturnText = (id, name, color): void => {
  if (id % 2 === 0) {
    return (
      <ContainerBoxLeft color={color}>
        <div>
          <CircleNumber color={color}>{id}</CircleNumber>
          <TextDescriptionLeft>{name}</TextDescriptionLeft>
        </div>
      </ContainerBoxLeft>
    )
  } else {
    return (
      <ContainerBoxRight color={color}>
        <div>
          <CircleNumber color={color}>{id}</CircleNumber>
          <TextDescriptionRight>{name}</TextDescriptionRight>
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
    }, 500 * id)
  }, [])

  if (userShow) {
    return (
      <Bounce right={id % 2 === 0 ? false : true} left={id % 2 === 0 ? true : false}>
        {CheckReturnText(id, name, color)}
      </Bounce>
    )
  } else {
    return <ContainerNull />
  }
}

export default ItemTimeline
