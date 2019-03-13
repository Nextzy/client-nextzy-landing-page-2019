import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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
  background-color: blue;
  color: white;
  height: 100vh;
`
const Home = () => {
  const [height, setHight] = useState(0)
  useEffect(() => {
    setHight(JSON.stringify(screen.height))
  })
  return <Container height={height}>boat</Container>
}

export default Home
