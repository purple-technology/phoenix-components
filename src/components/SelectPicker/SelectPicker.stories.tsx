import { StoryFn } from '@storybook/react-vite'
import React, { useState } from 'react'

import { ColorTheme } from '../../types/Color'
import { SizingMdLg } from '../../types/Sizing'
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
	component: SelectPickerComponent,
	argTypes: {
		label: {
			control: {
				type: 'text'
			}
		},
		size: {
			options: SizingMdLg,
			control: 'radio'
		},
		colorTheme: {
			options: ColorTheme,
			control: 'select'
		}
	},
	args: {
		size: 'md',
		colorTheme: 'brand',
		multiSelect: false
	}
}

const Template: StoryFn<SelectPickerProps> = (args) => {
	const [selected, setSelected] = useState<string | string[]>('')

	return (
		<SelectPickerComponent
			{...args}
			value={selected}
			onChange={(e): void => setSelected(e)}
		/>
	)
}

export const Default = {
	render: Template,

	args: {
		options: OPTIONS_NO_IMAGE
	}
}

export const Multiselect = {
	render: Template,

	args: {
		options: OPTIONS_NO_IMAGE,
		name: 'picker',
		multiSelect: true
	}
}

export const WithImages = {
	render: Template,

	args: {
		options: OPTIONS,
		imageSize: '80px'
	}
}
