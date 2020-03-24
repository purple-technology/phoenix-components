import styled from 'styled-components'

const getFontSize = (size: string) => {
  switch (size) {
    case 'big':
      return '15px'
    case 'normal':
    default:
      return '14px'
  }
}

const getLineHeight = (size: string) => {
  switch (size) {
    case 'big':
      return '18px'
    case 'normal':
    default:
      return '16px'
  }
}

const getPadding = (size: string) => {
  switch (size) {
    case 'big':
      return '16px 100px'
    case 'normal':
    default:
      return '14px 45px'
  }
}

export const ButtonWrapper = styled.button<any>`
  outline: none;
  cursor: pointer;
  background: ${({ color }) => color};
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ size }) => getFontSize(size)};
  line-height: ${({ size }) => getLineHeight(size)};
  border-radius: 3px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.11);
  border: 0;
  padding: ${({ size }) => getPadding(size)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  letter-spacing: 0.03px;

  ${({ disabled }) =>
    !disabled &&
    `
  &:hover {
    transform: perspective(1px) scale(1.048);
  }
  `}

  &:disabled,
  &[disabled] {
    background: #a3a3a3;
  }
`

export const ButtonLinkWrapper = styled(ButtonWrapper).attrs({
  as: 'a'
})`
  display: inline-flex;
  text-decoration: none;
`
