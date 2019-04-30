import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'
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
  const { id } = props
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 450 * id)
  }, [])

  if (userShow) {
    return (
      <LegoDecorator>
        <Bounce duration={800}>
          <Lego {...props}>
            <LegoImg src={`static/images/logo/logo_${props.src}.svg`} />
          </Lego>
        </Bounce>
      </LegoDecorator>
    )
  } else return <LegoNull />
}
const LegoBlocks = (): React.FC => (
  <Container>
    <Fade top cascade>
      <LegoWrapper id="1" color={'#DE6C90'} src="myAis" leftExtended />
      <LegoWrapper id="2" color={'#9C649A'} src="nu_mobile" />
      <LegoWrapper id="3" color={'#8466A7'} src="omisego" leftExtended />
      <LegoWrapper id="4" color={'#6A6ABA'} src="iteamstudio" rightExtended />
      <LegoWrapper id="5" color={'#A26FB1'} src="onedaycat" leftExtended />
      <LegoWrapper id="6" color={'#8572C2'} src="true" rightExtended />
      <LegoWrapper id="7" color={'#6875D4'} src="nitto" />
      <LegoWrapper id="8" color={'#5079E5'} src="youex" rightExtended />
    </Fade>
  </Container>
)
export default LegoBlocks
