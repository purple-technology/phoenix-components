import React from 'react'

import { Checkbox } from './CheckboxStyles'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
  name: string
  id?: string
  color?: string
  className?: string
}

const CheckBox = ({
  label,
  checked,
  onChange,
  name,
  id,
  color,
  className
}: CheckboxProps) => {
  return (
    <Checkbox onClick={onChange} color={color} className={className}>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={name}>{label}</label>
    </Checkbox>
  )
}

export default CheckBox
