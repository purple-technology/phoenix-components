import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Icon } from '../Icon'
import { Tooltip as TooltipComponent } from '.'

export default {
	component: TooltipComponent,
	title: 'components / Tooltip',
	parameters: {
		componentSubtitle: 'Simple wrapper over @tippyjs/react'
	}
} as ComponentMeta<typeof TooltipComponent>

export const Tooltip: ComponentStory<typeof TooltipComponent> = (args) => {
	return (
		<TooltipComponent {...args}>
			<Icon icon="question-circle" />
		</TooltipComponent>
	)
}
Tooltip.args = {
	content: (
		<span>
			Lorem ipsum dolor sit amet. Dogs are good. Another demo text. Hope this is
			okay.
		</span>
	)
}
