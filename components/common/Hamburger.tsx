import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding: 7px 0 7px 80px;
  transform: scaleX(-1);
  filter: FlipH;
`
const IconHamburger = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -15px;
  cursor: pointer;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 30px;
    background: white;
    position: absolute;
    display: block;
    content: '';
  }
  span:before {
    top: -7px;
    width: 25px;
  }
  span:after {
    bottom: -7px;
    width: 20px;
  }
  span,
  span:before,
  span:after {
    transition: all 500ms ease-in-out;
  }
  ${({ setActive }) =>
    setActive
      ? `
  span {
    background-color: transparent;
  }
  span:before,
  span:after {
    top: 0;
  }
  span:before {
    transform: rotate(40deg);
    width:30px;
  }
  span:after {
    transform: rotate(-40deg);
    width:30px;
  }
  `
      : ''}
`

const Hamburger = (props): void => {
  const [useHamburger, setHamburger] = useState(false)

  return (
    <Container onClick={() => setHamburger(!useHamburger)}>
      <IconHamburger setActive={useHamburger}>
        <span />
      </IconHamburger>
    </Container>
  )
}

export default Hamburger
