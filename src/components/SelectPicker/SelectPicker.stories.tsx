import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import image from './example-image.svg'
import {
	SelectPicker as SelectPickerComponent,
	SelectPickerProps
} from './index'

const OPTIONS = [
	{
		value: 'primary',
		image,
		label: 'Primary education',
		description: 'Basic education'
	},
	{
		value: 'secondary',
		image,
		label: 'Secondary education',
		description: 'Some school'
	},
	{
		value: 'university',
		image,
		label: 'University education',
		description: 'More education than average',
		isDisabled: true
	}
]
const OPTIONS_NO_IMAGE = [
	{ value: 'primary', label: 'Primary education' },
	{ value: 'secondary', label: 'Secondary education' },
	{ value: 'university', label: 'University education' }
]

export default {
	title: 'components / SelectPicker',
	component: SelectPickerComponent,
	argTypes: {
		label: {
			control: {
				type: 'text'
			}
		},
		size: {
			options: ['medium', 'large'],
			defaultValue: 'medium'
		},
		colorTheme: {
			options: ColorTheme,
			defaultValue: 'primary'
		},
		multiSelect: {
			defaultValue: false
		}
	}
}

const Template: Story<SelectPickerProps> = (args) => {
	const [selected, setSelected] = useState<string | string[]>('')

	return (
		<SelectPickerComponent
			{...args}
			value={selected}
			onChange={(e): void => setSelected(e)}
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
	name: 'picker',
	multiSelect: true
}

export const WithImages = Template.bind({})
WithImages.args = {
	options: OPTIONS,
	imageSize: '80px'
}
