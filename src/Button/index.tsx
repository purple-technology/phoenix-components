import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps {
  label: string
  name: string
  id?: string
  color?: string
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

export default Button
