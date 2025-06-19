import { StoryFn } from '@storybook/react-vite'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import options from '../common/Select/options'
import {
	SelectNative as SelectNativeComponent,
	SelectNativeProps
} from './index'

export default {
	component: SelectNativeComponent,
	argTypes,

	parameters: {
		componentSubtitle: 'Select with native (OS dependant) dropdown'
	},
	args: {
		label: 'Select something',
		value: options[0],
		size: 'md'
	}
}

export const SelectNative: StoryFn<SelectNativeProps> = (args) => {
	const [value, setValue] = useState(args.value)

	return (
		<SelectNativeComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e)}
			options={options}
		/>
	)
}
