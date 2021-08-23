import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/DatePicker/stories'
import { DatePicker as DatePickerComponent } from './index'

export default {
	title: 'components / DatePicker',
	component: DatePickerComponent,
	argTypes
} as ComponentMeta<typeof DatePickerComponent>

export const DatePicker: ComponentStory<typeof DatePickerComponent> = (
	args
) => {
	// We chose a specific date to always generate the same screenshots for Percy
	const [date, setDate] = useState<Date | null>(new Date(2021, 6, 5))

	return <DatePickerComponent {...args} value={date} onChange={setDate} />
}
DatePicker.storyName = 'DatePicker'
