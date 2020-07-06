import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import { AlertWrapper, AlertText, AlertTitle } from './AlertStyles'
import ThemeSettings from '../ThemeSettings'

interface AlertProps {
  title?: string
  text?: string
  type: 'primary' | 'info' | 'success' | 'danger' | 'warning'
  centerContent?: boolean
  className?: string
}

const Alert: FunctionComponent<AlertProps> = ({
  text,
  type,
  title,
  centerContent,
  children,
  className
}) => {
  const theme = ThemeSettings.getTheme()
  return (
    <ThemeProvider theme={theme}>
      <AlertWrapper
        type={type}
        centerContent={centerContent}
        className={className}
      >
        <AlertTitle needsMargin={!!title && !!text}>{title}</AlertTitle>
        <AlertText>{text}</AlertText>
        {children}
      </AlertWrapper>
    </ThemeProvider>
  )
}

Alert.defaultProps = {
  type: 'primary',
  centerContent: true
}

export default Alert
