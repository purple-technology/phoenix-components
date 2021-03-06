import React, { FunctionComponent } from 'react'
import { StyledButton } from './ButtonStyles'

interface ButtonProps {
  name: string
  type?: 'button' | 'submit' | 'reset'
  /** Color of the button; does not affect the color of the font */
  background?: string
  /** Color of the text */
  color?: string
  /** Size of the button; affects padding, line-height, and font-size */
  size?: 'normal' | 'big' | 'small'
  disabled?: boolean
  onClick?: (event: React.MouseEvent) => void
  className?: string
}

const Button: FunctionComponent<ButtonProps> = ({
  name,
  type,
  background,
  color,
  size,
  disabled,
  onClick,
  children,
  className
}) => {
  return (
    <StyledButton
      name={name}
      id={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      size={size}
      background={background}
      color={color}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  disabled: false,
  size: 'normal',
  type: 'button'
}

export default Button
