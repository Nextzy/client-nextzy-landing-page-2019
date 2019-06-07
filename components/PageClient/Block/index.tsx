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
  margin-top: 100px;
  margin-bottom: 50px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
     justify-content: center;
  `}
`

const Lego = styled.div`
  display: flex;
  width: 235px;
  height: 235px;
  padding: auto;
  vertical-align: bottom;
  justify-content: center;
  align-items: center;
  border-top: ${(props) => (props.top? '1px':'0px')} solid ${(props) => props.color};
  border-bottom: 1px solid ${(props) => props.color};
  border-right: 1px solid ${(props) => props.color};

  :before {
    display: ${(props) => (props.leftExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-left: 1px solid ${(props) => props.color};
    height: 300px;
    width: 234px;
    margin-top: ${(props) => (props.top ? '-30px' : '32px')};
    margin-left: -1px;
  }
  :after {
    display: ${(props) => (props.rightExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-right: 1px solid ${(props) => props.color};
    height: 300px;
    width: 236px;
    margin-top: ${(props) => (props.top ? '-30px' : '32px')};
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
      <Lego {...props}>
        {userShow ? (
          <Fade top cascade>
            <LegoImg src={`static/images/logo/logo_${props.src}.svg`} />
          </Fade>
        ) : null}
      </Lego>
    </LegoDecorator>
  )
}
const LegoBlocks = (): React.FC => (
  <Container>
    <LegoWrapper order="1" color={'#DE6C90'} src="myAis" leftExtended top/>
    <LegoWrapper order="1" color={'#9C649A'} src="nu_mobile" rightExtended top outer/>
    <LegoWrapper order="1" color={'#8466A7'} src="omisego" top />
    <LegoWrapper order="1" color={'#6A6ABA'} src="iteamstudio" rightExtended top />
    <LegoWrapper order="2" color={'#A26FB1'} src="onedaycat" leftExtended />
    <LegoWrapper order="2" color={'#8572C2'} src="true" rightExtended outer/>
    <LegoWrapper order="2" color={'#6875D4'} src="nitto" />
    <LegoWrapper order="2" color={'#5079E5'} src="youex" rightExtended />
  </Container>
)
export default LegoBlocks
