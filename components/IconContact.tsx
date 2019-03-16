import React from 'react'
import styled from 'styled-components'
const BoxIconContact = styled.div`
  position: fixed;
  z-index: 1000;
  color: white;
  right: 8rem;
  bottom: 5rem;
  div {
    margin: 0.5rem 0 0.5rem 0;
  }
  img {
    color: white;
    filter: brightness(0) invert(1);
  }
`
const IconContact = () => (
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
)

export default IconContact
