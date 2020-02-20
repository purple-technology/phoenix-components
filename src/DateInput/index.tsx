import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Select from '../SelectBox'
import { isValidDate } from './helpers/validate'
import { GridInput, Wrapper, Label, Error } from './DateInputStyle'

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

interface Month {
  value: number
  label: string
}

interface InputLabels {
  day: string
  month: string
  year: string
}

interface DateValue {
  day: string
  month: string
  year: string
}

interface Month {
  value: number
  label: string
}

interface DateInputProps {
  onChange?: any
  error?: string | boolean
  months?: Array<Month>
  inputLabels?: InputLabels
  label?: any
  dateFormatError?: string
  value: DateValue
}

const DateInput = ({
  onChange,
  error,
  months,
  inputLabels,
  label,
  dateFormatError,
  value
}: DateInputProps) => {
  const monthOptions = months || DEFAULT_MONTHS

  let day = null
  let month = null
  let year = null

  if (value) {
    if (value.day) {
      day = value.day
    }

    if (value.month) {
      const monthLabel = monthOptions.find(
        item => item.value.toString() === value.month.toString()
      )
      month = {
        value: value.month,
        label: monthLabel ? monthLabel : null
      }
    }

    if (value.year) {
      year = value.year
    }
  }

  const [date, setDate] = useState({ day, month, year })
  const [internalError, setInternalError] = useState(null)

  useEffect(() => {
    const monthObj: Month = date.month as never
    const result = {
      day: date.day ? parseInt(date.day) : null,
      month: monthObj ? monthObj.value : null,
      year: date.year ? parseInt(date.year) : null
    }

    const allFilled = result.day && result.month && result.year

    if (!isValidDate(result.day, result.month, result.year) && allFilled) {
      onChange(null)
      return setInternalError(dateFormatError || 'Date is wrong. Please fix it')
    }

    if (isValidDate(result.day, result.month, result.year) && allFilled) {
      setInternalError(null)
      return onChange(result)
    } else {
      return onChange(null)
    }
  }, [date])

  const labels = inputLabels || {
    day: 'Day',
    month: 'Month',
    year: 'Year'
  }

  return (
    <Wrapper>
      {typeof label === 'string' && <Label>{label}</Label>}

      {typeof label !== 'undefined' && typeof label !== 'string' && (
        <>{label}</>
      )}
      <GridInput>
        <Input
          name="day"
          type="number"
          min="1"
          pattern="[0-9]*"
          autoComplete="bday-day"
          label={labels.day}
          value={date.day}
          onChange={e => setDate({ ...date, day: e.target.value })}
        />
        <Select
          name="month"
          label={labels.month}
          autoComplete="bday-month"
          value={date.month}
          onChange={(option: any) => setDate({ ...date, month: option })}
          options={monthOptions}
        />
        <Input
          name="year"
          min="1"
          type="number"
          autoComplete="bday-year"
          pattern="[0-9]*"
          label={labels.year}
          value={date.year}
          onChange={(e: any) => setDate({ ...date, year: e.target.value })}
        />
      </GridInput>
      {internalError && !error && <Error>{internalError}</Error>}
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
}

export default DateInput
