import React, { useState } from 'react'
import PageStart from './PageStart'
import PageObjective from './PageObjective'
import PageService from './PageService'
import PageClient from './PageClient'
import PageOurProduct from './PageOurProducts'
import PageWorkProcess from './PageWorkProcess'
import PageContact from './PageContact'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import Nav from './layout/nav'
import ScrollActive from './ScrollActive'
import SlideDown from './SlideDown'
import IconContact from './IconContact'
import ModalMap from './common/ModalMap'
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
  const [useModal, setModal] = useState({ visible: false, map: '' })
  const { visible } = useModal
  const onLeave = (origin, destination, direction): void => {
    const { index } = destination
    setActive(index || 0)
  }
  return (
    <>
      <ScrollActive indexActive={useActive} fullpageApi={useFullPageApi} />
      <SlideDown indexActive={useActive} fullpageApi={useFullPageApi} />
      <Nav indexActive={useActive} fullpageApi={useFullPageApi} />
      <IconContact indexActive={useActive} />
      {visible ? (
        <ModalMap indexActive={useActive} fullpageApi={useFullPageApi} stateModal={useModal} setModal={setModal} />
      ) : null}
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
                  <PageOurProduct />
                </div>
                <div className="section">
                  <PageClient />
                </div>
                <div className="section">
                  <PageWorkProcess />
                </div>
                <div className="section">
                  <PageContact setModal={setModal} />
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
