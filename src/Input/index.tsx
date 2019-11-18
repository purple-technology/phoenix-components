import * as React from 'react';
// @ts-ignore
import { StyledFloatingLabel, Error, InputWrap, ContentRight, Wrapper } from './InputStyles'

interface InputProps {
  onFocus?: void
  onChange: (change: React.ChangeEvent) => void
  onBlur?: void
  value: string | number
  error?: string | boolean
  label: string
  autoComplete?: string,
  type?: string
  name?: string
  background?: string
  withBorder?: boolean
  contentRight?: any,
  disableErrorText?: boolean
}

const Input = ({ onFocus, onChange, onBlur, value, error, label, type, name, background, withBorder, contentRight, disableErrorText }: InputProps) => (
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
        value={value}
      />
      {contentRight && <ContentRight>{contentRight}</ContentRight>}
    </InputWrap>
    {error && !disableErrorText && <Error>{error}</Error>}
  </Wrapper>
);

export default Input;