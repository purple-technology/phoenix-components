import { Story } from '@storybook/react'
import React, { useState } from 'react'

import DateInputComponent, { DateInputProps, DateValue } from './index'

export default {
	title: 'components/DateInput',
	component: DateInputComponent,
	argTypes: {
		error: {
			control: {
				type: 'text'
			}
		}
	}
}

export const DateInput: Story<DateInputProps> = (args) => {
	const [value, setValue] = useState<DateValue | undefined>(args.value)

	return (
		<DateInputComponent
			{...args}
			value={value}
			onChange={setValue}
		/>
	)
}
