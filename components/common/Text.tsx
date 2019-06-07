import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../constants/Constants'
const HorizontalPrefixParagraph = styled.p`
  display: inline-block;
  position: relative;
  line-height: 0.3;
  font-size: 24px;
  transition: 700ms all;
  :before {
    content: '';
    position: absolute;
    border-bottom: 1px solid white;
    height: 5px;
    width: 2rem;
    right: 100%;
    margin-right: 1rem;
    ${media.between(`${Config.mediaQuery.mobileS}px`, `${Config.mediaQuery.tablet}px`)`
    width: 3rem;
    right: 110%;
    margin-right: 0;
  `}
  }
  ${media.between(`${Config.mediaQuery.mobileS}px`, `${Config.mediaQuery.tablet}px`)`
    font-size: 20px;
    line-height: 1;
  `}
  ${({ isVisibleMap }) => (isVisibleMap ? `margin-top: 3.5vh` : `margin-top: 0`)}

  ${media.lessThan(`${Config.sizeMobile}px`)`
    margin-left: 4rem;
   ${({ isVisibleMap }) => (isVisibleMap ? `margin-top: 20vh` : `margin-top: 0`)}
  `}

  ${media.lessThan(`${Config.mediaQuery.mobileL}px`)`
  margin-left: 4rem;
  ${({ isVisibleMap }) => (isVisibleMap ? `margin-top: 75vh` : `margin-top: 0`)}
  `}

  ${media.lessThan(`${Config.mediaQuery.mobileM}px`)`
  margin-left: 4rem;
  ${({ isVisibleMap }) => (isVisibleMap ? `margin-top: 60vh` : `margin-top: 0`)}
  `}

  ${media.lessThan(`${Config.mediaQuery.mobileS}px`)`
  margin-left: 4rem;
  ${({ isVisibleMap }) => (isVisibleMap ? `margin-top: 160vh` : `margin-top: 0`)}
  `}
}

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
  margin: 24px 0 40px 0px;
  letter-spacing: 0.5px;
  line-height: 28px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
    margin: 24px 0px 40px 0px;
     font-size: 16px;
  `}
`

export const Highlight = styled.span`
  color: #2a7aff;
  line-height: 42px;
  ${media.lessThan(`${Config.sizeMobile}px`)`
    
  `}
`
