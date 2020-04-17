import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import {} from './AlertStyles'

interface AlertProps {}

const Alert = ({}: AlertProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  )
}

export default Alert
