import { Story } from '@storybook/react'
import React, { useState } from 'react'

import DateInputComponent, { DateInputProps, DateValue } from './index'

export default {
	title: 'components/DateInput',
	component: DateInputComponent,
	/** Prop error was by default JSON but we need text. */
	error: {
		control: 'text'
	},
	componentSize: {
		options: ['small', 'medium', 'large']
	}
}

export const DateInput: Story<DateInputProps> = (args) => {
	const [value, setValue] = useState<DateValue | null>(args.value)

	return <DateInputComponent {...args} value={value} onChange={setValue} />
}
DateInput.storyName = 'DateInput'
