import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Input from '../Input'
import Select from '../SelectBox'
import { isValidDate } from './helpers/validate'
import { GridInput, Wrapper, Label, Error } from './DateInputStyle'
import theme from '../theme'

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
  value: string | number
  label: string
}

interface InputLabels {
  day: string
  month: string
  year: string
}

interface DateValue {
  day: string
  month: string | number
  year: string
}

interface DateInputProps {
  onChange?: (date: DateValue) => void
  error?: string | boolean
  success?: boolean
  /** An array of objects of the form { value: 1, label: 'January' } */
  months?: Array<Month>
  inputLabels?: InputLabels
  /** Optional label to display above the date selection menu */
  label?: string
  dateFormatError?: string
  value: DateValue
  /** The locality the date format should follow */
  locale?: 'eu' | 'us' | 'ja'
}

const DateInput = ({
  onChange,
  error,
  success,
  months,
  inputLabels,
  label,
  dateFormatError,
  value,
  locale
}: DateInputProps) => {
  const monthOptions: Array<Month> = months
  const [date, setDate] = useState<DateValue>({
    day: value ? value.day : null,
    month: value ? value.month : null,
    year: value ? value.year : null
  })
  const [day, setDay] = useState<string>(value ? value.day : '')
  const [month, setMonth] = useState<Month>(
    value
      ? { value: value.month, label: getMonthLabel(monthOptions, value.month) }
      : null
  )
  const [year, setYear] = useState<string>(value ? value.year : '')
  const [internalError, setInternalError] = useState(null)

  useEffect(() => {
    if (month && year) {
      setDate({
        day,
        month: month ? month.value : null,
        year
      })
    }
  }, [day])

  useEffect(() => {
    if (day && year) {
      setDate({
        day,
        month: month ? month.value : null,
        year
      })
    }
  }, [month])

  useEffect(() => {
    if (day && month) {
      setDate({
        day,
        month: month ? month.value : null,
        year
      })
    }
  }, [year])

  useEffect(() => {
    if (date.day && date.month && date.year) {
      if (!isValidDate(date.day, date.month, date.year)) {
        onChange(null)
        return setInternalError(
          dateFormatError || 'Date is wrong. Please fix it'
        )
      }
    }

    if (isValidDate(date.day, date.month, date.year)) {
      setInternalError(null)
      onChange(date)
    } else {
      onChange(null)
    }
  }, [date])

  const labels = inputLabels || {
    day: 'Day',
    month: 'Month',
    year: 'Year'
  }

  const dayComponent = (
    <Input
      name="day"
      type="number"
      min="1"
      pattern="[0-9]*"
      autoComplete="bday-day"
      label={labels.day}
      value={day}
      onChange={e => setDay(e.target.value)}
      success={success}
    />
  )
  const monthComponent = (
    <Select
      name="month"
      label={labels.month}
      autoComplete="bday-month"
      value={month}
      onChange={(option: any) => setMonth(option)}
      options={monthOptions}
      success={success}
    />
  )
  const yearComponent = (
    <Input
      name="year"
      min="1"
      type="number"
      autoComplete="bday-year"
      pattern="[0-9]*"
      label={labels.year}
      value={year}
      onChange={e => setYear(e.target.value)}
      success={success}
    />
  )

  const renderField = () => {
    // Render date inputs in different order
    if (locale === 'ja') {
      return (
        <GridInput>
          {yearComponent}
          {monthComponent}
          {dayComponent}
        </GridInput>
      )
    }
    if (locale === 'us') {
      return (
        <GridInput>
          {monthComponent}
          {dayComponent}
          {yearComponent}
        </GridInput>
      )
    }
    return (
      <GridInput>
        {dayComponent}
        {monthComponent}
        {yearComponent}
      </GridInput>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {typeof label === 'string' && <Label>{label}</Label>}

        {typeof label !== 'undefined' && typeof label !== 'string' && (
          <>{label}</>
        )}
        {renderField()}
        {internalError && !error && <Error>{internalError}</Error>}
        {error && <Error>{error}</Error>}
      </Wrapper>
    </ThemeProvider>
  )
}

const getMonthLabel = (options: Array<Month>, monthNumber: string | number) => {
  const monthOption = options.find(option => option.value === monthNumber)

  if (!monthOption) {
    return null
  }

  return monthOption.label
}

DateInput.defaultProps = {
  months: DEFAULT_MONTHS,
  locale: 'eu'
}

export default DateInput
