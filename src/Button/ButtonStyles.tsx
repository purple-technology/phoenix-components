import styled, { DefaultTheme } from 'styled-components'

import { determineTheme } from '../helpers'

interface BaseStyledButtonProps {
  background: string
  color: string
  size: 'normal' | 'big' | 'small'
  theme: DefaultTheme
}

interface StyledButtonProps extends BaseStyledButtonProps {
  disabled: boolean
}

const getFontSize = (size: string) => {
  switch (size) {
    case 'big':
      return '15px'
    case 'small':
      return '13px'
    case 'normal':
    default:
      return '14px'
  }
}

const getLineHeight = (size: string) => {
  switch (size) {
    case 'big':
      return '18px'
    case 'small':
      return '14px'
    case 'normal':
    default:
      return '16px'
  }
}

const getPadding = (size: string) => {
  switch (size) {
    case 'big':
      return '16px 100px'
    case 'small':
      return '10px 15px'
    case 'normal':
    default:
      return '14px 45px'
  }
}

const getBackground = (background: string, externalTheme: DefaultTheme) => {
  if (background) return background
  return determineTheme(externalTheme).colors.primary
}

const getColor = (color: string, externalTheme: DefaultTheme) => {
  if (color) return color
  return determineTheme(externalTheme).colors.white
}

const getBaseButtonStyles = ({
  background,
  color,
  size,
  theme
}: BaseStyledButtonProps) => {
  return `
    outline: none;
    cursor: pointer;
    background: ${getBackground(background, theme)};
    color: ${getColor(color, theme)};
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

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  font-family: ${({ theme }) => determineTheme(theme).font};

  ${({ background, color, size, theme }) =>
    getBaseButtonStyles({ background, color, size, theme })}

  &:hover {
    transform: ${({ disabled }) =>
      disabled ? 'none' : 'perspective(1px) scale(1.048)'};
  }

  &:disabled,
  &[disabled] {
    background: ${({ theme }) => determineTheme(theme).colors.disabled};
    cursor: auto;
  }
`

export const StyledLinkButton = styled.a<BaseStyledButtonProps>`
  display: inline-flex;
  text-decoration: none;
  font-family: ${({ theme }) => determineTheme(theme).font};

  ${({ background, color, size, theme }) =>
    getBaseButtonStyles({ background, color, size, theme })}

  &:hover {
    transform: perspective(1px) scale(1.048);
  }
`
