import React, { useState } from 'react'

import SelectPickerComponent, { SelectPickerProps } from './index'

const DEMO_IMAGE = 'https://image.flaticon.com/icons/svg/566/566944.svg'
const OPTIONS = [
	{
		value: 'secondary',
		image: DEMO_IMAGE,
		label: 'Secondary education',
		description: 'Some school'
	},
	{
		value: 'primary',
		image: DEMO_IMAGE,
		label: 'Primary education',
		description: 'Basic education'
	},
	{
		value: 'university',
		image: DEMO_IMAGE,
		label: 'University education',
		description: 'More education than average'
	}
]
const OPTIONS_NO_IMAGE = [
	{ value: 'secondary', label: 'Secondary education' },
	{ value: 'primary', label: 'Primary education' },
	{ value: 'university', label: 'university education' }
]

export default {
	title: 'components / SelectPicker',
	component: SelectPickerComponent,
	argTypes: {
		label: {
			control: {
				type: 'text'
			}
		}
	}
}

const Template = (args: SelectPickerProps) => {
	const [selected, setSelected] = useState<string | string[]>('')

	return (
		<SelectPickerComponent
			{...args}
			value={selected}
			onChange={(e) => setSelected(e)}
		/>
	)
}

export const Default = Template.bind({})
Default.args = {
	options: OPTIONS_NO_IMAGE
}

export const Multiselect = Template.bind({})
Multiselect.args = {
	options: OPTIONS_NO_IMAGE,
	multiSelect: true
}

export const WithImages = Template.bind({})
WithImages.args = {
	options: OPTIONS
}
