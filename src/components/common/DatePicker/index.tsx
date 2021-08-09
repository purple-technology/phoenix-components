import React from 'react'
import ReactDayPicker, { DayPickerProps } from 'react-day-picker'

export interface CommonDatePickerProps
	extends Pick<
		DayPickerProps,
		| 'className'
		| 'selectedDays'
		| 'modifiers'
		| 'onDayClick'
		| 'locale'
		| 'months'
		| 'weekdaysLong'
		| 'weekdaysShort'
	> {
	dayPickerProps?: DayPickerProps
}

export const CommonDatePicker: React.FC<CommonDatePickerProps> = (props) => {
	return <ReactDayPicker firstDayOfWeek={1} {...props} />
}
