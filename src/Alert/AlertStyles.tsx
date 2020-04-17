import styled from 'styled-components'

// background: rgba(73, 135, 24, 0.2);
// background: ${({ type, theme }) => getBackground(type, theme)};

const getBackground = (type: string) => {
  switch (type) {
    case 'primary':
      return 'rgba(98, 57, 129, 0.2)'
    case 'success':
      return 'rgba(73, 135, 24, 0.2)'
    case 'danger':
      return 'rgb(230, 155, 162, 0.2)'
    default:
    case 'warning':
      return '#FBF6E9'
  }
}

const getFontColor = (type: string) => {
  switch (type) {
    case 'primary':
      return '#562878'
    case 'success':
      return '#3c7510'
    case 'danger':
      return '#D8413B'
    default:
    case 'warning':
      return '#7E5D08'
  }
}

export const AlertWrapper = styled.div<any>`
  width: 100%;
  background: ${({ type }) => getBackground(type)};
  border-radius: 3px;
  padding: 15px 0;
  display: inline-block;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const AlertStyled = styled.div<any>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.01em;

  color: ${({ type }) => getFontColor(type)};
`
