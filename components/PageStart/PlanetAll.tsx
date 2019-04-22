import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Planet from './Planet/index'
// import { useSpring, animated } from 'react-spring'
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* z-index: -1; */
`
const BoxPlanetBig = styled.div`
  position: absolute;
  right: -13rem;
  bottom: 6rem;
  width: 100%;
  z-index: 50;
`
const BoxPlanetBigSub = styled.div`
  margin: 0 auto;
  width: 80%;
  float: right;
  z-index: 50;
`
const BoxPlanetSmall = styled.div`
  position: absolute;
  bottom: 4rem;
  left: -4rem;
  width: 100%;
  z-index: 50;
`
const BoxPlanetSmallSub = styled.div`
  margin: 0 auto;
  width: 35%;
  z-index: 50;
`
const BoxMediumTop = styled.div`
  position: absolute;
  top: -5em;
  left: -2rem;
  width: 100%;
  z-index: 50;
`
const BoxMediumTopSub = styled.div`
  margin: 0 auto;
  width: 30%;
  z-index: 50;
`

const PageStart = (): React.FC => {
  const [useOrderEarth, setOrderEarth] = useState({ state1: true, state2: false, state3: false })
  const { state1, state2, state3 } = useOrderEarth
  useEffect(() => {
    // useLayoutEffect(() => {
    setTimeout(() => {
      setOrderEarth({ state1: true, state2: true, state3: false })
      setTimeout(() => {
        setOrderEarth({ state1: true, state2: true, state3: true })
      }, 800)
    }, 800)
  }, [])
  return (
    <>
      <BoxPlanetBig>
        <BoxPlanetBigSub>
          {state2 ? (
            <Planet
              imgCore="/static/images/Planet/planet_center_core.png"
              imgShadow="/static/images/Planet/planet_center_shadow.png"
              imgHole="/static/images/Planet/planet_center_hole.png"
              background="/static/images/Planet/asset_planet_halo_1.svg"
              effectSpin={'spinout'}
            />
          ) : null}
          <BoxPlanetSmall>
            <BoxPlanetSmallSub>{state3 ? <Planet /> : null}</BoxPlanetSmallSub>
          </BoxPlanetSmall>
        </BoxPlanetBigSub>
      </BoxPlanetBig>
      <BoxMediumTop>
        <BoxMediumTopSub>
          {state1 ? (
            <Planet
              imgCore="/static/images/Planet/asset_planet_top_core.png"
              imgShadow="/static/images/Planet/asset_planet_top_shadow.png"
              imgHole="/static/images/Planet/asset_planet_top_line.png"
              background="/static/images/Planet/asset_planet_halo_2.svg"
              effectSpin={'spinin'}
            />
          ) : null}
        </BoxMediumTopSub>
      </BoxMediumTop>
    </>
  )
}

export default PageStart
