import React from 'react'
import styled from 'styled-components'
import Planet from './Planet/index'
import ShootingStar from './ShootingStar/index'
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
  right: -13rem;
  bottom: 6rem;
  width: 100%;
  z-index: 50;
`
const BoxPlanetBigSub = styled.div`
  margin: 0 auto;
  width: 80%;
  float: right;
  z-index: 50;
`
const BoxPlanetSmall = styled.div`
  position: absolute;
  bottom: 4rem;
  left: -4rem;
  width: 100%;
  z-index: 50;
`
const BoxPlanetSmallSub = styled.div`
  margin: 0 auto;
  width: 35%;
  z-index: 50;
`
const BoxMedium = styled.div`
  position: absolute;
  top: -5em;
  left: 0;
  width: 100%;
  z-index: 50;
`
const BoxMediumSub = styled.div`
  margin: 0 auto;
  width: 30%;
  z-index: 50;
`
const TextNEXTZY = styled.div`
  position: relative;
  text-align: left;
  font-family: Montserrat-Medium;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  p {
    margin: 0;
    font-family: 'Montserrat-Medium';
  }
`
const BoxBtnPage = styled.div`
  font-family: 'Montserrat-Regular';
  margin-top: 3rem;
  display: inline-block;
  position: relative;
  text-align: left;
  z-index: 51;
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
const ContainerPageStart = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  justify-content: center;
  z-index: 51;
  flex-direction: column;
  /* background-color: blue; */
`
const PageStart = () => {
  return (
    <Container>
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <p>NEXTZY </p>
              <p>TECHNOLOGIES</p>
            </Fade>
          </TextNEXTZY>

          <BoxBtnPage>
            <p>We are pirates</p>
            <p>We sail and hunt the best mobile and web solution.</p>
            <button>PRODUCTS</button>
            <button>CONTACT</button>
          </BoxBtnPage>
        </ContainerPageStart>

        <BoxPlanetBig>
          <BoxPlanetBigSub>
            <Planet
              positionFade="left"
              imgIn="/static/images/Planet/asset_planet_2.png"
              imgOut="/static/images/Planet/asset_planet_halo_1.svg"
            />
            <BoxPlanetSmall>
              <BoxPlanetSmallSub>
                <Planet positionFade="left" imgIn="/static/images/Planet/asset_planet_3.png" />
              </BoxPlanetSmallSub>
            </BoxPlanetSmall>
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
      </ContainerAll>
      {/* <ShootingStar /> */}
    </Container>
  )
}

export default PageStart
