import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import {
	TimezonePicker as TimezonePickerComponent,
	TimezonePickerProps
} from './index'

export default {
	title: 'components / TimezonePicker',
	component: TimezonePickerComponent,
	argTypes
}

export const TimezonePicker: Story<TimezonePickerProps> = (args) => {
	const [value, setValue] = useState(args.value)

	return (
		<TimezonePickerComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e)}
		/>
	)
}
TimezonePicker.args = {
	label: 'Pick a timezone'
}
TimezonePicker.storyName = 'TimezonePicker'