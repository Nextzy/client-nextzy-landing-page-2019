import React from 'react'
import styled from 'styled-components'
import Planet from './Planet/index'
import ContainerAll from '../common/ContainerAll'
const Container = styled.div`
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  overflow: hidden;
  text-align: center;
  background-color: #1a2740;
  color: white;
  height: 100vh;
  width: 100%;
`
const BoxPlanetBig = styled.div`
  position: absolute;
  width: 80%;
  top: 12rem;
  right: -8rem;
`
const BoxMedium = styled.div`
  position: absolute;
  width: 40%;
  top: -5rem;
  left: 10rem;
`
const TextNEXTZY = styled.div`
  text-align: left;
  font-family: Montserrat-Medium;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  text-align: left;
`

const Home = () => {
  return (
    <Container>
      <BoxPlanetBig>
        <Planet
          positionFade="left"
          imgIn="/static/images/Planet/asset_planet_2.png"
          imgOut="/static/images/Planet/asset_planet_halo_1.svg"
        />
      </BoxPlanetBig>
      <BoxMedium>
        <Planet
          positionFade="left"
          imgIn="/static/images/Planet/asset_planet_1.png"
          imgOut="/static/images/Planet/asset_planet_halo_2.svg"
        />
      </BoxMedium>
      <ContainerAll>
        <TextNEXTZY>
          <p>NEXTZY</p> <p>TECHNOLOGIES</p>
        </TextNEXTZY>
      </ContainerAll>
    </Container>
  )
}

export default Home
