import * as React from 'react'
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

import { IoIosCheckmark } from 'react-icons/io'

interface InputProps {
  onFocus?: (event: any) => void
  onChange: (change: any) => void
  onBlur?: (event: any) => void
  onClick?: () => void
  value: string | number
  error?: string | boolean
  /** Text displayed inside the input field */
  label: string
  /** Text displayed outside the input field; useful for long descriptions/labels */
  description?: string
  autoComplete?: string
  /** The HTML attribute type of the <input> element, e.g., "text" */
  type?: string
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
  type,
  name,
  background,
  contentRight,
  disableErrorText,
  pattern,
  min,
  success,
  helperText
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
    <Wrapper>
      <StyledDescription>{description}</StyledDescription>
      <InputWrap
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
          success={success}
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
            <IoIosCheckmark color="rgba(23, 150, 23, 0.7)" size={30} />
          </CheckmarkWrap>
        )}
      </InputWrap>
      {error && !disableErrorText && <Error>{error}</Error>}
      {helperText && !error && (
        <HelperText focused={focused}>{helperText}</HelperText>
      )}
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  background: 'transparent'
}

export default Input
