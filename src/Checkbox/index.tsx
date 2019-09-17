import React from 'react'
import { Checkbox } from './CheckboxStyles';

interface CheckboxProps {
    label: string
    checked: boolean
    onChange: any
    name: string
    id?: string
}

const CheckBox = ({ label, checked, onChange, name, id }: CheckboxProps) => {
    return (
        <Checkbox>
            <input type="checkbox" name={name} id={name} onChange={onChange} checked={checked} />
            <label htmlFor={name}>{label}</label>
        </Checkbox>
    )
}

export default CheckBox;