import styled, { DefaultTheme } from 'styled-components'

const getBackground = (type: string, theme: DefaultTheme) => {
  switch (type) {
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

const getTextColor = (type: string, theme: DefaultTheme) => {
  switch (type) {
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
  type: 'primary' | 'info' | 'success' | 'danger' | 'warning'
  centerContent: boolean
}

export const AlertWrapper = styled.div<AlertWrapperProps>`
  max-width: 100%;
  background: ${({ type, theme }) => getBackground(type, theme)};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: ${({ centerContent }) => (centerContent ? 'center' : 'start')};
  padding: 15px;

  color: ${({ type, theme }) => getTextColor(type, theme)};
  font-family: ${({ theme }) => theme.font};
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
