import styled, { DefaultTheme } from 'styled-components'

import { determineTheme } from '../helpers'

const getBackground = (
  type: string,
  externalTheme?: DefaultTheme,
  backgroundColor?: string
) => {
  const theme = determineTheme(externalTheme)
  switch (type) {
    case 'custom':
      return backgroundColor
    case 'info':
      return theme.colors.infoBackground
    case 'warning':
      return theme.colors.warningBackground
    case 'danger':
      return theme.colors.errorBackground
    case 'success':
      return theme.colors.successBackground
    default:
    case 'primary':
      return theme.colors.primaryBackground
  }
}

const getTextColor = (
  type: string,
  externalTheme?: DefaultTheme,
  contentColor?: string
) => {
  const theme = determineTheme(externalTheme)
  switch (type) {
    case 'custom':
      return contentColor
    case 'info':
      return theme.colors.info
    case 'warning':
      return theme.colors.warning
    case 'danger':
      return theme.colors.error
    case 'success':
      return theme.colors.success
    default:
    case 'primary':
      return theme.colors.primary
  }
}

interface AlertWrapperProps {
  type: 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'custom'
  centerContent: boolean
  contentColor?: string
  backgroundColor?: string
}

export const AlertWrapper = styled.div<AlertWrapperProps>`
  width: 100%;
  background: ${({ type, theme, backgroundColor }) =>
    getBackground(type, theme, backgroundColor)};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: ${({ centerContent }) => (centerContent ? 'center' : 'start')};
  padding: 15px;

  color: ${({ type, theme, contentColor }) =>
    getTextColor(type, theme, contentColor)};
  font-family: ${({ theme }) => determineTheme(theme).font};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
`

interface AlertTitleProps {
  needsMargin: boolean
}

export const AlertTitle = styled.h1<AlertTitleProps>`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  padding: 0;
  margin: ${({ needsMargin }) => (needsMargin ? '0 0 5px' : '0')};
`

export const AlertText = styled.p`
  padding: 0;
  margin: 0;
`
