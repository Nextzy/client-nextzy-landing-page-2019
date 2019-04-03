import React from 'react'
import { Header, Body, Highlight } from '../../common/Text'
import styled from 'styled-components'
const Container = styled.div`
  margin: 60px;
  margin-top: 160px;
  display: flex;
  flex-wrap: wrap;
  background-image: url('static/images/Frame/table_service.svg');
  background-size: auto 750px;
  background-repeat: no-repeat;
  background-position: center;
  height: 750px;
`

const PrescriptionContainer = styled.div``

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
  font-size: 16px;
  width: 150px;
  height: 150px;
`
const Frame = styled.img``
const LegoBlocks = (): React.FC => (
  <Container>
    <Prescription />
    <Lego>Web Application Development</Lego>
    <Lego>Mobile Application Development</Lego>
    <Lego>Web Service Development</Lego>
    <Lego>Blockchain Development</Lego>
    <Lego>UI and UX Design Services</Lego>
    <Lego>DevOps Services</Lego>
    <Lego>QA Services</Lego>
  </Container>
)
export default LegoBlocks
