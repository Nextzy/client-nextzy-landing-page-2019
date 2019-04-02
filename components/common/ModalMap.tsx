import React, { useState } from 'react'
import styled from 'styled-components'

const ContainerModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: block;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`
const VisibleBackground = styled.div`
  transition: 500ms;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  ${({ useModalOut }) => (useModalOut ? `animation: fadeOut 0.8s;` : `animation: fadein 0.8s;`)}
`
const BoxModal = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 60%;
  width: 100%;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  @keyframes bottom {
    from {
      bottom: -150%;
    }
    to {
      bottom: 0;
    }
  }
  @keyframes bottomOut {
      from {
        bottom: 0;
      }
      to {
        bottom: -150%;
      }
    }
  ${({ useModalOut }) => (useModalOut ? `animation: bottomOut 1s;` : `animation: bottom 0.8s;`)}
   
    
  }
`
const FunctionSetModalOut = (useModalOut, setModalOut, setModal, map): void => {
  if (!useModalOut) {
    setModalOut(true)
    setTimeout(() => {
      setModal({ visible: false, map })
    }, 800)
  }
}
const ModalMap = (props): React.FC => {
  const { stateModal, setModal, fullpageApi } = props
  const { visible, map } = stateModal
  const [useModalOut, setModalOut] = useState(false)
  fullpageApi.setAllowScrolling(useModalOut)
  return (
    <ContainerModal visible={visible}>
      <VisibleBackground
        useModalOut={useModalOut}
        onClick={() => FunctionSetModalOut(useModalOut, setModalOut, setModal, map)}
      />
      <BoxModal useModalOut={useModalOut}>ออก</BoxModal>
    </ContainerModal>
  )
}

export default ModalMap
