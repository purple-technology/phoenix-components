import React, { useState } from 'react'
import { DayPicker, DayPickerProps } from 'react-day-picker'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'

export interface CommonDatePickerProps
	extends GenericComponentProps,
		Pick<DayPickerProps, 'className' | 'selected' | 'onDayClick'> {
	dayPickerProps?: DayPickerProps
	yearMonthSelect?: boolean
}

export const CommonDatePicker: React.FC<
	CommonDatePickerProps & { initialDate: Date | null }
> = ({ testId, ...props }) => {
	const [selectedDay, setSelectedDay] = useState(
		props.initialDate ?? new Date()
	)

	return (
		<DayPicker
			mode="default"
			selected={selectedDay}
			onDayClick={(day, { disabled }): void => {
				if (disabled) return
				setSelectedDay(day)
			}}
			data-testid={testId}
			captionLayout={props.yearMonthSelect ? 'dropdown-buttons' : 'buttons'}
			defaultMonth={props.initialDate ?? new Date()}
			fromYear={props.dayPickerProps?.fromYear ?? new Date().getFullYear() - 5}
			toYear={props.dayPickerProps?.toYear ?? new Date().getFullYear() + 5}
			{...props}
		/>
	)
}
