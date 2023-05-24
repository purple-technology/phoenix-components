import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ColorTheme } from '../../types/Color'
import { Spinner as SpinnerComponent } from '.'

export default {
	component: SpinnerComponent,
	title: 'components / Spinner',
	argTypes: {
		colorTheme: {
			options: [undefined, ...ColorTheme]
		}
	}
} as Meta<typeof SpinnerComponent>

export const Spinner: StoryObj<typeof SpinnerComponent> = {
	render: (args) => {
		return <SpinnerComponent {...args} />
	},

	args: {
		size: 'lg'
	}
}
