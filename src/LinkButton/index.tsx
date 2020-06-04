import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { LinkButtonWrapper } from './LinkButtonStyles'

interface LinkButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  name: string
  /** Color of the button; does not affect the color of the font */
  background?: string
  /** Color of the text */
  color?: string
  /** Size of the button; affects padding, line-height, and font-size */
  size?: 'normal' | 'big'
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  name,
  background,
  color,
  size,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <LinkButtonWrapper
        name={name}
        id={name}
        size={size}
        background={background || theme.colors.primary}
        color={color || theme.colors.white}
        {...props}
      >
        {props.children}
      </LinkButtonWrapper>
    </ThemeProvider>
  )
}

LinkButton.defaultProps = {
  size: 'normal',
  target: '_self'
}

export default LinkButton
