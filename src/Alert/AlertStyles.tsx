import styled from 'styled-components'

const getBackground = (type: string) => {
  switch (type) {
    case 'warning':
      return 'rgba(213, 162, 31, 0.1)'
    case 'danger':
      return 'rgba(200, 90, 83, 0.1)'
    default:
    case 'success':
      return 'rgba(78, 139, 3, 0.06)'
  }
}

const getTitleColor = (type: string) => {
  switch (type) {
    case 'warning':
      return '#AA7E0D'
    case 'danger':
      return '#AA320D'
    default:
    case 'success':
      return '#487B0A'
  }
}

const getTextColor = (type: string) => {
  switch (type) {
    case 'warning':
      return '#AA7E0D'
    case 'danger':
      return '#AA0D0D'
    default:
    case 'success':
      return 'rgba(66, 119, 0, 0.9)'
  }
}

export const AlertWrapper = styled.div<any>`
  width: 100%;
  background: ${({ type }) => getBackground(type)};
  border-radius: 6px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: ${({ centerText }) => (centerText ? 'center' : 'start')};
  padding: ${({ centerText }) => (centerText ? '15px 0' : '15px')};
`

export const AlertTitle = styled.h1<any>`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  padding: 0;
  margin: 0 0 5px;

  color: ${({ type }) => getTitleColor(type)};
`

export const AlertText = styled.p<any>`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;

  padding: 0;
  margin: 0;

  color: ${({ type }) => getTextColor(type)};
`
