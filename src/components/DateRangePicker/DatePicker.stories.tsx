import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/DatePicker/stories'
import {
	DateRangePicker as DateRangePickerComponent,
	DateRangeValue
} from './index'

export default {
	title: 'components / DateRangePicker',
	component: DateRangePickerComponent,
	argTypes
} as ComponentMeta<typeof DateRangePickerComponent>

export const DateRangePicker: ComponentStory<typeof DateRangePickerComponent> =
	(args) => {
		// We chose a specific date to always generate the same screenshots for Percy
		const today = new Date(2021, 6, 5)
		const threeDaysLater = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + 3
		)
		const [range, setRange] = useState<DateRangeValue>({
			from: today,
			to: threeDaysLater
		})

		return (
			<DateRangePickerComponent {...args} value={range} onChange={setRange} />
		)
	}
DateRangePicker.storyName = 'DateRangePicker'
