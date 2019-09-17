import React, { useState } from 'react';
import styled from 'styled-components'
import Select, { components } from 'react-select'

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

const PlaceholderText = styled.span<any>`
  position: absolute;
  transition: all .25s;
  pointer-events: none;
  top: ${({ placeholderUp }: any) => placeholderUp ? "5px" : "22px"};
  left: 15px;
  font-size: ${({ placeholderUp }: any) => placeholderUp ? "12px" : "15px"};
  color: ${({ placeholderUp }: any) => placeholderUp ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.5)"};
`;

const SelectContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  height: auto;
  width: 200px;
  display: flex;
  align-items: flex-end;
`;

const StyledSelect = styled(Select)`
  width: 300px;
`
const StyledControl = styled.div`
  & > div {
    padding: 8px 6px 4px;
    border: 1px solid #dedede;
    border-radius: 3px;
    box-sizing: content-box;
    height: 47px !important;
  }
`;

const StyledIndicatorContainer = styled.div`
  height: 40px;
`;

const ControlComponent = (props: any) => (
  <StyledControl>
    <components.Control {...props} />
  </StyledControl>
)

const CustomIndicator = (props: any) => {
  return (
    <StyledIndicatorContainer>
      <components.IndicatorsContainer {...props} />
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

  const onBlur = () => {
    const { value, onBlur } = props;
    setPlaceholderUp(value.length)
    onBlur && onBlur();
  };

  return (
    <SelectContainer>
      <StyledSelect
        {...props}
        placeholderUp={placeholderUp}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={props.onChange}
        placeholder=""
        components={{ Control: ControlComponent, IndicatorSeparator: null, IndicatorsContainer: CustomIndicator }}
      />
      <PlaceholderText placeholderUp={placeholderUp || props.value}>{props.label}</PlaceholderText>
    </SelectContainer>
  );

}

export default SelectBox;