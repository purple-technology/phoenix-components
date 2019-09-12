import React from 'react'
import { Checkbox } from './CheckboxStyles';

interface SelectPickerProps {
    options?: any
    label?: string
    name?: string
    onChange?: any
    value?: string
}

const CheckBox = ({ label, checked }: any) => {
    return (
        <Checkbox>
            <input type="checkbox" id="checkbox_1" />
            <label htmlFor="checkbox_1">{label}</label>
        </Checkbox>
    )
}

export default CheckBox;