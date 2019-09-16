import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { SingleCard, CardImage, CheckMark, SelectPickerWrapper, PickerLabel, SelectWrapper, OptionDecription } from './SelectPickerStyles';

interface SelectPickerProps {
    options?: Array<Option>
    label?: string
    name?: string
    onChange: any
    value?: string
    multiSelect?: boolean
}

interface Option {
    value: string,
    label: string,
    description?: string
    image?: string
}

const SelectPicker = ({ options, label, name, onChange, value, multiSelect }: SelectPickerProps) => {
    const [selected, setSelected] = useState([])

    const onPickerClick = (option: Option) => {
        if (!multiSelect) {
            return onChange(option.value)
        }

        if (selected.includes(option.value)) {
            const filter = selected.filter(val => val !== option.value);
            return setSelected(filter)
        }

        setSelected([...selected, option.value])
        return selected
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
                    {option.image && <CardImage src={option.image} />}
                    {option.label || option.value}
                    {option.description && <OptionDecription>{option.description}</OptionDecription>}
                    {isSelected(option) && <CheckMark><FaCheck color="#fff" size={14} /></CheckMark>}
                </SingleCard>
            ))
        }
        return null
    }

    return (
        <SelectPickerWrapper>
            <PickerLabel>
                {label}
            </PickerLabel>
            <SelectWrapper name={name} optionsLength={options.length}>{getRadioButtons(options)}</SelectWrapper>
        </SelectPickerWrapper>
    )
}

export default SelectPicker;