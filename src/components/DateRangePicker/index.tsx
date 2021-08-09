import 'react-day-picker/lib/style.css'

import React from 'react'
import { DateUtils, RangeModifier } from 'react-day-picker'

import { CommonDatePickerProps } from '../common/DatePicker'
import { StyledDateRangePicker } from './DateRangePickerStyles'

export interface DateRange {
	from: Date | null
	to: Date | null
}

export interface DatePickerProps extends CommonDatePickerProps {
	value: DateRange
	onChange: (dates: DateRange) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({
	value,
	onChange,
	dayPickerProps
}) => {
	const from = value.from ?? undefined
	const to = value.to ?? undefined

	return (
		<StyledDateRangePicker
			className="DateRangePicker"
			selectedDays={[from, { from, to }]}
			modifiers={{ start: from, end: to }}
			onDayClick={(day): void => {
				const newValue: RangeModifier = DateUtils.addDayToRange(day, value)
				onChange({
					from: newValue.from ?? null,
					to: newValue.to ?? null
				})
			}}
			{...dayPickerProps}
		/>
	)
}
