import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps {
  name: string
  type?: 'button' | 'submit' | 'reset'
  /** Color of the button; does not affect the color of the font */
  background?: string
  /** Color of the text */
  color?: string
  /** Size of the button; affects padding, line-height, and font-size */
  size?: 'normal' | 'big'
  disabled?: boolean
  onClick?: (event: React.MouseEvent) => void
}

const Button: FunctionComponent<ButtonProps> = ({
  name,
  type,
  background,
  color,
  size,
  disabled,
  onClick,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper
        name={name}
        id={name}
        type={type}
        disabled={disabled}
        onClick={onClick}
        size={size}
        background={background || theme.colors.primary}
        color={color || theme.colors.white}
      >
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
