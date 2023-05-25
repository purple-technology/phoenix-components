import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import options from '../common/Select/options'
import { Select as SelectComponent, SelectProps } from './index'

export default {
	component: SelectComponent,
	argTypes,
	parameters: {
		componentSubtitle:
			'Select with custom dropdown and search capabilities based on react-select'
	},
	args: {
		label: 'Select something'
	}
}

export const Select: StoryFn<SelectProps> = (args) => {
	const [value, setValue] = useState(args.value)

	return (
		<SelectComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e)}
			options={options}
		/>
	)
}
