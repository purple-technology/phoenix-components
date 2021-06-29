import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import { Select as SelectComponent, SelectProps } from './index'
import options from './options'

export default {
	title: 'components / Select',
	component: SelectComponent,
	argTypes,
	parameters: {
		componentSubtitle:
			'Select with custom dropdown and search capabilities based on react-select'
	}
}

export const Select: Story<SelectProps> = (args) => {
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

Select.args = {
	label: 'Select something'
}
