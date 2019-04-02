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
    positionSVG: { cx: '559.11', cy: '104.13' },
    fixselected: 'first',
    transformText: 'translate(590.63 92) rotate(-61)',
    menu: { title: 'MY AIS Application', descrition: 'An' }
  },
  {
    id: 2,
    rotate: 49,
    positionSVG: { cx: '650.89', cy: '166.91' },
    fixselected: 'second',
    transformText: 'translate(684.55 160.29) rotate(-50)',
    menu: { title: 'MY AIS Application', descrition: 'An' }
  },
  {
    id: 3,
    rotate: 28,
    positionSVG: { cx: '715.08', cy: '258.12' },
    fixselected: 'third',
    transformText: 'translate(750 267.82) rotate(-30)',
    menu: { title: 'MY AIS Application', descrition: 'An' }
  },
  {
    id: 4,
    rotate: 0,
    positionSVG: { cx: '748', cy: '390' },
    fixselected: 'fourth',
    transformText: 'translate(768 409) rotate(0)',
    menu: { title: 'MY AIS Application', descrition: 'An' }
  },
  {
    id: 5,
    rotate: -20,
    positionSVG: { cx: '715.08', cy: '532.9' },
    fixselected: 'fifth',
    transformText: 'translate(735 560) rotate(10)',
    menu: { title: 'MY AIS Application', descrition: 'An' }
  },
  {
    id: 6,
    rotate: -45,
    positionSVG: { cx: '650.89', cy: '627.49' },
    fixselected: 'sixth',
    transformText: 'translate(657 660) rotate(40)',
    menu: { title: 'MY AIS Application', descrition: 'An' }
  },
  {
    id: 7,
    rotate: -60,
    positionSVG: { cx: '550.94', cy: '692.81' },
    fixselected: 'seventh',
    transformText: 'translate(555 720) rotate(50)',
    menu: { title: 'MY AIS Application', descrition: 'An' }
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
              <Product activeProduct={activeProduct} />
            </Fade>
          </TextNEXTZY>
        </ContainerPageObjective>
      </ContainerAll>
    </Container>
  )
}

export default Home
