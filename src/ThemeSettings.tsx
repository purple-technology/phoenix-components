import { DefaultTheme } from 'styled-components'

import phoenixTheme from './phoenixTheme'

const ThemeSettings = (() => {
  let chosenTheme: DefaultTheme | null = null
  let hasBeenSet = false

  const getTheme = () => {
    if (!chosenTheme) setTheme(phoenixTheme)
    return chosenTheme
  }

  const setTheme = (theme: DefaultTheme) => {
    if (hasBeenSet) throw new Error('Cannot call setTheme more than once!')
    hasBeenSet = true
    chosenTheme = theme
    return chosenTheme
  }

  return {
    getTheme,
    setTheme
  }
})()

export default ThemeSettings
