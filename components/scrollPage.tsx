import React, { useEffect, useState } from 'react'
import PageStart from './PageStart'
import PageObjective from './PageObjective'
import PageService from './PageService'
import PageClient from './PageClient'
import PageWorkProcess from './PageWorkProcess'
import PageContact from './PageContact'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import Nav from './nav'
import ScrollActive from './ScrollActive'
import IconContact from './IconContact'
const BackgroundImage = styled.img`
  position: absolute;
  z-index: 49;
  width: 1000px;
  left: -30%;
  margin-top: 528px;
`

const ScrollPage = (): React.FC => {
  const [useActive, setActive] = useState(0)
  const [useFullPageApi, setFullPageApi] = useState({})
  const onLeave = (origin, destination, direction) => {
    const { index } = destination
    setActive(index || 0)
  }
  return (
    <>
      <ScrollActive indexActive={useActive} />
      <Nav indexActive={useActive} fullpageApi={useFullPageApi} />
      <IconContact indexActive={useActive} />
      <ReactFullpage
        onLeave={onLeave}
        render={({ state, fullpageApi }) => {
          setFullPageApi(fullpageApi)
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <PageStart />
                </div>
                <div className="section">
                  <PageObjective />
                </div>
                <div className="section">
                  <PageService />
                </div>
                <div className="section">
                  <PageClient />
                </div>
                <div className="section">
                  <PageWorkProcess />
                </div>
                <div className="section">
                  <PageContact />
                </div>
              </ReactFullpage.Wrapper>
            </>
          )
        }}
      />
    </>
  )
}

export default ScrollPage
