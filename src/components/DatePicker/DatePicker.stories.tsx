import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/DatePicker/stories'
import { DatePicker as DatePickerComponent } from './index'

export default {
	component: DatePickerComponent,
	argTypes
} as Meta<typeof DatePickerComponent>

export const DatePicker: StoryFn<typeof DatePickerComponent> = (args) => {
	// We chose a specific date to always generate the same screenshots
	const [date, setDate] = useState<Date | null>(new Date(2021, 6, 5))

	return <DatePickerComponent {...args} value={date} onChange={setDate} />
}
