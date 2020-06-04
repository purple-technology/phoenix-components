import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { ButtonWrapper } from './ButtonStyles'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name: string
  /** Color of the button; does not affect the color of the font */
  background?: string
  /** Color of the text */
  color?: string
  /** Size of the button; affects padding, line-height, and font-size */
  size?: 'normal' | 'big'
}

const Button: FunctionComponent<ButtonProps> = ({
  name,
  background,
  color,
  size,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper
        name={name}
        id={name}
        size={size}
        background={background || theme.colors.primary}
        color={color || theme.colors.white}
        {...props}
      >
        {props.children}
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
