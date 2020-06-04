import styled from 'styled-components'

interface BaseButtonWrapperProps {
  background: string
  color: string
  size: 'normal' | 'big'
}

interface ButtonWrapperProps extends BaseButtonWrapperProps {
  disabled: boolean
}

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

const getBaseButtonStyles = ({
  background,
  color,
  size
}: BaseButtonWrapperProps) => {
  return `
    outline: none;
    cursor: pointer;
    background: ${background};
    color: ${color};
    font-style: normal;
    font-weight: 500;
    font-size: ${getFontSize(size)};
    line-height: ${getLineHeight(size)};
    border-radius: 3px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.11);
    border: 0;
    padding: ${getPadding(size)};
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
    letter-spacing: 0.03px;
  `
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  font-family: ${({ theme }) => theme.font};

  ${({ background, color, size }) =>
    getBaseButtonStyles({ background, color, size })}

  &:hover {
    transform: ${({ disabled }) =>
      disabled ? 'none' : 'perspective(1px) scale(1.048)'};
  }

  &:disabled,
  &[disabled] {
    background: ${({ theme }) => theme.colors.disabled};
    cursor: auto;
  }
`

export const LinkButtonWrapper = styled.a<BaseButtonWrapperProps>`
  display: inline-flex;
  text-decoration: none;
  font-family: ${({ theme }) => theme.font};

  ${({ background, color, size }) =>
    getBaseButtonStyles({ background, color, size })}

  &:hover {
    transform: perspective(1px) scale(1.048);
  }
`
