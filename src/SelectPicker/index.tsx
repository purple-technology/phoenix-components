import React from 'react'
import { FaCheck } from "react-icons/fa";
import { SingleCard, CardImage, CheckMark, SelectPickerWrapper, PickerLabel, SelectWrapper } from './SelectPickerStyles';

interface SelectPickerProps {
    options?: any
    label?: string
    name?: string
    onChange?: any
    value?: string
}

const SelectPicker = ({ options, label, name, onChange, value }: SelectPickerProps) => {
    const getRadioButtons = (options: any) => {
        if (options) {
            return options.map((option: any, i: any) => (
                <SingleCard
                    key={option.value}
                    checked={option.value === value}
                    onClick={onChange(option.value)}
                    withImage={option.image}
                >
                    {option.image && <CardImage src={option.image} />}
                    {option.label || option.value}
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
            <SelectWrapper optionsLength={options.length}>{getRadioButtons(options)}</SelectWrapper>
        </SelectPickerWrapper>
    )
}

export default SelectPicker;