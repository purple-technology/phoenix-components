import { StoryObj } from '@storybook/react-vite'
import React from 'react'

import { ColorTheme } from '../../types/Color'
import { ProgressBar as ProgressBarComponent, ProgressBarProps } from './index'

export default {
	component: ProgressBarComponent,
	argTypes: {
		color: {
			control: 'radio',
			options: [undefined, ...ColorTheme]
		}
	},
	args: {
		value: 50
	}
}

export const ProgressBar: StoryObj<ProgressBarProps> = {
	render: (args) => <ProgressBarComponent {...args} />
}
