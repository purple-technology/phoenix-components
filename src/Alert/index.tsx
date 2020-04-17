import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { AlertWrapper, AlertStyled } from './AlertStyles'

interface AlertProps {
  text: string
  type: 'primary' | 'success' | 'danger' | 'warning'
}

const Alert = ({ text, type }: AlertProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AlertWrapper type={type}>
        <AlertStyled type={type}>{text}</AlertStyled>
      </AlertWrapper>
    </ThemeProvider>
  )
}

Alert.defaultProps = {
  type: 'primary'
}

export default Alert
