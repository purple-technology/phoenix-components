import React, { useState } from 'react';
import { components } from 'react-select'
import { Error, StyledControl, StyledIndicatorContainer, SelectContainer, StyledSelect, PlaceholderText } from './SelectStyles';

interface SelectProps {
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
  onFocus?: any
}

const ControlComponent = (controlProps: any) => (
  <StyledControl>
    <components.Control {...controlProps} />
  </StyledControl>
)

const CustomIndicator = (indicatorProps: any) => {
  return (
    <StyledIndicatorContainer>
      <components.IndicatorsContainer {...indicatorProps} />
    </StyledIndicatorContainer>
  );
};

const SelectBox = (props: SelectProps) => {
  const [placeholderUp, setPlaceholderUp] = useState(false)

  const onFocus = () => {
    const { onFocus } = props;
    setPlaceholderUp(true)
    onFocus && onFocus();
  };

  return (
    <SelectContainer>
      <StyledSelect
        {...props}
        placeholderUp={placeholderUp}
        onFocus={onFocus}
        placeholder=""
        components={{
          Control: ControlComponent,
          IndicatorSeparator: null,
          IndicatorsContainer: CustomIndicator
        }}
      />
      <PlaceholderText placeholderUp={placeholderUp || props.value}>{props.label}</PlaceholderText>
      {props.error && <Error>{props.error}</Error>}
    </SelectContainer>
  );

}

export default SelectBox;