import React from 'react'
import styled from 'styled-components'
import Planet from './Planet/index'
import ContainerAll from '../common/ContainerAll'
import Fade from 'react-reveal/Fade'
const Container = styled.div`
  background-color: #1a2740;
  color: white;
  height: 100vh;
  width: 100%;
`
const BoxPlanetBig = styled.div`
  position: absolute;
  top: 15rem;
  right: -7rem;
  width: 100%;
`
const BoxPlanetBigSub = styled.div`
  margin: 0 auto;
  width: 60%;
  float: right;
`
const BoxMedium = styled.div`
  position: absolute;
  top: -5em;
  left: 0;
  width: 100%;
`
const BoxMediumSub = styled.div`
  margin: 0 auto;
  width: 30%;
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
const BoxBtnPage = styled.div`
  /* margin-top: 15rem; */
  width: 100%;
  position: relative;
  text-align: left;
  button {
    margin-top: 2rem;
    padding: 1rem 2rem 1rem 2rem;
    margin-right: 1.5rem;
    border-radius: 25px;
    color: white;
    background-color: transparent;
    border: 0px solid transparent;
    box-shadow: inset 0 0 0 2px #fff;
    /* transition: background 500ms; */
    &:hover {
      background-image: linear-gradient(-136deg, #f7618b 0%, #2a7aff 100%);
      box-shadow: inset 0 0 0 2px transparent;
    }
  }
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
  background-color: blue;
`
const BoxIconContact = styled.div`
  position: absolute;
  /* display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; */
  /* overflow: hidden; */
  /* text-align: center; */
  /* background-color: #1a2740; */
  color: white;
  right: 0;
  bottom: 0;
  /* width: 100%; */
`
const PageStart = () => {
  return (
    <Container>
      <BoxPlanetBig>
        <BoxPlanetBigSub>
          <Planet
            positionFade="left"
            imgIn="/static/images/Planet/asset_planet_2.png"
            imgOut="/static/images/Planet/asset_planet_halo_1.svg"
          />
        </BoxPlanetBigSub>
      </BoxPlanetBig>
      <BoxMedium>
        <BoxMediumSub>
          <Planet
            imgIn="/static/images/Planet/asset_planet_1.png"
            imgOut="/static/images/Planet/asset_planet_halo_2.svg"
          />
        </BoxMediumSub>
      </BoxMedium>
      <ContainerAll>
        <ContainerPageSart>
          <TextNEXTZY>
            {/* <Fade right cascade> */}
            <p>NEXTZY</p> <p>TECHNOLOGIES</p>
            {/* </Fade> */}
          </TextNEXTZY>

          {/* <BoxBtnPage>
            <p>We are pirates</p>
            <p>We sail and hunt the best mobile and web solution.</p>
            <button>PRODUCTS</button>
            <button>CONTACT</button>
          </BoxBtnPage> */}
        </ContainerPageSart>
        <BoxIconContact>boat</BoxIconContact>
      </ContainerAll>
    </Container>
  )
}

export default PageStart
