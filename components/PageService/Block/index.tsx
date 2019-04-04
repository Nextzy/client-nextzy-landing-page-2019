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
  height: 198px;
  padding-left: 20px;
  padding-bottom: 60px;
  text-align: left;
  vertical-align: bottom;
  border: 1px solid #f7618b;
`

const LegoSpan = styled.span`
  align-self: flex-end;
`
const Frame = styled.img``
const LegoBlocks = (): React.FC => (
  <Container>
    <Prescription />
    <Lego>
      <LegoSpan>Web Application Development</LegoSpan>
    </Lego>
    <Lego>
      <LegoSpan>Mobile Application Development</LegoSpan>
    </Lego>
    <Lego>
      <LegoSpan>Web Service Development</LegoSpan>
    </Lego>
    <Lego>
      <LegoSpan>Blockchain Development</LegoSpan>
    </Lego>
    <Lego>
      <LegoSpan>
        UI and UX <br />
        Design
        <br /> Services
      </LegoSpan>
    </Lego>
    <Lego>
      <LegoSpan>DevOps Services</LegoSpan>
    </Lego>
    <Lego>
      <LegoSpan>QA Services</LegoSpan>
    </Lego>
  </Container>
)
export default LegoBlocks
