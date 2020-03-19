import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps {
  label: string
  name: string
  id?: string
  backgroundColor?: string
  size?: 'normal' | 'big'
  disabled?: boolean
  onClick?: any
  animated?: boolean
}

const Button = ({
  label,
  name,
  id,
  backgroundColor,
  size,
  disabled,
  onClick,
  animated
}: ButtonProps) => {
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      size={size}
      animated={animated}
    >
      <button
        type="button"
        name={name}
        id={id}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </ButtonWrapper>
  )
}

export default Button
