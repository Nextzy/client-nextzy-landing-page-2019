import React, { useContext } from 'react'
import styled from 'styled-components'
import PageWeb from './pageWeb/Web'
import PageMobile from './pageMobile/Mobile'
import Config from '../../constants/Constants'
import { getWidthContext } from '../../utils/getWidthScreen'

const Container = styled.div`
  background-color: #102131;
  color: white;
  height: 100vh;
  width: 100%;
  z-index: 1;
`
const PageStart = (props): React.FC => {
  const useScreen = useContext(getWidthContext)
  return (
    <Container>
      {useScreen && useScreen <= Config.sizeMobile ? <PageMobile {...props} /> : <PageWeb {...props} />}
    </Container>
  )
}

export default PageStart
