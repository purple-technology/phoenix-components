import React from 'react'

import DateInputComponent, { DateInputProps } from './index'

export default {
	title: 'components/DateInput',
	component: DateInputComponent
}

export const DateInput = (args: DateInputProps) => (
	<DateInputComponent {...args} />
)
