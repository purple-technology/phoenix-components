import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { SizingSmMdLg } from '../../types/Sizing'
import {
	DateInput as DateInputComponent,
	DateInputProps,
	DateValue
} from './index'

export default {
	component: DateInputComponent,
	argTypes: {
		// Prop error was by default JSON but we need text.
		error: {
			control: 'text'
		},
		size: {
			options: SizingSmMdLg,
			defaultValue: 'md'
		},
		locale: {
			options: ['eu', 'us', 'ja'],
			defaultValue: 'eu'
		}
	}
}

export const DateInput: StoryFn<DateInputProps> = (args) => {
	const [value, setValue] = useState<DateValue | null>(args.value)
	return <DateInputComponent {...args} value={value} onChange={setValue} />
}
