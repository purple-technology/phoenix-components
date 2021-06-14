import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import {
	DateInput as DateInputComponent,
	DateInputProps,
	DateValue
} from './index'

export default {
	title: 'components/DateInput',
	component: DateInputComponent,
	argTypes: {
		// Prop error was by default JSON but we need text.
		error: {
			control: 'text'
		},
		size: {
			options: ComponentSizeSmallMediumLarge,
			defaultValue: 'medium'
		},
		locale: {
			options: ['eu', 'us', 'ja'],
			defaultValue: 'eu'
		}
	}
}

export const DateInput: Story<DateInputProps> = (args) => {
	const [value, setValue] = useState<DateValue | null>(args.value)

	return <DateInputComponent {...args} value={value} onChange={setValue} />
}
DateInput.storyName = 'DateInput'