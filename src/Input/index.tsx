import * as React from 'react'
// @ts-ignore
import {
  StyledFloatingLabel,
  Error,
  InputWrap,
  ContentRight,
  Wrapper
} from './InputStyles'

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
  withBorder?: boolean
  contentRight?: any
  disableErrorText?: boolean
  pattern?: string
  min?: string
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
  withBorder,
  contentRight,
  disableErrorText,
  pattern,
  min
}: InputProps) => (
  <Wrapper>
    <InputWrap background={background} bordered={withBorder} error={error}>
      <StyledFloatingLabel
        id={name}
        name={name}
        placeholder={label}
        error={11}
        type={type || 'text'}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        value={value}
        min={min}
        pattern={pattern}
      />
      {contentRight && <ContentRight>{contentRight}</ContentRight>}
    </InputWrap>
    {error && !disableErrorText && <Error>{error}</Error>}
  </Wrapper>
)

export default Input
