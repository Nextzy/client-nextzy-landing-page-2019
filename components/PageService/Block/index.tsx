import React, { useEffect, useState, useContext } from 'react'
import { Header, Highlight } from '../../common/Text'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { getWidthContext } from '../../../utils/getWidthScreen'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  ${media.lessThan(`${Config.sizeMobile}px`)`
     justify-content: center;
  `}
`

export const Body = styled.p`
  font-size: 16px;
  margin: 24px 40px 0px 0px;
  letter-spacing: 0.5px;
  line-height: 28px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
    margin: 24px 0px 40px 0px;
     font-size: 16px;
  `}
`

const PrescriptionContainer = styled.div`
  width: 711px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
    width: calc(100vw - 4rem);
    margin-bottom: 10vh;
  `}
`

const Prescription = (): React.FC => {
  return (
    <PrescriptionContainer>
      <Header>
        We provide a <Highlight>full range</Highlight> of software design and development services
      </Header>
      <Body>
        From the first step of Business Analysis, System Analysis, User Interface Design, Development, Testing, Release,
        Deploy and Maintenance, so that the software can work effectively with talented people including fresh and fast
        development processes.
      </Body>
    </PrescriptionContainer>
  )
}
const Lego = styled.div`
  display: flex;
  font-size: 24px;
  width: 210px;
  height: ${(props) => (props.thickBottomBorder ? '191px' : '198px')};
  padding-left: 25px;
  padding-bottom: 37px;
  text-align: left;
  vertical-align: bottom;
  align-items: flex-end;
  border: 1px solid ${(props) => props.color};
  border-bottom: ${(props) => (props.thickBottomBorder ? '8px' : '1px')} solid ${(props) => props.color};
  ${media.lessThan(`${Config.sizeMobile}px`)`
  width: 140px;
  padding-left: 20px;
  height: ${(props) => (props.thickBottomBorder ? '91px' : '98px')};
  font-size: 16px;
  `};
  :before {
    display: ${(props) => (props.topLeftExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-left: 1px solid ${(props) => props.color};
    height: 10rem;
    width: 0px;
    margin-top: -5rem;
    margin-left: -26px;
    ${media.lessThan(`${Config.sizeMobile}px`)`
    margin-left: -21px;
    height: 5rem;
    margin-top: -5rem;
  `}
  }
  :after {
    display: ${(props) => (props.bottomRightExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-right: 1px solid ${(props) => props.color};
    height: 5rem;
    width: 210px;
    margin-top: 108px;
    ${media.lessThan(`${Config.sizeMobile}px`)`
    height: 5rem;
    width: 140px;
    margin-top: 100px;
  `}
  }
`

const LegoNull = styled.div`
  min-height: 198px;
  width: 210px;
`

const LegoDecorator = styled.div`
  align-self: flex-start;
  justify-self: flex-start;
`

const LegoMessage = styled.div``
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
        <Fade top cascade duration={800} spy={userShow}>
          <LegoMessage>{userShow ? props.children : null}</LegoMessage>
        </Fade>
      </Lego>
    </LegoDecorator>
  )
}
const LegoBlocks = (): React.FC => {
  const useScreen = useContext(getWidthContext)

  if (!useScreen || useScreen === 0) return null

  if (useScreen <= Config.sizeMobile) {
    return (
      <Container>
        <Prescription />
        <LegoWrapper order="1" topLeftExtended thickBottomBorder color={'#AB5AA9'}>
          Web Application Development
        </LegoWrapper>
        <LegoWrapper order="1" color={'rgb(0,0,0,0)'}  />
        <LegoWrapper order="2" color={'#6062D0'}>
          Mobile Application Development
        </LegoWrapper>
        <LegoWrapper order="2" thickBottomBorder color={'#9E5CAF'}>
          Web Service Development
        </LegoWrapper>
        <LegoWrapper order="3" thickBottomBorder color={'#6C62CB'}>
          Blockchain Development
        </LegoWrapper>
        <LegoWrapper order="3" color={'#5065DB'}>
          UI and UX <br />
          Design
          <br /> Services
        </LegoWrapper>
        <LegoWrapper order="4" color={'#835FBE'}>
          DevOps Services
        </LegoWrapper>
        <LegoWrapper order="4" bottomRightExtended thickBottomBorder color={'#6F62CA'}>
          QA Services
        </LegoWrapper>
      </Container>
    )
  } else {
    return (
      <Container>
        <Prescription />
        <LegoWrapper order="1" topLeftExtended thickBottomBorder color={'#6062D0'}>
          Web Application Development
        </LegoWrapper>
        <LegoWrapper order="2" thickBottomBorder topLeftExtended color={'#AB5AA9'}>
          Mobile Application Development
        </LegoWrapper>
        <LegoWrapper order="2" color={'#9E5CAF'}>
          Web Service Development
        </LegoWrapper>
        <LegoWrapper order="2" thickBottomBorder color={'#6C62CB'}>
          Blockchain Development
        </LegoWrapper>
        <LegoWrapper order="2" color={'#5065DB'} bottomRightExtended>
          UI and UX <br />
          Design
          <br /> Services
        </LegoWrapper>
        <LegoWrapper order="3" color={'#835FBE'} bottomLeftExtended>
          DevOps Services
        </LegoWrapper>
        <LegoWrapper order="3" bottomRightExtended thickBottomBorder color={'#6F62CA'}>
          QA Services
        </LegoWrapper>
      </Container>
    )
  }
}

export default LegoBlocks
