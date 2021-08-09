import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { DatePicker as DatePickerComponent, DateRange } from './index'

export default {
	title: 'components / DateRangePicker',
	component: DatePickerComponent
} as ComponentMeta<typeof DatePickerComponent>

export const DateRangePicker: ComponentStory<typeof DatePickerComponent> = (
	args
) => {
	const today = new Date()
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
