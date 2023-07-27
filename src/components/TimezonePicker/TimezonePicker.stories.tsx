import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import {
	TimezonePicker as TimezonePickerComponent,
	TimezonePickerProps
} from './index'

export default {
	component: TimezonePickerComponent,
	argTypes,
	args: {
		label: 'Pick a timezone',
		size: 'md',
		useNativeSelectOnMobile: false,
		preventSearch: false
	}
}

export const TimezonePicker: StoryFn<TimezonePickerProps> = (args) => {
	const [value, setValue] = useState(args.value)

	return (
		<TimezonePickerComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e)}
		/>
	)
}
