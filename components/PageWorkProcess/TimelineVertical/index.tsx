import React from 'react'
import styled from 'styled-components'
import ItemTimeline from './ItemTimeline'
import Fade from 'react-reveal/Fade'
const MainTimeline = styled.div`
  margin-top: 3rem;
  color: #fff;
  position: relative;
  /* overflow-y: hidden; */
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const TimelineBox = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 5rem;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    background-image: linear-gradient(-136deg, #f7618b 0%, #2a7aff 100%);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
  }
`

const TimelineVertical = (props): React.FC => {
  const { DataProcess } = props
  return (
    <MainTimeline>
      <Fade top cascade>
        <TimelineBox>
          {DataProcess.map((item, idx) => {
            return <ItemTimeline data={item} id={idx + 1} key={idx + 1} />
          })}
        </TimelineBox>
      </Fade>
    </MainTimeline>
  )
}

export default TimelineVertical
