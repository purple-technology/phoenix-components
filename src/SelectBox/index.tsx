import * as React from 'react';
// @ts-ignore
import Select from 'react-select';
import styled from 'styled-components';
import { Error, InputWrap } from './SelectStyles'

interface InputProps {
  onChange: any
  onBlur?: any
  value: any
  error?: string | boolean
  autoComplete?: string
  label: string
  name?: string
  background?: string
  border?: string
  options?: any
}


const selectStyles = {
  // @ts-ignore
  menu: styles => ({ ...styles, zIndex: 999 }),
  // @ts-ignore
  valueContainer: (base) => ({
    ...base,
    height: "40px",
  })
};

const StyledLabel = styled.label`
    padding-bottom: 6px;
    display: block;
`;

const SelectBox = ({ onChange, onBlur, value, error, label, options, name, background, border, autoComplete }: InputProps) => (
  <div>
    <InputWrap background={background} border={border} error={error}>
      <StyledLabel>{label}</StyledLabel>
      <Select
        name={name}
        classNamePrefix='react-select'
        value={value}
        components={{
          IndicatorSeparator: () => null
        }}
        autoComplete={autoComplete}
        onBlur={onBlur}
        label={label}
        styles={selectStyles}
        onChange={() => onChange}
        options={options}
      />
    </InputWrap>
    {error && <Error>{error}</Error>}
  </div>
);

export default SelectBox;