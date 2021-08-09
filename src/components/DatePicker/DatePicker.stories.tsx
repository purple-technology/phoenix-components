import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { DatePicker as DatePickerComponent } from './index'

export default {
	title: 'components / DatePicker',
	component: DatePickerComponent
} as ComponentMeta<typeof DatePickerComponent>

export const DatePicker: ComponentStory<typeof DatePickerComponent> = (
	args
) => {
	const [date, setDate] = useState<Date | null>(new Date())

	return <DatePickerComponent {...args} value={date} onChange={setDate} />
}
DatePicker.storyName = 'DatePicker'
