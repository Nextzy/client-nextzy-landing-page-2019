import React, { useState } from 'react'
import styled from 'styled-components'
import ItemTimeline from './ItemTimeline'
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
  height: 2px;
  background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
  width: 100%;
  position: relative;
  top: -22px;
  left: 0;
`
const TimelineBox = styled.div`
  /* overflow-x: scroll; */
  white-space: nowrap;
  padding: 100px 0 30px 0;
  position: relative;
`
const DataProcess = [
  { name: 'Analysis' },
  { name: 'Createing the production' },
  { name: 'Estimation and proposal' },
  { name: 'Project preparation' },
  { name: 'Design System' },
  { name: 'Development' },
  { name: 'Test release' },
  { name: 'Production Release' },
  { name: 'Maintenance' }
]
const Timeline = (): React.FC => {
  return (
    <MainTimeline>
      <BoxTimelineScroll>
        <TimelineBox>
          <ProgressBar />
          {DataProcess.map((item, idx) => {
            return <ItemTimeline data={item} id={idx + 1} key={idx + 1} />
          })}
        </TimelineBox>
      </BoxTimelineScroll>
    </MainTimeline>
  )
}

export default Timeline
