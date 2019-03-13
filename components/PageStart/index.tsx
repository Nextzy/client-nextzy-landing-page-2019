import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PlanetBig from './Planet/PlanetBig'
const Container = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  background-color: #1a2740;
  color: white;
  height: 100vh;
`
const Home = () => {
  // const [height, setHight] = useState(0)
  // useEffect(() => {
  //   setHight(JSON.stringify(screen.height))
  // })
  return (
    <Container>
      <PlanetBig />
    </Container>
  )
}

export default Home
