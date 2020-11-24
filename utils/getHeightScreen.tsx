import React, { useEffect, useState } from 'react'
const getHeightScreen = (): void => {
  const [useScreen, setScreen] = useState(0)
  const setSideScreen = (): void => {
    setScreen(window.innerHeight)
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
const getHeightContext = React.createContext(null)
export { getHeightScreen, getHeightContext }
