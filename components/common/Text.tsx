import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const HorizontalPrefixParagraph = styled.p`
  display: inline-block;
  position: relative;
  line-height: 0.3;
  font-size: 24px;
  :before {
    content: '';
    position: absolute;
    border-bottom: 1px solid white;
    height: 5px;
    width: 5rem;
    right: 100%;
    margin-right: 1rem;
  }
`
interface SectionHeaderProps {
  title: string
}

export const SectionHeader = (props): React.FC<SectionHeaderProps> => {
  return (
    <Fade right cascade>
      <HorizontalPrefixParagraph>{props.title}</HorizontalPrefixParagraph>
    </Fade>
  )
}

export const Header = styled.div`
  font-size: 34px;
`

export const Body = styled.p`
  font-size: 16px;
  letter-spacing: 0.5;
  line-height: 1.5;
`

export const Highlight = styled.strong`
  color: #2a7aff;
`
