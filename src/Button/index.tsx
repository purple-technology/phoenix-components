import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { ButtonWrapper, ButtonLinkWrapper } from './ButtonStyles'

interface ButtonProps {
  /** Display text of the button */
  label: string
  /** URL that should open when button is pressed. If present, treats the button as an anchor tag */
  link?: string
  /** The value that will be set for the target attribute if the button is rendered as rendered as an anchored tag */
  target?: string
  name: string
  id?: string
  type?: 'button' | 'submit' | 'reset'
  /** Color of the button; does not affect the color of the font */
  color?: string
  fontColor?: string
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
  fontColor,
  size,
  disabled,
  onClick,
  link,
  target,
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
          target={target}
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
        fontColor={fontColor || theme.colors.white}
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
  type: 'button',
  target: '_self'
}

export default Button
