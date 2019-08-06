import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  margin-top: 100px;
  ${media.lessThan(`${Config.sizeTablet}px`)`
    margin-top: 20px;
  `};
  ${media.between(`${Config.sizeMobile}px`, `${Config.sizeTablet}px`)`
  margin: 2rem 5rem 0 5rem;
  `};
`

const Lego = styled.div`
  display: flex;
  width: 235px;
  height: 235px;
  padding: auto;
  vertical-align: bottom;
  justify-content: center;
  align-items: center;
  border-top: ${(props) => (props.top ? '1px' : '0px')} solid ${(props) => props.color};
  border-bottom: 1px solid ${(props) => props.color};
  border-right: 1px solid ${(props) => props.color};
  ${media.lessThan(`${Config.sizeMobile}px`)`
  border-left: 1px solid ${(props) => props.color};
  width: 140px;
  height: 140px;
  `};
  ${media.between(`${Config.sizeMobile}px`, `${Config.sizeTablet}px`)`
  border-left: 1px solid ${(props) => props.color};
  min-width: 200px;
  min-height: 200px;
  max-width: 260;
  max-height: 260px;
  `};
  :before {
    display: ${(props) => (props.leftExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-left: 1px solid ${(props) => props.color};
    height: 300px;
    width: 234px;
    margin-top: ${(props) => (props.top ? '-30px' : '32px')};
    margin-left: -1px;
    ${media.lessThan(`${Config.sizeTablet}px`)`
    display: none;
    `}
  }
  :after {
    display: ${(props) => (props.rightExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-right: 1px solid ${(props) => props.color};
    height: 300px;
    width: 236px;
    margin-top: ${(props) => (props.top ? '-30px' : '32px')};
    ${media.lessThan(`${Config.sizeTablet}px`)`
    display: none;
    `}
  }
`

const LegoDecorator = styled.div``

/* const LegoNull = styled.div`
  min-height: 210px;
  width: 210px;
` */

const LegoImg = styled.img`
  align-self: center;
  justify-self: center;
  ${media.lessThan(`${Config.sizeMobile}px`)`
  max-width: 100px;
  max-height: 100px;
  `};
  ${media.between(`${Config.sizeMobile}px`, `${Config.sizeTablet}px`)`
  max-width: 180px;
  max-height: 180px;
  `};
`
const LegoWrapper = (props): React.FC => {
  const [userShow, setShow] = useState(false)
  const { order } = props
  useEffect((): void => {
    setTimeout((): void => {
      setShow(true)
    }, 450 * order)
  }, [])
  return (
    <LegoDecorator>
      <Lego {...props}>
        {userShow ? (
          <Fade top cascade spy>
            <LegoImg src={`${process.env.PATH_IMG}static/images/logo/logo_${props.src}.svg`} alt="logo" />
          </Fade>
        ) : null}
      </Lego>
    </LegoDecorator>
  )
}
const LegoBlocks = (props): React.FC => (
  <Container>
    <LegoWrapper order="1" color={'#DE6C90'} src="myAis" leftExtended top {...props} />
    <LegoWrapper order="1" color={'#9C649A'} src="nu_mobile" rightExtended top outer {...props} />
    <LegoWrapper order="1" color={'#8466A7'} src="omisego" top {...props} />
    <LegoWrapper order="1" color={'#6A6ABA'} src="iteamstudio" rightExtended top {...props} />
    <LegoWrapper order="2" color={'#A26FB1'} src="onedaycat" leftExtended {...props} />
    <LegoWrapper order="2" color={'#8572C2'} src="true" rightExtended outer {...props} />
    <LegoWrapper order="2" color={'#6875D4'} src="nitto" {...props} />
    <LegoWrapper order="2" color={'#5079E5'} src="youex" rightExtended {...props} />
  </Container>
)
export default LegoBlocks
