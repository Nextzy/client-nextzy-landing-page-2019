import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 843px;
  margin-top: 100px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
     justify-content: center;
  `}
`

const Lego = styled.div`
  display: flex;
  width: 210px;
  height: 210px;
  padding: auto;
  vertical-align: bottom;
  justify-content: center;
  border: 1px solid ${(props) => props.color};

  :before {
    display: ${(props) => (props.leftExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-left: 1px solid ${(props) => props.color};
    height: 330px;
    width: 210px;
    margin-top: -60px;
    margin-left: -1px;
  }
  :after {
    display: ${(props) => (props.rightExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-right: 1px solid ${(props) => props.color};
    height: 330px;
    width: 210px;
    margin-top: -60px;
  }
`

const LegoDecorator = styled.div``

const LegoNull = styled.div`
  min-height: 210px;
  width: 210px;
`

const LegoImg = styled.img`
  align-self: center;
  justify-self: center;
`
const LegoWrapper = (props): React.FC => {
  const [userShow, setShow] = useState(false)
  const { order } = props
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 450 * order)
  }, [])

  return (
    <LegoDecorator>
      <Fade top cascade>
        <Lego {...props}>{userShow ? <LegoImg src={`static/images/logo/logo_${props.src}.svg`} /> : null}</Lego>
      </Fade>
    </LegoDecorator>
  )
}
const LegoBlocks = (): React.FC => (
  <Container>
    <LegoWrapper order="1" color={'#DE6C90'} src="myAis" leftExtended />
    <LegoWrapper order="1" color={'#9C649A'} src="nu_mobile" />
    <LegoWrapper order="1" color={'#8466A7'} src="omisego" leftExtended />
    <LegoWrapper order="1" color={'#6A6ABA'} src="iteamstudio" rightExtended />
    <LegoWrapper order="2" color={'#A26FB1'} src="onedaycat" leftExtended />
    <LegoWrapper order="2" color={'#8572C2'} src="true" rightExtended />
    <LegoWrapper order="2" color={'#6875D4'} src="nitto" />
    <LegoWrapper order="2" color={'#5079E5'} src="youex" rightExtended />
  </Container>
)
export default LegoBlocks
