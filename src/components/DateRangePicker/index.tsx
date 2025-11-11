import type React from 'react'
import {
	addToRange,
	type DateRange,
	type DayPickerProps,
	type DayPickerRangeProps
} from 'react-day-picker'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { StyledDateRangePicker } from './DateRangePickerStyles'

export interface DateRangeValue {
	from: Date | null
	to: Date | null
}

export interface DateRangePickerProps
	extends DayPickerRangeProps,
		GenericComponentProps {
	value: DateRangeValue
	onChange: (dates: DateRangeValue) => void
	dayPickerProps?: DayPickerProps
	yearMonthSelect?: boolean
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
