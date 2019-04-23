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
  const handleComponents = (): void => {
    if (!useScreen || useScreen === 0) return null
    if (useScreen <= Config.sizeMobile) {
      return <PageMobile {...props} />
    } else {
      return <PageWeb {...props} />
    }
  }
  return <Container>{handleComponents()}</Container>
}

export default PageStart
