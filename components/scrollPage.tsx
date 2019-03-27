import React, { useEffect } from 'react'
import PageStart from './PageStart'
import PageObjective from './PageObjective'
import PageService from './PageService'
import PageClient from './PageClient'
import PageWorkProcess from './PageWorkProcess'
import PageContact from './PageContact'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
const BackgroundImage = styled.img`
  position: absolute;
  z-index: 49;
  width: 1000px;
  left: -30%;
  margin-top: 528px;
`

const ScrollPage = (): React.FC => {
  return (
    <ReactFullpage
      navigation
      navigationPosition={'left'}
      render={({ state, fullpageApi }) => {
        return (
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
        )
      }}
    />
  )
}

export default ScrollPage
