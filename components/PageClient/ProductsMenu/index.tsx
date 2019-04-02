import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const ProductDeatil = styled.div`
  width: 70%;
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
  color: #ffffff;
  button {
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 1.25px;
    line-height: 16px;
    margin-top: 24px;
    padding: 0.8rem 2.5rem 0.8rem 2.5rem;
    margin-right: 16px;
    border-radius: 25px;
    color: white;
    background-color: transparent;
    border: 0px solid transparent;
    box-shadow: inset 0 0 0 2px #fff;
  }
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ProductImgfirst = styled.img`
  margin-left: -3rem;
  margin-top: 56px;
  position: absolute;
  transform: translateX(-70%);
  webkit-transform: translateX(-70%);

  &.slide-out {
    height: 519.51px;
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
  z-index: -1;
  transform: translateX(-70%);
  webkit-transform: translateX(-70%);

  &.slide-out {
    margin-top: 114.61px;
    margin-left: 15rem;
    height: 435.08px;
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
  height: 80%;
`
export const Product = (props): React.FC => {
  const [activeDevice, setActive] = useState('IOS')
  const { activeProduct, productData } = props

  const onSelectDevice = (key): void => {
    setActive(key)
  }

  return (
    <ProductDeatil>
      {productData.map((product) => {
        const { menu, fixselected } = product
        return (
          activeProduct === fixselected && (
            <ProductContainer key={product.id}>
              <Fade right cascade distance={'10%'}>
                <Title> {menu.title} </Title>
              </Fade>
              <Fade right cascade distance={'20%'}>
                <ContentDetail>{menu.descrition} </ContentDetail>
              </Fade>
              {menu.devices.map((device, i) => {
                return (
                  <BoxBtnPage key={i}>
                    <button>{device}</button>
                  </BoxBtnPage>
                )
              })}
              <ImgContainer>
                <ProductImgfirst className="slide-out" src="/static/images/Products/product_iphone_login.png" />
                <ProductImgSecond className="slide-out" src="/static/images/Products/product_iphone_app.png" />
              </ImgContainer>
            </ProductContainer>
          )
        )
      })}
    </ProductDeatil>
  )
}
