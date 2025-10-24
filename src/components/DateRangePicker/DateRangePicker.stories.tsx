import type { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/DatePicker/stories'
import {
	DateRangePicker as DateRangePickerComponent,
	type DateRangeValue
} from './index'

export default {
	component: DateRangePickerComponent,
	argTypes
} as Meta<typeof DateRangePickerComponent>

export const DateRangePicker: StoryFn<typeof DateRangePickerComponent> = (
	args
) => {
	// We chose a specific date to always generate the same screenshots
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
		<DateRangePickerComponent
			{...args}
			value={range}
			mode="range"
			onChange={setRange}
		/>
	)
}
