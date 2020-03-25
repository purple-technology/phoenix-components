import React from 'react'
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
  link
}: ButtonProps) => {
  if (type && link) {
    console.warn(
      'Cannot provide a button type to an <a> element! The "type" property will have no effect'
    )
  }
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
      type={type}
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
  size: 'normal',
  type: 'button'
}

export default Button
