import * as React from 'react'
// @ts-ignore
import {
  StyledFloatingLabel,
  Error,
  InputWrap,
  ContentRight,
  Wrapper,
  CheckmarkWrap,
  HelperText
} from './InputStyles'

import { IoIosCheckmark } from 'react-icons/io'

interface InputProps {
  onFocus?: () => void
  onChange: (change: any) => void
  onBlur?: () => void
  onClick?: () => void
  value: string | number
  error?: string | boolean
  label: string
  autoComplete?: string
  type?: string
  name?: string
  background?: string
  contentRight?: any
  disableErrorText?: boolean
  pattern?: string
  min?: string
  success?: boolean
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
    onFocus && onFocus()
  }

  const thisOnBlur = () => {
    setFocused(false)
    onBlur && onBlur()
  }

  return (
    <Wrapper>
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
          type={type || 'text'}
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

export default Input
