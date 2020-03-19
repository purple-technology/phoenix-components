import React, { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import {
  SingleCard,
  CardImage,
  CheckMark,
  SelectPickerWrapper,
  PickerLabel,
  Error,
  SelectWrapper,
  OptionDecription,
  Flex
} from './SelectPickerStyles'

interface SelectPickerProps {
  options?: Array<Option>
  label?: string | React.Component
  name?: string
  onChange: any
  value?: string
  multiSelect?: boolean
  error?: string | boolean
  onMouseOver?: any
  onMouseLeave?: any
  imageSize?: string
}

interface Option {
  value: string
  label: string
  description?: string
  image?: string
}

const SelectPicker = ({
  options,
  label,
  name,
  onChange,
  value,
  multiSelect,
  error,
  onMouseOver,
  onMouseLeave,
  imageSize
}: SelectPickerProps) => {
  const [selected, setSelected] = useState([])

  useEffect(() => {
    if (multiSelect) {
      return onChange(selected)
    }
  }, [selected])

  const onPickerClick = (option: Option) => {
    if (!multiSelect) {
      return onChange(option.value)
    }

    if (selected.includes(option.value)) {
      const filter = selected.filter(val => val !== option.value)
      return setSelected(filter)
    }

    return setSelected([...selected, option.value])
  }

  const isSelected = (option: Option) => {
    if (!multiSelect) {
      return value === option.value
    }
    return selected.includes(option.value)
  }

  const getRadioButtons = (options: any) => {
    if (options) {
      return options.map((option: Option) => (
        <SingleCard
          multiSelect={multiSelect}
          key={option.value}
          checked={isSelected(option)}
          onClick={() => onPickerClick(option)}
          withImage={option.image}
        >
          <input
            type="radio"
            style={{ display: 'none' }}
            value={option.value}
            name={name}
            checked={isSelected(option)}
            onChange={() => {}}
          />
          <Flex>
            {option.image && (
              <CardImage src={option.image} imageSize={imageSize} />
            )}
            {option.label || option.value}
          </Flex>
          {option.description && (
            <OptionDecription>{option.description}</OptionDecription>
          )}
          {isSelected(option) && (
            <CheckMark>
              <FaCheck color="#fff" size={14} />
            </CheckMark>
          )}
        </SingleCard>
      ))
    }
    return null
  }

  return (
    <SelectPickerWrapper>
      {typeof label === 'string' ? (
        <PickerLabel>{label}</PickerLabel>
      ) : (
        <>{label}</>
      )}
      <SelectWrapper
        name={name}
        optionsLength={options.length}
        onMouseOver={(event: any) => onMouseOver && onMouseOver(event)}
        onMouseLeave={(event: any) => onMouseLeave && onMouseLeave(event)}
      >
        {getRadioButtons(options)}
      </SelectWrapper>
      {error && <Error>{error}</Error>}
    </SelectPickerWrapper>
  )
}

export default SelectPicker
