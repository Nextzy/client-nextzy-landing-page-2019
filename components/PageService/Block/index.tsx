import React from 'react'
import { Header, Body, Highlight } from '../../common/Text'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-image: url('static/images/Frame/table_service.svg');
  background-size: auto 750px;
  background-repeat: no-repeat;
  background-position: center; */
  align-content: flex-start;
  height: 843px;
`

const PrescriptionContainer = styled.div`
  width: 696px;
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
  padding-left: 20px;
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
    margin-left: -21px;
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

const LegoDecorator = styled.div``

const LegoSpan = styled.span`
  align-self: flex-end;
`
const LegoWrapper = (props): React.FC => {
  return (
    <LegoDecorator>
      <Lego {...props}>
        <LegoSpan>{props.children}</LegoSpan>
      </Lego>
    </LegoDecorator>
  )
}
const LegoBlocks = (): React.FC => (
  <Container>
    <Prescription />
    <LegoWrapper topLeftExtended color={'#6062D0'}>
      Web Application Development
    </LegoWrapper>
    <LegoWrapper thickBottomBorder color={'#AB5AA9'}>
      Mobile Application Development
    </LegoWrapper>
    <LegoWrapper color={'#9E5CAF'}>Web Service Development</LegoWrapper>
    <LegoWrapper thickBottomBorder color={'#6C62CB'}>
      Blockchain Development
    </LegoWrapper>
    <LegoWrapper color={'#5065DB'}>
      UI and UX <br />
      Design
      <br /> Services
    </LegoWrapper>
    <LegoWrapper color={'#835FBE'}>DevOps Services</LegoWrapper>
    <LegoWrapper bottomRightExtended thickBottomBorder color={'#6F62CA'}>
      QA Services
    </LegoWrapper>
  </Container>
)
export default LegoBlocks
