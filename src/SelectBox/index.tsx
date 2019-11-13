import React, { useState } from 'react';
import { components } from 'react-select'
import { Error, StyledControl, StyledIndicatorContainer, SelectContainer, StyledSelect, PlaceholderText } from './SelectStyles';
import { IndicatorContainerProps } from 'react-select/src/components/containers';
import { ControlProps } from 'react-select/src/components/Control';

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

const SelectBox = (props: SelectProps) => {
  const [placeholderUp, setPlaceholderUp] = useState(false)

  const CustomIndicator = (indicatorProps: IndicatorContainerProps<any>) => {
    return (
      <StyledIndicatorContainer>
        <components.IndicatorsContainer {...indicatorProps} />
      </StyledIndicatorContainer>
    );
  };

  const ControlComponent = (controlProps: any) => (
    <StyledControl error={!controlProps.menuIsOpen && props.error}>
      <components.Control {...controlProps} />
    </StyledControl>
  )

  const onFocus = () => {
    const { onFocus } = props;
    setPlaceholderUp(true)
    onFocus && onFocus();
  };

  const onBlur = () => {
    const { value, onBlur } = props;
    if (!value) {
      setPlaceholderUp(false)
    }
    onBlur && onBlur();
  }

  return (
    <SelectContainer>
      <StyledSelect
        {...props}
        styles={{
          // Fixes the overlapping problem of the component
          menu: (provided: any) => ({ ...provided, zIndex: 9999 })
        }}
        placeholderUp={placeholderUp}
        onFocus={onFocus}
        onBlur={onBlur}
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