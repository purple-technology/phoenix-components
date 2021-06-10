import { Story } from '@storybook/react'
import React, { useState } from 'react'

import {
	ComponentSize,
	ComponentSizeSmallMediumLargeValues
} from '../../enum/ComponentSize'
import DateInputComponent, { DateInputProps, DateValue } from './index'

export default {
	title: 'components/DateInput',
	component: DateInputComponent,
	argTypes: {
		// Prop error was by default JSON but we need text.
		error: {
			control: 'text'
		},
		size: {
			options: ComponentSizeSmallMediumLargeValues,
			defaultValue: ComponentSize.MEDIUM
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
