import React, { useState, useEffect } from 'react'
import { FaCheck } from "react-icons/fa";
import { SingleCard, CardImage, CheckMark, SelectPickerWrapper, PickerLabel, Error, SelectWrapper, OptionDecription } from './SelectPickerStyles';

interface SelectPickerProps {
    options?: Array<Option>
    label?: string | React.Component
    name?: string
    onChange: any
    value?: string
    multiSelect?: boolean
    error?: string | boolean
}

interface Option {
    value: string,
    label: string,
    description?: string
    image?: string
}

const SelectPicker = ({ options, label, name, onChange, value, multiSelect, error }: SelectPickerProps) => {
    const [selected, setSelected] = useState([])

    useEffect(
        () => {
            if (multiSelect) {
                return onChange(selected)
            }
        },
        [selected]
    )


    const onPickerClick = (option: Option) => {
        if (!multiSelect) {
            return onChange(option.value)
        }

        if (selected.includes(option.value)) {
            const filter = selected.filter(val => val !== option.value);
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
                    <input type="radio" style={{ display: "none" }} value={option.value} name={name} checked={isSelected(option)} />
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
            {typeof label === 'string' ?
                <PickerLabel>
                    {label}
                </PickerLabel>
                :
                <React.Fragment>
                    {label}
                </React.Fragment>
            }
            <SelectWrapper name={name} optionsLength={options.length}>{getRadioButtons(options)}</SelectWrapper>
            {error && <Error>{error}</Error>}
        </SelectPickerWrapper>
    )
}

export default SelectPicker;