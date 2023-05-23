import 'react-day-picker/dist/style.css'

import React from 'react'
import { addToRange, DateRange } from 'react-day-picker'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { CommonDatePickerProps } from '../common/DatePicker'
import { StyledDateRangePicker } from './DateRangePickerStyles'

export interface DateRangeValue {
	from: Date | null
	to: Date | null
}

export interface DateRangePickerProps
	extends CommonDatePickerProps,
		GenericComponentProps {
	value: DateRangeValue
	onChange: (dates: DateRangeValue) => void
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
	testId = 'DateRangePicker',
	value,
	onChange,
	dayPickerProps,
	...props
}) => {
	const defaultSelected: DateRange = {
		from: value.from ?? undefined,
		to: value.to ?? undefined
	}

	return (
		<StyledDateRangePicker
			mode="range"
			className="DateRangePicker"
			selected={defaultSelected}
			initialDate={value.from}
			onDayClick={(day, { disabled }): void => {
				if (disabled) return
				const newValue: DateRange | undefined = addToRange(day, defaultSelected)
				onChange({
					from: newValue?.from ?? null,
					to: newValue?.to ?? null
				})
			}}
			testId={testId}
			{...props}
			{...dayPickerProps}
		/>
	)
}
