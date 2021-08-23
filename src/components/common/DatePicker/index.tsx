import React, { useState } from 'react'
import ReactDayPicker, { DayPickerProps } from 'react-day-picker'

import YearMonthForm from './YearMonthForm'

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

export const CommonDatePicker: React.FC<
	CommonDatePickerProps & { initialDate: Date | null }
> = (props) => {
	const [month, setMonth] = useState(props.initialDate ?? new Date())

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
