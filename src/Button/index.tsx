import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { ButtonWrapper, ButtonLinkWrapper } from './ButtonStyles'

interface ButtonProps {
  /** Display text of the button */
  label: string
  /** URL that should open when button is pressed. If present, treats the button as an anchor tag */
  link?: string
  name: string
  id?: string
  type?: 'button' | 'submit' | 'reset'
  /** Color of the button; does not affect the color of the font */
  color?: string
  /** Size of the button; affects padding, line-height, and font-size */
  size?: 'normal' | 'big'
  disabled?: boolean
  onClick?: any
  children?: any
}

const Button = ({
  label,
  name,
  id,
  type,
  color,
  size,
  disabled,
  onClick,
  link,
  children
}: ButtonProps) => {
  if (link) {
    return (
      <ThemeProvider theme={theme}>
        <ButtonLinkWrapper
          name={name}
          id={id}
          disabled={disabled}
          size={size}
          color={color || theme.colors.primary}
          href={link}
        >
          {label}
          {children}
        </ButtonLinkWrapper>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper
        name={name}
        id={id}
        type={type}
        disabled={disabled}
        onClick={onClick}
        size={size}
        color={color || theme.colors.primary}
      >
        {label}
        {children}
      </ButtonWrapper>
    </ThemeProvider>
  )
}

Button.defaultProps = {
  disabled: false,
  size: 'normal',
  type: 'button'
}

export default Button
