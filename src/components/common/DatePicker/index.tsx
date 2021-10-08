import React, { useState } from 'react'
import ReactDayPicker, { DayPickerProps } from 'react-day-picker'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import YearMonthForm from './YearMonthForm'

export interface CommonDatePickerProps
	extends GenericComponentProps,
		Pick<
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
> = ({ testId, ...props }) => {
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
			containerProps={{
				// @ts-ignore ReactPicker type does not allow data-* attributes
				'data-testid': testId
			}}
			{...props}
		/>
	)
}
