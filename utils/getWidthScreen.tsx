import React, { useEffect, useState } from 'react'
const getWidthScreen = (): void => {
  const [useScreen, setScreen] = useState(0)
  const setSideScreen = (): void => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', setSideScreen.bind(this))
    setSideScreen()
    return () => window.removeEventListener('resize', setSideScreen.bind(this), false)
  }, [])
  return useScreen
}
const getWidthContext = React.createContext(null)
export { getWidthScreen, getWidthContext }
