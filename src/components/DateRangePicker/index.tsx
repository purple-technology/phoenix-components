import 'react-day-picker/lib/style.css'

import React from 'react'
import { DateUtils, RangeModifier } from 'react-day-picker'

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
	const from = value.from ?? undefined
	const to = value.to ?? undefined

	return (
		<StyledDateRangePicker
			className="DateRangePicker"
			selectedDays={[from, { from, to }]}
			initialDate={value.from}
			modifiers={{ start: from, end: to }}
			onDayClick={(day): void => {
				const newValue: RangeModifier = DateUtils.addDayToRange(day, value)
				onChange({
					from: newValue.from ?? null,
					to: newValue.to ?? null
				})
			}}
			testId={testId}
			{...props}
			{...dayPickerProps}
		/>
	)
}
