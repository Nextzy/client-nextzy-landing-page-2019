import React from 'react'
import styled from 'styled-components'
const BoxFooter = styled.div`
  width: 100%;
  text-align: center;
  background: #1f2b44;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  line-height: 28px;
  padding: 1rem;
`
const Footer = (props): React.FC => {
  return <BoxFooter>© 2019 Nextzy Technologies Co., Ltd.</BoxFooter>
}

export default Footer
