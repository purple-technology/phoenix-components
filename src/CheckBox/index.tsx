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
  RTL?: boolean
}

const CheckBox = ({
  label,
  checked,
  onChange,
  name,
  id,
  color,
  className,
  RTL
}: CheckboxProps) => {
  return (
    <Checkbox
      onClick={onChange}
      color={color}
      className={className}
      dir={RTL ? 'rtl' : 'ltr'}
    >
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
