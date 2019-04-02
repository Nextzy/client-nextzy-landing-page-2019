import React, { useState } from 'react'
import styled from 'styled-components'
import ContainerAll from '../layout/ContainerAll'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../common/Text'
import { Product } from './ProductsMenu'
import { Spinner } from './ProductSpinner'
const Container = styled.div`
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
    rotate: 63,
    positionSVG: { cx: '561.37', cy: '104.12' },
    fixselected: 'first',
    transformText: 'translate(590.63 92) rotate(-61)',
    menu: {
      title: 'MY AIS Application',
      descrition:
        'An application that answers all your needs with convenient access to all AIS services 24 hours a day',
      devices: ['WEB', 'IOS', 'ANDROID']
    }
  },
  {
    id: 2,
    rotate: 49,
    positionSVG: { cx: '647.47', cy: '162.74' },
    fixselected: 'second',
    transformText: 'translate(684.55 160.29) rotate(-48)',
    menu: { title: 'MY AIS Application', descrition: 'An', devices: ['WEB', 'IOS', 'ANDROID'] }
  },
  {
    id: 3,
    rotate: 28,
    positionSVG: { cx: '721.4', cy: '265.02' },
    fixselected: 'third',
    transformText: 'translate(755 275) rotate(-28)',
    menu: { title: 'MY AIS Application', descrition: 'An', devices: ['WEB', 'IOS', 'ANDROID'] }
  },
  {
    id: 4,
    rotate: 0,
    positionSVG: { cx: '749.23', cy: '406.21' },
    fixselected: 'fourth',
    transformText: 'translate(768 425) rotate(0)',
    menu: { title: 'MY AIS Application', descrition: 'An', devices: ['WEB', 'IOS', 'ANDROID'] }
  },
  {
    id: 5,
    rotate: -20,
    positionSVG: { cx: '716.17', cy: '535.86' },
    fixselected: 'fifth',
    transformText: 'translate(735 565) rotate(20)',
    menu: { title: 'MY AIS Application', descrition: 'An', devices: ['WEB', 'IOS', 'ANDROID'] }
  },
  {
    id: 6,
    rotate: -45,
    positionSVG: { cx: '647.47', cy: '629.24' },
    fixselected: 'sixth',
    transformText: 'translate(657 665) rotate(40)',
    menu: { title: 'MY AIS Application', descrition: 'An', devices: ['WEB', 'IOS', 'ANDROID'] }
  },
  {
    id: 7,
    rotate: -60,
    positionSVG: { cx: '565.99', cy: '685.43' },
    fixselected: 'seventh',
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
