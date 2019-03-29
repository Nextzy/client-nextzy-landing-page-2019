import React, { useEffect } from 'react'
import styled from 'styled-components'
const ContainerModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  transition: 500ms;
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
  opacity: 1;
  /* visibility: ${(props) => (props.visible ? 'visible' : 'hidden')}; */
  visibility: visible;
  z-index: 97;
`
const ModalMap = (props): React.FC => {
  const { fullPageApi, useActive } = props
  // useEffect(() => {
  //   // fullpageApi.moveTo(key + 1)
  //   if (useActive !== 0) {
  //     fullPageApi.setAllowScrolling(false)
  //   }
  // }, [])
  return <ContainerModal>ทดสอบ</ContainerModal>
}

export default ModalMap
