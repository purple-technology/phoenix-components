import styled from 'styled-components'

const getBackground = (type: string, theme: any) => {
  switch (type) {
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

const getTextColor = (type: string, theme: any) => {
  switch (type) {
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

export const AlertWrapper = styled.div<any>`
  width: 100%;
  background: ${({ type, theme }) => getBackground(type, theme)};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: ${({ centerContent }) => (centerContent ? 'center' : 'start')};
  padding: ${({ centerContent }) => (centerContent ? '15px 0' : '15px')};

  color: ${({ type, theme }) => getTextColor(type, theme)};
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
`

export const AlertTitle = styled.h1<any>`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  padding: 0;
  margin: ${({ needsMargin }) => (needsMargin ? '0 0 5px' : '0')};

  color: ${({ type, theme }) => getTextColor(type, theme)};
`

export const AlertText = styled.p<any>`
  padding: 0;
  margin: 0;
`
