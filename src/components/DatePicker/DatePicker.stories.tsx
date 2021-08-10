import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { foreverNow } from '../common/DatePicker'
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
	const [date, setDate] = useState<Date | null>(foreverNow)

	return <DatePickerComponent {...args} value={date} onChange={setDate} />
}
DatePicker.storyName = 'DatePicker'
