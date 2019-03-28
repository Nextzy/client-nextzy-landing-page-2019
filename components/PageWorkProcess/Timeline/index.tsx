import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ItemTimeline from './ItemTimeline'
import Fade from 'react-reveal/Fade'
const MainTimeline = styled.div`
  margin-top: 1rem;
  color: #fff;
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const BoxTimelineScroll = styled.div`
  width: 100%;
`
const ProgressBar = styled.div`
  height: 1px;
  background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
  width: 100%;
  position: relative;
  top: -22px;
  left: 0;
`
const TimelineBox = styled.div`
  /* overflow-x: scroll; */
  white-space: nowrap;
  padding: 120px 0 50px 0;
  position: relative;
`
const DataProcess = [
  { name: 'Analysis', color: '#f36392' },
  { name: 'Createing the production', color: '#f36392' },
  { name: 'Estimation and proposal', color: '#d666a1' },
  { name: 'Project preparation', color: '#c667a8' },
  { name: 'Design System', color: '#a56bb8' },
  { name: 'Development', color: '#7a70cd' },
  { name: 'Test release', color: '#6672d7' },
  { name: 'Production Release', color: '#4775e5' },
  { name: 'Maintenance', color: '#2c77ee' }
]
const Timeline = (): React.FC => {
  return (
    <MainTimeline>
      <Fade right cascade>
        <BoxTimelineScroll>
          <TimelineBox>
            <ProgressBar />
            {DataProcess.map((item, idx) => {
              return <ItemTimeline data={item} id={idx + 1} key={idx + 1} />
            })}
          </TimelineBox>
        </BoxTimelineScroll>
      </Fade>
    </MainTimeline>
  )
}

export default Timeline
