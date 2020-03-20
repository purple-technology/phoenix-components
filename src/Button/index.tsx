import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps {
  /** Display text of the button */
  label: string
  name: string
  id?: string
  /** Color of the button; does not affect the color of the font */
  color?: string
  /** Size of the button; affects padding, line-height, and font-size */
  size?: 'normal' | 'big'
  disabled?: boolean
  onClick?: any
}

const Button = ({
  label,
  name,
  id,
  color,
  size,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <ButtonWrapper
      name={name}
      id={id}
      disabled={disabled}
      onClick={onClick}
      size={size}
      color={color}
    >
      {label}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  color: '#562878',
  disabled: false,
  size: '"normal"'
}

export default Button
