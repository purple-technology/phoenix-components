import type { StoryObj } from '@storybook/react'

import { ColorTheme } from '../../types/Color'
import {
	ProgressBar as ProgressBarComponent,
	type ProgressBarProps
} from './index'

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
