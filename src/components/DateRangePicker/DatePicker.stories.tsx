import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { foreverNow } from '../common/DatePicker'
import { argTypes } from '../common/DatePicker/stories'
import { DatePicker as DatePickerComponent, DateRange } from './index'

export default {
	title: 'components / DateRangePicker',
	component: DatePickerComponent,
	argTypes
} as ComponentMeta<typeof DatePickerComponent>

export const DateRangePicker: ComponentStory<typeof DatePickerComponent> = (
	args
) => {
	const today = foreverNow
	const threeDaysLater = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 3
	)
	const [range, setRange] = useState<DateRange>({
		from: today,
		to: threeDaysLater
	})

	return <DatePickerComponent {...args} value={range} onChange={setRange} />
}
DateRangePicker.storyName = 'DateRangePicker'
