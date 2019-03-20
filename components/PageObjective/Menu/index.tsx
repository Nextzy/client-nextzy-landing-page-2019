import React from 'react'
import styled from 'styled-components'

interface MenuProps {
  name: string
  callback: object
}


const Menu = (props) => {
  return <div>{props.name}</div>
}
