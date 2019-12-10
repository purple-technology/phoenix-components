import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Select from '../SelectBox'
import styled from 'styled-components'
import { isValidDate } from './helpers/validate'
import { GridInput, Wrapper, Label, Error } from './DateInputStyle'

interface Month {
  value: number
  label: string
}

interface InputLabels {
  day: string
  month: string
  year: string
}

interface DateInputProps {
  onChange?: any
  error?: string | boolean
  months?: Array<Month>
  inputLabels?: InputLabels
  label?: any
}

const DateInput = ({
  onChange,
  error,
  months,
  inputLabels,
  label
}: DateInputProps) => {
  const [value, setValue] = useState({ day: null, month: null, year: null })
  const [internalError, setInternalError] = useState(null)

  useEffect(() => {
    const result = {
      day: value.day ? parseInt(value.day) : null,
      month: value.month ? value.month.value : null,
      year: value.year ? parseInt(value.year) : null
    }

    if (
      !isValidDate(result.day, result.month, result.year) &&
      result.day &&
      result.month &&
      result.year
    ) {
      return setInternalError('Date is wrong. Please fix it')
    }

    setInternalError(null)
    if (onChange) {
      return onChange(result)
    }
  }, [value])

  const labels = inputLabels || {
    day: 'Day',
    month: 'Month',
    year: 'Year'
  }

  const DEFAULT_MONTHS = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ]

  return (
    <Wrapper>
      {typeof label === 'string' && <Label>{label}</Label>}

      {typeof label !== 'undefined' && typeof label !== 'string' && (
        <React.Fragment>{label}</React.Fragment>
      )}
      <GridInput>
        <Input
          name="day"
          type="number"
          min="1"
          pattern="[0-9]*"
          label={labels.day}
          value={value.day}
          onChange={e => setValue({ ...value, day: e.target.value })}
          withBorder
        />
        <Select
          name="month"
          label={labels.month}
          value={value.month}
          onChange={(option: any) => setValue({ ...value, month: option })}
          options={months || DEFAULT_MONTHS}
        />
        <Input
          name="year"
          min="1"
          type="number"
          pattern="[0-9]*"
          label={labels.year}
          withBorder
          value={value.year}
          onChange={(e: any) => setValue({ ...value, year: e.target.value })}
        />
      </GridInput>
      {internalError && !error && <Error>{internalError}</Error>}
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
}

export default DateInput
