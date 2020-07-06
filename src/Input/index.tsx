import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { IoIosCheckmark } from 'react-icons/io'

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
import { nonDomPropResolve } from '../helpers'
import ThemeSettings from '../ThemeSettings'

interface InputProps {
  onFocus?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onClick?: (
    event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value: string | number
  error?: string | boolean
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
  contentRight?: boolean
  disableErrorText?: boolean
  pattern?: string
  min?: string
  success?: boolean
  /** Helper text to display when input is focused */
  helperText?: string
  /** Color the border of the <input> element should take when focused */
  focusColor?: string
  className?: string
}

const Input = ({
  onFocus,
  onChange,
  onBlur,
  onClick,
  value,
  error,
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
  focusColor,
  autoComplete,
  className
}: InputProps) => {
  const theme = ThemeSettings.getTheme()

  const [focused, setFocused] = React.useState(false)

  const thisOnFocus = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocused(true)
    onFocus && onFocus(event)
  }

  const thisOnBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocused(false)
    onBlur && onBlur(event)
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper className={className}>
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
            autoComplete={autoComplete}
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
        {error && !disableErrorText && <Error>{error}</Error>}
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
  inputmode: 'text',
  descriptionFontSize: '13px'
}

export default Input
