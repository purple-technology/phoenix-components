import * as React from 'react';
// @ts-ignore
import { StyledFloatingLabel, Error, InputWrap } from './InputStyles'



interface InputProps {
  onChange: any
  onBlur?: any
  value: any
  error?: string | boolean
  label: string
  autoComplete?: string,
  type?: string
  name?: string
  background?: string
  withBorder?: boolean
}

const Input = ({ onChange, onBlur, value, error, label, type, name, background, withBorder }: InputProps) => (
  <div>
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
    </InputWrap>
    {error && <Error>{error}</Error>}
  </div>
);

export default Input;