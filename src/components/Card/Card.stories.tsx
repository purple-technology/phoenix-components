import type { StoryObj } from '@storybook/react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import { Card as CardComponent } from '.'

export default {
	title: 'components / Card',
	component: CardComponent,
	argTypes: {
		...paddingArgTypes,
		...marginArgTypes,
		elevated: {
			control: 'boolean'
		},
		disabled: {
			control: 'boolean'
		}
	}
}

export const Card: StoryObj<typeof CardComponent> = {
	args: {
		p: 'xl',
		elevated: true,
		disabled: false
	}
}
