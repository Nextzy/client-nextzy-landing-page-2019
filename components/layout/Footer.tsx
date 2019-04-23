import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Config from '../../constants/Constants'
const BoxFooter = styled.div`
  width: 100%;
  text-align: center;
  background: #1f2b44;
  padding: 1rem 0rem 1rem 0rem;
  ${media.greaterThan(Config.sizeMobile)`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  line-height: 28px;
  `}
  font-family: 'Montserrat-Regular';
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.4px;
  line-height: 16px;
`
const Footer = (props): React.FC => {
  return <BoxFooter>© 2019 Nextzy Technologies Co., Ltd.</BoxFooter>
}

export default Footer
