import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
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
import theme from '../theme'

interface SelectPickerProps {
  options?: Array<Option>
  label?: string | React.Component
  name?: string
  onChange: (selected: string[] | string) => void
  value?: string | string[]
  multiSelect?: boolean
  error?: string | boolean
  onMouseOver?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  /** Determines the max-width property of the <img> tag */
  imageSize?: string
  /** Determines the color of the selected element's border and checkbox */
  borderColor?: string
  className?: string
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
  imageSize,
  borderColor,
  className
}: SelectPickerProps) => {
  const initialSelectedState = multiSelect && Array.isArray(value) ? value : []
  const [selected, setSelected] = useState(initialSelectedState)
  const [alreadyRendered, setAlreadyRendered] = useState(false)

  useEffect(() => {
    if (multiSelect && alreadyRendered) {
      return onChange(selected)
    }
    setAlreadyRendered(true)
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

  const getRadioButtons = (options: Option[]) => {
    if (options) {
      return options.map(option => (
        <SingleCard
          multiSelect={multiSelect}
          key={option.value}
          checked={isSelected(option)}
          onClick={() => onPickerClick(option)}
          withImage={option.image}
          borderColor={borderColor || theme.colors.primary}
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
            <CheckMark borderColor={borderColor || theme.colors.primary}>
              <FaCheck color={theme.colors.white} size={14} />
            </CheckMark>
          )}
        </SingleCard>
      ))
    }
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <SelectPickerWrapper className={className}>
        {typeof label === 'string' ? (
          <PickerLabel>{label}</PickerLabel>
        ) : (
          <>{label}</>
        )}
        <SelectWrapper
          optionsLength={options.length}
          onMouseOver={event => onMouseOver && onMouseOver(event)}
          onMouseLeave={event => onMouseLeave && onMouseLeave(event)}
        >
          {getRadioButtons(options)}
        </SelectWrapper>
        {error && <Error>{error}</Error>}
      </SelectPickerWrapper>
    </ThemeProvider>
  )
}

SelectPicker.defaultProps = {
  imageSize: '40px'
}

export default SelectPicker
