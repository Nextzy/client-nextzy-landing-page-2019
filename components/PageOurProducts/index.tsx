import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../common/Text'
import { ProductContentWeb } from './ProductContentWeb'
import { ProductContentMobile } from './ProductContentMobile'
import { Spinner } from './ProductSpinner'
import { LineSpinner } from './ProductLine'
import { getWidthContext } from '../../utils/getWidthScreen'
import Config from '../../constants/Constants'
import _ from 'lodash'
/* const Spinner = loadable({
  loader: () => import('./ProductSpinner'),
  loading() { return (<div>loading</div>) }
}) */

const Container = styled.div`
  position: relative;
  padding: 6rem 0 0 0;
  background-color: #102131;
  color: white;
  min-height: 88vh;
  width: 100%;
`
const TextNEXTZY = styled.div`
  position: relative;
  /* width: 100%; */
  text-align: left;
  font-family: Montserrat-Regular;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  display: inline-block;
  float: left;
`

const ContainerPageObjective = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  text-align: left;
  z-index: 50;
  flex-direction: column;
`
const ContainerObject = styled.div`
  min-height: 80vh;
`

const DataTest = [
  {
    id: 1,
    indicatorPosition: 23,
    fixselected: 'first',
    transformTextMobile: 31.5,
    menu: {
      title: 'YOUEX',
      descrition: 'An application that will help you make friends and will not be lonely anymore.',
      devices: ['ANDROID'],
      imgUrl: ['product_you_ex_2.png', 'product_you_ex_1.png']
    }
  },
  {
    id: 2,
    indicatorPosition: 81,
    fixselected: 'second',
    transformTextMobile: 87.5,
    menu: {
      title: 'NU MOBILE',
      descrition:
        'An application for accessing all services of NU Mobile. The brand new telecommunication corp with a new mobile SIM.',
      devices: ['WEB', 'IOS', 'ANDROID', 'Back-end'],
      imgUrl: ['product_nu_2.png', 'product_nu_1.png']
    }
  },
  {
    id: 3,
    indicatorPosition: 139,
    fixselected: 'third',
    transformTextMobile: 143.5,
    menu: {
      title: 'MY CHANNEL',
      descrition:
        'An application for AIS Shop stuff for use in providing services such as a product information viewing and an after-sales service.',
      devices: ['WEB', 'IOS', 'ANDROID', 'Back-end'],
      imgUrl: ['product_channel_2.png', 'product_channel_1.png']
    }
  },
  {
    id: 4,
    indicatorPosition: 197,
    fixselected: 'fourth',
    transformTextMobile: 205.5,
    menu: {
      title: 'MY AIS',
      descrition:
        'An application that answers all your needs with convenient access to all AIS services 24 hours a day. The super convenient new way to make your digital life easier than ever with AIS services you can manage it whenever wherever you like!',
      devices: ['WEB', 'IOS', 'ANDROID'],
      imgUrl: ['product_myais_1.png', 'product_myais_2.png']
    }
  },
  {
    id: 5,
    indicatorPosition: 255,
    fixselected: 'fifth',
    transformTextMobile: 267.5,
    menu: {
      title: 'TRUE MONEY WALLET CAMPAIGN',
      descrition:
        'Activities and games that users of True Money Wallet can have fun and enjoy it through the application directly.',
      devices: ['WEB', 'Back-end'],
      imgUrl: ['product_true_2.png', 'product_true_1.png']
    }
  }
]
const Home = (props): React.FC => {
  const { indexActive, fullpageApi } = props
  const [useIsCurrent, setIsCurrent] = useState(false)
  const [activeProduct, setActive] = useState(() => {
    const middle = Math.round(DataTest.length / 2)
    return DataTest[middle - 1].fixselected
  })
  let initialY = null

  function startTouch(e) {
    initialY = e.touches[0].clientY
  };


  const downHandler = ({ key }) => {
    if (key === 'ArrowDown' && indexActive === 3 && useIsCurrent) {
      let nextIndex = DataTest.findIndex((el) => el.fixselected === activeProduct) + 1
      if (nextIndex < 5) { setActive(DataTest[nextIndex].fixselected) }
      else {
        fullpageApi.moveSectionDown()
      }
    } else if (key === 'ArrowUp' && indexActive === 3 && useIsCurrent) {
      let nextIndex = DataTest.findIndex((el) => el.fixselected === activeProduct) - 1
      if (nextIndex > -1) { setActive(DataTest[nextIndex].fixselected) } else {
        fullpageApi.moveSectionUp()
      }
    }
  }
  const scrollHandler = (e) => {
    if (e.deltaY > 0 && indexActive === 3 && useIsCurrent) { //scroll down & current page
      let nextIndex = DataTest.findIndex((el) => el.fixselected === activeProduct) + 1
      if (nextIndex < DataTest.length) {
        setTimeout(() => {
          setActive(DataTest[nextIndex].fixselected)
        }, 100);
      }
      else {
        fullpageApi.moveSectionDown()
      }
    } else if (e.deltaY < 0 && indexActive === 3 && useIsCurrent) { //scroll up & current page
      let nextIndex = DataTest.findIndex((el) => el.fixselected === activeProduct) - 1
      if (nextIndex > -1) {
        setTimeout(() => {
          setActive(DataTest[nextIndex].fixselected)
        }, 100);
      }
      else {
        fullpageApi.moveSectionUp()
      }
    }
  }

  const touchHandler = (e) => {
    let currentY = e.changedTouches[0].clientY
    let diffY = initialY - currentY
    if (diffY >= 0 && indexActive === 3 && useIsCurrent) { //scroll down & current page
      let nextIndex = DataTest.findIndex((el) => el.fixselected === activeProduct) + 1
      if (nextIndex < DataTest.length) {
        setTimeout(() => {
          setActive(DataTest[nextIndex].fixselected)
        }, 300)
      }
    } else if (diffY < 0 && indexActive === 3 && useIsCurrent) { //scroll up & current page
      let nextIndex = DataTest.findIndex((el) => el.fixselected === activeProduct) - 1
      if (nextIndex > -1) {
        setTimeout(() => {
          setActive(DataTest[nextIndex].fixselected)
        }, 300)
      }
    }
    initialY = null
    e.preventDefault()
  }
  const useScreen = useContext(getWidthContext)
  useEffect(() => {
    if (fullpageApi && fullpageApi['setAllowScrolling']) {
      if (indexActive === 3) {
        setIsCurrent(true)
        if (useScreen <= Config.sizeTablet) {
          window.addEventListener('touchstart', startTouch, false)
          window.addEventListener('touchend', touchHandler, false)
        } else {
          window.addEventListener('keydown', downHandler)
          window.addEventListener('wheel', scrollHandler)
        }
        if (activeProduct === 'fifth') {
          fullpageApi['setAllowScrolling'](true, 'down')
          fullpageApi['setAllowScrolling'](false, 'up')
          fullpageApi['setKeyboardScrolling'](true, 'down')
          fullpageApi['setKeyboardScrolling'](false, 'up')
        } else if (activeProduct === 'first') {
          fullpageApi['setAllowScrolling'](true, 'up')
          fullpageApi['setAllowScrolling'](false, 'down')
          fullpageApi['setKeyboardScrolling'](true, 'up')
          fullpageApi['setKeyboardScrolling'](false, 'down')
        } else {
          fullpageApi['setAllowScrolling'](false)
          fullpageApi['setKeyboardScrolling'](false)
        }
      } else {
        setIsCurrent(false)
        fullpageApi['setAllowScrolling'](true)
        fullpageApi['setKeyboardScrolling'](true)
      }
    }
    return () => {
      if (useScreen <= Config.sizeTablet) {
        window.removeEventListener('touchstart', startTouch, false)
        window.removeEventListener('touchend', touchHandler, false)
      } else {
        window.removeEventListener('keydown', downHandler)
        window.removeEventListener('wheel', scrollHandler)
      }
    }
  }, [indexActive, activeProduct, useIsCurrent])

  const handleSelectProduct = (key): void => {
    setActive(key)
  }


  const handleComponents = (): void => {
    if (useScreen <= Config.sizeMobile) {
      return <ProductContentMobile activeProduct={activeProduct} productData={DataTest} />
    } else {
      return <ProductContentWeb activeProduct={activeProduct} productData={DataTest} />
    }
  }
  return (
    <Container>
      {useScreen && useScreen <= Config.sizeMobile ? (
        <LineSpinner onSelectProduct={handleSelectProduct} activeProduct={activeProduct} createSelect={DataTest} />
      ) : (
          <Spinner onSelectProduct={handleSelectProduct} activeProduct={activeProduct} createSelect={DataTest} />
        )}
      <ContainerAll>
        <ContainerObject>
          <ContainerPageObjective>
            <TextNEXTZY>
              <Fade right cascade>
                <SectionHeader title="OUR PRODUCTS" />
                {handleComponents()}
              </Fade>
            </TextNEXTZY>
          </ContainerPageObjective>
        </ContainerObject>
      </ContainerAll>
    </Container>
  )
}

export default Home
