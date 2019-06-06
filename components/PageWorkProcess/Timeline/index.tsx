import React from 'react'
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
  /* width: 954px; */
`
const ProgressBar = styled.div`
  height: 1px;
  background-image: linear-gradient(-136deg, #2a7aff 0%, #f7618b 100%);
  width: 100%;
  position: relative;
  top: -10px;
  left: 0;
`
const TimelineBox = styled.div`
  /* overflow-x: scroll; */
  margin-top: 5rem;
  white-space: nowrap;
  padding: 100px 0 100px 0;
  position: relative;
`
const TimelineFlex = styled.div`
  display: flex;
  flex-wrap: nowrap;
  > * {
    flex: 1;
  }
`

const Timeline = (props): React.FC => {
  const { DataProcess } = props
  return (
    <MainTimeline>
      <Fade left cascade>
        <BoxTimelineScroll>
          <TimelineBox>
            <ProgressBar />
            <TimelineFlex>
              {DataProcess.map((item, idx) => {
                return <ItemTimeline data={item} id={idx + 1} key={idx + 1} />
              })}
            </TimelineFlex>
          </TimelineBox>
        </BoxTimelineScroll>
      </Fade>
    </MainTimeline>
  )
}

export default Timeline
