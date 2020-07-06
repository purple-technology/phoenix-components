import { DefaultTheme } from 'styled-components'

import phoenixTheme from './phoenixTheme'

const ThemeSettings = (() => {
  let chosenTheme: DefaultTheme | null = null

  const getTheme = () => {
    if (!chosenTheme) setTheme(phoenixTheme)
    return chosenTheme
  }

  const setTheme = (theme: DefaultTheme) => {
    chosenTheme = theme
    return chosenTheme
  }

  return {
    getTheme,
    setTheme
  }
})()

export default ThemeSettings
