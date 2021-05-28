import React, { useEffect, useState } from 'react'

import FormControlWarningError from '../common/FormControlWarningError'
import Select from '../Select'
import Input from '../TextInput'
import { GridInput, Wrapper } from './DateInputStyle'
import { isValidDate } from './validate'

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

export interface DateValue {
	day: string
	month: number
	year: string
}

export interface DateInputProps {
	value?: DateValue
	onChange: (date: DateValue | undefined) => void
	/** Green border and checkmark visible */
	success?: boolean
	/** Show yellow warning text and icon under the input */
	warning?: string
	/** Show red error text and icon under the input */
	error?: string | boolean
	/** An array of objects of the form { value: 1, label: 'January' } */
	months?: Array<Month>
	inputLabels?: InputLabels
	dateFormatError?: string
	/** The locality the date format should follow */
	locale?: 'eu' | 'us' | 'ja'
	className?: string
}

const DateInput: React.FC<DateInputProps> = ({
	onChange,
	warning,
	error,
	success,
	months,
	inputLabels,
	dateFormatError,
	value,
	locale,
	className
}) => {
	const monthOptions: Array<Month> = months ?? []
	const [day, setDay] = useState<string>(value?.day ?? '')
	const [month, setMonth] = useState<Month | undefined>(
		value?.month
			? {
				value: value.month,
				label: getMonthLabel(monthOptions, value.month)
			}
			: undefined
	)
	const [year, setYear] = useState<string>(value?.year ?? '')
	const [internalError, setInternalError] = useState<string|undefined>(undefined)

	useEffect(() => {
		if (day && month && year) {
			if (isValidDate(day, month.value, year)) {
				onChange({
					day,
					month: month.value,
					year,
				})
				setInternalError(undefined)

			} else {
				onChange(undefined)
				setInternalError(
					dateFormatError || 'Date is wrong. Please fix it'
				)
			}
		} else {
			onChange(undefined)
			setInternalError(undefined)
		}

	}, [day, month, year])

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
			onChange={(e) => setDay(e.target.value)}
			success={success}
			error={!!error}
		/>
	)
	const monthComponent = (
		<Select
			name="month"
			label={labels.month}
			// autoComplete="bday-month"
			value={month}
			onChange={(option) => setMonth({
				...option,
				value: typeof option.value === 'string'
					? parseInt(option.value, 10)
					: option.value,
			})}
			options={monthOptions}
			success={success}
			error={!!error}
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
			onChange={(e) => setYear(e.target.value)}
			success={success}
			error={!!error}
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
		<Wrapper className={className}>
			{renderField()}
			{internalError && !error &&
			<FormControlWarningError error={internalError} />
			}
			<FormControlWarningError warning={warning} error={error} />
		</Wrapper>
	)
}

const getMonthLabel = (options: Array<Month>, monthNumber: number): string => {
	const monthOption = options.find((option) => option.value === monthNumber)

	if (!monthOption) {
		return ''
	}

	return monthOption.label
}

DateInput.defaultProps = {
	months: DEFAULT_MONTHS,
	locale: 'eu'
}

export default DateInput
