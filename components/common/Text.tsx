import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../constants/Constants'
const HorizontalPrefixParagraph = styled.p`
  display: inline-block;
  position: relative;
  line-height: 0.3;
  // font-size: 24px;
  transition: 700ms all;
  :before {
    content: '';
    position: absolute;
    border-bottom: 1px solid white;
    height: 5px;
    width: 5rem;
    right: 100%;
    margin-right: 1rem;
  }

  ${media.lessThan(`${Config.sizeMobile}px`)`
    margin-left: 8rem;
  `}
  ${({ isVisibleMap }) => (isVisibleMap ? `font-size: 45px; margin-top: 6%` : `font-size: 24px; margin-top: 0`)}
`
interface SectionHeaderProps {
  title: string
}

export const SectionHeader = (props): React.FC<SectionHeaderProps> => {
  const { title, onVisibleMap } = props
  const isVisibleMap = onVisibleMap ? true : false

  return (
    <Fade right cascade>
      <HorizontalPrefixParagraph isVisibleMap={isVisibleMap} title={title}>
        {props.title}
      </HorizontalPrefixParagraph>
    </Fade>
  )
}

export const Header = styled.div`
  font-size: 34px;
  letter-spacing: 0.25px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
  font-size: 28px;
  `}
`

export const Body = styled.p`
  font-size: 16px;
  margin: 24px 0px 40px;
  letter-spacing: 0.5px;
  line-height: 28px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
     font-size: 16px;
  `}
`

export const Highlight = styled.span`
  color: #2a7aff;
  line-height: 42px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
    
  `}
`
