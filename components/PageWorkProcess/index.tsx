import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../common/Text'
import Timeline from './Timeline/index'
import lax from 'lax.js'

const Container = styled.div`
  background-color: #1a2740;
  color: white;
  height: 100vh;
  width: 100%;
`
const TextNEXTZY = styled.div`
  position: relative;
  /* width: 100%; */
  text-align: left;
  font-family: Montserrat-Medium;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  float: left;
`
const TextDescription = styled.div`
  padding-top: 2rem;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 28px;
`
const ContainerPageSart = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  justify-content: center;
  z-index: 50;
  flex-direction: column;
  border: green solid 1px;
`

class PageWorkProcess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // const PageWorkProcess = (): React.FC => {
  // useEffect(() => {
  //   ReactDOM.findDOMNode(this)
  //   const el = ReactDOM.findDOMNode(this)
  //   lax.addElement(this.el)
  // })
  // componentDidMount() {
  //   this.el = ReactDOM.findDOMNode(this)
  //   lax.addElement(this.el)
  //   console.log('el', this.el)
  // }
  // componentWillUnmount() {
  //   lax.removeElement(this.el)
  // }
  render() {
    return (
      <Container>
        <ContainerAll>
          <ContainerPageSart>
            <TextNEXTZY>
              <Fade right cascade>
                <SectionHeader title="HOW WE WORK (WORKING PROCESS)" />
              </Fade>
            </TextNEXTZY>
            <TextDescription data-lax-preset="leftToRight fadeInOut">
              To deliver the best software our customers. We, therefore, pay attention to the process of software
              development to meet the requirement of customers rapidly. You could see the sequence of operations and
              origresses during development continuously.
            </TextDescription>
            <Timeline />
          </ContainerPageSart>
        </ContainerAll>
      </Container>
    )
  }
}

export default PageWorkProcess
