import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { AlertWrapper, AlertText, AlertTitle } from './AlertStyles'

interface AlertProps {
  title?: string
  text?: string
  type: 'success' | 'danger' | 'warning'
  centerContent?: boolean
  children?: any
}

const Alert = ({ text, type, title, centerContent, children }: AlertProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AlertWrapper type={type} centerContent={centerContent}>
        <AlertTitle type={type} needsMargin={title && text}>
          {title}
        </AlertTitle>
        <AlertText type={type}>{text}</AlertText>
        {children}
      </AlertWrapper>
    </ThemeProvider>
  )
}

Alert.defaultProps = {
  type: 'success',
  centerContent: true
}

export default Alert
