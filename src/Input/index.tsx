import * as React from 'react';
// @ts-ignore
import { StyledFloatingLabel, Error, InputWrap, ContentRight, Wrapper } from './InputStyles'

interface InputProps {
  onChange: (change: React.ChangeEvent) => void
  onBlur?: any
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

const Input = ({ onChange, onBlur, value, error, label, type, name, background, withBorder, contentRight, disableErrorText }: InputProps) => (
  <Wrapper>
    <InputWrap background={background} withBorder={withBorder} error={error}>
      <StyledFloatingLabel
        id={name}
        withBorder={withBorder}
        name={name}
        placeholder={label}
        error={error}
        type={type || 'text'}
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