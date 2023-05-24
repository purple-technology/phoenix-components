import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import options from '../common/Select/options'
import { MultiSelect as MultiSelectComponent } from './index'

export default {
	title: 'components / MultiSelect',
	component: MultiSelectComponent,
	argTypes,
	parameters: {
		componentSubtitle:
			'Select with custom dropdown and search capabilities based on react-select'
	}
} as Meta<typeof MultiSelectComponent>

const Template: StoryFn<typeof MultiSelectComponent> = (args) => {
	const [value, setValue] = useState(args.value)

	return (
		<MultiSelectComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e.slice())}
			options={options}
		/>
	)
}
Template.storyName = 'MultiSelect'
Template.args = {
	label: 'Select something'
}

export const Default = {
	render: Template,

	args: {
		...Template.args
	}
}

export const MaxVisibleItems = {
	render: Template,

	args: {
		...Template.args,
		maxVisibleSelectedItems: 1
	},

	name: 'MaxVisibleItems'
}
