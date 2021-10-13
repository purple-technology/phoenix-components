import React, { useEffect, useState } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import {
	FormControlErrorType,
	FormControlWarningType
} from '../common/FormControl/types'
import FormControlWarningError from '../common/FormControlWarningError'
import { SelectOption } from '../common/Select'
import { Select } from '../Select'
import { TextInput } from '../TextInput'
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

const getMonthLabel = (options: Array<Month>, monthNumber: number): string => {
	const monthOption = options.find((option) => option.value === monthNumber)

	if (!monthOption) {
		return ''
	}

	return monthOption.label
}

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

export interface DateInputProps extends GenericComponentProps {
	value: DateValue | null
	onChange: (date: DateValue | null) => void
	/** Green border and checkmark visible */
	success?: boolean
	/** Show yellow warning text and icon under the input */
	warning?: FormControlWarningType
	/** Show red error text and icon under the input */
	error?: FormControlErrorType
	/** An array of objects of the form { value: 1, label: 'January' } */
	months?: Array<Month>
	inputLabels?: InputLabels
	dateFormatError?: string
	/** The locality the date format should follow */
	locale?: 'eu' | 'us' | 'ja'
	className?: string
	/** @deprecated RTL is unnecessary, unsed and will be removed in the next major version. */
	RTL?: boolean
	size?: ComponentSizeSmallMediumLarge
	disabled?: boolean
	/** For use with Formik (but possibly other frameworks that work with the concept of a field being "touched"). */
	setTouched?: (touched: boolean) => void
}

export const DateInput: React.FC<DateInputProps> = ({
	size = 'medium',
	months = DEFAULT_MONTHS,
	locale = 'eu',
	testId = 'DateInput',
	onChange,
	warning,
	error,
	inputLabels,
	dateFormatError,
	value,
	className,
	...props
}) => {
	const monthOptions: Array<Month> = months ?? []
	const [day, setDay] = useState<string>(value?.day ?? '')
	const [month, setMonth] = useState<SelectOption | null>(
		value?.month
			? {
					value: value.month,
					label: getMonthLabel(monthOptions, value.month)
			  }
			: null
	)
	const [year, setYear] = useState<string>(value?.year ?? '')
	const [internalError, setInternalError] = useState<string | undefined>(
		undefined
	)

	useEffect(() => {
		if (day && month && year) {
			if (isValidDate(day, month.value, year)) {
				onChange({
					day,
					month:
						typeof month.value === 'string'
							? parseInt(month.value, 10)
							: month.value,
					year
				})
				setInternalError(undefined)
			} else {
				onChange(null)
				setInternalError(dateFormatError ?? 'Date is wrong. Please fix it')
			}
		} else {
			onChange(null)
			setInternalError(undefined)
		}
		// onChange is intentionally omitted because the component loops otherwise
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [day, month, year, dateFormatError])

	const labels = inputLabels ?? {
		day: 'Day',
		month: 'Month',
		year: 'Year'
	}

	const handleOnBlur = (): void => {
		if (day && month && year && props.setTouched) {
			props.setTouched(true)
		}
	}

	const dayComponent = (
		<TextInput
			name="day"
			type="number"
			min="1"
			pattern="[0-9]*"
			autoComplete="bday-day"
			label={labels.day}
			value={day}
			onChange={(e): void => setDay(e.target.value)}
			onBlur={handleOnBlur}
			error={!!error}
			size={size}
			success={props.success}
			disabled={props.disabled}
		/>
	)
	const monthComponent = (
		<Select
			name="month"
			label={labels.month}
			value={month}
			onChange={(option): void => setMonth(option)}
			onBlur={handleOnBlur}
			options={monthOptions}
			error={!!error}
			size={size}
			success={props.success}
			disabled={props.disabled}
		/>
	)
	const yearComponent = (
		<TextInput
			name="year"
			min="1"
			type="number"
			autoComplete="bday-year"
			pattern="[0-9]*"
			label={labels.year}
			value={year}
			onChange={(e): void => setYear(e.target.value)}
			onBlur={handleOnBlur}
			error={!!error}
			size={size}
			success={props.success}
			disabled={props.disabled}
		/>
	)

	const renderField = (): React.ReactNode => {
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
		<Wrapper className={className} data-testid={testId}>
			{renderField()}
			{internalError && !error && (
				<FormControlWarningError error={internalError} />
			)}
			<FormControlWarningError warning={warning} error={error} />
		</Wrapper>
	)
}
