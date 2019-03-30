import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Planet from './Planet/index'
import { useSpring, animated } from 'react-spring'
const Container = styled.div`
  position: absolute;
  /* background-color: blue; */
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
const ConTest = styled.div`
  .card1,
  .card2,
  .card3,
  .card4 {
    position: absolute;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
  }

  .card1 {
    min-width: 60ch;
    min-height: 60ch;
    width: 45vw;
    height: 45vw;
    max-width: 100ch;
    max-height: 100ch;
    background-image: url(https://image.flaticon.com/icons/svg/119/119596.svg);
  }

  .card2 {
    width: 25ch;
    height: 25ch;
    background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
  }

  .card3 {
    opacity: 0.9;
    width: 25ch;
    height: 25ch;
    background-image: url(https://image.flaticon.com/icons/svg/414/414927.svg);
  }

  .card4 {
    width: 25ch;
    height: 25ch;
    background-image: url(https://image.flaticon.com/icons/svg/789/789392.svg);
  }
`
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 2}px,${y / 2}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 1.5}px,${y / 1.5}px,0)`

const PageStart = (): React.FC => {
  const [useOrderEarth, setOrderEarth] = useState({ state1: true, state2: false, state3: false })
  const { state1, state2, state3 } = useOrderEarth
  let nameRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      setOrderEarth({ state1: true, state2: true, state3: false })
      setTimeout(() => {
        setOrderEarth({ state1: true, state2: true, state3: true })
      }, 800)
    }, 800)
  }, [])
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <>
      {/* <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <BoxPlanetBig>
          <BoxPlanetBigSub>
            {state2 ? (
              <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
                <Planet
                  imgCore="/static/images/Planet/planet_center_core.png"
                  imgShadow="/static/images/Planet/planet_center_shadow.png"
                  imgHole="/static/images/Planet/planet_center_hole.png"
                  background="/static/images/Planet/asset_planet_halo_1.svg"
                  effectSpin={'spinout'}
                />
              </animated.div>
            ) : null}
            <BoxPlanetSmall>
              <BoxPlanetSmallSub>
                {state3 ? (
                  <animated.div style={{ transform: props.xy.interpolate(trans4) }}>
                    {' '}
                    <Planet />{' '}
                  </animated.div>
                ) : null}
              </BoxPlanetSmallSub>
            </BoxPlanetSmall>
          </BoxPlanetBigSub>
        </BoxPlanetBig>
        <BoxMediumTop>
          <BoxMediumTopSub>
            {state1 ? (
              <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
                <Planet
                  imgCore="/static/images/Planet/asset_planet_top_core.png"
                  imgShadow="/static/images/Planet/asset_planet_top_shadow.png"
                  imgHole="/static/images/Planet/asset_planet_top_line.png"
                  background="/static/images/Planet/asset_planet_halo_2.svg"
                  effectSpin={'spinin'}
                />
              </animated.div>
            ) : null}
          </BoxMediumTopSub>
        </BoxMediumTop>
      </Container> */}
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
