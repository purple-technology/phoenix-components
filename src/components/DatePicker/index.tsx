import 'react-day-picker/lib/style.css'

import React from 'react'

import { CommonDatePickerProps } from '../common/DatePicker'
import { StyledDatePicker } from './DatePickerStyles'

export interface DatePickerProps extends CommonDatePickerProps {
	value: Date | null
	onChange: (date: Date | null) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({
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
			{...props}
			{...dayPickerProps}
		/>
	)
}
