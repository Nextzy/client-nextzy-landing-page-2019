import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'

const ProductDeatil = styled.div`
  width: 70%;
  float: right;
  margin-top: 2rem;
`

const Title = styled.div`
  color: #2a7aff;
`
const ContentDetail = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 1rem;
`

const ImgContainer = styled.div`
  position: relative;
  right: 10%;
`

const ProductImgfirst = styled.img`
  object-fit: contain;
  display: block;
  height: 40vh;
  position:absolute;
  transform: translateX(-70%);
  webkit-transform: translateX(-70%);

  &.slide-out {
    animation: slide-out-first 0.6s forwards;
    -webkit-animation: slide-out-first 0.6s forwards;

    ${media.lessThan(`${Config.sizeMobile}px`)`
      margin-left:3rem;
      margin-top: 2rem;
    `}

    ${media.lessThan(`${Config.mediaQuery.mobileL}px`)`
    margin-left:3rem;
      margin-top: 2rem;
    `}

    ${media.lessThan(`${Config.mediaQuery.mobileS}px`)`
    margin-left:3rem;
      margin-top: 2rem;
    `}
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
  object-fit: contain;
  display: block;
  height: 40vh;
  position:absolute;  
  transform: translateX(-70%);
  webkit-transform: translateX(-70%);

  &.slide-out {
    animation: slide-out-second 1.3s forwards;
    -webkit-animation: slide-out-second 1.3s forwards;

    ${media.lessThan(`${Config.mediaQuery.tablet}px`)`
      margin-top: 6rem;
      margin-left: 14rem;
  `}

  ${media.lessThan(`${Config.mediaQuery.mobileL}px`)`
      margin-top: 3rem;
      margin-left: 10rem;
  `}

    ${media.lessThan(`${Config.mediaQuery.mobileS}px`)`
      margin-top: 3rem;
      margin-left: 3rem;
    `}
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
export const ProductContentMobile = (props): React.FC => {
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
        {menu.imgUrl && menu.imgUrl.length > 0 && (
          <ImgContainer>
            <ProductImgfirst className="slide-out" src={`/${process.env.PATH_IMG}static/images/Products/${menu.imgUrl[0]}`} alt="product-1" />
            <ProductImgSecond className="slide-out" src={`/${process.env.PATH_IMG}static/images/Products/${menu.imgUrl[1]}`} alt="product-2" />
          </ImgContainer>
        )}
      </ProductContainer>
    </ProductDeatil>
  )
}
