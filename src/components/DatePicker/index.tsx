import 'react-day-picker/dist/style.css'

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
			mode="single"
			selected={value ?? undefined}
			initialDate={value}
			onDayClick={(day, { selected, disabled }): void => {
				if (disabled) return
				onChange(selected ? null : day)
			}}
			testId={testId}
			{...props}
			{...dayPickerProps}
		/>
	)
}
