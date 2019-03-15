import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  z-index: 51;
  flex-direction: column;
  overflow: hidden;
`
const BoxIconContact = styled.div`
  position: absolute;
  color: white;
  right: 10rem;
  bottom: 8rem;
  div {
    margin: 0.5rem 0 0.5rem 0;
  }
  img {
    color: white;
    filter: brightness(0) invert(1);
  }
`
const BoxSlideActive = styled.div`
  position: absolute;
  color: white;
  left: 2rem;
  div {
    margin: 0 0 1rem 0;
    border-radius: 50%;
    padding: 0.5rem;
    border: 1px solid #fff;
    &:hover {
      background-image: linear-gradient(-136deg, #f7618b 0%, #2a7aff 100%);
      box-shadow: inset 0 0 0 2px transparent;
    }
  }
  img {
    color: white;
    filter: brightness(0) invert(1);
  }
`
const IconContact = () => (
  <Container>
    <BoxSlideActive>
      <div />
      <div />
      <div />
      <div />
      <div />
    </BoxSlideActive>
    <BoxIconContact>
      <div>
        <img src="/static/images/icon/ic_github.svg" />
      </div>
      <div>
        <img src="/static/images/icon/ic_facebook.svg" />
      </div>
      <div>
        <img src="/static/images/icon/ic_linkedin.svg" />
      </div>
      <div>
        <img src="/static/images/icon/ic_email.svg" />
      </div>
    </BoxIconContact>
  </Container>
)

export default IconContact
