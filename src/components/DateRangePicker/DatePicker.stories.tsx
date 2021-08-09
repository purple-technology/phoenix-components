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
	const [range, setRange] = useState<DateRange>({
		from: new Date(),
		to: new Date()
	})

	return <DatePickerComponent {...args} value={range} onChange={setRange} />
}
DateRangePicker.storyName = 'DateRangePicker'
