import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const ProductDeatil = styled.div`
  width: 70%;
  height: 80vh;
  float: right;
`

const Title = styled.div`
  color: #2a7aff;
  padding-bottom: 1rem;
`
const ContentDetail = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 24px;
`

const BoxBtnPage = styled.div`
  font-family: 'Montserrat-Regular';
  display: inline-block;
  position: relative;
  text-align: left;
  z-index: 51;
  font-size: 18px;
  letter-spacing: 0.5;
  line-height: 1.5;
  color: #d8d8d8;
  button {
    user-select: none;
    font-size: 14px;
    color: #d8d8d8;
    letter-spacing: 1.25px;
    line-height: 16px;
    margin-top: 24px;
    padding: 0.8rem 1.5rem 0.8rem 1.5rem;
    margin-right: 16px;
    border-radius: 25px;
    color: white;
    background-color: transparent;
    border: 1px solid #d8d8d8;
  }
  @media (max-width: 720px) {
    display: none;
  }
`

const ImgContainer = styled.div`
  padding: 2rem;
  display: flex;
  height: 60%;
  justify-content: center;
  margin: auto 0;
`

const ProductImgfirst = styled.img`
  object-fit: contain;
  display: block;
  height: 55vh;
  margin-left: -5rem;
  position: absolute;
  transform: translateX(-70%);
  webkit-transform: translateX(-70%);

  &.slide-out {
    animation: slide-out-first 0.6s forwards;
    -webkit-animation: slide-out-first 0.6s forwards;
  }

  @keyframes slide-out-first {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-20%);
    }
  }

  @-webkit-keyframes slide-out-first {
    0% {
      -webkit-transform: translateX(-30%);
    }
    100% {
      -webkit-transform: translateX(10%);
    }
  }
`

const ProductImgSecond = styled.img`
  z-index: -5;
  height: 50vh;
  margin-top: 1.5rem;
  margin-left: 6rem;
  object-fit: contain;
  position: absolute;
  webkit-transform: translateX(-70%);
  &.slide-out {
    animation: slide-out-second 1.3s forwards;
    -webkit-animation: slide-out-second 1.3s forwards;
  }

  @keyframes slide-out-second {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-20%);
    }
  }

  @-webkit-keyframes slide-out-second {
    0% {
      -webkit-transform: translateX(-30%);
    }
    100% {
      -webkit-transform: translateX(0%);
    }
  }
`

const ProductContainer = styled.div`
  height: 100%;
`
export const ProductContentWeb = (props): React.FC => {
  const { activeProduct, productData } = props
  const { menu } = productData[activeProduct]
  return (
    <ProductDeatil>
      <ProductContainer key={activeProduct}>
        <Fade right cascade distance={'10%'}>
          <Title> {menu.title} </Title>
        </Fade>
        <Fade right cascade distance={'20%'}>
          <ContentDetail>{menu.descrition} </ContentDetail>
        </Fade>
        {menu.devices.map((device, i) => (
          <BoxBtnPage key={i}>
            <button disabled>{device}</button>
          </BoxBtnPage>
        )
        )
        }
        {
          menu.imgUrl && menu.imgUrl.length > 0 && (
            <ImgContainer>
              <ProductImgfirst className="slide-out" src={`/${process.env.PATH_IMG}static/images/Products/${menu.imgUrl[0]}`} alt="product-1" />
              <ProductImgSecond className="slide-out" src={`/${process.env.PATH_IMG}static/images/Products/${menu.imgUrl[1]}`} alt="product-2" />
            </ImgContainer>
          )
        }
      </ProductContainer>
    </ProductDeatil>
  )
}
