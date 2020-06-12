import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { AlertWrapper, AlertText, AlertTitle } from './AlertStyles'

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
