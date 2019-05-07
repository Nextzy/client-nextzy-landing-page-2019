import React, { useEffect, useState, useContext } from 'react'
import { Header, Body, Highlight } from '../../common/Text'
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
  padding-bottom: 60px;
  text-align: left;
  vertical-align: bottom;
  border: 1px solid ${(props) => props.color};
  border-bottom: ${(props) => (props.thickBottomBorder ? '8px' : '1px')} solid ${(props) => props.color};

  :before {
    display: ${(props) => (props.topLeftExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-left: 1px solid ${(props) => props.color};
    height: 7rem;
    width: 0px;
    margin-top: -3.5rem;
    margin-left: -26px;
  }
  :after {
    display: ${(props) => (props.bottomRightExtended ? 'block' : 'none')};
    content: '';
    position: absolute;
    border-right: 1px solid ${(props) => props.color};
    height: 7rem;
    width: 210px;
    margin-top: 198px;
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

const LegoSpan = styled.span`
  align-self: flex-end;
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
      <Fade duration={800}>
        <Lego {...props}>
          <LegoSpan>{userShow ? props.children : null}</LegoSpan>
        </Lego>
      </Fade>
    </LegoDecorator>
  )
}
const LegoBlocks = (): React.FC => {
  const useScreen = useContext(getWidthContext)

  if (!useScreen || useScreen === 0) return null

  if (useScreen <= Config.sizeMobile) {
    return (
      <Container>
        <Fade top cascade>
          <Prescription />
          <LegoWrapper order="1" topLeftExtended color={'#AB5AA9'}>
            Web Application Development
          </LegoWrapper>
          <LegoWrapper order="1" color={'rgb(0,0,0,0)'} />
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
        </Fade>
      </Container>
    )
  } else {
    return (
      <Container>
        <Fade top cascade>
          <Prescription />
          <LegoWrapper order="1" topLeftExtended color={'#6062D0'}>
            Web Application Development
          </LegoWrapper>
          <LegoWrapper order="2" thickBottomBorder color={'#AB5AA9'}>
            Mobile Application Development
          </LegoWrapper>
          <LegoWrapper order="2" color={'#9E5CAF'}>
            Web Service Development
          </LegoWrapper>
          <LegoWrapper order="2" thickBottomBorder color={'#6C62CB'}>
            Blockchain Development
          </LegoWrapper>
          <LegoWrapper order="2" color={'#5065DB'}>
            UI and UX <br />
            Design
            <br /> Services
          </LegoWrapper>
          <LegoWrapper order="3" color={'#835FBE'}>
            DevOps Services
          </LegoWrapper>
          <LegoWrapper order="3" bottomRightExtended thickBottomBorder color={'#6F62CA'}>
            QA Services
          </LegoWrapper>
        </Fade>
      </Container>
    )
  }
}

export default LegoBlocks
