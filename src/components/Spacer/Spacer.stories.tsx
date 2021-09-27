import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import {
	marginArgTypes,
	paddingArgTypes,
	spacingArgType
} from '../common/Spacing/stories'
import { Spacer as SpacerComponent } from '.'
import { Block, Margin, Padding } from './SpacerStoriesStyles'

export default {
	title: 'components / Spacer',
	component: SpacerComponent,
	argTypes: {
		w: spacingArgType,
		h: spacingArgType,
		...paddingArgTypes,
		...marginArgTypes
	},
	parameters: {
		componentSubtitle:
			'Component to add space as width or height or as paddings or margins.'
	}
} as ComponentMeta<typeof SpacerComponent>

export const Spacer: ComponentStory<typeof SpacerComponent> = (args) => (
	<Margin>
		<Block {...args}>
			<Padding />
		</Block>
	</Margin>
)
Spacer.args = {
	w: '240',
	h: '100',
	pt: '50',
	px: '30',
	pb: '30',
	mt: '50',
	mx: '20',
	mb: '20'
}
