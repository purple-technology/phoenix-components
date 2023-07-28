import React from 'react'
import { DayPickerProps, DayPickerSingleProps } from 'react-day-picker'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { StyledDatePicker } from './DatePickerStyles'

export interface DatePickerProps
	extends DayPickerSingleProps,
		GenericComponentProps {
	value: Date | null
	onChange: (date: Date | null) => void
	dayPickerProps?: DayPickerProps
	yearMonthSelect?: boolean
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
