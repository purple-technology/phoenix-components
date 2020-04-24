import * as React from 'react'
import { ThemeProvider } from 'styled-components'
// @ts-ignore
import {
  StyledFloatingLabel,
  Error,
  InputWrap,
  ContentRight,
  Wrapper,
  CheckmarkWrap,
  HelperText,
  StyledDescription
} from './InputStyles'
import theme from '../theme'
import { nonDomPropResolve } from '../helpers'

import { IoIosCheckmark } from 'react-icons/io'

interface InputProps {
  onFocus?: (event: any) => void
  onChange: (change: any) => void
  onBlur?: (event: any) => void
  onClick?: () => void
  value: string | number
  error?: string | boolean
  /** Determines whether the positioning of the error text is absolute or relative */
  disableAbsolutePositionError: boolean
  /** Text displayed inside the input field */
  label: string
  /** Text displayed outside the input field; useful for long descriptions/labels */
  description?: string
  descriptionFontSize?: string
  autoComplete?: string
  /** The HTML attribute type of the <input> element, e.g., "text" */
  type?: string
  inputmode?: string
  name?: string
  background?: string
  /** Content to display to the far right of the text input */
  contentRight?: any
  disableErrorText?: boolean
  pattern?: string
  min?: string
  success?: boolean
  /** Helper text to display when input is focused */
  helperText?: string
  /** Color the border of the <input> element should take when focused */
  focusColor?: string
}

const Input = ({
  onFocus,
  onChange,
  onBlur,
  onClick,
  value,
  error,
  disableAbsolutePositionError,
  label,
  description,
  descriptionFontSize,
  type,
  inputmode,
  name,
  background,
  contentRight,
  disableErrorText,
  pattern,
  min,
  success,
  helperText,
  focusColor
}: InputProps) => {
  const [focused, setFocused] = React.useState(false)

  const thisOnFocus = (event: any) => {
    setFocused(true)
    onFocus && onFocus(event)
  }

  const thisOnBlur = (event: any) => {
    setFocused(false)
    onBlur && onBlur(event)
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {description && (
          <StyledDescription descriptionFontSize={descriptionFontSize}>
            {description}
          </StyledDescription>
        )}
        <InputWrap
          focusColor={focusColor || theme.colors.primary}
          background={background}
          error={error}
          success={success}
          focused={focused}
        >
          <StyledFloatingLabel
            id={name}
            name={name}
            placeholder={label}
            error={error}
            type={type}
            inputMode={inputmode}
            success={nonDomPropResolve(success)}
            onFocus={thisOnFocus}
            onBlur={thisOnBlur}
            onChange={onChange}
            onClick={onClick}
            value={value}
            min={min}
            pattern={pattern}
          />
          {contentRight && <ContentRight>{contentRight}</ContentRight>}
          {!contentRight && success && (
            <CheckmarkWrap>
              <IoIosCheckmark color={theme.colors.success} size={30} />
            </CheckmarkWrap>
          )}
        </InputWrap>
        {error && !disableErrorText && (
          <Error disableAbsolutePositionError={disableAbsolutePositionError}>
            {error}
          </Error>
        )}
        {helperText && !error && (
          <HelperText focused={focused}>{helperText}</HelperText>
        )}
      </Wrapper>
    </ThemeProvider>
  )
}

Input.defaultProps = {
  type: 'text',
  background: 'transparent',
  disableAbsolutePositionError: false,
  inputmode: 'text',
  descriptionFontSize: '13px'
}

export default Input
