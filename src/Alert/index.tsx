import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import { AlertWrapper, AlertText, AlertTitle } from './AlertStyles'
import ThemeSettings from '../ThemeSettings'

interface AlertProps {
  title?: string
  text?: string
  centerContent?: boolean
  className?: string
  type: 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'custom'
  /** If the type is set to 'custom', sets the 'color' attribute of the css */
  contentColor?: string
  /** If the type is set to 'custom', sets the 'background' attribute of the css */
  backgroundColor?: string
}

const Alert: FunctionComponent<AlertProps> = ({
  text,
  type,
  title,
  centerContent,
  children,
  className,
  contentColor,
  backgroundColor
}) => {
  const theme = ThemeSettings.getTheme()
  return (
    <ThemeProvider theme={theme}>
      <AlertWrapper
        type={type}
        centerContent={centerContent}
        className={className}
        contentColor={contentColor}
        backgroundColor={backgroundColor}
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
