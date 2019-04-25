import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const ProductDeatil = styled.div`
  width: 70%;
  float: right;
  margin-top: 2rem;
`

const Title = styled.div`
  color: #2a7aff;
  padding-bottom: 1rem;
`
const ContentDetail = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 1rem;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 4rem;
`

const ProductImgfirst = styled.img`
  margin-left: -3rem;
  margin-top: 2rem;
  position: absolute;
  transform: translateX(-70%);
  webkit-transform: translateX(-70%);

  &.slide-out {
    height: 300px;
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
    margin-top: 4.5rem;
    margin-left: 6rem;
    height: 250px;
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
export const ProductContentMobile = (props): React.FC => {
  const [activeDevice, setActive] = useState('first')
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
              {menu.imgUrl && menu.imgUrl.length > 0 && (
                <ImgContainer>
                  <ProductImgfirst className="slide-out" src={`/static/images/Products/${menu.imgUrl[0]}`} />
                  <ProductImgSecond className="slide-out" src={`/static/images/Products/${menu.imgUrl[1]}`} />
                </ImgContainer>
              )}
            </ProductContainer>
          )
        )
      })}
    </ProductDeatil>
  )
}
