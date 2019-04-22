import React from 'react'
import styled, { keyframes } from 'styled-components'
const ContainerFlag = styled.div`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`
const EarthFade = keyframes`
  from {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
`
const BoxBtnMap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`
const ImgBtnMap = styled.img`
  animation: ${EarthFade} 1000ms infinite;
  width: 30%;
`
const BoxBtnMapIn = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 15%;
  }
`
const Flag = (props): React.FC => {
  const { name, onClick } = props
  return (
    <ContainerFlag>
      <BoxBtnMap onClick={onClick}>
        <ImgBtnMap src="/static/images/Planet/asset_planet_halo_1.svg" alt="Nextzy" />
        <BoxBtnMapIn>
          <img src="/static/images/Map/flag.png" alt="Nextzy" />
        </BoxBtnMapIn>
      </BoxBtnMap>
      {name}
    </ContainerFlag>
  )
}

export default Flag
