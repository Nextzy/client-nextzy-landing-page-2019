import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'
import Planet from '../Planet/index'
const BoxPlanetBig = styled.div`
  position: absolute;
  ${media.between(`${Config.mediaQuery.laptopL}px`, `${Config.mediaQuery.fourK}px`)`
  right: -28rem;
  bottom: 1rem;
  `}
  ${media.between(`${Config.mediaQuery.laptop}px`, `${Config.mediaQuery.laptopL}px`)`
  right: -17rem;
  bottom: 0;
  `}
  right: -13rem;
  bottom: 6rem;
  width: 100%;
  z-index: 200;
`
const BoxPlanetBigSub = styled.div`
  margin: 0 auto;
  ${media.between(`${Config.mediaQuery.laptopL}px`, `${Config.mediaQuery.fourK}px`)`
  width: 80%;
  `}
  width: 80%;
  float: right;
  z-index: 200;
`
const BoxPlanetSmall = styled.div`
  position: absolute;
  bottom: 4rem;
  left: -4rem;
  ${media.between(`${Config.mediaQuery.laptopL}px`, `${Config.mediaQuery.fourK}px`)`
  bottom: 10rem;
  left: -3rem;
  `}
  ${media.between(`${Config.mediaQuery.laptop}px`, `${Config.mediaQuery.laptopL}px`)`
  bottom: 8rem;
  left: -3rem;
  `}
  width: 100%;
  z-index: 250;
`
const BoxPlanetSmallSub = styled.div`
  margin: 0 auto;
  width: 35%;
  ${media.between(`${Config.mediaQuery.laptopL}px`, `${Config.mediaQuery.fourK}px`)`
  width: 25%;
  `}
  ${media.between(`${Config.mediaQuery.laptop}px`, `${Config.mediaQuery.laptopL}px`)`
  width: 30%;
  `}
  z-index: 250;
`
const BoxMediumTop = styled.div`
  position: absolute;
  top: -5em;
  left: -2rem;
  ${media.between(`${Config.mediaQuery.laptopL}px`, `${Config.mediaQuery.fourK}px`)`
  left:-7rem;
  `}
  ${media.between(`${Config.mediaQuery.laptop}px`, `${Config.mediaQuery.laptopL}px`)`
  left:-5rem;
  `}
  width: 100%;
  z-index: 250;
`
const BoxMediumTopSub = styled.div`
  margin: 0 auto;
  width: 30%;
  z-index: 250;
`

const PageStart = (): React.FC => {
  const [useOrderEarth, setOrderEarth] = useState({ state1: false, state2: false, state3: false })
  const { state1, state2, state3 } = useOrderEarth
  useEffect(() => {
    // useLayoutEffect(() => {
    setTimeout(() => {
      setOrderEarth({ state1: true, state2: false, state3: false })
    }, 2100)
    setTimeout(() => {
      setOrderEarth({ state1: true, state2: true, state3: false })
    }, 2500)
    setTimeout(() => {
      setOrderEarth({ state1: true, state2: true, state3: true })
    }, 3000)
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
              direction={{x:50,y:50}}
            />
          ) : null}
          <BoxPlanetSmall>
            <BoxPlanetSmallSub>{state3 ? <Planet direction={{x:-20,y:90}}  effectSpin={'spinout'} /> : null}</BoxPlanetSmallSub>
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
              direction={{x:50,y:150}}
            />
          ) : null}
        </BoxMediumTopSub>
      </BoxMediumTop>
    </>
  )
}

export default PageStart
