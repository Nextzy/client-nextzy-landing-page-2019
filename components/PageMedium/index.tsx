import React, { useContext } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Config from '../../constants/Constants'
import ContainerAll from '../layout/ContainerAll'
import { getWidthContext } from '../../utils/getWidthScreen'
import SlideShowImage from './SlideShowImage'
const Container = styled.div`
  /* padding: 5rem 0 5rem 0; */
  background-color: #102131;
  color: white;
  height: 100vh;
  width: 100%;
  z-index: 1;
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
const TextNEXTZY = styled.div`
  position: relative;
  text-align: left;
  /* font-size: 60px; */
  font-size: 3rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  font-weight: 10;
  margin-top: 0rem;
  p {
    margin: 0;
    font-family: 'Montserrat-Medium';
  }
`
const BoxBtnPage = styled.div`
  font-family: 'Montserrat-Regular';

  display: inline-block;
  position: relative;
  text-align: left;
  z-index: 51;
  /* font-size: 18px; */
  font-size: 1rem;
  letter-spacing: 0.5;
  line-height: 1.5;
  color: #ffffff;
`
const ButtonContact = styled.button`
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.25px;
  line-height: 16px;
  margin-top: 12px;
  @media screen and (max-height: 599px) and (min-height: 250px) {
    padding: 0.5rem 2rem 0.5rem 2rem;
    font-size: 10px;
  }
  padding: 0.8rem 3.5rem 0.8rem 3.5rem;
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
  &:focus {
    box-shadow: inset 0 0 0 2px #f7618b;
    background-image: linear-gradient(-136deg, #632738 0%, #632738 100%);
    outline: 0;
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: inset 0 0 0 2px #fff;
  }
`
const PageMedium = (props): React.FC => {
  const useScreen = useContext(getWidthContext)
  return (
    <Container>
      <ContainerAll>
        <ContainerPageStart>
          <TextNEXTZY>
            <Fade right cascade delay={2100}>
              <p>NEXTZY’S BLOGS</p>
            </Fade>
          </TextNEXTZY>
          <BoxBtnPage>
            <Fade right cascade delay={2100}>
              <p>We sail and hunt the best mobile and web solution.</p>
              <ButtonContact
              //  onClick={() => fullpageApi.moveTo(7)}
              >
                GO TO OUR MEDIUM
              </ButtonContact>
            </Fade>
          </BoxBtnPage>
        </ContainerPageStart>
      </ContainerAll>
      <SlideShowImage />
    </Container>
  )
}

export default PageMedium
