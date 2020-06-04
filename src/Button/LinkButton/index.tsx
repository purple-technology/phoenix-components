import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import { LinkButtonWrapper } from '../ButtonStyles'

interface ButtonProps {
  /** URL that should open when button is pressed. If present, treats the button as an anchor tag */
  link: string
  /** The value that will be set for the target attribute if the button is rendered as rendered as an anchored tag */
  target?: string
  id?: string
  /** Color of the button; does not affect the color of the font */
  background?: string
  /** Color of the text */
  color?: string
  /** Size of the button; affects padding, line-height, and font-size */
  size?: 'normal' | 'big'
  onClick?: () => void
}

const LinkButton: FunctionComponent<ButtonProps> = ({
  background,
  color,
  size,
  id,
  link,
  target,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <LinkButtonWrapper
        id={id}
        size={size}
        background={background || theme.colors.primary}
        color={color || theme.colors.white}
        href={link}
        target={target}
      >
        {children}
      </LinkButtonWrapper>
    </ThemeProvider>
  )
}

LinkButton.defaultProps = {
  size: 'normal',
  target: '_self'
}

export default LinkButton
