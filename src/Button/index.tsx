import React from 'react'
import { ButtonWrapper, ButtonLinkWrapper } from './ButtonStyles'

interface ButtonProps {
  /** Display text of the button */
  label: string
  /** URL that should open when button is pressed. If present, treats the button as an anchor tag */
  link?: string
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
  onClick,
  link
}: ButtonProps) => {
  if (link) {
    return (
      <ButtonLinkWrapper
        name={name}
        id={id}
        disabled={disabled}
        size={size}
        color={color}
        href={link}
      >
        {label}
      </ButtonLinkWrapper>
    )
  }
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
  size: 'normal'
}

export default Button
