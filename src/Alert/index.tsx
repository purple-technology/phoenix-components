import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { AlertWrapper, AlertText, AlertTitle } from './AlertStyles'

interface AlertProps {
  title?: string
  text?: string
  type: 'success' | 'danger' | 'warning'
  centerText?: boolean
}

const Alert = ({ text, type, title, centerText }: AlertProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AlertWrapper type={type} centerText={centerText}>
        <AlertTitle type={type}>{title}</AlertTitle>
        <AlertText type={type}>{text}</AlertText>
      </AlertWrapper>
    </ThemeProvider>
  )
}

Alert.defaultProps = {
  type: 'success',
  centerText: true
}

export default Alert
