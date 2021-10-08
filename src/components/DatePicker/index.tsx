import 'react-day-picker/lib/style.css'

import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { CommonDatePickerProps } from '../common/DatePicker'
import { StyledDatePicker } from './DatePickerStyles'

export interface DatePickerProps
	extends CommonDatePickerProps,
		GenericComponentProps {
	value: Date | null
	onChange: (date: Date | null) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({
	testId = 'DatePicker',
	value,
	onChange,
	dayPickerProps,
	...props
}) => {
	return (
		<StyledDatePicker
			selectedDays={value ?? undefined}
			initialDate={value}
			onDayClick={(day, { selected }): void => {
				onChange(selected ? null : day)
			}}
			testId={testId}
			{...props}
			{...dayPickerProps}
		/>
	)
}
