import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { AlertWrapper, AlertStyled } from './AlertStyles'

interface AlertProps {
  text: string
}

const Alert = ({ text }: AlertProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AlertWrapper>
        <AlertStyled>{text}</AlertStyled>
      </AlertWrapper>
    </ThemeProvider>
  )
}

export default Alert
