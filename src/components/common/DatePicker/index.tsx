import React, { ReactElement, useState } from 'react'
import {
	DayPicker,
	DayPickerDefaultProps,
	DayPickerProps
} from 'react-day-picker'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import LeftArrow from './icons/arrow-left.svg'
import RightArrow from './icons/arrow-right.svg'

export interface CommonDatePickerProps
	extends GenericComponentProps,
		Pick<DayPickerDefaultProps, 'selected' | 'onDayClick'> {
	dayPickerProps?: DayPickerProps
	yearMonthSelect?: boolean
}

// Move components outside to avoid nested component definitions
const IconLeft = (): ReactElement => <img src={LeftArrow} />
const IconRight = (): ReactElement => <img src={RightArrow} />

export const CommonDatePicker: React.FC<
	CommonDatePickerProps & { initialDate: Date | null }
> = ({ testId, ...props }) => {
	const [selectedDay, setSelectedDay] = useState(
		props.initialDate ?? new Date()
	)

	return (
		<DayPicker
			weekStartsOn={1}
			captionLayout={props.yearMonthSelect ? 'dropdown-buttons' : 'buttons'}
			selected={selectedDay}
			onDayClick={(day, { disabled }): void => {
				if (disabled) return
				setSelectedDay(day)
			}}
			data-testid={testId}
			defaultMonth={props.initialDate ?? new Date()}
			fromYear={props.dayPickerProps?.fromYear ?? new Date().getFullYear() - 5}
			toYear={props.dayPickerProps?.toYear ?? new Date().getFullYear() + 5}
			// There is an unpleasant issue with the custom arrows. On selecting date it is re-rendered and this is causing a blink. When default arrows are there, it is not happening. It would be worth considering to use default arrows.
			components={{
				IconLeft,
				IconRight
			}}
			{...props}
		/>
	)
}
