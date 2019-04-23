import React, { useEffect, useState } from 'react'
const getWidthScreen = (): void => {
  const [useScreen, setScreen] = useState(0)
  const setSideScreen = (): void => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    setSideScreen()
    window.addEventListener('resize', setSideScreen)
    return () => {
      window.removeEventListener('resize', setSideScreen)
    }
  }, [])
  return useScreen
}
const getWidthContext = React.createContext(null)
export { getWidthScreen, getWidthContext }
