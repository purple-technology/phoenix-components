import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Checkbox } from './CheckboxStyles'
import theme from '../theme'

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
    <ThemeProvider theme={theme}>
      <Checkbox
        onClick={onChange}
        color={color || theme.colors.primary}
        className={className}
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
    </ThemeProvider>
  )
}

export default CheckBox
