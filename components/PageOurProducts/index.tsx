import React, { useState } from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../common/Text'
import { Product } from './ProductsMenu'
import { Spinner } from './ProductSpinner'
import { LineSpinner } from './ProductLine'

const Container = styled.div`
  padding: 5rem 0 5rem 0;
  background-color: #102131;
  color: white;
  height: 100vh;
  width: 100%;
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

const ContainerPageObjective = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: left;
  margin-top: 10rem;
  z-index: 50;
  flex-direction: column;
`

const DataTest = [
  {
    id: 1,
    rotate: 61,
    indicatorPosition: 23,
    positionSVG: { cx: '561.37', cy: '104.12' },
    fixselected: 'first',
    transformTextMobile: 31.5,
    transformText: 'translate(590.63 92) rotate(-61)',
    menu: {
      title: 'MY AIS',
      descrition:
        'An application that answers all your needs with convenient access to all AIS services 24 hours a day. The super convenient new way to make your digital life easier than ever with AIS services you can manage it whenever wherever you like!',
      devices: ['WEB', 'IOS', 'ANDROID']
    }
  },
  {
    id: 2,
    rotate: 48,
    indicatorPosition: 81,
    positionSVG: { cx: '647.47', cy: '162.74' },
    fixselected: 'second',
    transformTextMobile: 87.5,
    transformText: 'translate(684.55 160.29) rotate(-48)',
    menu: {
      title: 'MY CHANNEL',
      descrition:
        'An application for AIS Shop stuff for use in providing services such as a product information viewing and an after-sales service.',
      devices: ['WEB', 'IOS', 'ANDROID', 'Back-end']
    }
  },
  {
    id: 3,
    rotate: 28,
    indicatorPosition: 137,
    positionSVG: { cx: '721.4', cy: '265.02' },
    fixselected: 'third',
    transformTextMobile: 143.5,
    transformText: 'translate(755 275) rotate(-28)',
    menu: {
      title: 'NU MOBILE',
      descrition:
        'An application for accessing all services of NU Mobile. The brand new telecommunication corp with a new mobile SIM.',
      devices: ['WEB', 'IOS', 'ANDROID', 'Back-end']
    }
  },
  {
    id: 4,
    rotate: 0,
    indicatorPosition: 197.5,
    positionSVG: { cx: '749.23', cy: '406.21' },
    fixselected: 'fourth',
    transformTextMobile: 205.5,
    transformText: 'translate(768 425) rotate(0)',
    menu: {
      title: 'YOUEX',
      descrition: 'An application that will help you make friends and will not be lonely anymore.',
      devices: ['ANDROID']
    }
  },
  {
    id: 5,
    rotate: -20,
    indicatorPosition: 259,
    positionSVG: { cx: '716.17', cy: '535.86' },
    fixselected: 'fifth',
    transformTextMobile: 267.5,
    transformText: 'translate(735 565) rotate(20)',
    menu: {
      title: 'TRUE MONEY WALLET CAMPAIGN',
      descrition:
        'Activities and games that users of True Money Wallet can have fun and enjoy it through the application directly.',
      devices: ['WEB', 'Back-end']
    }
  },
  {
    id: 6,
    rotate: -40,
    indicatorPosition: 317,
    positionSVG: { cx: '647.47', cy: '629.24' },
    fixselected: 'sixth',
    transformTextMobile: 325.5,
    transformText: 'translate(657 665) rotate(40)',
    menu: { title: 'MY AIS Application', descrition: 'An', devices: ['WEB', 'IOS', 'ANDROID'] }
  },
  {
    id: 7,
    rotate: -60,
    indicatorPosition: 375,
    positionSVG: { cx: '565.99', cy: '685.43' },
    fixselected: 'seventh',
    transformTextMobile: 383.5,
    transformText: 'translate(555 720) rotate(60)',
    menu: { title: 'MY AIS Application', descrition: 'An', devices: ['WEB', 'IOS', 'ANDROID'] }
  }
]
const Home = (): React.FC => {
  const [activeProduct, setActive] = useState('first')
  const handleSelectProduct = (key): void => {
    setActive(key)
  }
  return (
    <Container>
      <ContainerAll>
        <Spinner onSelectProduct={handleSelectProduct} createSelect={DataTest} />
        <LineSpinner onSelectProduct={handleSelectProduct} createSelect={DataTest} />
        <ContainerPageObjective>
          <TextNEXTZY>
            <Fade right cascade>
              <SectionHeader title="Page Products" />
              <Product activeProduct={activeProduct} productData={DataTest} />
            </Fade>
          </TextNEXTZY>
        </ContainerPageObjective>
      </ContainerAll>
    </Container>
  )
}

export default Home
