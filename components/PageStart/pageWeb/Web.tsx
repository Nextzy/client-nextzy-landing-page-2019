import React, { useRef } from 'react'
import styled from 'styled-components'
import ShootingStar from '../ShootingStar/index'
import StarFix from '../Stars/index'
import ContainerAll from '../../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import PlanetAll from './PlanetAll'
const ContainerBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url(/${process.env.PATH_IMG}static/images/Background/background_galaxy.svg);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 10;
`
const TextNEXTZY = styled.div`
  position: relative;
  text-align: left;
  /* font-size: 60px; */
  font-size: 4rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  font-weight: 10;
  margin-top: 5rem;
  p {
    margin: 0;
    font-family: 'Montserrat-Medium';
  }
`
const BoxBtnPage = styled.div`
  font-family: 'Montserrat-Regular';
  margin-top: 5rem;
  padding-top: 5rem;
  display: inline-block;
  position: relative;
  text-align: left;
  z-index: 51;
  /* font-size: 18px; */
  font-size: 1.2rem;
  letter-spacing: 0.5;
  line-height: 1.5;
  color: #ffffff;
`
const ButtonProducts = styled.button`
  z-index: 1000;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.25px;
  line-height: 16px;
  margin-top: 2rem;
  padding: 0.8rem 2.5rem 0.8rem 2.5rem;
  margin-right: 1.5rem;
  border-radius: 25px;
  color: white;
  background-color: transparent;
  border: 0px solid transparent;
  background-image: linear-gradient(to right, #f7618b, #2a7aff);
  z-index: 1;
  &:hover::before {
    opacity: 1;
  }
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(-136deg, #f7618b 0%, #f7618b 100%);
  }
  &:focus-within {
    background-image: linear-gradient(-136deg, #632738 0%, #632738 100%);
    outline: 0;
  }
  &:disabled {
    background-image: linear-gradient(-136deg, #ababab 0%, #ababab 100%);
  }
`

const ButtonContact = styled.button`
  z-index: 1000;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.25px;
  line-height: 16px;
  margin-top: 2rem;
  padding: 0.8rem 2.5rem 0.8rem 2.5rem;
  margin-right: 1.5rem;
  border-radius: 25px;
  color: white;
  background-color: transparent;
  border: 0px solid transparent;
  box-shadow: inset 0 0 0 2px #fff;
  cursor: pointer;
  transition: all 100ms;
  background-size: 100%;
  &:hover {
    background-image: linear-gradient(-136deg, #f7618b 0%, #f7618b 100%);
    box-shadow: inset 0 0 0 2px #f7618b;
  }
  &:focus-within {
    box-shadow: inset 0 0 0 2px #f7618b;
    background-image: linear-gradient(-136deg, #632738 0%, #632738 100%);
    outline: 0;
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: inset 0 0 0 2px #fff;
  }
`
const ContainerPageStart = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: center;
  z-index: 51;
  flex-direction: column;
`
const PageStartWeb = (props): React.FC => {
  const refProduct = useRef(null)
  const refContact = useRef(null)
  const { fullpageApi } = props
  const moveTo = (e) => {
    fullpageApi.moveTo(e.target.value)
    setTimeout(() => {
      refProduct.current.blur()
      refContact.current.blur()
    }, 200)
  }
  return (
    <>
      <ContainerBackground />
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade>
              <p>NEXTZY </p>
              <p>TECHNOLOGIES</p>
            </Fade>
          </TextNEXTZY>

          <BoxBtnPage>
            <Fade right cascade>
              <p>We are pirates</p>
              <p>We sail and hunt the best mobile and web solution.</p>
              <div>
                <ButtonProducts onClick={moveTo} value="4" ref={refProduct}>
                  PRODUCTS
                </ButtonProducts>
                <ButtonContact onClick={moveTo} value="7" ref={refContact}>
                  CONTACT
                </ButtonContact>
              </div>
            </Fade>
          </BoxBtnPage>
        </ContainerPageStart>

        <PlanetAll />
      </ContainerAll>
      <ShootingStar />
      <StarFix />
    </>
  )
}

export default PageStartWeb
