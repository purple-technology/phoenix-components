import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Icon } from '../Icon'
import { Tooltip as TooltipComponent } from '.'

export default {
	component: TooltipComponent,
	title: 'components / Tooltip',
	parameters: {
		componentSubtitle: 'Simple wrapper over @tippyjs/react'
	}
} as Meta<typeof TooltipComponent>

export const Tooltip: StoryObj<typeof TooltipComponent> = {
	render: (args) => {
		return (
			<TooltipComponent {...args}>
				<Icon icon="question-circle" />
			</TooltipComponent>
		)
	},

	args: {
		content: (
			<span>
				Lorem ipsum dolor sit amet. Dogs are good. Another demo text. Hope this
				is okay.
			</span>
		)
	}
}
