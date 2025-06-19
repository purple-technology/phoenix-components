import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { ColorTheme } from '../../types/Color'
import { Sizing } from '../../types/Sizing'
import { Spinner as SpinnerComponent } from '.'

export default {
	component: SpinnerComponent,
	argTypes: {
		colorTheme: {
			options: [undefined, ...ColorTheme],
			control: 'select'
		},
		size: {
			options: Sizing,
			control: 'radio'
		}
	},
	args: {
		size: 'md',
		light: false
	}
} as Meta<typeof SpinnerComponent>

export const Spinner: StoryObj<typeof SpinnerComponent> = {
	render: (args) => {
		return <SpinnerComponent {...args} />
	}
}
