import React from 'react'
import { FaCheck } from "react-icons/fa";
import { SingleCard, CardImage, CheckMark, SelectPickerWrapper, PickerLabel, SelectWrapper, OptionDecription } from './SelectPickerStyles';

interface SelectPickerProps {
    options?: Array<Option>
    label?: string
    name?: string
    onChange: any
    value?: string
}

interface Option {
    value: string,
    label: string,
    description?: string
    image?: string
}

const SelectPicker = ({ options, label, name, onChange, value }: SelectPickerProps) => {
    const getRadioButtons = (options: any) => {
        if (options) {
            return options.map((option: Option) => (
                <SingleCard
                    key={option.value}
                    checked={option.value === value}
                    onClick={() => onChange(option.value)}
                    withImage={option.image}
                >
                    {option.image && <CardImage src={option.image} />}
                    {option.label || option.value}
                    {option.description && <OptionDecription>{option.description}</OptionDecription>}
                    {option.value === value && <CheckMark><FaCheck color="#fff" size={14} /></CheckMark>}
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