import * as React from 'react'
// @ts-ignore
import {
  StyledFloatingLabel,
  Error,
  InputWrap,
  ContentRight,
  Wrapper,
  CheckmarkWrap
} from './InputStyles'

import { IoIosCheckmark } from 'react-icons/io'

interface InputProps {
  onFocus?: void
  onChange: (change: any) => void
  onBlur?: void
  onClick?: void
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
  success
}: InputProps) => (
  <Wrapper>
    <InputWrap background={background} error={error} success={success}>
      <StyledFloatingLabel
        id={name}
        name={name}
        placeholder={label}
        error={error}
        type={type || 'text'}
        success={success}
        onFocus={onFocus}
        onBlur={onBlur}
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
  </Wrapper>
)

export default Input
