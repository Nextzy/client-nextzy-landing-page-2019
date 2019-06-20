import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Planet from '../Planet/index'
import media from 'styled-media-query'
import Config from '../../../constants/Constants'
const BoxPlanetBig = styled.div`
  position: absolute;
  right: -12rem;
  bottom: 0;
  ${media.greaterThan(`${Config.mediaQuery.mobileL}px`)`
  right: -12rem;
  bottom: 2rem;
  `}
  ${media.between(`${Config.mediaQuery.mobileL}px`, `${Config.mediaQuery.tablet - 100}px`)`
  right: -15rem;
  bottom: 1rem;
  `}
  ${media.between(`${Config.mediaQuery.mobileL + 100}px`, `${Config.mediaQuery.tablet}px`)`
  right: -18rem;
  bottom: 1rem;
  `}
  width: 100%;
  z-index: 50;
`
const BoxPlanetBigSub = styled.div`
  margin: 0 auto;
  width: 150%;
  ${media.greaterThan(`${Config.mediaQuery.mobileL}px`)`
  width: 130%;
  `}
  ${media.between(`${Config.mediaQuery.mobileL}px`, `${Config.mediaQuery.tablet}px`)`
  width: 100%;
  `}
  float: right;
  z-index: 50;
`
const BoxMediumTop = styled.div`
  position: absolute;
  top: 2rem;
  left: -6.5rem;
  ${media.greaterThan(`${Config.mediaQuery.mobileL}px`)`
  top: 1rem;
  left: -7rem;
  `}
  ${media.between(`${Config.mediaQuery.mobileL}px`, `${Config.mediaQuery.tablet - 100}px`)`
  top: 0rem;
  left: -10rem;
  `}
  ${media.between(`${Config.mediaQuery.mobileL + 100}px`, `${Config.mediaQuery.tablet}px`)`
  top: 0rem;
  left: -15rem;
  `}
  width: 100%;
  z-index: 50;
`
const BoxMediumTopSub = styled.div`
  margin: 0 auto;
  ${media.between(`${Config.mediaQuery.mobileL}px`, `${Config.mediaQuery.tablet - 100}px`)`
  width: 60%;
  `}
  ${media.between(`${Config.mediaQuery.mobileL + 100}px`, `${Config.mediaQuery.tablet}px`)`
  width: 40%;
  `}
  width: 70%;
  z-index: 50;
`

const PageStart = (): React.FC => {
  const [useOrderEarth, setOrderEarth] = useState({ state1: true, state2: false })
  const { state1, state2 } = useOrderEarth
  useEffect(() => {
    setTimeout(() => {
      setOrderEarth({ state1: true, state2: true })
    }, 300)
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
              direction={{ x: 50, y: 50 }}
            />
          ) : null}
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
              direction={{ x: 50, y: 150 }}
            />
          ) : null}
        </BoxMediumTopSub>
      </BoxMediumTop>
    </>
  )
}

export default PageStart
