import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import Nav, { links } from './common/nav'
import ScrollActive from './ScrollActive'
import SlideDown from './SlideDown'
import IconContact from './IconContact'
import MenuScreenMobile from './common/MenuScreenMobile'
import { getWidthContext } from '../utils/getWidthScreen'
import Config from '../constants/Constants'
import PageMedium from '../components/PageMedium/index'
import PageMediumContent from '../components/PageMediumContent/index'

const ContainerBackground = styled.div`
  background-color: #102131;
`
const ScrollPage = ({ goto }): React.FC => {
  const [useActive, setActive] = useState(0)
  const [useFullPageApi, setFullPageApi] = useState({})
  const [useCountPage, setCountPage] = useState(0)
  const [useMenu, setMenu] = useState(false)
  const getScreenContext = useContext(getWidthContext)
  const onLeave = (origin, destination, direction): void => {
    const { index } = destination
    setActive(index || 0)
  }
  return (
    <ContainerBackground>
      <ScrollActive indexActive={useActive} fullpageApi={useFullPageApi} countPage={useCountPage} />
      <SlideDown indexActive={useActive} fullpageApi={useFullPageApi} />
      <Nav indexActive={useActive} fullpageApi={useFullPageApi} useMenu={useMenu} setMenu={setMenu} />
      {getScreenContext && getScreenContext <= Config.sizeMobile ? (
        <MenuScreenMobile indexActive={useActive} fullpageApi={useFullPageApi} useMenu={useMenu} setMenu={setMenu} />
      ) : null}
      <IconContact indexActive={useActive} />
      <ReactFullpage
        onLeave={onLeave}
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          const { sectionCount } = state
          setFullPageApi(fullpageApi)
          setCountPage(sectionCount || 0)

          if (goto && fullpageApi && state.initialized && !state.destination) {
            //first load in query
            const currentLink = links.filter((link) => link.href === goto)[0]
            fullpageApi.moveTo(currentLink.key)
          }
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <PageMedium fullpageApi={useFullPageApi} />
                </div>
                <div className="section">
                  <PageMediumContent />
                </div>
              </ReactFullpage.Wrapper>
            </>
          )
        }}
      />
    </ContainerBackground>
  )
}

export default ScrollPage
