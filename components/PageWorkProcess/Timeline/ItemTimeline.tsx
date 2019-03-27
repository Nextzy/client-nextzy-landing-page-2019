import React, { useState } from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'

const Entry = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 13px;
  text-align: center;
  position: relative;
  width: 80px;
  font-family: 'Montserrat-Regular';
  font-size: 10px;
  color: #ffffff;
  letter-spacing: 0.13px;
  line-height: 20.73px;

  /* ::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
    position: absolute;
    left: 50%;
    top: -28px;
    margin-left: -6px;
  }
  ${({ position }) =>
    position
      ? `::before {
    content: '';
    display: block;
    background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
    width: 2px;
    height: 25px;
    position: absolute;
    left: 50%;
    top: -13px;
    margin-left: -2px;
  }`
      : `::before {
    content: '';
    display: block;
    background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
    width: 2px;
    height: 25px;
    position: absolute;
    left: 50%;
    top: -58px;
    margin-left: -2px;
  }`} */
`
const NodeEntry = styled.div`
  ::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
    position: absolute;
    left: 50%;
    top: -28px;
    margin-left: -6px;
  }
  ${({ position }) =>
    position
      ? `::before {
    content: '';
    display: block;
    background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
    width: 2px;
    height: 25px;
    position: absolute;
    left: 50%;
    top: -13px;
    margin-left: -2px;
  }`
      : `::before {
    content: '';
    display: block;
    background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
    width: 2px;
    height: 25px;
    position: absolute;
    left: 50%;
    top: -58px;
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
  ${({ position }) => (position ? ` top: 20px` : ` top: -105px;`)}
`
const CircleNumber = styled.div`
  background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
  padding: 0 8px 0 8px;
  border-radius: 15px;
  display: inline-block;
`
const TextDescription = styled.div`
  /* ${({ position }) => (position ? ` padding-bottom:20.3px;` : ` margin: 0 0 20.3px 0;`)} */
`
const CheckReturnText = (id, name) => {
  if (id % 2 === 0) {
    return (
      <BoxText position={id % 2 === 0}>
        <CircleNumber>{id}</CircleNumber>
        <TextDescription position={id % 2 === 0}>{name}</TextDescription>
      </BoxText>
    )
  } else {
    return (
      <BoxText position={id % 2 === 0}>
        <TextDescription position={id % 2 === 0}>{name}</TextDescription>
        <CircleNumber>{id}</CircleNumber>
      </BoxText>
    )
  }
}
const ItemTimeline = (props): React.FC => {
  const [userShow, setShow] = useState(false)
  const { id } = props
  const { name } = props.data
  setTimeout(() => {
    setShow(true)
  }, 500 * id)
  if (userShow) {
    return (
      <Entry position={id % 2 === 0}>
        <Bounce top={id % 2 === 0 ? false : true} bottom={id % 2 === 0 ? true : false} cascade>
          <NodeEntry position={id % 2 === 0} />
          {CheckReturnText(id, name)}
        </Bounce>
      </Entry>
    )
  } else {
    return null
  }
}

export default ItemTimeline
