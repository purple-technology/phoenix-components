import React, { useState } from 'react'
import ReactDayPicker, { DayPickerProps } from 'react-day-picker'

import YearMonthForm from './YearMonthForm'

// We chose a specific date to use throughout the date picker components to always generate
// the same screenshots for Percy
export const foreverNow = new Date(2021, 6, 5)

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
	yearMonthSelect?: boolean
}

export const CommonDatePicker: React.FC<CommonDatePickerProps> = (props) => {
	const currentYear = foreverNow.getFullYear()
	const currentMonth = new Date(currentYear, 6)
	const [month, setMonth] = useState(currentMonth)

	return (
		<ReactDayPicker
			firstDayOfWeek={1}
			captionElement={
				props.yearMonthSelect
					? ({ date, localeUtils, locale }): React.ReactElement => {
							const months = props.months ?? localeUtils.getMonths(locale)
							return (
								<YearMonthForm
									date={date}
									onChange={setMonth}
									months={months}
								/>
							)
					  }
					: undefined
			}
			month={month}
			{...props}
		/>
	)
}
