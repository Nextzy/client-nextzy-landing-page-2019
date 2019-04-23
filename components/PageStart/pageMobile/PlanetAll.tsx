import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Planet from '../Planet/index'
const BoxPlanetBig = styled.div`
  position: absolute;
  right: -12rem;
  bottom: 0;
  width: 100%;
  z-index: 50;
`
const BoxPlanetBigSub = styled.div`
  margin: 0 auto;
  width: 150%;
  float: right;
  z-index: 50;
`
const BoxMediumTop = styled.div`
  position: absolute;
  top: 2rem;
  left: -6.5rem;
  width: 100%;
  z-index: 50;
`
const BoxMediumTopSub = styled.div`
  margin: 0 auto;
  width: 70%;
  z-index: 50;
`

const PageStart = (): React.FC => {
  const [useOrderEarth, setOrderEarth] = useState({ state1: true, state2: false })
  const { state1, state2 } = useOrderEarth
  useEffect(() => {
    setTimeout(() => {
      setOrderEarth({ state1: true, state2: true })
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
