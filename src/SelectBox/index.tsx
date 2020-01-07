import React from 'react'
import { components } from 'react-select'
import {
  Error,
  StyledControl,
  StyledIndicatorContainer,
  SelectContainer,
  StyledSelect,
  PlaceholderText,
  CheckmarkWrap
} from './SelectStyles'
import { IndicatorContainerProps } from 'react-select/src/components/containers'
import { IoIosCheckmark } from 'react-icons/io'

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
  success?: boolean
}

const SelectBox = (props: SelectProps) => {
  const CustomIndicator = (indicatorProps: IndicatorContainerProps<any>) => {
    return (
      <StyledIndicatorContainer>
        <components.IndicatorsContainer {...indicatorProps} />
      </StyledIndicatorContainer>
    )
  }

  const ControlComponent = (controlProps: any) => (
    <StyledControl error={props.error} success={props.success}>
      <components.Control {...controlProps} />
      <PlaceholderText
        placeholderUp={controlProps.isFocused || controlProps.hasValue}
        error={props.error}
        success={props.success}
      >
        {props.label}
      </PlaceholderText>
    </StyledControl>
  )

  const onFocus = (event: any) => {
    const { onFocus } = props
    event.preventDefault()
    onFocus && onFocus()
  }

  const onBlur = () => {
    const { onBlur } = props
    onBlur && onBlur()
  }

  return (
    <SelectContainer>
      <StyledSelect
        {...props}
        styles={{
          // Fixes the overlapping problem of the component
          menu: (provided: any) => ({ ...provided, zIndex: 99 })
        }}
        onFocus={(event: any) => onFocus(event)}
        onBlur={onBlur}
        placeholder=""
        components={{
          Control: ControlComponent,
          IndicatorSeparator: null,
          IndicatorsContainer: CustomIndicator
        }}
      />
      {props.success && (
        <CheckmarkWrap>
          <IoIosCheckmark color="rgba(23, 150, 23, 0.7)" size={30} />
        </CheckmarkWrap>
      )}
      {props.error && <Error>{props.error}</Error>}
    </SelectContainer>
  )
}

export default SelectBox
