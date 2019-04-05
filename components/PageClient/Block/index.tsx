import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 843px;
  margin-top: 100px;
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

  :hover {
    box-shadow: 0 0 8px 3px white inset;
  }
`

const LegoDecorator = styled.div``

const LegoImg = styled.img`
  align-self: center;
  justify-self: center;
`
const LegoWrapper = (props): React.FC => {
  return (
    <LegoDecorator>
      <Bounce duration={800}>
        <Lego {...props}>
          <LegoImg src={`static/images/logo/logo_${props.src}.svg`} />
        </Lego>
      </Bounce>
    </LegoDecorator>
  )
}
const LegoBlocks = (): React.FC => (
  <Container>
    <LegoWrapper color={'#6062D0'} src="myAis" leftExtended />
    <LegoWrapper color={'#AB5AA9'} src="nu_mobile" />
    <LegoWrapper color={'#9E5CAF'} src="omisego" leftExtended />
    <LegoWrapper color={'#6C62CB'} src="iteamstudio" rightExtended />
    <LegoWrapper color={'#5065DB'} src="onedaycat" leftExtended />
    <LegoWrapper color={'#835FBE'} src="true" rightExtended />
    <LegoWrapper color={'#6F62CA'} src="nitto" />
    <LegoWrapper color={'#6F62CA'} src="youex" rightExtended />
  </Container>
)
export default LegoBlocks
